/**
 * 文物详细资料汇总
 * 按省拆分到 data/省份/index.js，此处合并后供 AR 页面使用。
 * 键为地图城市名（与 ECharts 省图 GeoJSON 的 name 一致），值为该市文物数组。
 */
import henan from './henan/index.js';
import anhui from './anhui/index.js';
import beijing from './beijing/index.js';
import chongqing from './chongqing/index.js';
import fujian from './fujian/index.js';
import gansu from './gansu/index.js';
import guangdong from './guangdong/index.js';
import guangxi from './guangxi/index.js';
import guizhou from './guizhou/index.js';
import hainan from './hainan/index.js';
import hebei from './hebei/index.js';
import heilongjiang from './heilongjiang/index.js';
import hubei from './hubei/index.js';
import hunan from './hunan/index.js';
import jiangsu from './jiangsu/index.js';
import jiangxi from './jiangxi/index.js';
import jilin from './jilin/index.js';
import liaoning from './liaoning/index.js';
import neimenggu from './neimenggu/index.js';
import ningxia from './ningxia/index.js';
import qinghai from './qinghai/index.js';
import shandong from './shandong/index.js';
import shanghai from './shanghai/index.js';
import shanxi1 from './shanxi1/index.js';
import shanxi2 from './shanxi2/index.js';
import sichuan from './sichuan/index.js';
import tianjin from './tianjin/index.js';
import xinjiang from './xinjiang/index.js';
import xizang from './xizang/index.js';
import yunnan from './yunnan/index.js';
import zhejiang from './zhejiang/index.js';

export const artifactDatabase = {
  ...henan,
  ...anhui,
  ...beijing,
  ...chongqing,
  ...fujian,
  ...gansu,
  ...guangdong,
  ...guangxi,
  ...guizhou,
  ...hainan,
  ...hebei,
  ...heilongjiang,
  ...hubei,
  ...hunan,
  ...jiangsu,
  ...jiangxi,
  ...jilin,
  ...liaoning,
  ...neimenggu,
  ...ningxia,
  ...qinghai,
  ...shandong,
  ...shanghai,
  ...shanxi1,
  ...shanxi2,
  ...sichuan,
  ...tianjin,
  ...xinjiang,
  ...xizang,
  ...yunnan,
  ...zhejiang
};
