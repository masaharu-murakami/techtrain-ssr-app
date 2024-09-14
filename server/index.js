// server/index.js
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App.tsx').default; // React コンポーネントをインポート

const app = express();

// クライアントバンドルの静的ファイルを提供する
app.use(express.static('dist'));

app.get('*', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
