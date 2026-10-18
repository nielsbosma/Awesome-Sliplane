# Awesome Sliplane

One-click deploy specs for open source apps on [Sliplane](https://sliplane.io), using the [Sliplane Deployer](https://github.com/nielsbosma/sliplane-deployer). Each button opens the deployer, which asks a few questions, shows what will be created and what it costs, and deploys the app to your own Sliplane account.

Every spec lives in [specs/](specs), grouped by category. Images are pinned to a release; bump the tag to upgrade.

## AI

| App | What it is | |
| --- | --- | --- |
| [CompreFace](specs/ai/compreface.yaml) | Self-hosted face recognition service with a web UI and REST API for face detection, verification and recognition, plus age, gender and landmark plugins. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/compreface.yaml) |
| [LibreChat](specs/ai/librechat.yaml) | Self-hosted AI chat with multiple users, agents, file uploads and conversation search, for Anthropic, OpenAI and OpenAI-compatible models. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/librechat.yaml) |
| [LiteLLM](specs/ai/litellm.yaml) | OpenAI-compatible LLM gateway for 100+ providers, with virtual keys, budgets, spend tracking and an admin UI, backed by Postgres. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/litellm.yaml) |
| [LobeHub](specs/ai/lobehub.yaml) | Modern AI chat and agent workspace (formerly LobeChat). Server edition with accounts, synced history, a knowledge base and file uploads, backed by Postgres with pgvector and S3 storage. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/lobehub.yaml) |
| [NextChat](specs/ai/nextchat.yaml) | A light, fast ChatGPT-style web client for OpenAI, Anthropic and other models, protected by an access password. Chats are stored in the browser. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/nextchat.yaml) |
| [Trieve](specs/ai/trieve.yaml) | Search, recommendations and RAG API with hybrid vector and BM25 search, plus a dashboard to manage datasets and API keys. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/ai/trieve.yaml) |

## Analytics

| App | What it is | |
| --- | --- | --- |
| [Metabase](specs/analytics/metabase.yaml) | Open source business intelligence. Connect your databases, ask questions without SQL, and share dashboards with your team. Uses Postgres as its application database. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/analytics/metabase.yaml) |
| [Plausible Analytics](specs/analytics/plausible.yaml) | Simple, privacy-friendly web analytics without cookies. Community Edition backed by Postgres and ClickHouse. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/analytics/plausible.yaml) |
| [RudderStack](specs/analytics/rudderstack.yaml) | Open source customer data platform. Self-hosted data plane that collects events from your apps and routes them to warehouses and tools, configured from a free RudderStack Open Source account. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/analytics/rudderstack.yaml) |

## Auth and Security

| App | What it is | |
| --- | --- | --- |
| [Hanko](specs/auth-and-security/hanko.yaml) | Open source authentication backend with passkeys, passcodes, passwords, social logins and MFA, used with the Hanko Elements web components in your own app. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/auth-and-security/hanko.yaml) |
| [Infisical](specs/auth-and-security/infisical.yaml) | Open source secrets management. Sync secrets and API keys across teams, environments and infrastructure, with versioning, access controls, audit logs and a PKI and SSH certificate manager. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/auth-and-security/infisical.yaml) |
| [Logto](specs/auth-and-security/logto.yaml) | Open source identity and access management with OIDC, OAuth 2.1, SAML, social sign-in, MFA, organizations and RBAC. Runs the auth endpoint on your own domain and the admin console as a second service. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/auth-and-security/logto.yaml) |

## Automation

| App | What it is | |
| --- | --- | --- |
| [n8n](specs/automation/n8n.yaml) | Workflow automation with a visual editor, 400+ integrations and AI nodes, backed by Postgres. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/automation/n8n.yaml) |

## Business

| App | What it is | |
| --- | --- | --- |
| [ERPNext](specs/business/erpnext.yaml) | Open source ERP built on the Frappe framework, with accounting, inventory, sales, purchasing, manufacturing, projects and HR in one app. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/business/erpnext.yaml) |
| [EspoCRM](specs/business/espocrm.yaml) | Open-source CRM for contacts, accounts, leads, opportunities, cases, email and calendars, with a customizable entity manager, workflows and a REST API. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/business/espocrm.yaml) |

## Commerce

