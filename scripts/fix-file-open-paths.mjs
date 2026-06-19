import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");

const textExtensions = new Set([
  ".html",
  ".css",
  ".js",
  ".mjs",
  ".json",
  ".txt",
  ".svg",
]);

const runtimeFix = `<script>!function(){if("file:"===location.protocol){var roots=["/images/","/_next/","/favicon","/apple-icon","/icon"];function fixUrl(value){return value&&roots.some(function(root){return value.indexOf(root)===0})?"."+value:value}function fixSrcset(value){return value?value.split(",").map(function(part){var bits=part.trim().split(/\\s+/);return bits[0]=fixUrl(bits[0]),bits.join(" ")}).join(", "):value}function fixStyle(value){return value?value.replace(/url\\((['"]?)(\\/(?:images|_next)\\/[^'")]+)\\1\\)/g,function(_,quote,path){return"url("+quote+"."+path+quote+")"}):value}function fixNode(node){if(!node||1!==node.nodeType)return;["src","href","poster"].forEach(function(name){var value=node.getAttribute(name);value&&node.setAttribute(name,fixUrl(value))});var srcset=node.getAttribute("srcset");srcset&&node.setAttribute("srcset",fixSrcset(srcset));var style=node.getAttribute("style");style&&node.setAttribute("style",fixStyle(style));node.querySelectorAll&&node.querySelectorAll("[src],[href],[poster],[srcset],[style]").forEach(fixNode)}function run(){fixNode(document.documentElement)}document.addEventListener("DOMContentLoaded",run);new MutationObserver(function(records){records.forEach(function(record){record.addedNodes.forEach(fixNode)})}).observe(document.documentElement,{childList:!0,subtree:!0});for(var i=1;i<=8;i++)setTimeout(run,250*i)}}();</script>`;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      yield* walk(file);
      continue;
    }

    if (entry.isFile()) {
      yield file;
    }
  }
}

function fixText(text, ext) {
  let next = text
    .replaceAll('href="/_next/', 'href="./_next/')
    .replaceAll("href='/_next/", "href='./_next/")
    .replaceAll('src="/_next/', 'src="./_next/')
    .replaceAll("src='/_next/", "src='./_next/")
    .replaceAll('href="/images/', 'href="./images/')
    .replaceAll("href='/images/", "href='./images/")
    .replaceAll('src="/images/', 'src="./images/')
    .replaceAll("src='/images/", "src='./images/")
    .replaceAll('poster="/images/', 'poster="./images/')
    .replaceAll("poster='/images/", "poster='./images/")
    .replaceAll('url(/images/', 'url(./images/')
    .replaceAll('url("/images/', 'url("./images/')
    .replaceAll("url('/images/", "url('./images/")
    .replaceAll('url(/_next/', 'url(./_next/')
    .replaceAll('url("/_next/', 'url("./_next/')
    .replaceAll("url('/_next/", "url('./_next/");

  if (ext === ".html" && !next.includes(runtimeFix)) {
    next = next.replace(/(<head[^>]*>)/i, `$1${runtimeFix}`);
    if (next === text) {
      next = `${runtimeFix}${next}`;
    }
  }

  return next;
}

try {
  await stat(outDir);
} catch {
  console.log("No out folder found yet.");
  process.exit(0);
}

let changed = 0;

for await (const file of walk(outDir)) {
  const ext = path.extname(file).toLowerCase();

  if (!textExtensions.has(ext)) {
    continue;
  }

  const text = await readFile(file, "utf8");
  const fixed = fixText(text, ext);

  if (fixed !== text) {
    await writeFile(file, fixed, "utf8");
    changed += 1;
  }
}

console.log(changed ? `File-open paths updated in ${changed} files.` : "File-open paths are ready.");
