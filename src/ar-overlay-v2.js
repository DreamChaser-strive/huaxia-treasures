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
        scale: 80,
        // 手动校准偏移：根据截图，模型偏南（Y轴偏大/屏幕下方），需要向上移动（Y轴减小）
        // 假设偏移约 150px (从湖南到陕西的距离)
        // Three.js 坐标系 Y 轴向上，屏幕坐标 Y 轴向下。
        // 如果模型在屏幕下方（湖南），说明 worldPos.y 太小了（或者太大了，取决于映射）
        // 我们的 pixelToWorld: y = height - screenY
        // 湖南 screenY 大，陕西 screenY 小。
        // 现在的现象是：目标点在陕西（screenY 小），但模型在湖南（screenY 大）。
        // 这意味着模型被绘制到了更靠下的位置。
        // 既然我们用了 position.copy(offset) 归零，说明模型原点确实归零了。
        // 那唯一的可能是：这个 GLB 模型本身的内容，是偏离其原点正下方很远的地方。
        // 我们需要手动把模型“提”起来。
        manualOffset: new THREE.Vector3(0, 180, 0) 
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

    // 移除红色调试逻辑，因为已确认坐标正确
    // 只保留基础容器防止报错
    // const debugContainer = document.createElement('div'); ... 
    
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
            anchor.position.set(worldPos.x, worldPos.y, z);
            anchor.scale.setScalar(zoomFactor);

            // 移除红色调试框逻辑
            // if (config.name === '兵马俑') { ... }

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
        const object3d = gltf.scene;

        // 调试：打印模型包含的 Mesh 数量，帮助排查是否包含多个分散的对象
        let meshCount = 0;
        object3d.traverse(c => { if (c.isMesh) meshCount++; });
        console.log(`[AR] ${config.name} 包含 ${meshCount} 个 Mesh`);
        
        // 加载成功后，保留地标的同时添加模型，方便调试位置
        const box = new THREE.Box3().setFromObject(object3d);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        
        // 修正模型位置：底部中心对齐 (0,0,0)
        // 关键：强制重置模型的原始位移
        object3d.position.set(0, 0, 0);
        object3d.rotation.set(0, 0, 0);
        object3d.scale.set(1, 1, 1);
        object3d.updateMatrixWorld(true);

        // 计算所有可见 Mesh 的精确包围盒（忽略空节点）
        const newBox = new THREE.Box3();
        let hasMesh = false;
        object3d.traverse(child => {
            if (child.isMesh) {
                // 确保 Mesh 的变换矩阵已更新
                child.updateMatrixWorld(true);
                // 计算该 Mesh 的世界坐标包围盒（相对于 object3d）
                if (child.geometry) {
                    child.geometry.computeBoundingBox();
                    const meshBox = child.geometry.boundingBox.clone();
                    meshBox.applyMatrix4(child.matrixWorld);
                    newBox.union(meshBox);
                    hasMesh = true;
                }
            }
        });

        if (hasMesh) {
            const center = new THREE.Vector3();
            box.getCenter(center);
            const size = new THREE.Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z) || 1;

            console.log(`[AR] ${config.name} 精确包围盒: Center[${center.x}, ${center.y}, ${center.z}], Size[${size.x}, ${size.y}, ${size.z}]`);

            // 移动模型：
            // 1. 将 object3d 内部的所有内容反向移动，使其几何中心回到 (0,0,0)
            // 2. 向上移动一半高度，使其底部对齐 (0,0,0)
            const offset = new THREE.Vector3().copy(center).negate();
            offset.y += size.y / 2;

            // 应用手动偏移校准
            if (config.manualOffset) {
                console.log(`[AR] ${config.name} 应用手动偏移:`, config.manualOffset);
                offset.add(config.manualOffset);
            }

            // 为了不修改原始 gltf 结构，我们在 object3d 外面再套一层 Wrapper 来应用这个修正
            // 或者直接修改 object3d 内部所有子元素的坐标（更彻底）
            const wrapper = new THREE.Group();
            wrapper.add(object3d);
            
            // 修正 Wrapper 位置
            object3d.position.copy(offset);
            
            // 归一化缩放应用在 Wrapper 上
            wrapper.scale.setScalar((config.scale || 50) / maxDim);
            
            // 移除绿色包围盒辅助线，界面还原整洁
            // const boxHelper = new THREE.BoxHelper(wrapper, 0x00ff00);
            // wrapper.add(boxHelper);
            // console.log(`[AR] ${config.name} 已添加绿色包围盒辅助线`);

            // 移除标记，添加 Wrapper
            anchor.remove(marker);
            anchor.add(wrapper);
        } else {
            console.warn(`[AR] ${config.name} 未发现可见 Mesh，使用原始 Scene`);
            anchor.remove(marker);
            anchor.add(object3d);
        }

        object3d.traverse((child) => {
            if (child.isMesh) {
                child.frustumCulled = false;
                if (child.material) {
                    child.material.metalness = 0.0;
                    child.material.roughness = 0.8;
                    child.material.emissive = new THREE.Color(0x222222);
                    child.material.emissiveIntensity = 0.5;
                }
            }
        });

        // 移除标记，添加模型
        anchor.remove(marker);
        anchor.add(object3d);
        
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
    // 逻辑已移至 updateModelsPosition 中实时更新，此处仅打印日志
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
    // 调试：添加点击事件，打印坐标
    window.addEventListener('click', (e) => {
        const myChart = window.__mapChart;
        if (myChart) {
            const point = [e.clientX, e.clientY];
            const geo = myChart.convertFromPixel({ geoIndex: 0 }, point);
            console.log(`[AR-DEBUG] 点击位置: 屏幕[${point}], 经纬度[${geo}]`);
            
            // 实时移动红框到点击位置测试
            const box = document.getElementById('ar-debug-box');
            if (box) {
                const marker = document.createElement('div');
                marker.style.cssText = `position:absolute;left:${e.clientX}px;top:${e.clientY}px;width:10px;height:10px;background:blue;pointer-events:none;`;
                box.appendChild(marker);
            }
        }
    });

    // 状态条：确认 JS 已加载
    const status = document.createElement('div');
    status.style.cssText = 'position:fixed;top:10px;right:10px;background:green;color:white;padding:10px;z-index:99999;font-weight:bold;';
    status.innerText = 'AR模块已加载 - 调试模式 v2';
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
