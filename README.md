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

---

## Ecosystem Architecture

```
                     IBITI Labs
                         │
        ┌────────────────┼────────────────┐
        │                │                │
     IBITI EPK      IBITI Guardian    IBITIcoin
  Permission Layer   AI Wallet &     Network Asset
                     CEX Guard
        │                │                │
        └──────── Autonomous Applications ────────┘
                         │
                   AI Agents & Bots
                   DeFi Automation
                   On-chain Execution
```

---

## Core Modules

### 1) Eternal Permission Kernel (EPK)

<img src="img/epk.png" alt="EPK" width="64" align="left" style="margin-right: 16px;">

**EPK** is a permission & execution-control layer for smart accounts and autonomous agents.

It replaces unlimited approvals with deterministic policies:

* **Granular spend limits** (per-tx and rolling windows)
* **Target allowlists / selectors** (call only what you permit)
* **Time-bounded permissions** (TTL-based access)
* **Instant revocation** (panic switch / kill permissions)

Designed for **institutional-grade safety** and practical integration.

🔗 **Repo:** [ibiti-epk-core](https://github.com/VOVAN1980/ibiti-epk-core) · **DoraHacks:** [BUIDL #39567](https://dorahacks.io/buidl/39567/)

---

### 2) IBITI Guardian — AI Wallet & CEX Guard

<img src="img/guardian.png" alt="IBITI Guardian" width="64" align="left" style="margin-right: 16px;">

**IBITI Guardian** is an AI-powered crypto wallet with voice commands, policy-protected execution, market radar, and multi-exchange trading.

* 🎙️ **Voice AI (Jarvis)** — hands-free trading via Whisper STT & GPT-4o TTS
* 🛡️ **Heuristic Policy Engine** — per-tx limits, daily budgets, price impact guards
* 🧪 **SandboxGuard** — pre-flight RPC simulation for Web3 transactions
* 📊 **CEX Trading** — spot market orders on MEXC, OKX, Gate.io, Binance
* 🔐 **EPK Integration** — on-chain permission enforcement (testnet live)
* 🤖 **Autonomous Trading** — policy engine ready, bot activation in Phase 2

🔗 **Repo:** [ibiti-guardian](https://github.com/VOVAN1980/ibiti-guardian)

---

### 3) DrainShield

<img src="img/drainshield-lion.png" alt="DrainShield" width="64" align="left" style="margin-right: 16px;">

**DrainShield** is a real-time wallet protection agent that monitors and neutralizes drain attacks, malicious approvals, and phishing contracts before they can execute.

* 🔍 **Real-time monitoring** — watches pending transactions and approvals
* 🚫 **Automatic revocation** — revokes suspicious unlimited approvals
* 📋 **Threat intelligence** — community-sourced blacklist database
* ⚡ **Instant alerts** — push notifications on detected threats

🔗 **Repo:** [drainshield](https://github.com/VOVAN1980/drainshield)

---

### 4) IBITI Network Asset (IBITIcoin)

<img src="img/ibiti-token.png" alt="IBITIcoin" width="64" align="left" style="margin-right: 16px;">

**IBITIcoin (IBITI)** is the native utility asset supporting ecosystem coordination and liquidity alignment.

* BNB Smart Chain (BEP-20)
* Fixed supply
* Transparent on-chain mechanics
* Designed for ecosystem utility integration

🔗 **Website:** [ibiticoin.com](https://www.ibiticoin.com)

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
| 🧠 **EPK v1** (docs) | [vovan1980.github.io/ibiti-epk-core](https://vovan1980.github.io/ibiti-epk-core/) |
| 🛡️ **IBITI Guardian** (repo) | [github.com/VOVAN1980/ibiti-guardian](https://github.com/VOVAN1980/ibiti-guardian) |
| 🦁 **DrainShield** (landing) | [vovan1980.github.io/drainshield](https://vovan1980.github.io/drainshield/) |
| 💱 **IBITIcoin** | [ibiticoin.com](https://www.ibiticoin.com) |

---

## Technology

* Solidity · Foundry · BNB Smart Chain
* Flutter (Dart) · OpenAI GPT-4o · Whisper
* Smart account architecture · EIP-712 signing
* Modular validator design

---

## Status

| Module | Status |
|--------|--------|
| **IBITIcoin** | ✅ Live on BNB Chain |
| **EPK** | ✅ Validated on testnet |
| **IBITI Guardian** | ✅ MVP — voice AI, CEX trading, policy engine |
| **DrainShield** | 🚧 In development |
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
* **X (Twitter):** [https://x.com/ibiticoin](https://x.com/ibiticoin)
* **Telegram:** [https://t.me/IBITIcoin_chat](https://t.me/IBITIcoin_chat)

---

## License

Open-source components are released under their respective repository licenses. See [LICENSE](LICENSE) for details.
