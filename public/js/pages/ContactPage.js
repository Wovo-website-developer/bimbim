import { Icons } from '../components/Icons.js';

export function createContactPage(store) {
  const page = document.createElement('div');
  page.className = 'w-full min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-2xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">WOVO CONTACT // START PROJECT</span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        ${store.t('contact_title')}
      </h1>
      <p class="text-base text-neutral-600 dark:text-neutral-400 light:text-neutral-600">
        ${store.t('contact_subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <!-- FORM COLUMN -->
      <div class="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
        <form id="wovo-contact-form" class="space-y-6" novalidate>
          <!-- Alert Banner -->
          <div id="form-alert" class="hidden p-4 rounded-2xl text-xs font-mono"></div>

          <!-- Name Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono text-neutral-400 uppercase tracking-wider">${store.t('contact_name')} *</label>
            <input type="text" id="input-name" placeholder="John Doe" class="w-full p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-sm text-neutral-900 dark:text-white light:text-black outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono text-neutral-400 uppercase tracking-wider">${store.t('contact_email')} *</label>
            <input type="email" id="input-email" placeholder="your.email@gmail.com" class="w-full p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-sm text-neutral-900 dark:text-white light:text-black outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <!-- Message Field -->
          <div class="space-y-2">
            <label class="block text-xs font-mono text-neutral-400 uppercase tracking-wider">${store.t('contact_message')} *</label>
            <textarea id="input-message" rows="5" placeholder="Describe your website project, features, idea, or goals..." class="w-full p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-sm text-neutral-900 dark:text-white light:text-black outline-none focus:border-cyan-400 transition-colors custom-scrollbar"></textarea>
          </div>

          <button type="submit" class="w-full py-4 rounded-full bg-gradient-to-r from-neutral-100 to-white text-black font-extrabold text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2">
            <span>${store.t('contact_send')}</span>
            ${Icons.send("w-4 h-4")}
          </button>
        </form>
      </div>

      <!-- DIRECT CHANNELS COLUMN -->
      <div class="lg:col-span-5 space-y-6">
        <div class="p-8 rounded-3xl bg-neutral-950 border border-white/15 space-y-6 shadow-2xl">
          <h3 class="text-xl font-bold text-white">${store.t('contact_direct_title')}</h3>
          
          <div class="space-y-4 font-mono text-xs">
            <!-- Instagram -->
            <a href="https://www.instagram.com/wovo_official/" target="_blank" rel="noopener noreferrer" class="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  ${Icons.instagram("w-5 h-5")}
                </div>
                <div>
                  <div class="font-bold text-white">Instagram</div>
                  <div class="text-neutral-400">@wovo_official</div>
                </div>
              </div>
              ${Icons.externalLink("w-4 h-4 text-neutral-500 group-hover:text-white transition-colors")}
            </a>

            <!-- Gmail Direct -->
            <a href="mailto:wovo.website.developer@gmail.com" class="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  ${Icons.gmail("w-5 h-5")}
                </div>
                <div class="overflow-hidden">
                  <div class="font-bold text-white">Gmail Direct</div>
                  <div class="text-neutral-400 truncate text-[11px]">wovo.website.developer@gmail.com</div>
                </div>
              </div>
              ${Icons.externalLink("w-4 h-4 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0")}
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

      // Construct mailto URL
      const targetEmail = 'wovo.website.developer@gmail.com';
      const subject = encodeURIComponent(`WOVO Project Request - ${nameVal}`);
      const body = encodeURIComponent(
        `Name: ${nameVal}\nEmail: ${emailVal}\n\nProject Information:\n${msgVal}`
      );

      setTimeout(() => {
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      }, 500);
    };

    function showAlert(msg, type) {
      alertBox.textContent = msg;
      if (type === 'error') {
        alertBox.className = 'p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 block text-xs font-mono';
      } else {
        alertBox.className = 'p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 block text-xs font-mono';
      }
    }
  }, 0);

  return page;
}
