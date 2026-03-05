const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    // 处理根路径重定向
    if (req.url === '/') {
      res.writeHead(302, { 'Location': '/src/AR.html' });
      res.end();
      return;
    }

    // 处理 AR.html 请求
    if (req.url === '/src/AR.html') {
      const filePath = path.join(__dirname, 'src', 'AR.html');
      const content = await fs.readFile(filePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
      return;
    }

    // 处理 /model/* 请求（优先 public/model，其次回退到仓库根目录的 model/）
    if (req.url.startsWith('/model/')) {
      const raw = req.url.slice('/model/'.length).split('?')[0];
      const decoded = decodeURIComponent(raw);
      if (decoded.includes('..')) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      // 候选路径：先 public/model，再回退到根目录 model
      const candidates = [
        path.join(__dirname, 'public', 'model', decoded),
        path.join(__dirname, 'model', decoded)
      ];

      for (const filePath of candidates) {
        try {
          const content = await fs.readFile(filePath);
          res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
          res.end(content);
          return;
        } catch (e) {
          // 继续尝试下一个候选路径
        }
      }

      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    // 处理其他静态文件
    let filePath = path.join(__dirname, req.url);
    
    // 如果是目录，尝试添加 index.html
    try {
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch (e) {
      // 文件不存在，继续处理下面的读取逻辑（会抛出并被捕获）
    }

    const content = await fs.readFile(filePath);
    const contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'application/javascript';
    case '.json': return 'application/json';
    default: return 'application/octet-stream';
  }
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('访问 http://localhost:3000/ 将自动跳转到中国地图页面');
});

// 添加 Ctrl+C 退出处理
process.on('SIGINT', () => {
  console.log('\nServer shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});