| App | What it is | |
| --- | --- | --- |
| [PrestaShop](specs/commerce/prestashop.yaml) | Open source e-commerce platform with a storefront, back office, catalog, orders, payments and a large module marketplace. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/commerce/prestashop.yaml) |
| [Saleor](specs/commerce/saleor.yaml) | Headless, GraphQL-first commerce platform with a React dashboard for managing products, orders, customers and channels. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/commerce/saleor.yaml) |

## Communication

| App | What it is | |
| --- | --- | --- |
| [Mattermost](specs/communication/mattermost.yaml) | Open-source team chat with channels, threads, file sharing, integrations and plugins. A self-hosted alternative to Slack, backed by Postgres. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/communication/mattermost.yaml) |
| [Rocket.Chat](specs/communication/rocketchat.yaml) | Open source team chat with channels, direct messages, threads, video calls, file sharing and integrations, hosted on your own server. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/communication/rocketchat.yaml) |

## Customer Support

| App | What it is | |
| --- | --- | --- |
| [Chatwoot](specs/customer-support/chatwoot.yaml) | Open-source customer support platform. Answer live chat, email, WhatsApp and social messages from one shared inbox, with a help center, automations and reports. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/customer-support/chatwoot.yaml) |
| [Zammad](specs/customer-support/zammad.yaml) | Open-source helpdesk and ticketing system for email, chat, phone and social channels, with a knowledge base, SLAs and reporting. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/customer-support/zammad.yaml) |

## Developer Tools

| App | What it is | |
| --- | --- | --- |
| [Hoppscotch](specs/dev-tools/hoppscotch.yaml) | Open source API development ecosystem for testing REST, GraphQL, WebSocket and other APIs, with team workspaces and an admin dashboard. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/dev-tools/hoppscotch.yaml) |
| [Novu](specs/dev-tools/novu.yaml) | Open source notification infrastructure for email, SMS, push, chat and in-app inbox notifications, with a workflow editor and API. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/dev-tools/novu.yaml) |
| [Tolgee](specs/dev-tools/tolgee.yaml) | Open source localization platform with in-context translation, translation memory, machine translation and SDKs for React, Angular, Vue and more. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/dev-tools/tolgee.yaml) |
| [Unleash](specs/dev-tools/unleash.yaml) | Open source feature flag management. Roll out features gradually, run A/B tests and kill switches, with SDKs for most languages and frameworks. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/dev-tools/unleash.yaml) |

## Low-Code

| App | What it is | |
| --- | --- | --- |
| [Appsmith](specs/low-code/appsmith.yaml) | Low-code platform for building internal tools, admin panels and dashboards on top of your databases and APIs. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/low-code/appsmith.yaml) |
| [Baserow](specs/low-code/baserow.yaml) | Open-source no-code database and Airtable alternative, with an application builder, automations and a REST API. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/low-code/baserow.yaml) |
| [Lowcoder](specs/low-code/lowcoder.yaml) | Open-source low-code platform for building internal tools, web apps, meeting apps and modules with a drag-and-drop editor. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/low-code/lowcoder.yaml) |
| [NocoDB](specs/low-code/nocodb.yaml) | Open source Airtable alternative that turns a database into a smart spreadsheet, with grid, kanban, gallery and form views, plus REST APIs. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/low-code/nocodb.yaml) |
| [ToolJet](specs/low-code/tooljet.yaml) | Low-code platform for building internal tools, dashboards and workflows on top of your databases and APIs, with a built-in no-code database. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/low-code/tooljet.yaml) |

## Marketing

| App | What it is | |
| --- | --- | --- |
| [GrowChief](specs/marketing/growchief.yaml) | Open-source social media outreach automation for LinkedIn and X. Build workflows that send connection requests and follow-ups, driven by an API for n8n, Make or Zapier. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/marketing/growchief.yaml) |
| [Mautic](specs/marketing/mautic.yaml) | Open-source marketing automation for email campaigns, segments, landing pages, forms and lead scoring. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/marketing/mautic.yaml) |
| [Postiz](specs/marketing/postiz.yaml) | Open-source social media scheduling tool. Plan, write with AI, and publish posts to X, LinkedIn, Instagram, Bluesky, Mastodon and 20+ other channels. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/marketing/postiz.yaml) |

## Media

