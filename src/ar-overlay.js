import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型路径：Vite 下 public 在根，用 /model/；file:// 下用相对路径
const MODEL_BASE = (typeof window !== 'undefined' && window.location.protocol !== 'file:')
    ? '/model/'
    : ((typeof window !== 'undefined' && window.location.pathname.indexOf('/src/') !== -1) ? '../model/' : 'model/');

// 模型配置列表
const MODELS_CONFIG = [
    {
        name: '京剧人物',
        province: '四川省',
        coord: [104.06, 30.67], // 默认值
        url: MODEL_BASE + 'jingjurenwu.glb',
        scale: 50
    },
    {
        name: '玉皇大帝',
        province: '河南省',
        coord: [113.65, 34.76], // 默认值
        url: MODEL_BASE + 'yuhaungdadi.glb',
        scale: 55
    },
    {
        name: '兵马俑',
        province: '陕西省',
        coord: [109.10, 35.00], // 修正为陕西省中部偏北的视觉中心
        url: MODEL_BASE + 'bingmayong.glb',
        scale: 80
        // 移除 manualOffset，改为在 updateModelsPosition 中硬编码
    }
];

let scene, camera, renderer, overlayEl;
let width, height;
let modelInstances = new Map(); // 使用 Map 存储，防止重复

function getContainerSize() {
    const el = document.getElementById('map-container');
    return { w: el.clientWidth, h: el.clientHeight };
}

function pixelToWorld(x, y) {
    // ECharts Y轴向下，Three.js Y轴向上
    return new THREE.Vector3(x, height - y, 0);
}

function updateModelsPosition() {
    const myChart = window.__mapChart;
    if (!myChart || modelInstances.size === 0) return;

    const w = myChart.getWidth();
    const h = myChart.getHeight();
    width = w; 
    height = h;

    const option = myChart.getOption();
    const currentZoom = (option.geo && option.geo[0] && option.geo[0].zoom) || 1.1;
    const zoomFactor = currentZoom / 1.1;

    // 清除旧的调试框
    const oldDebug = document.getElementById('ar-debug-box');
    if (oldDebug) oldDebug.remove();
    
    modelInstances.forEach((instance) => {
        const { config, anchor } = instance;
        
        // 使用 GeoJSON 动态坐标覆盖默认坐标
        if (window.__provCoords && config.province && window.__provCoords[config.province]) {
            const dynamicCoord = window.__provCoords[config.province];
            // 兵马俑强制使用硬编码坐标，防止动态提取错误导致“飞到湖南”
            if (config.name !== '兵马俑' && Array.isArray(dynamicCoord) && !isNaN(dynamicCoord[0])) {
                config.coord = dynamicCoord;
            }
        }
        
        // 1. 优先尝试 geoIndex: 0 (对应 geo 组件)
        let p = myChart.convertToPixel({ geoIndex: 0 }, config.coord);
        
        // 2. 如果失败，尝试 'geo' 字符串方式
        if (!p || isNaN(p[0])) {
            p = myChart.convertToPixel('geo', config.coord);
        }

        // 3. 再次尝试 seriesIndex: 0 (对应 map series)
        if (!p || isNaN(p[0])) {
             p = myChart.convertToPixel({ seriesIndex: 0 }, config.coord);
        }
        
        if (p && Array.isArray(p) && !isNaN(p[0]) && !isNaN(p[1])) {
            // 只有成功获取到地图坐标时，才显示模型
            anchor.visible = true;
            const worldPos = pixelToWorld(p[0], p[1]);
            
            // 兵马俑层级更高
            const z = config.name === '兵马俑' ? 100 : 50;
            
            // 移除硬编码的屏幕偏移，解决“位置不随缩放变化”的问题
            anchor.position.set(worldPos.x, worldPos.y, z);
            anchor.scale.setScalar(zoomFactor);

        } else {
            // 转换失败（如地图未加载完），隐藏模型而不是显示在错误位置
            anchor.visible = false;
        }

        anchor.traverse(node => {
            if (node.isMesh) node.frustumCulled = false;
        });
    });
}

function setupCamera() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    camera = new THREE.OrthographicCamera(0, w, h, 0, 0.1, 2000);
    camera.position.set(0, 0, 1000);
    camera.lookAt(0, 0, 0);
}

function setupRenderer() {
    const { w, h } = getContainerSize();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;

    overlayEl = document.getElementById('model-overlay');
    overlayEl.appendChild(renderer.domElement);
}

function setupScene() {
    const { w, h } = getContainerSize();
    scene = new THREE.Scene();
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.5);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(w / 2, h / 2, 1000);
    scene.add(dirLight);
}

