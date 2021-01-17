const { resolve } = require("dns");
const express = require("express");
var fileupload = require("express-fileupload");
const app = express();

app.use(fileupload());
const port = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/ocr", (req, res) => {
  const { spawn } = require("child_process");

  const child = spawn("tesseract", ["stdin", "stdout"]);
  child.stdout.on("data", (data) => res.send(data));
  child.stdout.on("error", console.log);
  child.stdin.write(req.files.img.data);
  child.stdin.end();
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
