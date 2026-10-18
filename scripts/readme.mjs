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
  commerce: "Commerce",
  communication: "Communication",
  "customer-support": "Customer Support",
  "dev-tools": "Developer Tools",
  "low-code": "Low-Code",
  marketing: "Marketing",
  media: "Media",
  monitoring: "Monitoring",
  productivity: "Productivity",
};

function appField(yaml, key) {
  const block = /^app:\n((?: {2}.*\n?)+)/m.exec(yaml)?.[1] ?? "";
  const value = new RegExp(`^ {2}${key}: (.*)$`, "m").exec(block)?.[1]?.trim() ?? "";
  return value.replace(/^(["'])(.*)\1$/, "$2");
}

const sections = [];
for (const category of readdirSync(join(root, "specs")).sort()) {
  const files = readdirSync(join(root, "specs", category)).filter((f) => f.endsWith(".yaml"));
  const rows = files
    .map((file) => {
      const yaml = readFileSync(join(root, "specs", category, file), "utf8");
      const path = `specs/${category}/${file}`;
      return { name: appField(yaml, "name"), description: appField(yaml, "description"), path };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const lines = rows.map(
    (r) =>
      `| [${r.name}](${r.path}) | ${r.description} | [![Deploy to Sliplane](${DEPLOYER}/button.svg)](${DEPLOYER}/?repo=${REPO}/${r.path}) |`,
  );
  sections.push(`## ${titles[category] ?? category}\n\n| App | What it is | |\n| --- | --- | --- |\n${lines.join("\n")}`);
}

const readme = `# Awesome Sliplane

One-click deploy specs for open source apps on [Sliplane](https://sliplane.io), using the [Sliplane Deployer](https://github.com/nielsbosma/sliplane-deployer). Each button opens the deployer, which asks a few questions, shows what will be created and what it costs, and deploys the app to your own Sliplane account.

Every spec lives in [specs/](specs), grouped by category. Images are pinned to a release; bump the tag to upgrade.

${sections.join("\n\n")}

## Adding an App

1. Add \`specs/<category>/<app>.yaml\` (see the [spec reference](https://github.com/nielsbosma/sliplane-deployer#sliplaneyaml)).
2. Check it from a [deployer](https://github.com/nielsbosma/sliplane-deployer) checkout with \`node packages/cli/src/bin.ts lint <path to the spec>\`.
3. Run \`node scripts/readme.mjs\` to update this list.
`;

writeFileSync(join(root, "README.md"), readme);
