import express from "express";
import path from "path";

// CommonJSの__filenameと__dirnameを使用するための設定
const __filename = path.resolve();
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(9000, () => {
  console.log("Server is running at http://localhost:9000");
});
