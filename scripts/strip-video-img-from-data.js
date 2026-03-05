/**
 * 从各省文物数据中移除 video、img、images 字段（不再引用网络视频/图片，仅用 photosOrvideos 本地资源）
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'src', 'data');
const allDirs = fs.readdirSync(dataDir).filter(d => {
  const p = path.join(dataDir, d);
  return fs.statSync(p).isDirectory();
});

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;
  // 移除 video: '...' 或 video: "..." 整行
  content = content.replace(/\n\s+video:\s*['"][^'"]*['"],?\s*\n/g, '\n');
  // 移除 img: '...' 整行
  content = content.replace(/\n\s+img:\s*['"][^'"]*['"],?\s*\n/g, '\n');
  // 移除 images: [...] 整行（单行数组）
  content = content.replace(/\n\s+images:\s*\[[^\]]*\],?\s*\n/g, '\n');
  if (content !== before) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

allDirs.forEach(d => {
  const indexPath = path.join(dataDir, d, 'index.js');
  if (fs.existsSync(indexPath)) {
    processFile(indexPath);
  }
});

console.log('Done.');
