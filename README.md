# IBITI Labs

<p align="center">
  <img src="img/ibiti-mark.png" alt="IBITI Labs" width="200">
</p>

<p align="center"><b>Infrastructure Layer for On-Chain Autonomy</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/type-infrastructure-blue?style=flat-square" alt="Type">
  <img src="https://img.shields.io/badge/BNB%20Chain-live-yellow?style=flat-square" alt="Chain">
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/stage-early--pilot-orange?style=flat-square" alt="Stage">
</p>

---

**IBITI Labs is an infrastructure layer for on-chain autonomy — secure execution, permission control, and agent-safe DeFi.**

We build the foundational security + execution primitives that autonomous systems (AI agents, bots, protocols, treasuries) rely on.

🌐 **Website:** [vovan1980.github.io/IBITILabs](https://vovan1980.github.io/IBITILabs/)

---

## Ecosystem Architecture

```
IBITI Labs
├── Security layer
│   └── IBITI EPK ............. on-chain permission kernel for AI agents (testnet)
├── Apps
│   ├── IBITI Guardian ........ AI wallet & CEX guard (mobile)
│   ├── Guardian for Chrome ... holds wallet requests in the browser
│   ├── DrainShield ........... approval scanner, revoke, link checker
│   └── LVS ................... real-world tasks, paid for proven results
└── Network asset
    └── IBITIcoin ............. BEP-20 utility token on BNB Smart Chain
```

---

## Core Modules

### 1) Eternal Permission Kernel (EPK)

<img src="img/epk.png" alt="EPK" width="64" align="left" style="margin-right: 16px;">

**EPK v2** — secure on-chain vaults for autonomous AI agents and trading bots: policy-enforced spending
limits, isolated agent sessions, emergency controls and owner-controlled upgrades.

* **One vault per customer** — funds and calls come from the customer's own vault
* **Spending limits and allowlists** — per asset, per time window, only to approved addresses
* **Agent sessions** — short-lived, budgeted access for AI agents
* **Guarded swaps** — DexGuard checks each guarded trade against the Chainlink fair price
* **Emergency stop and guardian veto**; upgrades only by the vault owner

Status: **preview on BSC Testnet and opBNB Testnet, not audited, not on mainnet.**

🔗 **Website:** [vovan1980.github.io/ibiti-epk-core](https://vovan1980.github.io/ibiti-epk-core/) · **Repo:** [ibiti-epk-core](https://github.com/VOVAN1980/ibiti-epk-core) · **SDK:** [`sdk/` in the repo](https://github.com/VOVAN1980/ibiti-epk-core/tree/master/sdk) · **DoraHacks:** [BUIDL #39567](https://dorahacks.io/buidl/39567/)

---

### 2) IBITI Guardian — AI Wallet & CEX Guard

<img src="img/guardian.png" alt="IBITI Guardian" width="64" align="left" style="margin-right: 16px;">

**IBITI Guardian** is an AI-powered mobile crypto wallet with voice commands, policy-protected execution, market radar, and multi-exchange trading.

* 🎙️ **Voice AI** — push-to-talk trading via OpenAI speech-to-text & text-to-speech (gpt-4o-mini-transcribe, gpt-4o-mini-tts)
* 🛡️ **Heuristic Policy Engine** — per-tx limits, daily budgets, price impact guards
* 🧪 **SandboxGuard** — pre-flight RPC simulation for Web3 transactions
* 📊 **CEX Trading** — spot market orders on MEXC, OKX, Gate.io, Binance
* 🔐 **EPK policies** — spend limits and target rules enforced in the app (on-chain EPK: testnet only)
* 🤖 **Autonomous Trading** — policy engine ready, bot activation in Phase 2

Status: working MVP on Android; a public Android build is coming soon.

🔗 **Website:** [vovan1980.github.io/ibiti-guardian](https://vovan1980.github.io/ibiti-guardian/) · **Repo:** [ibiti-guardian](https://github.com/VOVAN1980/ibiti-guardian)

---

### 3) IBITI Guardian for Chrome — Know What You Sign

<img src="img/guardian-chrome.png" alt="IBITI Guardian for Chrome" width="64" align="left" style="margin-right: 16px;">

**IBITI Guardian for Chrome** is a browser extension that holds wallet signature and transaction requests before the wallet sees them, decodes them into plain facts, and shows what the button you pressed said against what the request really does.

* 🛑 **Holds the request** — signatures and transactions wait in Guardian's own window; *Reject* or *Continue*
* 🔍 **Facts from code** — unlimited approvals, permit signatures, NFT approvals, fake tokens, sign-in for another site; the risk level is decided by code
* ✦ **Gemini on your device** — Gemini Nano reads the request on your own computer; Gemini in the cloud only if you allow it, and code checks every AI answer
* 🌐 **Live demo** — try it in your browser, nothing to install

Status: live demo; open source (Apache-2.0).

🔗 **Live demo:** [ibiti-guardian-chrome.web.app](https://ibiti-guardian-chrome.web.app/) · **Repo:** [ibiti-guardian-chrome](https://github.com/VOVAN1980/ibiti-guardian-chrome) · **Video:** [youtu.be/ruqmaL30ZmU](https://youtu.be/ruqmaL30ZmU)

---

### 4) DrainShield

<img src="img/drainshield-lion.png" alt="DrainShield" width="64" align="left" style="margin-right: 16px;">

**DrainShield** is a non-custodial wallet security app for Android: it finds risky token approvals, revokes them with your own wallet signature, and checks any link for phishing before you open it.

* 🔍 **Approval scanner** — finds unlimited and high-risk token approvals, 0–100 risk score
* 🚫 **Wallet-signed revoke** — revoke risky approvals one by one, or in batch with PRO (Panic Mode); every revoke is signed in your own wallet
* 🔗 **Link Shield** — checks any URL for phishing against a community threat database and public phishing feeds
* ⚡ **Alerts (PRO)** — background monitoring of linked wallets, notifications on new risky approvals

🔗 **Website:** [vovan1980.github.io/drainshield](https://vovan1980.github.io/drainshield/) · **Google Play:** [DrainShield](https://play.google.com/store/apps/details?id=app.drainshield.guard) · **Repo:** [drainshield](https://github.com/VOVAN1980/drainshield)

---

### 5) LVS — Living Value System

<img src="img/lvs.png" alt="LVS" width="64" align="left" style="margin-right: 16px;">

**LVS** connects people who need something done nearby with people ready to do it. Results are captured by the LVS camera with time and GPS attached, and disputes are settled by a built-in judge.

* Paid in VU (1 VU = 1 USDT/USDC); BON bonus points to try it without money
* Android, Windows and Telegram; test mode, the source is private

🔗 **Website:** [lvs.network](https://lvs.network/) · **Downloads:** [lvs-core releases](https://github.com/VOVAN1980/lvs-core/releases)

---

### 6) IBITI Network Asset (IBITIcoin)

<img src="img/ibiti-token.png" alt="IBITIcoin" width="64" align="left" style="margin-right: 16px;">

**IBITIcoin (IBITI)** is the IBITI Labs utility token on BNB Smart Chain, with a fixed supply of 100,000,000 IBITI.

* BNB Smart Chain (BEP-20)
* Fixed supply
* Transparent on-chain mechanics
* Designed for ecosystem utility integration

🔗 **Website:** [ibiticoin.com](https://www.ibiticoin.com) · **Repo:** [IBITIcoin](https://github.com/VOVAN1980/IBITIcoin)

---

## Why This Matters

Autonomous execution is becoming the default. But today's on-chain automation still relies on fragile patterns:

* **Infinite token approvals**
* **Uncontrolled agent execution**
* **Irreversible permission models**

IBITI Labs introduces a **permission-first execution architecture** where autonomous systems can operate safely — with enforceable limits, revocation, and transparent rules.

---

## Live Links

| Module | Link |
|--------|------|
| 🌐 **IBITI Labs** (umbrella) | [vovan1980.github.io/IBITILabs](https://vovan1980.github.io/IBITILabs/) |
| 🧠 **EPK** (site & public proof) | [vovan1980.github.io/ibiti-epk-core](https://vovan1980.github.io/ibiti-epk-core/) |
| 🛡️ **IBITI Guardian** (site) | [vovan1980.github.io/ibiti-guardian](https://vovan1980.github.io/ibiti-guardian/) |
| 🧩 **IBITI Guardian for Chrome** (live demo) | [ibiti-guardian-chrome.web.app](https://ibiti-guardian-chrome.web.app/) |
| 🦁 **DrainShield** (landing) | [vovan1980.github.io/drainshield](https://vovan1980.github.io/drainshield/) |
| 📍 **LVS** (site & downloads) | [lvs.network](https://lvs.network/) |
| 💱 **IBITIcoin** | [ibiticoin.com](https://www.ibiticoin.com) |

---

## Technology

* Solidity · Foundry · BNB Smart Chain
* Flutter (Dart) · OpenAI GPT-4o mini (chat, speech-to-text, text-to-speech)
* Chrome extension (Manifest V3) · Gemini Nano · Firebase AI Logic
* Smart account architecture · EIP-712 signing
* Modular validator design

---

## Status

| Module | Status |
|--------|--------|
| **IBITIcoin** | ✅ Live on BNB Chain |
| **EPK** | 🧪 Preview on BSC Testnet and opBNB Testnet, not audited |
| **IBITI Guardian** | 🧪 Working MVP (Android), public build coming soon — voice AI, CEX trading, policy engine |
| **IBITI Guardian for Chrome** | ✅ Live demo, open source (Apache-2.0) |
| **DrainShield** | ✅ Live on Google Play — approval scanner, revoke, Link Shield |
| **LVS** | 🧪 Test mode on Android, Windows and Telegram |
| **Pilot integrations** | 🔄 In progress |

---

## Mission

> Enable autonomous systems to operate on-chain safely.

IBITI Labs aims to become a foundational security & execution layer for agent-driven economies.

---

## Contributing

We're moving toward pilot integrations and infrastructure partnerships.

Technical discussions and collaboration proposals are welcome.

---

## Contact

* **Email:** [info@ibiticoin.com](mailto:info@ibiticoin.com)
* **X (Twitter):** [https://x.com/IBITILabs](https://x.com/IBITILabs)
* **Telegram:** [https://t.me/IBITILabs_official](https://t.me/IBITILabs_official) · IBITIcoin chat: [https://t.me/IBITIcoin_chat](https://t.me/IBITIcoin_chat)

---

## License

This repository (the IBITI Labs website and this README) is released under the MIT License — see [LICENSE](LICENSE). Each product has its own license in its own repository: IBITI EPK and IBITI Guardian are source-available under IBITI Labs licenses (not MIT), IBITI Guardian for Chrome is Apache-2.0.
