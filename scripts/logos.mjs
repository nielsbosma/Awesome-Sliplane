// Builds logos/<app>.svg for every spec: the project's own logo (from logos/sources.json) centred on a
// 256x256 rounded tile, or a text tile with the app's name when no logo is listed. Then points each spec's
// app.icon at its logo. Run: node scripts/logos.mjs [app ...]
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { appField, readEntry } from "./spec.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const RAW = "https://raw.githubusercontent.com/nielsbosma/Awesome-Sliplane/main";
const SIZE = 256;
const RADIUS = 56;
const sources = JSON.parse(readFileSync(join(root, "logos", "sources.json"), "utf8"));
const only = process.argv.slice(2);


function sourceUrl(entry, repo) {
  if (/^https?:\/\//.test(entry.src)) return entry.src;
  const [, owner, name] = /github\.com\/([^/]+)\/([^/#?]+)/.exec(repo);
  return `https://raw.githubusercontent.com/${owner}/${name}/HEAD/${entry.src}`;
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function tile(fill, inner, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
<title>${esc(title)}</title>
<rect x="0.5" y="0.5" width="${SIZE - 1}" height="${SIZE - 1}" rx="${RADIUS}" fill="${fill}" stroke="#0f172a" stroke-opacity="0.12"/>
${inner}
</svg>
`;
}

// Nests a downloaded SVG inside the tile's padding box, keeping its own viewBox and root attributes.
function nestSvg(text, box) {
  let svg = text
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<metadata[\s\S]*?<\/metadata>/gi, "")
    .replace(/<sodipodi:namedview[\s\S]*?(\/>|<\/sodipodi:namedview>)/g, "")
    .replace(/\son[a-z]+="[^"]*"/gi, "")
    .trim();
  const open = /<svg\b([^>]*)>/i.exec(svg);
  if (!open) throw new Error("no <svg> root");
  const attrs = {};
  for (const m of open[1].matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) attrs[m[1]] = m[3] ?? m[4];
  let viewBox = attrs.viewBox ?? attrs.viewbox;
  if (!viewBox) {
    const w = parseFloat(attrs.width), h = parseFloat(attrs.height);
    if (!w || !h) throw new Error("no viewBox or size");
    viewBox = `0 0 ${w} ${h}`;
  }
  for (const k of ["width", "height", "x", "y", "viewBox", "viewbox", "version", "xml:space", "id", "preserveAspectRatio"]) delete attrs[k];
  const rest = Object.entries(attrs).map(([k, v]) => ` ${k}="${v}"`).join("");
  const body = svg.slice(open.index + open[0].length, svg.lastIndexOf("</svg>"));
  return `<svg x="${box.x}" y="${box.y}" width="${box.size}" height="${box.size}" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet"${rest}>${body}</svg>`;
}

function imageType(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return "image/png";
  if (buf[0] === 0xff && buf[1] === 0xd8) return "image/jpeg";
  if (buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP") return "image/webp";
  return null;
}

// Text tiles: the name in a system sans on one shared colour, sized to fit.
function textTile(name) {
  const words = name.split(/\s+/);
  // One word per line once the name is long (at most three lines), so long names stay large.
  const lines = name.length <= 9 || words.length === 1 ? [name] : words.length <= 3 ? words : [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
  const longest = Math.max(...lines.map((l) => l.length));
  const fontSize = Math.min(64, Math.floor(196 / (longest * 0.62)));
  const lineHeight = fontSize * 1.1;
  const top = SIZE / 2 - ((lines.length - 1) * lineHeight) / 2;
  const text = lines
    .map((l, i) => `<text x="${SIZE / 2}" y="${(top + i * lineHeight).toFixed(1)}" dominant-baseline="central" text-anchor="middle" font-family="Inter, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="${fontSize}" letter-spacing="-0.02em" fill="#ffffff">${esc(l)}</text>`)
    .join("\n");
  return tile("#334155", text, name);
}

async function build(slug, name, repo) {
  const entry = sources[slug];
  if (!entry || entry.text) return { svg: textTile(entry?.text ?? name), kind: "text" };
  const pad = entry.pad ?? 40;
  const box = { x: pad, y: pad, size: SIZE - 2 * pad };
  const url = sourceUrl(entry, repo);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const type = imageType(buf);
  const inner = type
    ? `<image x="${box.x}" y="${box.y}" width="${box.size}" height="${box.size}" preserveAspectRatio="xMidYMid meet" href="data:${type};base64,${buf.toString("base64")}"/>`
    : nestSvg(buf.toString("utf8"), box);
  return { svg: tile(entry.bg ?? "#ffffff", inner, name), kind: type ? "raster" : "svg", url };
}

for (const category of readdirSync(join(root, "specs")).sort()) {
  for (const file of readdirSync(join(root, "specs", category)).filter((f) => f.endsWith(".yaml"))) {
    const slug = file.replace(/\.yaml$/, "");
    if (only.length && !only.includes(slug)) continue;
    const path = join(root, "specs", category, file);
    const original = readFileSync(path, "utf8");
    const eol = original.includes("\r\n") ? "\r\n" : "\n";
    let entry;
    try {
      entry = await readEntry(original);
      const { svg, kind, url } = await build(slug, appField(entry.spec, "name"), entry.source);
      writeFileSync(join(root, "logos", `${slug}.svg`), svg);
      console.log(`${slug.padEnd(16)} ${kind.padEnd(6)} ${url ?? ""}`);
    } catch (e) {
      console.error(`${slug}: ${e.message}`);
      process.exitCode = 1;
      if (!entry || !existsSync(join(root, "logos", `${slug}.svg`))) continue;
    }
    const icon = `${RAW}/logos/${slug}.svg`;
    let yaml = entry.yaml;
    // A link carries its own top-level icon; a spec has app.icon.
    if (entry.link) yaml = /^icon: .*$/m.test(yaml) ? yaml.replace(/^icon: .*$/m, `icon: ${icon}`) : `${yaml.trimEnd()}\nicon: ${icon}\n`;
    else yaml = /^ {2}icon: .*$/m.test(yaml)
      ? yaml.replace(/^ {2}icon: .*$/m, `  icon: ${icon}`)
      : yaml.replace(/^( {2}description: .*\n)/m, `$1  icon: ${icon}\n`);
    writeFileSync(path, yaml.replace(/\n/g, eol));
  }
}
