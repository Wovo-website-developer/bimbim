import { Icons } from '../components/Icons.js';

export function createContactPage(store) {
  const page = document.createElement('div');
  const isDark = store.theme === 'dark';
  page.className = 'w-full min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-2xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
        WOVO CONTACT // START PROJECT
      </span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
        ${store.t('contact_title')}
      </h1>
      <p class="text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-700'}">
        ${store.t('contact_subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- FORM COLUMN (Dark High-Contrast Card) -->
      <div class="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl space-y-6">
        <form id="wovo-contact-form" class="space-y-5" novalidate>
          <!-- Alert Banner -->
          <div id="form-alert" class="hidden p-4 rounded-2xl text-xs font-mono"></div>

          <!-- Name Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              ${store.t('contact_name')} *
            </label>
            <input type="text" id="input-name" placeholder="John Doe" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              ${store.t('contact_email')} *
            </label>
            <input type="email" id="input-email" placeholder="your.email@gmail.com" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <!-- Region Pill -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>PROJECT REGION:</span>
              <span class="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">${store.region}</span>
            </div>
          </div>

          <!-- Message Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              ${store.t('contact_message')} *
            </label>
            <textarea id="input-message" rows="4" placeholder="Describe your website project, requirements, idea, or timeline..." class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm outline-none focus:border-cyan-400 transition-colors custom-scrollbar"></textarea>
          </div>

          <button type="submit" class="w-full py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-widest hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-cyan-400/20 flex items-center justify-center gap-2 border border-cyan-300">
            <span>${store.t('contact_send')}</span>
            ${Icons.send("w-4 h-4")}
          </button>
        </form>
      </div>

      <!-- DIRECT CHANNELS COLUMN (Dark High-Contrast Card) -->
      <div class="lg:col-span-5 space-y-6">
        <div class="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-white space-y-5 shadow-2xl">
          <h3 class="text-xl font-bold text-white">
            ${store.t('contact_direct_title')}
          </h3>
          
          <div class="space-y-3 font-mono text-xs">
            <!-- TikTok Direct Link -->
            <a href="https://www.tiktok.com/@wovo.website.developing" target="_blank" rel="noopener noreferrer" class="p-4 rounded-2xl bg-neutral-950/80 hover:bg-neutral-950 border border-white/10 hover:border-cyan-500/40 text-neutral-300 hover:text-white transition-all flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  ${Icons.tiktok("w-5 h-5")}
                </div>
                <div>
                  <div class="font-bold text-white">TikTok Direct</div>
                  <div class="text-[11px] text-neutral-400">@wovo.website.developing</div>
                </div>
              </div>
              ${Icons.externalLink("w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors")}
            </a>

            <!-- Instagram Direct Link -->
            <a href="https://www.instagram.com/wovo_official/" target="_blank" rel="noopener noreferrer" class="p-4 rounded-2xl bg-neutral-950/80 hover:bg-neutral-950 border border-white/10 hover:border-cyan-500/40 text-neutral-300 hover:text-white transition-all flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  ${Icons.instagram("w-5 h-5")}
                </div>
                <div>
                  <div class="font-bold text-white">Instagram</div>
                  <div class="text-[11px] text-neutral-400">@wovo_official</div>
                </div>
              </div>
              ${Icons.externalLink("w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors")}
            </a>

            <!-- Gmail Direct Link -->
            <a href="mailto:wovo.website.developer@gmail.com" class="p-4 rounded-2xl bg-neutral-950/80 hover:bg-neutral-950 border border-white/10 hover:border-cyan-500/40 text-neutral-300 hover:text-white transition-all flex items-center justify-between group">
              <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  ${Icons.gmail("w-5 h-5")}
                </div>
                <div class="overflow-hidden">
                  <div class="font-bold text-white">Gmail Direct</div>
                  <div class="text-[11px] truncate text-neutral-400">wovo.website.developer@gmail.com</div>
                </div>
              </div>
              ${Icons.externalLink("w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors flex-shrink-0")}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const form = page.querySelector('#wovo-contact-form');
    const alertBox = page.querySelector('#form-alert');

    form.onsubmit = (e) => {
      e.preventDefault();

      const nameVal = page.querySelector('#input-name').value.trim();
      const emailVal = page.querySelector('#input-email').value.trim();
      const msgVal = page.querySelector('#input-message').value.trim();

      alertBox.className = 'hidden';

      // Validation
      if (!nameVal) {
        showAlert(store.t('contact_err_name'), 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showAlert(store.t('contact_err_email'), 'error');
        return;
      }

      if (!msgVal) {
        showAlert(store.t('contact_err_msg'), 'error');
        return;
      }

      showAlert(store.t('contact_success'), 'success');

      // Construct Region-Aware mailto URL
      const mailtoUrl = store.getContactMailtoUrl({
        name: nameVal,
        email: emailVal,
        message: msgVal
      });

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    };

    function showAlert(msg, type) {
      alertBox.textContent = msg;
      if (type === 'error') {
        alertBox.className = 'p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 block text-xs font-mono';
      } else {
        alertBox.className = 'p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 block text-xs font-mono';
      }
    }
  }, 0);

  return page;
}
