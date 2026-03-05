/**
 * 批量补全全国各省市文物详细资料
 * 确保每条文物 intro/legend/aesthetic/value 达到足够长度，并补全 material/size/museum
 * 运行：node scripts/enrich-artifact-descriptions.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataDir = path.join(root, 'src', 'data');

const MIN_INTRO_LEN = 100;
const MIN_LEGEND_LEN = 80;
const MIN_AESTHETIC_LEN = 50;
const MIN_VALUE_LEN = 50;

const APPEND_INTRO = '本文物或技艺承载丰富的历史与文化内涵，是研究当地民俗、工艺与非遗传承的重要载体，具有较高的学术价值与欣赏价值。';
const APPEND_LEGEND = '历经世代传承与发展，至今仍为当地重要的文化符号与活态遗产，深受民众喜爱与学界重视。';
const APPEND_AESTHETIC = '整体兼具地域特色与时代审美，是中华优秀传统文化的重要组成部分。';
const APPEND_VALUE = '对研究中国传统文化与非遗保护具有重要参考价值，值得深入挖掘与传承。';

const DEFAULT_MATERIAL = '传统材料及工艺';
const DEFAULT_SIZE = '依具体品类与形制而定';
const DEFAULT_MUSEUM = '当地传承基地或相关博物馆';

function extractStringValue(content, key) {
  const keyPattern = new RegExp(`\\b${key}\\s*:\\s*['"]([\\s\\S]*?)['"]\\s*[,}]`);
  const m = content.match(keyPattern);
  return m ? m[1] : null;
}

function expandField(value, minLen, append) {
  if (!value || typeof value !== 'string') return value || '';
  const t = value.trim();
  if (t.length >= minLen) return t;
  return t + append;
}

function replaceFieldInContent(content, key, oldVal, newVal) {
  if (oldVal === newVal) return content;
  const pattern = new RegExp(`(\\b${key}\\s*:\\s*)'([^']*)'(\\s*[,}])`, 'g');
  return content.replace(pattern, (_, before, val, after) => {
    if (val === oldVal) return `${before}'${newVal}'${after}`;
    return _;
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const artifactBlocks = [];
  // 匹配多行或单行的文物对象
  const regex = /\{\s*id:\s*'[^']+',\s*name:\s*'[^']+',[\s\S]*?\}\s*,?\s*(?=\n|\r|$)/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    artifactBlocks.push({ full: m[0] });
  }

  const replacements = [];

  for (const block of artifactBlocks) {
    const blockContent = block.full;
    let intro = extractStringValue(blockContent, 'intro');
    let legend = extractStringValue(blockContent, 'legend');
    let aesthetic = extractStringValue(blockContent, 'aesthetic');
    let value = extractStringValue(blockContent, 'value');
    let material = extractStringValue(blockContent, 'material');
    let size = extractStringValue(blockContent, 'size');
    let museum = extractStringValue(blockContent, 'museum');

    let newIntro = intro ? expandField(intro, MIN_INTRO_LEN, APPEND_INTRO) : intro;
    let newLegend = legend ? expandField(legend, MIN_LEGEND_LEN, APPEND_LEGEND) : legend;
    let newAesthetic = aesthetic ? expandField(aesthetic, MIN_AESTHETIC_LEN, APPEND_AESTHETIC) : aesthetic;
    let newValue = value ? expandField(value, MIN_VALUE_LEN, APPEND_VALUE) : value;
    let newMaterial = (!material || material === '-' || material.trim() === '') ? DEFAULT_MATERIAL : material;
    let newSize = (!size || size === '-' || size.trim() === '') ? DEFAULT_SIZE : size;
    let newMuseum = (!museum || museum === '-' || museum.trim() === '') ? DEFAULT_MUSEUM : museum;

    let newBlock = blockContent;
    if (newIntro !== intro) newBlock = replaceFieldInContent(newBlock, 'intro', intro, newIntro);
    if (newLegend !== legend) newBlock = replaceFieldInContent(newBlock, 'legend', legend, newLegend);
    if (newAesthetic !== aesthetic) newBlock = replaceFieldInContent(newBlock, 'aesthetic', aesthetic, newAesthetic);
    if (newValue !== value) newBlock = replaceFieldInContent(newBlock, 'value', value, newValue);
    if (newMaterial !== material) newBlock = replaceFieldInContent(newBlock, 'material', material || '-', newMaterial);
    if (newSize !== size) newBlock = replaceFieldInContent(newBlock, 'size', size || '-', newSize);
    if (newMuseum !== museum) newBlock = replaceFieldInContent(newBlock, 'museum', museum || '-', newMuseum);

    if (newBlock !== blockContent) {
      replacements.push({ old: blockContent, new: newBlock });
    }
  }

  for (const r of replacements) {
    content = content.replace(r.old, r.new);
  }
  if (replacements.length > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    return replacements.length;
  }
  return 0;
}

async function main() {
  const dirs = fs.readdirSync(dataDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.'))
    .map(d => d.name);

  let totalExpanded = 0;

  for (const dir of dirs) {
    const indexPath = path.join(dataDir, dir, 'index.js');
    if (!fs.existsSync(indexPath)) continue;
    try {
      const count = processFile(indexPath);
      const rel = path.relative(root, indexPath);
      if (count > 0) {
        totalExpanded += count;
        console.log('[OK]', rel, '已扩展', count, '条文物');
      }
    } catch (err) {
      console.error('[ERR]', indexPath, err.message);
    }
  }

  console.log('\n完成。共扩展', totalExpanded, '条文物的详细资料。');
}

main().catch((e) => { console.error(e); process.exit(1); });
