# 文物详细资料 · 按省分文件夹

本目录存放各省市模型对应的详细资料，**按省分文件夹**，避免单文件过大。

## 目录结构

```
data/
├── index.js          # 汇总入口，合并各省后导出 artifactDatabase
├── README.md         # 本说明
├── henan/
│   └── index.js      # 河南省：郑州市、洛阳市、安阳市、许昌市
├── anhui/
│   └── index.js      # 安徽省（待补充）
├── beijing/
│   └── index.js      # 北京市（待补充）
└── ...               # 其他省同理
```

## 每个省文件的格式

`省份/index.js` 使用 **默认导出** 一个对象：

- **键**：地图上的城市名（须与 ECharts 省图 GeoJSON 的 `name` 一致，如 `'郑州市'`、`'洛阳市'`）
- **值**：该城市下的文物数组，每件文物字段见下

## 展示方式说明（当前：仅图片 + 视频，无 3D 模型）

- 当前数据**不使用 3D 模型**（不填 `modelPath` / `modelType`），页面只展示**图片**和**视频**。
- **图片**：`img`、`images` 请使用与该条非遗/文物**直接相关**的图片链接（如：少林武术 → 少林武术表演或少林寺相关图；洛阳宫灯 → 洛阳宫灯实物/展览图）。避免使用“中国戏曲”“中国鼓”等通用图，建议使用博物馆官网、百科、文旅或 Wikimedia Commons 的对应主题图。
- **视频**：可填 `video`（B 站等链接）；若未填，页面会自动生成“B 站搜索该非遗名称”的链接，便于用户查找相关视频。若填写，请使用与该条内容一致的介绍/展示视频，避免多条共用同一 BV 号。

| 字段 | 必填 | 说明 |
|------|------|------|
| id | 建议 | 唯一标识，如 `zz_01` |
| name | 是 | 文物名称 |
| city | 是 | 城市名，与键一致 |
| tags | 是 | 标签数组，如 `['春秋','国宝']` |
| era | 是 | 年代/朝代 |
| material | 是 | 材质 |
| size | 否 | 尺寸 |
| museum | 否 | 现藏单位 |
| intro | 是 | 简短介绍（列表用） |
| legend | 建议 | 前世传奇（长文） |
| aesthetic | 建议 | 美学密码（长文） |
| value | 否 | 价值概述 |
| img | 是 | 主图 URL（须与该条非遗/文物内容相关） |
| images | 建议 | 多图 URL 数组（须与内容相关） |
| video | 否 | 视频链接（B 站等）；不填则页面用 B 站搜索该条名称作为链接 |
| videos | 否 | 多视频数组，最多取 2 个 |

- 图片、视频使用**网上链接**即可，无需下载到项目。图片请尽量使用与每条非遗/文物主题一致的链接，便于用户看到“相关”内容。

## 新增一个省

1. 在 `data/` 下新建文件夹，如 `anhui/`。
2. 新建 `anhui/index.js`，内容形如：

```js
/**
 * 安徽省 · 各市文物（对应 public/model/anhui/）
 */
export default {
  '合肥市': [
    {
      id: 'ah_hf_01',
      name: '文物名',
      city: '合肥市',
      tags: ['标签'],
      era: '年代',
      material: '材质',
      intro: '...',
      legend: '...',
      aesthetic: '...',
      value: '...',
      img: 'https://...',
      images: ['https://...'],
      video: 'https://www.bilibili.com/video/...'  // 可选；不填则自动用 B 站搜索该条名称
    }
  ],
  '黄山市': [ /* ... */ ]
};
```

3. 在 `data/index.js` 中增加导入并合并：

```js
import henan from './henan/index.js';
import anhui from './anhui/index.js';

export const artifactDatabase = {
  ...henan,
  ...anhui
};
```

## 模型路径与 public/model 对应关系（当前未使用 3D 模型）

- 若日后恢复 3D 展示：`modelPath: 'henan/zhengzhou/talin.glb'` → 请求 `/model/henan/zhengzhou/talin.glb` → 文件 `public/model/henan/zhengzhou/talin.glb`
- 省、市目录名与 `public/model` 下**拼音**一致即可。
