import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO = "https://github.com/nielsbosma/awesome-sliplane";
const DEPLOYER = "https://sliplane.opendeploy.cloud";
const root = new URL("..", import.meta.url).pathname;

const titles = {
  ai: "AI",
  analytics: "Analytics",
  "auth-and-security": "Auth and Security",
  automation: "Automation",
  business: "Business",
  cms: "CMS",
  commerce: "Commerce",
  communication: "Communication",
  "customer-support": "Customer Support",
  "dev-tools": "Developer Tools",
  finance: "Finance",
  "low-code": "Low-Code",
  marketing: "Marketing",
  media: "Media",
  monitoring: "Monitoring",
  productivity: "Productivity",
  search: "Search",
};

function appField(yaml, key) {
  const block = /^app:\n((?: {2}.*\n?)+)/m.exec(yaml)?.[1] ?? "";
  const value = new RegExp(`^ {2}${key}: (.*)$`, "m").exec(block)?.[1]?.trim() ?? "";
  return value.replace(/^(["'])(.*)\1$/, "$2");
}

const rows = [];
const toc = [];
for (const category of readdirSync(join(root, "specs")).sort()) {
  const apps = readdirSync(join(root, "specs", category))
    .filter((f) => f.endsWith(".yaml"))
    .map((file) => {
      const yaml = readFileSync(join(root, "specs", category, file), "utf8");
      const path = `specs/${category}/${file}`;
      return { name: appField(yaml, "name"), description: appField(yaml, "description"), path };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const title = titles[category] ?? category;
  toc.push(`[${title}](#${category})`);
  rows.push(`<tr><td colspan="3"><br><a name="${category}"></a><b>${title}</b></td></tr>`);
  for (const a of apps)
    rows.push(
      `<tr><td width="170"><a href="${DEPLOYER}/?repo=${REPO}/${a.path}">${a.name}</a></td><td>${a.description}</td><td width="190"><a href="${DEPLOYER}/?repo=${REPO}/${a.path}"><img src="${DEPLOYER}/button.svg" alt="Deploy to Sliplane" width="179" height="36"></a></td></tr>`,
    );
}
const table = `<table>\n<tr><th align="left">App</th><th align="left">What it is</th><th></th></tr>\n${rows.join("\n")}\n</table>`;

const readme = `# Awesome Sliplane

One-click deploy specs for open source apps on [Sliplane](https://sliplane.io), using the [Sliplane Deployer](https://github.com/nielsbosma/sliplane-deployer). Each button opens the deployer, which asks a few questions, shows what will be created and what it costs, and deploys the app to your own Sliplane account.

Every spec lives in [specs/](specs), grouped by category. Images are pinned to a release; bump the tag to upgrade.

${toc.join(" · ")}

${table}

## Adding an App

1. Add \`specs/<category>/<app>.yaml\` (see the [spec reference](https://github.com/nielsbosma/sliplane-deployer#sliplaneyaml)).
2. Check it from a [deployer](https://github.com/nielsbosma/sliplane-deployer) checkout with \`node packages/cli/src/bin.ts lint <path to the spec>\`.
3. Run \`node scripts/readme.mjs\` to update this list.
`;

writeFileSync(join(root, "README.md"), readme);