async function loadModel(config) {
    console.log(`[AR] 正在加载模型: ${config.name} (${config.url})`);
    
    if (modelInstances.has(config.name)) {
        const old = modelInstances.get(config.name);
        scene.remove(old.anchor);
        modelInstances.delete(config.name);
    }

    const anchor = new THREE.Group();
    scene.add(anchor);
    anchor.visible = false; // 初始隐藏
    
    // 调试标记：红色圆锥 (兵马俑) 或金色球体 (其他)
    const markGeo = config.name === '兵马俑' ? new THREE.ConeGeometry(10, 60, 4) : new THREE.SphereGeometry(8);
    const markMat = new THREE.MeshBasicMaterial({ 
        color: config.name === '兵马俑' ? 0xff0000 : 0xffd700,
        depthTest: false 
    });
    const marker = new THREE.Mesh(markGeo, markMat);
    marker.renderOrder = 999;
    anchor.add(marker);
    
    modelInstances.set(config.name, { config, anchor });

    const loader = new GLTFLoader();
    try {
        const gltf = await loader.loadAsync(config.url);
        console.log(`[AR] 模型加载成功: ${config.name}`);
        
        // 激进策略：不使用 gltf.scene，而是提取第一个 Mesh 并彻底重置
        // 这能消除 GLB 文件中可能存在的 Scene/Group 层级的复杂变换
        let targetMesh = null;
        gltf.scene.traverse(child => {
            if (child.isMesh && !targetMesh) {
                targetMesh = child;
            }
        });

        if (targetMesh) {
            console.log(`[AR] ${config.name} 提取到 Mesh，进行独立重置`);
            
            // 克隆 Mesh，脱离原有的 Scene 结构
            const mesh = targetMesh.clone();
            
            // 强行重置变换
            mesh.position.set(0, 0, 0);
            mesh.rotation.set(0, 0, 0);
            mesh.scale.set(1, 1, 1);
            mesh.updateMatrix();

            // 计算几何中心
            mesh.geometry.computeBoundingBox();
            const box = mesh.geometry.boundingBox;
            const center = new THREE.Vector3();
            box.getCenter(center);
            const size = new THREE.Vector3();
            box.getSize(size);
            
            // 归一化位置：几何中心对齐 (0,0,0)，底部对齐
            const offset = center.clone().negate();
            offset.y += size.y / 2;
            
            // 应用位置修正（移动几何体本身，或者移动 Mesh）
            // 这里移动 Mesh
            mesh.position.copy(offset);
            
            // 归一化大小
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            const scale = (config.scale || 50) / maxDim;
            
            // 创建一个 Wrapper 来应用缩放，避免和 position 混淆
            const wrapper = new THREE.Group();
            wrapper.add(mesh);
            wrapper.scale.setScalar(scale);

            // 如果是兵马俑，手动修正旋转（很多模型默认是趴着的）
            // if (config.name === '兵马俑') {
            //     wrapper.rotation.x = Math.PI / 2; 
            // }

            anchor.add(wrapper);
            
            // 保留红色标记球，用于证明坐标是对的
            // 如果红球在陕西，模型不在，说明模型 offset 还是有问题
            // anchor.remove(marker); 

        } else {
            console.warn(`[AR] ${config.name} 未找到 Mesh，回退到原始 Scene`);
            const object3d = gltf.scene;
            // ... 原始逻辑兜底 ...
            const box = new THREE.Box3().setFromObject(object3d);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            
            object3d.position.sub(center);
            object3d.position.y += size.y / 2;
            object3d.scale.setScalar((config.scale || 50) / maxDim);
            anchor.add(object3d);
        }

        // 统一材质处理
        anchor.traverse((child) => {
            if (child.isMesh) {
                child.frustumCulled = false;
                if (child.material) {
                    child.material.metalness = 0.0;
                    child.material.roughness = 0.6;
                    child.material.emissive = new THREE.Color(0x333333);
                    child.material.emissiveIntensity = 0.2;
                }
            }
        });

        updateModelsPosition();

    } catch (e) {
        console.error(`[AR] ${config.name} 模型加载失败:`, e);
    }
}

function animate() {
    updateModelsPosition();
    if (renderer && scene && camera) renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onResize() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    if (camera) {
        camera.left = 0; camera.right = w; camera.top = h; camera.bottom = 0;
        camera.updateProjectionMatrix();
    }
    if (renderer) renderer.setSize(w, h);
    updateModelsPosition();
}

let inited = false;
async function init() {
    const myChart = window.__mapChart;
    if (!myChart || inited) return;
    inited = true;

    // 关键修复：应用 AR.html 中获取的动态坐标
    if (window.__provCoords) {
        console.log('[AR] 已检测到动态省份坐标:', window.__provCoords);
    }

    const container = document.getElementById('map-container');
    const existingOverlay = document.getElementById('model-overlay');
    if (existingOverlay) existingOverlay.remove();

    overlayEl = document.createElement('div');
    overlayEl.id = 'model-overlay';
    overlayEl.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none;';
    container.appendChild(overlayEl);

    setupCamera();
    setupRenderer();
    setupScene();

    modelInstances.clear();

    // 状态条：确认 JS 已加载
    const status = document.createElement('div');
    status.style.cssText = 'position:fixed;top:10px;right:10px;background:green;color:white;padding:10px;z-index:99999;font-weight:bold;';
    status.innerText = 'AR模块已加载 - 最终修复版';
    document.body.appendChild(status);

    await Promise.all(MODELS_CONFIG.map(config => loadModel(config)));

    window.addEventListener('resize', onResize);
    myChart.on('georoam', updateModelsPosition);
    myChart.on('finished', updateModelsPosition);
    
    animate();
}

const start = () => { if (window.__mapChart && !inited) requestAnimationFrame(init); };
if (window.__mapChart) setTimeout(start, 0);
else window.addEventListener('mapReady', start);
setTimeout(start, 500);