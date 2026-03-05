/**
 * 生成 PowerShell 脚本 download-images.ps1，用系统自带网络下载图片（避免 Node fetch 失败）。
 * 运行：node scripts/generate-download-ps1.js
 * 然后在项目根目录用 PowerShell 执行： .\download-images.ps1
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import pinyinModule from 'pinyin';

const pinyin = typeof pinyinModule === 'function' ? pinyinModule : (pinyinModule?.default ?? pinyinModule?.pinyin);
const STYLE_NORMAL = pinyin?.STYLE_NORMAL ?? 0;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const baseDir = path.join(root, 'public', 'photosOrvideos');

const provincePinyin = {
  '北京市': 'beijing', '天津市': 'tianjin', '河北省': 'hebei', '山西省': 'shanxi',
  '内蒙古自治区': 'neimenggu', '辽宁省': 'liaoning', '吉林省': 'jilin', '黑龙江省': 'heilongjiang',
  '上海市': 'shanghai', '江苏省': 'jiangsu', '浙江省': 'zhejiang', '安徽省': 'anhui',
  '福建省': 'fujian', '江西省': 'jiangxi', '山东省': 'shandong', '河南省': 'henan',
  '湖北省': 'hubei', '湖南省': 'hunan', '广东省': 'guangdong', '广西壮族自治区': 'guangxi',
  '海南省': 'hainan', '重庆市': 'chongqing', '四川省': 'sichuan', '贵州省': 'guizhou',
  '云南省': 'yunnan', '西藏自治区': 'xizang', '陕西省': 'shaanxi', '甘肃省': 'gansu',
  '青海省': 'qinghai', '宁夏回族自治区': 'ningxia', '新疆维吾尔自治区': 'xinjiang',
};

const cityToProvince = {
  '北京市': '北京市', '天津市': '天津市', '保定市': '河北省', '邯郸市': '河北省', '石家庄市': '河北省', '唐山市': '河北省',
  '太原市': '山西省', '平遥县': '山西省', '包头市': '内蒙古自治区', '赤峰市': '内蒙古自治区', '呼和浩特市': '内蒙古自治区', '内蒙古自治区': '内蒙古自治区',
  '鞍山市': '辽宁省', '大连市': '辽宁省', '沈阳市': '辽宁省', '吉林市': '吉林省', '哈尔滨市': '黑龙江省', '佳木斯市': '黑龙江省', '齐齐哈尔市': '黑龙江省',
  '上海市': '上海市', '常州市': '江苏省', '无锡市': '江苏省', '苏州市': '江苏省', '扬州市': '江苏省', '杭州市': '浙江省', '宁波市': '浙江省', '绍兴市': '浙江省',
  '合肥市': '安徽省', '黄山市': '安徽省', '德化县': '福建省', '福州市': '福建省', '龙岩市': '福建省', '厦门市': '福建省',
  '景德镇市': '江西省', '南昌市': '江西省', '济南市': '山东省', '青岛市': '山东省', '曲阜市': '山东省', '潍坊市': '山东省',
  '安阳市': '河南省', '洛阳市': '河南省', '许昌市': '河南省', '郑州市': '河南省', '荆州市': '湖北省', '武汉市': '湖北省',
  '衡阳市': '湖南省', '湘潭市': '湖南省', '湘西土家族苗族自治州': '湖南省', '长沙市': '湖南省', '潮州市': '广东省', '佛山市': '广东省', '广州市': '广东省',
  '柳州市': '广西壮族自治区', '南宁市': '广西壮族自治区', '梧州市': '广西壮族自治区', '三亚市': '海南省', '重庆市': '重庆市',
  '成都市': '四川省', '乐山市': '四川省', '安顺市': '贵州省', '大理白族自治州': '云南省', '大理市': '云南省', '大理州': '云南省', '昆明市': '云南省', '丽江市': '云南省', '普洱市': '云南省',
  '拉萨市': '西藏自治区', '林芝市': '西藏自治区', '玉树藏族自治州': '青海省', '玉树州': '青海省', '宝鸡市': '陕西省', '西安市': '陕西省', '咸阳市': '陕西省', '延安市': '陕西省',
  '嘉峪关市': '甘肃省', '兰州市': '甘肃省', '天水市': '甘肃省', '中卫市': '宁夏回族自治区', '和田地区': '新疆维吾尔自治区', '吐鲁番市': '新疆维吾尔自治区', '乌鲁木齐市': '新疆维吾尔自治区',
};

const cityPinyin = {
  '北京市': 'beijing', '天津市': 'tianjin', '保定市': 'baoding', '邯郸市': 'handan', '石家庄市': 'shijiazhuang', '唐山市': 'tangshan',
  '太原市': 'taiyuan', '平遥县': 'pingyao', '包头市': 'baotou', '赤峰市': 'chifeng', '呼和浩特市': 'huhehaote', '内蒙古自治区': 'neimenggu',
  '鞍山市': 'anshan', '大连市': 'dalian', '沈阳市': 'shenyang', '吉林市': 'jilin', '哈尔滨市': 'haerbin', '佳木斯市': 'jiamusi', '齐齐哈尔市': 'qiqihaer',
  '上海市': 'shanghai', '常州市': 'changzhou', '无锡市': 'wuxi', '苏州市': 'suzhou', '扬州市': 'yangzhou', '杭州市': 'hangzhou', '宁波市': 'ningbo', '绍兴市': 'shaoxing',
  '合肥市': 'hefei', '黄山市': 'huangshan', '德化县': 'dehua', '福州市': 'fuzhou', '龙岩市': 'longyan', '厦门市': 'xiamen', '景德镇市': 'jingdezhen', '南昌市': 'nanchang',
  '济南市': 'jinan', '青岛市': 'qingdao', '曲阜市': 'qufu', '潍坊市': 'weifang', '安阳市': 'anyang', '洛阳市': 'luoyang', '许昌市': 'xuchang', '郑州市': 'zhengzhou',
  '荆州市': 'jingzhou', '武汉市': 'wuhan', '衡阳市': 'hengyang', '湘潭市': 'xiangtan', '湘西土家族苗族自治州': 'xiangxi', '长沙市': 'changsha',
  '潮州市': 'chaozhou', '佛山市': 'foshan', '广州市': 'guangzhou', '柳州市': 'liuzhou', '南宁市': 'nanning', '梧州市': 'wuzhou', '三亚市': 'sanya',
  '重庆市': 'chongqing', '成都市': 'chengdu', '乐山市': 'leshan', '安顺市': 'anshun', '大理白族自治州': 'dali', '大理市': 'dali', '大理州': 'dali', '昆明市': 'kunming', '丽江市': 'lijiang', '普洱市': 'puer',
  '拉萨市': 'lasa', '林芝市': 'linzhi', '玉树藏族自治州': 'yushu', '玉树州': 'yushu', '宝鸡市': 'baoji', '西安市': 'xian', '咸阳市': 'xianyang', '延安市': 'yanan',
  '嘉峪关市': 'jiayuguan', '兰州市': 'lanzhou', '天水市': 'tianshui', '中卫市': 'zhongwei', '和田地区': 'hetian', '吐鲁番市': 'tulufan', '乌鲁木齐市': 'wulumuqi',
};

function toPinyin(str) {
  if (!str || typeof str !== 'string') return '';
  const parts = [];
  let chinese = '';
  for (const c of str) {
    if (/[\u4e00-\u9fa5]/.test(c)) chinese += c;
    else {
      if (chinese) {
        const py = pinyin(chinese, { style: STYLE_NORMAL });
        parts.push(py.flat().join(''));
        chinese = '';
      }
      if (/[a-zA-Z0-9]/.test(c)) parts.push(c.toLowerCase());
    }
  }
  if (chinese) {
    const py = pinyin(chinese, { style: STYLE_NORMAL });
    parts.push(py.flat().join(''));
  }
  return parts.join('').replace(/[^a-z0-9]/g, '') || 'wu';
}

function artPinyin(name) {
  if (name === '咸阳biangbiang面') return 'xianyangbiangbiangmian';
  return toPinyin(name);
}

function getExt(url) {
  try {
    const pathname = new URL(url).pathname;
    const m = pathname.match(/\.(jpg|jpeg|png|gif|webp)$/i);
    return m ? m[1].toLowerCase() : 'jpg';
  } catch { return 'jpg'; }
}

async function main() {
  const dataPathNorm = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/index.js');
  const { artifactDatabase } = await import(pathToFileURL(dataPathNorm).href);
  const lines = [
    '# 用 PowerShell 下载文物图片（若 Node 脚本失败，可用本脚本）',
    '$base = Join-Path $PSScriptRoot "public\\photosOrvideos"',
    '$ErrorActionPreference = "SilentlyContinue"',
    '',
  ];
  let count = 0;
  for (const [cityKey, list] of Object.entries(artifactDatabase)) {
    const province = cityToProvince[cityKey];
    const provPy = province ? (provincePinyin[province] || toPinyin(province)) : toPinyin(cityKey);
    const cityPy = cityPinyin[cityKey] || toPinyin(cityKey);
    if (!Array.isArray(list)) continue;
    for (const item of list) {
      const name = item?.name;
      const imgUrl = item?.img || (item?.images && item.images[0]);
      if (!name || !imgUrl || !imgUrl.startsWith('http')) continue;
      const artPy = artPinyin(name);
      const ext = getExt(imgUrl);
      const relDir = `${provPy}\\${cityPy}\\${artPy}`;
      const urlEsc = imgUrl.replace(/'/g, "''");
      lines.push(`$dir = Join-Path $base '${provPy}\\${cityPy}\\${artPy}'`);
      lines.push(`New-Item -ItemType Directory -Force -Path $dir | Out-Null`);
      lines.push(`try { Invoke-WebRequest -Uri '${urlEsc}' -OutFile (Join-Path $dir '1.${ext}') -UseBasicParsing -TimeoutSec 15; Write-Host \"OK ${name}\" } catch { Write-Host \"FAIL ${name}: $_\" }`);
      count++;
    }
  }
  const outPath = path.join(root, 'download-images.ps1');
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log('已生成 download-images.ps1，共', count, '条。');
  console.log('请在项目根目录用 PowerShell 执行: .\\download-images.ps1');
}

main().catch((e) => { console.error(e); process.exit(1); });
