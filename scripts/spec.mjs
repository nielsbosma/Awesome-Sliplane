// A file under specs/ is either a spec, or a link to a spec kept in another repository:
//
//   link: https://github.com/<owner>/<repo>/blob/<ref>/<path to sliplane.yaml>
//   category: Business
//   icon: https://raw.githubusercontent.com/nielsbosma/Awesome-Sliplane/main/logos/<app>.svg
//
// A link's name, description and source come from the spec it points at; its own category and icon win.

const unquote = (v) => v.trim().replace(/^(["'])(.*)\1$/, "$2");

export function topField(yaml, key) {
  return unquote(new RegExp(`^${key}: (.*)$`, "m").exec(yaml)?.[1] ?? "");
}

export function appField(yaml, key) {
  const block = /^app:\n((?: {2}.*\n?)+)/m.exec(yaml)?.[1] ?? "";
  return unquote(new RegExp(`^ {2}${key}: (.*)$`, "m").exec(block)?.[1] ?? "");
}

/** https://github.com/o/r/blob/<ref>/<path> as a raw.githubusercontent.com URL. */
export function rawUrl(link) {
  const m = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/(.+)$/.exec(link);
  if (!m) throw new Error(`link must be a GitHub file URL (https://github.com/<owner>/<repo>/blob/<ref>/<path>), not ${link}`);
  return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}`;
}

export async function readEntry(text) {
  const yaml = text.replace(/\r\n/g, "\n");
  const link = topField(yaml, "link");
  if (!link)
    return { yaml, spec: yaml, category: appField(yaml, "category"), source: appField(yaml, "source") };
  const res = await fetch(rawUrl(link));
  if (!res.ok) throw new Error(`${res.status} for ${link}`);
  const spec = (await res.text()).replace(/\r\n/g, "\n");
  const repo = /^https:\/\/github\.com\/[^/]+\/[^/]+/.exec(link)[0];
  return {
    yaml,
    link,
    spec,
    category: topField(yaml, "category") || appField(spec, "category"),
    source: appField(spec, "source") || repo,
  };
}
