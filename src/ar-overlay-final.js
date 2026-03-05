import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型地址：优先使用本地 public/model 下的模型
const MODEL_BASE = '/model/';

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
    },
    {
        name: '蒙古包',
        province: '内蒙古自治区',
        coord: [111.76, 41.50], // 内蒙古中部偏南
        url: MODEL_BASE + 'menggubao.glb',
        scale: 50
    },
    {
        name: '琵琶',
        province: '甘肃省',
        coord: [102.82, 37.06], // 稍微向西北移动，避开宁夏文字
        url: MODEL_BASE + 'pipa.glb',
        scale: 50
    },
    {
        name: '青铜牛',
        province: '云南省',
        coord: [101.50, 24.50], // 云南省中部
        url: MODEL_BASE + 'qingtongniu.glb',
        scale: 50
    }
];

let scene, camera, renderer, overlayEl;
let width, height;
let modelInstances = new Map(); // 使用 Map 存储，防止重复
let modelLoadQueue = [];
let loadingModels = false;

function scheduleModelLoad() {
    if (loadingModels) return;
    loadingModels = true;
    modelLoadQueue = MODELS_CONFIG.slice();

    const loadNext = () => {
        if (!modelLoadQueue.length) {
            loadingModels = false;
            return;
        }
        const config = modelLoadQueue.shift();
        loadModel(config).finally(() => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(loadNext, { timeout: 1200 });
            } else {
                setTimeout(loadNext, 80);
            }
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadNext, { timeout: 1200 });
    } else {
        setTimeout(loadNext, 0);
    }
}

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

    modelInstances.forEach((instance) => {
        const { config, anchor } = instance;
        
        // 使用 GeoJSON 动态坐标覆盖默认坐标
        if (window.__provCoords && config.province && window.__provCoords[config.province]) {
            const dynamicCoord = window.__provCoords[config.province];
            // 兵马俑强制使用硬编码坐标，防止动态提取错误导致"飞到湖南"
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
            
            // 彻底移除所有偏移逻辑，相信 loadModel 中的几何中心归位
            // 安全检查：防止 NaN
            if (!isNaN(worldPos.x) && !isNaN(worldPos.y)) {
                anchor.position.set(worldPos.x, worldPos.y, z);
                anchor.scale.setScalar(zoomFactor);
            }

        } else {
            // 转换失败（如地图未加载完），隐藏模型而不是显示在错误位置
            anchor.visible = false;
        }

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

    // 暖色局部点光：营造展陈聚光
    const warmLight = new THREE.PointLight(0xffd1a1, 1.4, 600, 2);
    warmLight.position.set(0, 0, 180);
    anchor.add(warmLight);
    
    // 地标光束：金色辉光底座（文脉升腾）
    const glowGeo = new THREE.RingGeometry(14, 32, 24);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xE8C547,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthTest: false
    });
    const glowBase = new THREE.Mesh(glowGeo, glowMat);
    glowBase.rotation.x = -Math.PI / 2;
    glowBase.position.set(0, 0, -5);
    glowBase.renderOrder = -1;
    glowBase.visible = false; // 模型加载后设为可见
    anchor.add(glowBase);

    modelInstances.set(config.name, { config, anchor });

    const loader = new GLTFLoader();
    try {
        const gltf = await loader.loadAsync(config.url);
        console.log(`[AR] 模型加载成功: ${config.name}`);
        
        // 差异化处理：
        // 京剧人物、玉皇大帝：使用原始 gltf.scene（之前是正常的）
        // 兵马俑：使用 Mesh 提取和强制归零（因为它有问题）
        if (config.name !== '兵马俑') {
            const object3d = gltf.scene;
            const box = new THREE.Box3().setFromObject(object3d);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            
            // 简单的中心对齐
            object3d.position.sub(center);
            object3d.position.y += size.y / 2;
            object3d.scale.setScalar((config.scale || 50) / maxDim);
            
            // 琵琶特殊旋转修正：从侧面转到正面
            if (config.name === '琵琶') {
                object3d.rotation.y = -Math.PI / 2;
            }
            
            // 青铜牛特殊旋转修正：展示侧面
            if (config.name === '青铜牛') {
                object3d.rotation.y = Math.PI / 2;
            }

            // 统一材质
            object3d.traverse((child) => {
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
            
            anchor.add(object3d);
            const bbox = new THREE.Box3().setFromObject(object3d);
            glowBase.position.y = bbox.min.y - 4;
            glowBase.visible = true;
            
        } else {
            // 兵马俑的特殊处理逻辑：提取所有 Mesh 组成一个新 Group
            // 解决"只提取第一个 Mesh 导致显示了奇怪的纸张背景"的问题
            const meshes = [];
            gltf.scene.traverse(child => {
                if (child.isMesh) {
                    meshes.push(child);
                }
            });

            if (meshes.length > 0) {
                console.log(`[AR] 兵马俑提取到 ${meshes.length} 个 Mesh，进行组合重置`);
                // ... 省略中间计算逻辑 ...
                
                // 重新构建这部分的完整逻辑以确保 context 正确
                const object3d = gltf.scene;
                object3d.position.set(0, 0, 0);
                object3d.rotation.set(0, 0, 0);
                object3d.scale.set(1, 1, 1);
                object3d.updateMatrixWorld(true);

                const box = new THREE.Box3();
                object3d.traverse(child => {
                    if (child.isMesh) {
                        child.updateMatrixWorld(true);
                        if (child.geometry) {
                            child.geometry.computeBoundingBox();
                            const meshBox = child.geometry.boundingBox.clone();
                            meshBox.applyMatrix4(child.matrixWorld);
                            box.union(meshBox);
                        }
                    }
                });

                if (!box.isEmpty()) {
                    const center = new THREE.Vector3();
                    box.getCenter(center);
                    const size = new THREE.Vector3();
                    box.getSize(size);
                    
                    const offset = center.clone().negate();
                    offset.y += size.y / 2;
                    object3d.position.copy(offset);
                    
                    const finalWrapper = new THREE.Group();
                    finalWrapper.add(object3d);
                    
                    const maxDim = Math.max(size.x, size.y, size.z) || 1;
                    const scale = (config.scale || 50) / maxDim;
                    finalWrapper.scale.setScalar(scale);
                    
                    anchor.add(finalWrapper);
                    const bbox = new THREE.Box3().setFromObject(finalWrapper);
                    glowBase.position.y = bbox.min.y - 4;
                    glowBase.visible = true;
                } else {
                    anchor.add(object3d);
                    const bbox = new THREE.Box3().setFromObject(object3d);
                    glowBase.position.y = bbox.min.y - 4;
                    glowBase.visible = true;
                }

                object3d.traverse((child) => {
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
            } else {
                 const object3d = gltf.scene;
                 anchor.add(object3d);
                 const bbox = new THREE.Box3().setFromObject(object3d);
                 glowBase.position.y = bbox.min.y - 4;
                 glowBase.visible = true;
            }
        }

        requestRender();

    } catch (e) {
        console.error(`[AR] ${config.name} 模型加载失败:`, e);
    }
}

let rafId = 0;
let lastFrameTime = 0;
let needsRender = false;
const IDLE_FRAME_INTERVAL = 200;
const BUSY_FRAME_INTERVAL = 33;

function requestRender() {
    needsRender = true;
    if (!rafId) rafId = requestAnimationFrame(tick);
}

function tick(now) {
    const interval = window.__mapInteracting ? BUSY_FRAME_INTERVAL : IDLE_FRAME_INTERVAL;
    if (now - lastFrameTime < interval) {
        rafId = requestAnimationFrame(tick);
        return;
    }
    lastFrameTime = now;
    if (needsRender) {
        updateModelsPosition();
        if (renderer && scene && camera) renderer.render(scene, camera);
        needsRender = window.__mapInteracting;
    }
    if (needsRender) rafId = requestAnimationFrame(tick);
    else rafId = 0;
}

function onResize() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    if (camera) {
        camera.left = 0; camera.right = w; camera.top = h; camera.bottom = 0;
        camera.updateProjectionMatrix();
    }
    if (renderer) renderer.setSize(w, h);
    requestRender();
}

let inited = false;
async function init() {
    if (window.__liteMapMode) return; // 轻量模式：跳过 3D 叠加，提升地图流畅度
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
    // const status = document.createElement('div');
    // status.style.cssText = 'position:fixed;top:10px;right:10px;background:orange;color:white;padding:10px;z-index:99999;font-weight:bold;';
    // status.innerText = '调试 v6 - 纯净展示版';
    // document.body.appendChild(status);

    scheduleModelLoad();

    window.addEventListener('resize', onResize);
    myChart.on('georoam', requestRender);
    myChart.on('finished', requestRender);

    // 省份视图下隐藏 3D 模型（点击任意省份进入市级地图时）
    window.addEventListener('viewModeChanged', (e) => {
        const isProvinceView = e.detail === 'province';
        if (overlayEl) overlayEl.style.display = isProvinceView ? 'none' : '';
        requestRender();
    });
    if (window.__viewMode === 'province' && overlayEl) overlayEl.style.display = 'none';
    requestRender();
}

const start = () => { if (window.__mapChart && !inited) requestAnimationFrame(init); };
if (window.__mapChart) setTimeout(start, 0);
else window.addEventListener('mapReady', start);
setTimeout(start, 500);
