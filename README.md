# IBITI Labs

![Status](https://img.shields.io/badge/status-active-success)
![Type](https://img.shields.io/badge/type-infrastructure-blue)
![Chain](https://img.shields.io/badge/BNB%20Chain-live-yellow)
![License](https://img.shields.io/badge/license-open--source-lightgrey)
![Stage](https://img.shields.io/badge/stage-early--pilot-orange)

**IBITI Labs is an infrastructure layer for on-chain autonomy — secure execution, permission control, and agent-safe DeFi.**

We build the foundational security + execution primitives that autonomous systems (AI agents, bots, protocols, treasuries) rely on.

---

## What we build

IBITI Labs develops modular on-chain infrastructure for:

* **Deterministic execution** — predictable, policy-bound on-chain actions
* **Revocable permissions** — permissions that can be limited, timed, and revoked
* **Secure treasury interaction** — controlled spending and target restrictions
* **Agent-safe DeFi automation** — autonomy without “blank-check approvals”
* **Transparent utility assets** — on-chain utility designed to align ecosystem incentives

**We don’t build trading bots.** We build the *permission and execution layer* that makes autonomy safe to ship.

---

## Repository

This repository is the **IBITI Labs umbrella** (landing + pointers). Core protocol work lives in dedicated repos.

**Live site (GitHub Pages):** [https://vovan1980.github.io/IBITILabs/](https://vovan1980.github.io/IBITILabs/)

### Layout

```
.
├─ index.html          # GitHub Pages landing (root)
├─ README.md           # This file (umbrella overview)
├─ assets/             # Logos / images used in README + landing
└─ .github/            # Issue templates, security policy, etc.
```

### Quick start (local)

If you want to preview the landing locally:

```bash
# simplest: static server
python -m http.server 8080
# open http://localhost:8080
```

(Any static server works: `npx serve`, VSCode Live Server, etc.)

---

## Ecosystem architecture

```
                 IBITI Labs
                      │
      ┌───────────────┼───────────────┐
      │                               │
   IBITI EPK                       IBITIcoin
 Permission Layer                 Network Asset
      │                               │
      └────────── Autonomous Applications ──────────┘
                          │
                       AI Agents
                   DeFi Automation
                   On-chain Execution
```

---

## Core modules

### 1) Eternal Permission Kernel (EPK)

**EPK** is a permission & execution-control layer for smart accounts and autonomous agents.

It replaces unlimited approvals with deterministic policies:

* **Granular spend limits** (per-tx and rolling windows)
* **Target allowlists / selectors** (call only what you permit)
* **Time-bounded permissions** (TTL-based access)
* **Instant revocation** (panic switch / kill permissions)

Designed for **institutional-grade safety** and practical integration.

**Repo:** [https://github.com/VOVAN1980/ibiti-epk-core](https://github.com/VOVAN1980/ibiti-epk-core)
**DoraHacks BUILDL:** [https://dorahacks.io/buidl/39567/](https://dorahacks.io/buidl/39567/)

---

### 2) Autonomous applications & agents

EPK is the security substrate. On top of it we build (and enable others to build) agent-driven products such as:

* **AI trading agents** (policy-bound execution)
* **Automated treasury logic** (controlled spending)
* **Autonomous DeFi interaction** (approved targets only)
* **Agent-driven gaming systems** (rules enforced on-chain)

All applications operate under **deterministic permission policies** — autonomy without losing control.

---

### 3) IBITI Network Asset (IBITIcoin)

**IBITIcoin (IBITI)** is the native utility asset supporting ecosystem coordination and liquidity alignment.

* BNB Smart Chain (BEP-20)
* Fixed supply
* Transparent on-chain mechanics
* Designed for ecosystem utility integration

**Website:** [https://www.ibiticoin.com](https://www.ibiticoin.com)

---

## Why this matters

Autonomous execution is becoming the default.

But today’s on-chain automation still relies on fragile patterns:

* **Infinite token approvals**
* **Uncontrolled agent execution**
* **Irreversible permission models**

IBITI Labs introduces a **permission-first execution architecture** where autonomous systems can operate safely — with enforceable limits, revocation, and transparent rules.

---

## Live links

* 🌐 **IBITI Labs (umbrella):** [https://vovan1980.github.io/IBITILabs/](https://vovan1980.github.io/IBITILabs/)
* 🧠 **EPK v1 (docs/landing):** [https://vovan1980.github.io/ibiti-epk-core/](https://vovan1980.github.io/ibiti-epk-core/)
* 💱 **IBITIcoin:** [https://www.ibiticoin.com](https://www.ibiticoin.com)

---

## Technology

* Solidity
* Foundry
* BNB Smart Chain
* Smart account architecture
* EIP-712 signing
* Modular validator design

---

## Status

* **IBITIcoin** — live on BNB Chain
* **EPK** — validated on testnet
* **Security architecture** — open source
* **Pilot integrations** — in progress

---

## Mission

> Enable autonomous systems to operate on-chain safely.

IBITI Labs aims to become a foundational security & execution layer for agent-driven economies.

---

## Contributing

We’re moving toward pilot integrations and infrastructure partnerships.

Technical discussions and collaboration proposals are welcome.

---

## Contact

* **Email:** [info@ibiticoin.com](mailto:info@ibiticoin.com)
* **X (Twitter):** [https://x.com/ibiticoin](https://x.com/ibiticoin)
* **Telegram:** [https://t.me/IBITIcoin_chat](https://t.me/IBITIcoin_chat)

---

## License

Open-source components are released under their respective repository licenses.

---

## Maintainers’ checklist (recommended repo files)

If you want this umbrella repo to look like a “top” infra project, add these files:

* `LICENSE` (MIT or Apache-2.0)
* `SECURITY.md` (security contact + disclosure process)
* `CONTRIBUTING.md` (how to propose changes)
* `CODE_OF_CONDUCT.md` (standard community rules)
* `.github/ISSUE_TEMPLATE/` (bug + feature templates)
* `.github/pull_request_template.md`
* `assets/` (logo/OG images used by README + landing)

I can generate the full contents for each file below so you can paste them into the repo as-is.
