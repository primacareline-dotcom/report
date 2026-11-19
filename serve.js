const http = require("http");
const fs = require("fs");
const path = "C:/Users/bb/.ilmucode/workspace/default/index.html";
http.createServer((req, res) => {
  fs.readFile(path, (err, data) => {
    if (err) { res.writeHead(500); res.end(String(err)); return; }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(8471, "127.0.0.1", () => console.log("listening on http://127.0.0.1:8471/"));
