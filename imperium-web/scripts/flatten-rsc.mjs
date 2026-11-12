// Post-build fix for the static export (Next.js 16.4): segment prefetch payloads are
// written as nested folders (e.g. products/iconnect/__next.products/$d$slug/__PAGE__.txt)
// but the client router requests flat, dot-joined names
// (products/iconnect/__next.products.$d$slug.__PAGE__.txt). Write a flat copy of each.
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));
let count = 0;

function walkPayloadDir(dir, prefix, parent) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkPayloadDir(p, `${prefix}.${name}`, parent);
    else if (name.endsWith(".txt")) {
      copyFileSync(p, join(parent, `${prefix}.${name}`));
      count++;
    }
  }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) walkPayloadDir(p, name, dir);
    else if (name !== "_next") walk(p);
  }
}

walk(OUT);
console.log(`flatten-rsc: wrote ${count} flat prefetch payloads`);
