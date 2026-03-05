/**
 * 扫描 public/model 下的 .glb 文件，只有 model 目录里有的才在详情里展示 3D。
 * 运行：node scripts/generate-artifact-model-manifest.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const modelDir = path.join(root, 'public', 'model');

function walkModel(dir, relPath, out) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const name = relPath ? relPath + '/' + e.name : e.name;
    if (e.isFile() && e.name.toLowerCase().endsWith('.glb')) {
      out[name.replace(/\.glb$/i, '')] = true;
    }
    if (e.isDirectory()) walkModel(path.join(dir, e.name), name, out);
  }
}

function main() {
  const manifest = {};
  if (fs.existsSync(modelDir) && fs.statSync(modelDir).isDirectory()) {
    walkModel(modelDir, '', manifest);
  }
  const count = Object.keys(manifest).length;
  const out = `/**
 * 有 3D 模型的文物路径（scripts/generate-artifact-model-manifest.js 扫描 public/model 生成）
 * 只有在此清单中的才展示 3D 入口
 */
export const artifactModelManifest = ${JSON.stringify(manifest, null, 0)};
`;
  const outPath = path.join(root, 'src', 'data', 'artifactModelManifest.js');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('已写入 src/data/artifactModelManifest.js，共', count, '个 3D 模型。');
}

main();
