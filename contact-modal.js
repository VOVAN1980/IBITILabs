(() => {
  const CONFIG = {
    email: "info@ibiticoin.com",
    subject: "IBITI Labs — Partnership / Integration",
    body: "Hi IBITI Labs,%0A%0A",
    linkedin: "https://www.linkedin.com/company/ibitilabs",
    telegram: "https://t.me/IBITIcoin_chat",
    x: "https://x.com/ibiticoin",
  };

  const enc = encodeURIComponent;

  const buildGmailLink = () =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONFIG.email)}&su=${enc(CONFIG.subject)}&body=${CONFIG.body}`;

  const buildOutlookLink = () =>
    `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(CONFIG.email)}&subject=${enc(CONFIG.subject)}&body=${CONFIG.body}`;

  const buildMailto = () =>
    `mailto:${CONFIG.email}?subject=${enc(CONFIG.subject)}&body=${enc(decodeURIComponent(CONFIG.body))}`;

  function injectStyles() {
    if (document.getElementById("ibiti-contact-styles")) return;
    const style = document.createElement("style");
    style.id = "ibiti-contact-styles";
    style.textContent = `
      #ibitiContactModal {
        position: fixed; inset: 0; z-index: 999999;
        display: grid; place-items: center;
        opacity: 0; pointer-events: none;
        transition: opacity .35s ease;
        font-family: 'Inter', sans-serif;
      }
      #ibitiContactModal.show { opacity: 1; pointer-events: auto; }

      .ibm-backdrop {
        position: absolute; inset: 0;
        background: rgba(1,3,8,0.72);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .ibm-shell {
        position: relative;
        width: min(920px, calc(100vw - 32px));
        border-radius: 28px;
        padding: 1px; /* градиентная рамка */
        background: linear-gradient(135deg,
          rgba(56,189,248,0.35),
          rgba(168,85,247,0.28),
          rgba(245,158,11,0.20),
          rgba(255,255,255,0.08)
        );
        box-shadow: 0 40px 140px rgba(0,0,0,0.85);
        transform: translateY(18px) scale(.985);
        transition: transform .35s cubic-bezier(.16,1,.3,1);
      }
      #ibitiContactModal.show .ibm-shell { transform: translateY(0) scale(1); }

      .ibm-dialog {
        border-radius: 27px;
        background: rgba(8,12,22,0.86);
        border: 1px solid rgba(255,255,255,0.10);
        overflow: hidden;
      }

      .ibm-header {
        display: flex; justify-content: space-between; align-items: flex-start;
        gap: 18px;
        padding: 28px 28px 18px 28px;
      }
      .ibm-kicker {
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        letter-spacing: .26em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.45);
      }
      .ibm-title {
        margin: 10px 0 8px 0;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 34px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: #fff;
      }
      .ibm-subtitle {
        margin: 0;
        color: rgba(255,255,255,0.55);
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
      }

      .ibm-close {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        color: rgba(255,255,255,0.8);
        width: 42px; height: 42px;
        border-radius: 999px;
        display: grid; place-items: center;
        font-size: 22px;
        cursor: pointer;
        transition: transform .2s, background .2s, border-color .2s, color .2s;
        flex: 0 0 auto;
      }
      .ibm-close:hover {
        transform: rotate(90deg);
        background: rgba(255,255,255,0.10);
        border-color: rgba(56,189,248,0.35);
        color: #38bdf8;
      }

      .ibm-body { padding: 0 28px 26px 28px; }

      .ibm-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      @media (max-width: 820px) { .ibm-grid { grid-template-columns: 1fr; } }

      .ibm-card {
        position: relative;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 18px;
        padding: 18px 18px;
        text-decoration: none;
        display: flex;
        gap: 14px;
        transition: transform .35s cubic-bezier(.16,1,.3,1), border-color .35s, background .35s, box-shadow .35s;
        overflow: hidden;
      }
      .ibm-card::after{
        content:"";
        position:absolute; inset:-2px;
        background: radial-gradient(600px circle at var(--mx,50%) var(--my,50%),
          rgba(255,255,255,0.12), transparent 45%);
        opacity: 0;
        transition: opacity .3s;
        pointer-events:none;
      }
      .ibm-card:hover::after { opacity: 1; }
      .ibm-card:hover{
        transform: translateY(-6px);
        background: rgba(255,255,255,0.05);
        border-color: rgba(255,255,255,0.16);
        box-shadow: 0 18px 50px rgba(0,0,0,0.55);
      }

      .ibm-ico {
        width: 44px; height: 44px;
        border-radius: 14px;
        display: grid; place-items: center;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        color: rgba(255,255,255,0.85);
        flex: 0 0 auto;
        transition: color .3s, border-color .3s, background .3s;
      }
      .ibm-card:hover .ibm-ico {
        color: #38bdf8;
        border-color: rgba(56,189,248,0.28);
        background: rgba(56,189,248,0.08);
      }

      .ibm-ct { min-width: 0; }
      .ibm-card-title {
        margin: 0;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: rgba(255,255,255,0.92);
      }
      .ibm-card-desc {
        margin: 6px 0 0 0;
        font-size: 14px;
        color: rgba(255,255,255,0.55);
        line-height: 1.55;
      }

      .ibm-email { grid-column: 1 / -1; }
      @media (max-width: 820px) { .ibm-email { grid-column: auto; } }

      .ibm-email-top {
        display:flex; align-items:flex-start; justify-content:space-between; gap:12px;
        margin-bottom: 10px;
      }
      .ibm-email-addr {
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        letter-spacing: .14em;
        color: rgba(56,189,248,0.9);
        opacity: .9;
        white-space: nowrap;
      }

      .ibm-tags { display:flex; flex-wrap:wrap; gap:10px; margin-top: 12px; }
      .ibm-tag {
        border-radius: 999px;
        padding: 10px 12px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        color: rgba(255,255,255,0.86);
        font-weight: 700;
        font-size: 13px;
        text-decoration: none;
        cursor: pointer;
        transition: transform .2s, border-color .2s, background .2s;
        display:flex; align-items:center; gap:8px;
      }
      .ibm-tag:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.10); }
      .ibm-tag.primary { border-color: rgba(56,189,248,0.30); background: rgba(56,189,248,0.10); color:#38bdf8; }
      .ibm-tag.primary:hover { border-color: rgba(56,189,248,0.45); background: rgba(56,189,248,0.16); color: #fff; }

      .ibm-footer {
        padding: 14px 28px 18px 28px;
        border-top: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.45);
      }
    `;
    document.head.appendChild(style);
  }

  function svg(name) {
    const common = `width="22" height="22" viewBox="0 0 24 24"`;
    if (name === "tg")
      return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    if (name === "x")
      return `<svg ${common} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    if (name === "in")
      return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
    if (name === "mail")
      return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
    if (name === "copy")
      return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    return "";
  }

  function injectModal() {
    if (document.getElementById("ibitiContactModal")) return;

    const root = document.createElement("div");
    root.id = "ibitiContactModal";
    root.innerHTML = `
      <div class="ibm-backdrop" data-close="1"></div>
      <div class="ibm-shell">
        <div class="ibm-dialog">
          <div class="ibm-header">
            <div>
              <div class="ibm-kicker">CONTACT</div>
              <h2 class="ibm-title">Get in touch</h2>
              <p class="ibm-subtitle">Pick a channel. Fastest: Telegram / X. Formal: Email / LinkedIn.</p>
            </div>
            <button class="ibm-close" type="button" data-close="1" aria-label="Close">×</button>
          </div>

          <div class="ibm-body">
            <div class="ibm-grid">
              <a class="ibm-card" href="${CONFIG.telegram}" target="_blank" rel="noopener">
                <div class="ibm-ico">${svg("tg")}</div>
                <div class="ibm-ct">
                  <div class="ibm-card-title">Telegram</div>
                  <div class="ibm-card-desc">Fastest response. Chat directly.</div>
                </div>
              </a>

              <a class="ibm-card" href="${CONFIG.x}" target="_blank" rel="noopener">
                <div class="ibm-ico">${svg("x")}</div>
                <div class="ibm-ct">
                  <div class="ibm-card-title">X (Twitter)</div>
                  <div class="ibm-card-desc">DM / mention for quick routing.</div>
                </div>
              </a>

              <a class="ibm-card" href="${CONFIG.linkedin}" target="_blank" rel="noopener">
                <div class="ibm-ico">${svg("in")}</div>
                <div class="ibm-ct">
                  <div class="ibm-card-title">LinkedIn</div>
                  <div class="ibm-card-desc">Official profile / partnerships.</div>
                </div>
              </a>

              <div class="ibm-card ibm-email" role="group" aria-label="Email options">
                <div class="ibm-ico">${svg("mail")}</div>
                <div class="ibm-ct" style="width:100%;">
                  <div class="ibm-email-top">
                    <div>
                      <div class="ibm-card-title">Email</div>
                      <div class="ibm-card-desc">Formal proposals, audits, integrations.</div>
                    </div>
                    <div class="ibm-email-addr">${CONFIG.email}</div>
                  </div>

                  <div class="ibm-tags">
                    <button class="ibm-tag primary" type="button" id="ibmCopyBtn">${svg("copy")} Copy</button>
                    <a class="ibm-tag" href="${buildGmailLink()}" target="_blank" rel="noopener">Gmail</a>
                    <a class="ibm-tag" href="${buildOutlookLink()}" target="_blank" rel="noopener">Outlook</a>
                    <a class="ibm-tag" href="${buildMailto()}">Mail app</a>
                    <span id="ibmCopied" style="display:none; align-self:center; font-family:'JetBrains Mono', monospace; letter-spacing:.18em; color:rgba(16,185,129,.95); font-size:12px; text-transform:uppercase;">COPIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ibm-footer">
            SECURITY: ADMINS NEVER DM FIRST. USE OFFICIAL LINKS ABOVE.
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);

    // фонарик-эффект по мыши
    root.querySelectorAll(".ibm-card").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  function openModal() {
    injectStyles();
    injectModal();
    const m = document.getElementById("ibitiContactModal");
    m.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const m = document.getElementById("ibitiContactModal");
    if (!m) return;
    m.classList.remove("show");
    document.body.style.overflow = "";
  }

  function wireUp() {
    const btn = document.getElementById("contactBtn");
    if (btn) btn.addEventListener("click", (e) => { e.preventDefault(); openModal(); });

    document.addEventListener("click", async (e) => {
      const m = document.getElementById("ibitiContactModal");
      if (!m || !m.classList.contains("show")) return;

      if (e.target.closest('[data-close="1"]')) closeModal();

      const copy = e.target.closest("#ibmCopyBtn");
      if (copy) {
        try {
          await navigator.clipboard.writeText(CONFIG.email);
          const ok = document.getElementById("ibmCopied");
          if (ok) {
            ok.style.display = "inline";
            setTimeout(() => (ok.style.display = "none"), 1200);
          }
        } catch (_) {}
      }
    });

    window.addEventListener("keydown", (e) => {
      const m = document.getElementById("ibitiContactModal");
      if (m && m.classList.contains("show") && e.key === "Escape") closeModal();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wireUp);
  else wireUp();
})();
