(() => {
  const CONFIG = {
    email: "info@ibiticoin.com",
    subject: "IBITI Labs — Partnership / Integration",
    body: "Hi IBITI Labs,%0A%0A",
    // Поставь сюда свой правильный LinkedIn URL:
    linkedin: "https://www.linkedin.com/",
    telegram: "https://t.me/IBITIcoin_chat",
    x: "https://x.com/ibiticoin",
  };

  function buildGmailLink() {
    const to = encodeURIComponent(CONFIG.email);
    const su = encodeURIComponent(CONFIG.subject);
    // body already has %0A, keep simple
    const body = CONFIG.body;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
  }

  function buildOutlookLink() {
    const to = encodeURIComponent(CONFIG.email);
    const subject = encodeURIComponent(CONFIG.subject);
    const body = CONFIG.body;
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
  }

  function buildYahooLink() {
    const to = encodeURIComponent(CONFIG.email);
    const subject = encodeURIComponent(CONFIG.subject);
    const body = CONFIG.body;
    return `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`;
  }

  function buildProtonLink() {
    // Proton doesn’t have a simple universal compose URL everywhere; keep as generic entry point
    return `https://mail.proton.me/`;
  }

  function buildMailto() {
    const to = CONFIG.email;
    const subject = encodeURIComponent(CONFIG.subject);
    const body = decodeURIComponent(CONFIG.body); // get real newlines
    return `mailto:${to}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  function injectModal() {
    if (document.getElementById("contactModalRoot")) return;

    const root = document.createElement("div");
    root.id = "contactModalRoot";
    root.innerHTML = `
      <div class="cm-backdrop" data-cm-close="1"></div>
      <div class="cm-wrap" role="dialog" aria-modal="true" aria-label="Contact">
        <div class="cm-dialog">
          <div class="cm-inner">
            <div class="cm-top">
              <div>
                <div class="cm-kicker">CONTACT</div>
                <div class="cm-title">Choose a channel</div>
                <div class="cm-sub">Fastest: Telegram / X. Formal: Email / LinkedIn.</div>
              </div>
              <button class="cm-close" type="button" id="cmClose" aria-label="Close">×</button>
            </div>

            <div class="cm-grid">
              <a class="cm-tile" href="${CONFIG.telegram}" target="_blank" rel="noopener noreferrer">
                <div class="t">Telegram</div>
                <div class="d">Chat / message us</div>
              </a>

              <a class="cm-tile" href="${CONFIG.x}" target="_blank" rel="noopener noreferrer">
                <div class="t">X (Twitter)</div>
                <div class="d">DM / mention</div>
              </a>

              <a class="cm-tile" href="${CONFIG.linkedin}" target="_blank" rel="noopener noreferrer">
                <div class="t">LinkedIn</div>
                <div class="d">Official profile/page</div>
              </a>

              <div class="cm-tile cm-emailbox">
                <div class="t" style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
                  <span>Email</span>
                  <span style="opacity:.55;font-size:12px;font-family: 'JetBrains Mono', monospace; letter-spacing:.18em;">${CONFIG.email}</span>
                </div>
                <div class="d">Open web-mail or copy address</div>

                <div style="display:flex;flex-direction:column;gap:10px;">
                  <a class="cm-btn" href="${buildGmailLink()}" target="_blank" rel="noopener noreferrer">Gmail (web)</a>
                  <a class="cm-btn" href="${buildOutlookLink()}" target="_blank" rel="noopener noreferrer">Outlook (web)</a>
                  <a class="cm-btn" href="${buildYahooLink()}" target="_blank" rel="noopener noreferrer">Yahoo (web)</a>
                  <a class="cm-btn" href="${buildProtonLink()}" target="_blank" rel="noopener noreferrer">Proton (open inbox)</a>
                  <a class="cm-btn" href="${buildMailto()}">Default mail app (mailto)</a>
                  <button class="cm-btn" type="button" id="cmCopyEmail">Copy email</button>
                  <div class="cm-toast" id="cmToast">COPIED.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="cm-foot">
            Security: admins never DM first. Use official links above.
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);
  }

  function openModal() {
    injectModal();
    const root = document.getElementById("contactModalRoot");
    root.classList.add("show");
    document.body.style.overflow = "hidden";
    // focus close for accessibility
    const closeBtn = document.getElementById("cmClose");
    closeBtn && closeBtn.focus();
  }

  function closeModal() {
    const root = document.getElementById("contactModalRoot");
    if (!root) return;
    root.classList.remove("show");
    document.body.style.overflow = "";
  }

  function wireUp() {
    const btn = document.getElementById("contactBtn");
    if (btn) btn.addEventListener("click", openModal);

    // Optional: сделать так, чтобы Join Network тоже открывал модалку
    const join = document.querySelector('a[href="#partner"]');
    // НЕ трогаю по умолчанию, чтобы не менять поведение. Если надо — скажешь.

    document.addEventListener("click", async (e) => {
      const root = document.getElementById("contactModalRoot");
      if (!root || !root.classList.contains("show")) return;

      const t = e.target;

      if (t && t.id === "cmClose") closeModal();
      if (t && t.dataset && t.dataset.cmClose === "1") closeModal();

      if (t && t.id === "cmCopyEmail") {
        try {
          await navigator.clipboard.writeText(CONFIG.email);
          const toast = document.getElementById("cmToast");
          if (toast) {
            toast.style.display = "block";
            setTimeout(() => (toast.style.display = "none"), 1200);
          }
        } catch (_) {}
      }
    });

    window.addEventListener("keydown", (e) => {
      const root = document.getElementById("contactModalRoot");
      if (!root || !root.classList.contains("show")) return;
      if (e.key === "Escape") closeModal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireUp);
  } else {
    wireUp();
  }
})();