| App | What it is | |
| --- | --- | --- |
| [Jellyfin](specs/media/jellyfin.yaml) | Free software media server that streams your movies, shows, music and photos to web, mobile and TV apps, with no accounts or tracking. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/media/jellyfin.yaml) |

## Monitoring

| App | What it is | |
| --- | --- | --- |
| [Grafana](specs/monitoring/grafana.yaml) | Open source dashboards and alerting for metrics, logs and traces from Prometheus, Loki, Postgres, InfluxDB and many other data sources. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/monitoring/grafana.yaml) |
| [Prometheus](specs/monitoring/prometheus.yaml) | Time-series metrics database. Runs privately on your server and accepts metrics pushed over Prometheus remote write and OTLP, ready to query from Grafana or other services on the same server. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/monitoring/prometheus.yaml) |
| [Uptime Kuma](specs/monitoring/uptime-kuma.yaml) | A self-hosted monitoring tool with status pages and notifications. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/monitoring/uptime-kuma.yaml) |

## Productivity

| App | What it is | |
| --- | --- | --- |
| [AppFlowy](specs/productivity/appflowy.yaml) | Open source Notion alternative for docs, wikis, databases, kanban boards and real-time collaboration. This deploys AppFlowy Cloud, the server the AppFlowy desktop, mobile and web apps sync with. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/appflowy.yaml) |
| [BentoPDF](specs/productivity/bentopdf.yaml) | Privacy-first PDF toolkit to merge, split, compress, convert, sign and edit PDFs. Everything runs in the browser, so files never leave the visitor's device. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/bentopdf.yaml) |
| [Cal.com](specs/productivity/cal-com.yaml) | Open-source scheduling infrastructure. Share booking links, connect your calendars and let people book time with you, backed by Postgres. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/cal-com.yaml) |
| [Collabora Online](specs/productivity/collabora.yaml) | LibreOffice-based online editors for documents, spreadsheets and presentations with real-time co-editing. Connect it to Nextcloud, ownCloud, Seafile and other WOPI hosts, which open files in it. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/collabora.yaml) |
| [Documenso](specs/productivity/documenso.yaml) | Open-source document signing, an alternative to DocuSign. Upload PDFs, place fields, send them for signature and keep signed documents in your own Postgres. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/documenso.yaml) |
| [Excalidraw](specs/productivity/excalidraw.yaml) | Virtual whiteboard for sketching hand-drawn style diagrams. Drawings are saved in the browser and can be exported as PNG, SVG or .excalidraw files. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/excalidraw.yaml) |
| [Nextcloud](specs/productivity/nextcloud.yaml) | Self-hosted file sync and sharing with calendars, contacts, office documents and hundreds of apps. Backed by Postgres and Redis. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/nextcloud.yaml) |
| [ONLYOFFICE Docs](specs/productivity/onlyoffice.yaml) | Online editors for documents, spreadsheets and presentations with real-time co-editing. Connect it to Nextcloud, Seafile, Moodle and similar apps, which open files in it. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/onlyoffice.yaml) |
| [Plane](specs/productivity/plane.yaml) | Open source project management for tracking issues, sprints (cycles), modules, pages and roadmaps. An alternative to Jira, Linear and Asana. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/plane.yaml) |
| [Spliit](specs/productivity/spliit.yaml) | A free, open-source alternative to Splitwise. Share expenses with friends and family in groups, see who owes whom and settle up, without accounts or ads. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/spliit.yaml) |
| [WeKan](specs/productivity/wekan.yaml) | Open-source kanban boards with swimlanes, checklists, labels, due dates and a REST API. A self-hosted alternative to Trello, backed by MongoDB. | [![Deploy to Sliplane](https://sliplane.opendeploy.cloud/button.svg)](https://sliplane.opendeploy.cloud/?repo=https://github.com/nielsbosma/awesome-sliplane/specs/productivity/wekan.yaml) |

## Adding an App

1. Add `specs/<category>/<app>.yaml` (see the [spec reference](https://github.com/nielsbosma/sliplane-deployer#sliplaneyaml)).
2. Check it from a [deployer](https://github.com/nielsbosma/sliplane-deployer) checkout with `node packages/cli/src/bin.ts lint <path to the spec>`.
3. Run `node scripts/readme.mjs` to update this list.
