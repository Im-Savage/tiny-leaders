const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = __dirname;
const out = path.join(root, "out");
const host = "127.0.0.1";
const noOpen = process.argv.includes("--no-open");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function send(res, file) {
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Tiny-Leaders-Local": "true",
    });
    res.end(data);
  });
}

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath || "/").replace(/\\/g, "/");
  const target = clean === "/" || clean.endsWith("/")
    ? path.join(out, clean, "index.html")
    : path.join(out, clean);
  const resolved = path.resolve(target);
  const base = path.resolve(out);
  return resolved === base || resolved.startsWith(`${base}${path.sep}`) ? resolved : null;
}

function createServer() {
  return http.createServer((req, res) => {
    const requestUrl = new URL(req.url || "/", `http://${host}`);
    const file = safePath(requestUrl.pathname);

    if (!file) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    fs.stat(file, (error, stat) => {
      if (!error && stat.isDirectory()) {
        send(res, path.join(file, "index.html"));
        return;
      }

      if (!error && stat.isFile()) {
        send(res, file);
        return;
      }

      send(res, path.join(out, "index.html"));
    });
  });
}

function listen(server, port) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.once("listening", () => resolve(port));
    server.listen(port, host);
  });
}

function openBrowser(url) {
  if (noOpen) return;
  const edgePaths = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  const edge = edgePaths.find((candidate) => fs.existsSync(candidate));
  const child = edge
    ? spawn(edge, [url], { detached: true, stdio: "ignore" })
    : spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" });
  child.unref();
}

async function main() {
  if (!fs.existsSync(path.join(out, "index.html"))) {
    throw new Error("out\\index.html was not found.");
  }

  for (let port = 3000; port <= 3010; port += 1) {
    try {
      const server = createServer();
      await listen(server, port);
      const url = `http://${host}:${port}/`;
      console.log("");
      console.log(`Tiny Leaders is ready at ${url}`);
      console.log("Keep this window open while using the website.");
      console.log("Closing this window stops the local website.");
      console.log("");
      openBrowser(url);
      return;
    } catch (error) {
      if (!error || error.code !== "EADDRINUSE" || port === 3010) {
        throw error;
      }
    }
  }
}

main().catch((error) => {
  console.error("");
  console.error("Tiny Leaders could not start.");
  console.error(error && error.message ? error.message : error);
  console.error("");
  process.exitCode = 1;
});
