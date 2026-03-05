/**
 * 从 artifactDatabase 生成「省-市-文物」汇总 MD
 * 运行：node scripts/summary-artifacts.js
 */
import { artifactDatabase } from '../src/data/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 城市名 -> 省份
const cityToProvince = {
  '郑州市': '河南省', '洛阳市': '河南省', '安阳市': '河南省', '许昌市': '河南省',
  '合肥市': '安徽省', '黄山市': '安徽省',
  '北京市': '北京市',
  '重庆市': '重庆市',
  '德化县': '福建省', '福州市': '福建省', '龙岩市': '福建省', '厦门市': '福建省',
  '嘉峪关市': '甘肃省', '兰州市': '甘肃省', '天水市': '甘肃省',
  '潮州市': '广东省', '佛山市': '广东省', '广州市': '广东省',
  '柳州市': '广西壮族自治区', '南宁市': '广西壮族自治区', '梧州市': '广西壮族自治区',
  '安顺市': '贵州省',
  '三亚市': '海南省', '海口市': '海南省',
  '保定市': '河北省', '邯郸市': '河北省', '石家庄市': '河北省', '唐山市': '河北省',
  '哈尔滨市': '黑龙江省', '佳木斯市': '黑龙江省', '齐齐哈尔市': '黑龙江省',
  '荆州市': '湖北省', '武汉市': '湖北省',
  '湘西土家族苗族自治州': '湖南省', '长沙市': '湖南省', '衡阳市': '湖南省', '湘潭市': '湖南省',
  '常州市': '江苏省', '南京市': '江苏省', '无锡市': '江苏省', '扬州市': '江苏省',
  '景德镇市': '江西省', '南昌市': '江西省',
  '吉林市': '吉林省', '长春市': '吉林省',
  '鞍山市': '辽宁省', '大连市': '辽宁省', '沈阳市': '辽宁省',
  '包头市': '内蒙古自治区', '赤峰市': '内蒙古自治区', '呼和浩特市': '内蒙古自治区', '锡林郭勒盟': '内蒙古自治区',
  '中卫市': '宁夏回族自治区', '银川市': '宁夏回族自治区',
  '玉树藏族自治州': '青海省',
  '济南市': '山东省', '青岛市': '山东省', '曲阜市': '山东省', '潍坊市': '山东省', '淄博市': '山东省',
  '上海市': '上海市',
  '晋中市': '山西省', '太原市': '山西省', '大同市': '山西省', '临汾市': '山西省', '运城市': '山西省',
  '宝鸡市': '陕西省', '西安市': '陕西省', '咸阳市': '陕西省', '延安市': '陕西省',
  '成都市': '四川省', '乐山市': '四川省', '绵阳市': '四川省', '宜宾市': '四川省', '阿坝藏族羌族自治州': '四川省',
  '天津市': '天津市',
  '和田地区': '新疆维吾尔自治区', '吐鲁番市': '新疆维吾尔自治区', '乌鲁木齐市': '新疆维吾尔自治区', '喀什地区': '新疆维吾尔自治区', '伊犁哈萨克自治州': '新疆维吾尔自治区',
  '拉萨市': '西藏自治区', '林芝市': '西藏自治区', '日喀则市': '西藏自治区',
  '大理白族自治州': '云南省', '大理市': '云南省', '大理州': '云南省', '昆明市': '云南省', '丽江市': '云南省', '普洱市': '云南省', '红河哈尼族彝族自治州': '云南省', '西双版纳傣族自治州': '云南省', '楚雄彝族自治州': '云南省', '德宏傣族景颇族自治州': '云南省', '保山市': '云南省', '昭通市': '云南省', '文山壮族苗族自治州': '云南省', '玉溪市': '云南省', '曲靖市': '云南省', '临沧市': '云南省', '迪庆藏族自治州': '云南省', '怒江傈僳族自治州': '云南省',
  '玉树藏族自治州': '青海省', '玉树州': '青海省',
  '杭州市': '浙江省', '宁波市': '浙江省', '绍兴市': '浙江省', '温州市': '浙江省', '嘉兴市': '浙江省', '湖州市': '浙江省', '金华市': '浙江省', '衢州市': '浙江省', '台州市': '浙江省', '丽水市': '浙江省', '舟山市': '浙江省',
  '平遥县': '山西省', '苏州市': '江苏省', '湘西州': '湖南省',
  '内蒙古自治区': '内蒙古自治区',
};

const byProvince = {};
for (const [cityKey, list] of Object.entries(artifactDatabase)) {
  const prov = cityToProvince[cityKey] || '其他';
  if (!byProvince[prov]) byProvince[prov] = {};
  const names = (Array.isArray(list) ? list : []).map((item) => (item && item.name) || item).filter(Boolean);
  if (names.length) byProvince[prov][cityKey] = names;
}

const provinceOrder = [
  '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省',
  '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省',
  '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省',
  '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '其他'
];

let md = '# 项目文物/非遗汇总\n\n';
md += '本文档由 `scripts/summary-artifacts.js` 根据 `src/data` 各省数据自动生成。\n\n';
md += '---\n\n';

let totalCities = 0;
let totalArtifacts = 0;

for (const prov of provinceOrder) {
  const cities = byProvince[prov];
  if (!cities || !Object.keys(cities).length) continue;

  md += `## ${prov}\n\n`;
  const cityNames = Object.keys(cities).sort((a, b) => a.localeCompare(b, 'zh-CN'));

  for (const city of cityNames) {
    const artifacts = cities[city];
    totalCities += 1;
    totalArtifacts += artifacts.length;
    md += `### ${city}\n\n`;
    artifacts.forEach((name, i) => { md += `${i + 1}. ${name}\n`; });
    md += '\n';
  }
}

md += '---\n\n';
md += `**统计**：共 **${Object.keys(byProvince).length}** 个省级单位，**${totalCities}** 个市/州/县，**${totalArtifacts}** 条文物/非遗。\n`;

const outPath = path.join(__dirname, '..', '文物非遗汇总.md');
fs.writeFileSync(outPath, md, 'utf8');
console.log('已生成：', outPath);
console.log('统计：', Object.keys(byProvince).length, '省，', totalCities, '市，', totalArtifacts, '条');
