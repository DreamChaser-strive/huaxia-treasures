/**
 * 扫描 public 下放图片的那个目录（只有一个），按 省/市/文物 列出所有图片文件名，生成 manifest。
 * 运行：node scripts/generate-artifact-image-manifest.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']);

function isImageFile(name) {
  return IMG_EXT.has(path.extname(name).toLowerCase());
}

function walkDir(dir, relPath, out) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.isFile() && isImageFile(e.name)) files.push(e.name);
    if (e.isDirectory()) walkDir(path.join(dir, e.name), relPath ? relPath + '/' + e.name : e.name, out);
  }
  if (files.length && relPath && relPath.split('/').length >= 3) {
    out[relPath] = files.sort();
  }
}

function main() {
  let basePath = '';
  const manifest = {};

  if (fs.existsSync(publicDir) && fs.statSync(publicDir).isDirectory()) {
    const dirs = fs.readdirSync(publicDir, { withFileTypes: true })
      .filter(e => e.isDirectory() && e.name !== 'model');
    const name = dirs.length > 0 ? dirs[0].name : null;
    if (name) {
      basePath = '/' + name;
      walkDir(path.join(publicDir, name), '', manifest);
      console.log('已扫描放图片的目录: public/' + name);
    }
  }
  if (!basePath) {
    console.log('public 下没有子目录，请先建一个放图片的目录（如 photosOrvideos），再运行本脚本。');
    basePath = '/photosOrvideos';
  }

  const out = `/**
 * 文物图片清单（scripts/generate-artifact-image-manifest.js 扫描 public 下放图片的目录生成）
 */
export const artifactImageBase = ${JSON.stringify(basePath)};
export const artifactImageManifest = ${JSON.stringify(manifest, null, 0)};
`;
  const outPath = path.join(root, 'src', 'data', 'artifactImageManifest.js');
  fs.writeFileSync(outPath, out, 'utf8');
  const count = Object.keys(manifest).length;
  const totalImgs = Object.values(manifest).reduce((s, arr) => s + arr.length, 0);
  console.log('已写入 src/data/artifactImageManifest.js，共', count, '个文物目录，', totalImgs, '张图片。');
}

main();
