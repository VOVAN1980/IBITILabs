(() => {
  const CONFIG = {
    email: "info@ibiticoin.com",
    subject: "IBITI Labs — Partnership / Integration",
    body: "Hi IBITI Labs,%0A%0A",
    linkedin: "https://www.linkedin.com/company/ibitilabs", // Поставь свой линк
    telegram: "https://t.me/IBITIcoin_chat",
    x: "https://x.com/ibiticoin",
  };

  function buildGmailLink() {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.email)}&su=${encodeURIComponent(CONFIG.subject)}&body=${CONFIG.body}`;
  }

  function buildOutlookLink() {
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(CONFIG.email)}&subject=${encodeURIComponent(CONFIG.subject)}&body=${CONFIG.body}`;
  }

  function buildMailto() {
    return `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.subject)}&body=${encodeURIComponent(decodeURIComponent(CONFIG.body))}`;
  }

  function injectStyles() {
    if (document.getElementById("ibiti-contact-styles")) return;
    const style = document.createElement("style");
    style.id = "ibiti-contact-styles";
    style.innerHTML = `
      #ibitiContactModal { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.4s ease; font-family: 'Inter', sans-serif; }
      #ibitiContactModal.show { opacity: 1; pointer-events: auto; }
      
      .ibm-backdrop { position: absolute; inset: 0; background: rgba(2, 4, 10, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
      
      .ibm-dialog { position: relative; width: 100%; max-width: 700px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 40px; box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8); transform: scale(0.95) translateY(20px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); margin: 20px; }
      #ibitiContactModal.show .ibm-dialog { transform: scale(1) translateY(0); }
      
      .ibm-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; }
      .ibm-title { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 700; color: #fff; margin: 0 0 8px 0; letter-spacing: -0.5px; }
      .ibm-subtitle { color: #94a3b8; font-size: 16px; margin: 0; font-weight: 300; }
      
      .ibm-close { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #fff; font-size: 24px; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; padding: 0; line-height: 1; }
      .ibm-close:hover { background: rgba(255, 255, 255, 0.15); transform: rotate(90deg); color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); }
      
      .ibm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
      @media (max-width: 640px) { .ibm-grid { grid-template-columns: 1fr; } }
      
      .ibm-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; text-decoration: none; transition: all 0.3s ease; position: relative; overflow: hidden; cursor: pointer; }
      .ibm-card:hover { background: rgba(255, 255, 255, 0.05); border-color: rgba(56, 189, 248, 0.3); transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.15); }
      
      .ibm-icon-wrap { width: 48px; height: 48px; border-radius: 12px; background: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: #fff; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.05); }
      .ibm-card:hover .ibm-icon-wrap { background: rgba(56, 189, 248, 0.1); color: #38bdf8; border-color: rgba(56, 189, 248, 0.3); }
      
      .ibm-card-title { color: #f8fafc; font-size: 20px; font-weight: 600; margin: 0 0 6px 0; font-family: 'Space Grotesk', sans-serif; }
      .ibm-card-desc { color: #64748b; font-size: 14px; margin: 0; font-weight: 300; }
      
      /* Email specific styles */
      .ibm-email-card { grid-column: 1 / -1; }
      @media (max-width: 640px) { .ibm-email-card { grid-column: auto; } }
      .ibm-email-address { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #38bdf8; margin-top: 10px; opacity: 0.8; }
      
      .ibm-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
      .ibm-tag { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #cbd5e1; padding: 6px 12px; border-radius: 8px; font-size: 13px; text-decoration: none; transition: all 0.2s; display: flex; align-items: center; gap: 6px; z-index: 2; position: relative; }
      .ibm-tag:hover { background: rgba(255, 255, 255, 0.1); color: #fff; border-color: rgba(255, 255, 255, 0.2); }
      .ibm-tag-primary { background: rgba(56, 189, 248, 0.1); color: #38bdf8; border-color: rgba(56, 189, 248, 0.2); }
      .ibm-tag-primary:hover { background: rgba(56, 189, 248, 0.2); border-color: rgba(56, 189, 248, 0.4); color: #fff; }
      
      .ibm-footer { margin-top: 30px; text-align: center; font-size: 12px; color: #475569; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 20px; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.05em; }
    `;
    document.head.appendChild(style);
  }

  function injectModal() {
    if (document.getElementById("ibitiContactModal")) return;
    
    // Иконки SVG
    const svgTelegram = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    const svgX = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    const svgLinkedIn = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
    const svgEmail = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
    const svgCopy = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

    const root = document.createElement("div");
    root.id = "ibitiContactModal";
    root.innerHTML = `
      <div class="ibm-backdrop" data-close="true"></div>
      <div class="ibm-dialog">
        <div class="ibm-header">
          <div>
            <h2 class="ibm-title">Get in Touch</h2>
            <p class="ibm-subtitle">Select your preferred communication channel.</p>
          </div>
          <button class="ibm-close" data-close="true">&times;</button>
        </div>

        <div class="ibm-grid">
          <a class="ibm-card" href="${CONFIG.telegram}" target="_blank">
            <div class="ibm-icon-wrap">${svgTelegram}</div>
            <h3 class="ibm-card-title">Telegram</h3>
            <p class="ibm-card-desc">Fastest response. Chat directly with the core team.</p>
          </a>

          <a class="ibm-card" href="${CONFIG.x}" target="_blank">
            <div class="ibm-icon-wrap">${svgX}</div>
            <h3 class="ibm-card-title">X (Twitter)</h3>
            <p class="ibm-card-desc">Send us a DM or tag us in your announcements.</p>
          </a>

          <a class="ibm-card" href="${CONFIG.linkedin}" target="_blank">
            <div class="ibm-icon-wrap">${svgLinkedIn}</div>
            <h3 class="ibm-card-title">LinkedIn</h3>
            <p class="ibm-card-desc">Official corporate profile and professional networking.</p>
          </a>

          <div class="ibm-card ibm-email-card" onclick="window.location.href='${buildMailto()}'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <div class="ibm-icon-wrap">${svgEmail}</div>
                <h3 class="ibm-card-title">Email Us</h3>
                <p class="ibm-card-desc">For formal proposals, audits, and partnership requests.</p>
                <div class="ibm-email-address">${CONFIG.email}</div>
              </div>
            </div>
            
            <div class="ibm-tags" onclick="event.stopPropagation()">
              <button class="ibm-tag ibm-tag-primary" id="ibmBtnCopy">
                ${svgCopy} <span id="ibmCopyText">Copy Address</span>
              </button>
              <a href="${buildGmailLink()}" target="_blank" class="ibm-tag">Gmail</a>
              <a href="${buildOutlookLink()}" target="_blank" class="ibm-tag">Outlook</a>
            </div>
          </div>
        </div>

        <div class="ibm-footer">
          SECURITY NOTICE: IBITI LABS ADMINS WILL NEVER DM YOU FIRST.
        </div>
      </div>
    `;
    document.body.appendChild(root);
  }

  function openModal(e) {
    if(e) e.preventDefault();
    injectStyles();
    injectModal();
    const modal = document.getElementById("ibitiContactModal");
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Убираем скролл сайта
  }

  function closeModal() {
    const modal = document.getElementById("ibitiContactModal");
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function wireUp() {
    // Ищем кнопку контакта по классу, ID или href
    // Если на сайте есть <a href="mailto:info@ibiticoin.com">, мы перехватим клик по ней
    const buttons = document.querySelectorAll('a[href^="mailto:"], #contactBtn, a[href="#partner"]');
    
    buttons.forEach(btn => {
      // Исключаем кнопки, которые не должны открывать модалку
      if(btn.id !== 'partner') {
        btn.addEventListener("click", openModal);
      }
    });

    // Обработка кликов внутри модалки
    document.addEventListener("click", async (e) => {
      const modal = document.getElementById("ibitiContactModal");
      if (!modal || !modal.classList.contains("show")) return;

      const target = e.target;

      // Закрытие по крестику или фону
      if (target.closest('[data-close="true"]')) {
        closeModal();
      }

      // Копирование Email
      const copyBtn = target.closest('#ibmBtnCopy');
      if (copyBtn) {
        try {
          await navigator.clipboard.writeText(CONFIG.email);
          const textSpan = document.getElementById("ibmCopyText");
          if (textSpan) {
            textSpan.innerText = "Copied!";
            textSpan.style.color = "#10b981"; // Зеленый цвет успеха
            setTimeout(() => {
              textSpan.innerText = "Copy Address";
              textSpan.style.color = "";
            }, 2000);
          }
        } catch (_) {}
      }
    });

    // Закрытие по ESC
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("ibitiContactModal");
      if (modal && modal.classList.contains("show") && e.key === "Escape") {
        closeModal();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireUp);
  } else {
    wireUp();
  }
})();
