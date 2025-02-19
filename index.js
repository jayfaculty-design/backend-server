// let http = require("node:http");
// let fs = require("node:fs");
// let url = require("node:url");
let fs = require("fs");
let url = require("url");
const express = require("express");
const app = express();
require("dotenv").config();

let port = process.env.port || 3001;
let errorPage = fs.readFileSync("404.html", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  return data;
});
app.get("/*", (req, res) => {
  let q = url.parse(req.url, true);
  let filename = "";
  if (q.pathname === "/") {
    filename = "." + "/index.html";
  } else {
    filename = "." + q.pathname;
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write(errorPage);
      return res.end();
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
