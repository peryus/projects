import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

import { renderPage } from "./template.js";
import {
  homePage,
  aboutPage,
  contactPage,
} from "./pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/styles.css") {
    const cssPath = path.join(__dirname, "styles.css");

    fs.readFile(cssPath, (error, data) => {
      if (error) {
        res.statusCode = 404;
        res.end();
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/css; charset=utf-8",
        "Content-Length": data.length,
      });

      res.end(data);
    });

    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  let page;

  if (req.method === "GET" && req.url === "/") {
    page = renderPage("Home", homePage);
    res.statusCode = 200;
  } else if (req.method === "GET" && req.url === "/about") {
    page = renderPage("About", aboutPage);
    res.statusCode = 200;
  } else if (req.method === "GET" && req.url === "/contact") {
    page = renderPage("Contact", contactPage);
    res.statusCode = 200;
  } else {
    page = renderPage(
        "404 Not Found",
        "<p>Page Not Found</p>"
    );

    res.statusCode = 404;
  }

  res.setHeader("Content-Length", Buffer.byteLength(page));
  res.end(page);
});

server.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:3000`);
});