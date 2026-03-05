/**
 * 按 文物非遗汇总.md 创建目录：public/photosOrvideos/省拼音/市拼音/文物拼音/
 * 图片或视频放在 文物拼音 目录下。
 * 运行：node scripts/create-photos-dirs.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pinyinModule from 'pinyin';

const pinyin = typeof pinyinModule === 'function' ? pinyinModule : (pinyinModule?.default ?? pinyinModule?.pinyin);
const STYLE_NORMAL = pinyin?.STYLE_NORMAL ?? 0; // 0 = NORMAL in pinyin v4

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const baseDir = path.join(root, 'public', 'photosOrvideos');
const mdPath = path.join(root, '文物非遗汇总.md');

// 省名 -> 拼音
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

// 市名 -> 拼音（与汇总里出现的完全一致）
const cityPinyin = {
  '北京市': 'beijing', '天津市': 'tianjin', '保定市': 'baoding', '邯郸市': 'handan',
  '石家庄市': 'shijiazhuang', '唐山市': 'tangshan', '太原市': 'taiyuan', '平遥县': 'pingyao',
  '包头市': 'baotou', '赤峰市': 'chifeng', '呼和浩特市': 'huhehaote', '内蒙古自治区': 'neimenggu',
  '鞍山市': 'anshan', '大连市': 'dalian', '沈阳市': 'shenyang', '吉林市': 'jilin',
  '哈尔滨市': 'haerbin', '佳木斯市': 'jiamusi', '齐齐哈尔市': 'qiqihaer', '上海市': 'shanghai',
  '常州市': 'changzhou', '无锡市': 'wuxi', '苏州市': 'suzhou', '扬州市': 'yangzhou',
  '杭州市': 'hangzhou', '宁波市': 'ningbo', '绍兴市': 'shaoxing', '合肥市': 'hefei',
  '黄山市': 'huangshan', '德化县': 'dehua', '福州市': 'fuzhou', '龙岩市': 'longyan',
  '厦门市': 'xiamen', '景德镇市': 'jingdezhen', '南昌市': 'nanchang', '济南市': 'jinan',
  '青岛市': 'qingdao', '曲阜市': 'qufu', '潍坊市': 'weifang', '安阳市': 'anyang',
  '洛阳市': 'luoyang', '许昌市': 'xuchang', '郑州市': 'zhengzhou', '荆州市': 'jingzhou',
  '武汉市': 'wuhan', '衡阳市': 'hengyang', '湘潭市': 'xiangtan', '湘西土家族苗族自治州': 'xiangxi',
  '长沙市': 'changsha', '潮州市': 'chaozhou', '佛山市': 'foshan', '广州市': 'guangzhou',
  '柳州市': 'liuzhou', '南宁市': 'nanning', '梧州市': 'wuzhou', '三亚市': 'sanya',
  '重庆市': 'chongqing', '成都市': 'chengdu', '乐山市': 'leshan', '安顺市': 'anshun',
  '大理白族自治州': 'dali', '昆明市': 'kunming', '丽江市': 'lijiang', '普洱市': 'puer',
  '拉萨市': 'lasa', '林芝市': 'linzhi', '宝鸡市': 'baoji', '西安市': 'xian',
  '咸阳市': 'xianyang', '延安市': 'yanan', '嘉峪关市': 'jiayuguan', '兰州市': 'lanzhou',
  '天水市': 'tianshui', '玉树藏族自治州': 'yushu', '中卫市': 'zhongwei', '和田地区': 'hetian',
  '吐鲁番市': 'tulufan', '乌鲁木齐市': 'wulumuqi',
};

function toPinyin(str) {
  if (!str || typeof str !== 'string') return '';
  // 保留英文/数字，中文转拼音
  const parts = [];
  let chinese = '';
  for (const c of str) {
    if (/[\u4e00-\u9fa5]/.test(c)) {
      chinese += c;
    } else {
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

function parseMd(content) {
  const list = [];
  let province = '';
  let city = '';
  const lines = content.split('\n');
  for (const line of lines) {
    const t2 = line.match(/^##\s+(.+)$/);
    const t3 = line.match(/^###\s+(.+)$/);
    const num = line.match(/^\d+\.\s+(.+)$/);
    if (t2) province = t2[1].trim();
    else if (t3) city = t3[1].trim();
    else if (num && province && city) list.push({ province, city, artifact: num[1].trim() });
  }
  return list;
}

const md = fs.readFileSync(mdPath, 'utf8');
const items = parseMd(md);

const provPy = (p) => provincePinyin[p] || toPinyin(p);
const cityPy = (c) => cityPinyin[c] || toPinyin(c);
const artPy = (a) => {
  if (a === '咸阳biangbiang面') return 'xianyangbiangbiangmian';
  return toPinyin(a);
};

let created = 0;
for (const { province, city, artifact } of items) {
  const pp = provPy(province);
  const cp = cityPy(city);
  const ap = artPy(artifact);
  const dir = path.join(baseDir, pp, cp, ap);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    created++;
  }
}

console.log('photosOrvideos 目录结构已生成：省拼音/市拼音/文物拼音/');
console.log('共处理', items.length, '条文物，新建', created, '个目录。');
console.log('请将图片或视频放入对应 文物拼音 目录下。');
