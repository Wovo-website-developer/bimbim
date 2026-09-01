import { LANGUAGES } from '../translations.js';
import { Icons } from './Icons.js';

export function createSettingsDrawer(store) {
  const overlay = document.createElement('div');
  overlay.className = `fixed inset-0 z-[90] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
    store.settingsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`;

  const drawer = document.createElement('div');
  drawer.className = `fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-900 dark:bg-neutral-950 light:bg-neutral-50 border-l border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl z-[95] p-6 lg:p-8 flex flex-col justify-between transition-transform duration-500 ease-out text-white dark:text-white light:text-black ${
    store.settingsOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  function render() {
    overlay.className = `fixed inset-0 z-[90] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
      store.settingsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;
    drawer.className = `fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-900 dark:bg-neutral-950 light:bg-neutral-50 border-l border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl z-[95] p-6 lg:p-8 flex flex-col justify-between transition-transform duration-500 ease-out text-white dark:text-white light:text-black ${
      store.settingsOpen ? 'translate-x-0' : 'translate-x-full'
    }`;

    drawer.innerHTML = `
      <div>
        <!-- Drawer Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10 dark:border-white/10 light:border-black/10 mb-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl bg-white/10 text-cyan-400">
              ${Icons.settings("w-5 h-5 text-cyan-400")}
            </div>
            <h3 class="font-bold text-lg tracking-tight">${store.t('settings_title')}</h3>
          </div>
          <button id="close-settings-btn" class="p-2 rounded-full hover:bg-white/10 transition-colors">
            ${Icons.close("w-5 h-5")}
          </button>
        </div>

        <!-- Section 1: Theme Switcher -->
        <div class="mb-6">
          <label class="block text-xs font-mono text-neutral-400 mb-3 uppercase tracking-wider">${store.t('settings_theme')}</label>
          <div class="grid grid-cols-2 gap-3">
            <button id="set-theme-dark" class="p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              store.theme === 'dark'
                ? 'bg-neutral-800 border-cyan-400 text-white shadow-lg'
                : 'bg-white/5 border-white/10 dark:border-white/10 light:border-black/10 text-neutral-400 hover:bg-white/10'
            }">
              ${Icons.moon("w-4 h-4 text-cyan-400")}
              <span>${store.t('onboard_dark')}</span>
            </button>
            <button id="set-theme-light" class="p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              store.theme === 'light'
                ? 'bg-white border-cyan-400 text-black shadow-lg'
                : 'bg-white/5 border-white/10 dark:border-white/10 light:border-black/10 text-neutral-400 hover:bg-white/10'
            }">
              ${Icons.sun("w-4 h-4 text-amber-400")}
              <span>${store.t('onboard_light')}</span>
            </button>
          </div>
        </div>

        <!-- Section 2: Language Selector -->
        <div class="mb-6">
          <label class="block text-xs font-mono text-neutral-400 mb-3 uppercase tracking-wider">${store.t('settings_language')}</label>
          <div class="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
            ${LANGUAGES.map(l => `
              <button data-lang-code="${l.code}" class="drawer-lang-btn p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-2.5 ${
                store.lang === l.code
                  ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                  : 'bg-white/5 border-white/10 dark:border-white/10 light:border-black/10 hover:bg-white/10 text-neutral-400'
              }">
                ${Icons.flag(l.code, "w-5 h-3.5 flex-shrink-0")}
                <span class="truncate">${l.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Section 3: Region Selector -->
        <div class="mb-6">
          <label class="block text-xs font-mono text-neutral-400 mb-3 uppercase tracking-wider">${store.t('settings_region')}</label>
          <select id="region-select" class="w-full p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-medium text-white dark:text-white light:text-black outline-none focus:border-cyan-400">
            <option value="Global" ${store.region === 'Global' ? 'selected' : ''}>Global / Worldwide</option>
            <option value="Europe" ${store.region === 'Europe' ? 'selected' : ''}>Europe</option>
            <option value="Americas" ${store.region === 'Americas' ? 'selected' : ''}>Americas</option>
            <option value="AsiaPacific" ${store.region === 'AsiaPacific' ? 'selected' : ''}>Asia Pacific</option>
            <option value="MiddleEast" ${store.region === 'MiddleEast' ? 'selected' : ''}>Middle East</option>
            <option value="Africa" ${store.region === 'Africa' ? 'selected' : ''}>Africa</option>
          </select>
        </div>
      </div>

      <!-- Drawer Footer -->
      <div class="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 flex flex-col gap-3">
        <button id="reset-onboarding-btn" class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 transition-colors flex items-center justify-center gap-2">
          ${Icons.reset("w-4 h-4 text-cyan-400")}
          <span>${store.t('settings_reset_onboarding')}</span>
        </button>
      </div>
    `;

    setTimeout(() => {
      const closeBtn = drawer.querySelector('#close-settings-btn');
      if (closeBtn) closeBtn.onclick = () => store.toggleSettings(false);

      const darkBtn = drawer.querySelector('#set-theme-dark');
      if (darkBtn) darkBtn.onclick = () => store.setTheme('dark');

      const lightBtn = drawer.querySelector('#set-theme-light');
      if (lightBtn) lightBtn.onclick = () => store.setTheme('light');

      drawer.querySelectorAll('.drawer-lang-btn').forEach(btn => {
        btn.onclick = () => store.setLanguage(btn.dataset.langCode);
      });

      const regSelect = drawer.querySelector('#region-select');
      if (regSelect) {
        regSelect.onchange = (e) => store.setRegion(e.target.value);
      }

      const resetBtn = drawer.querySelector('#reset-onboarding-btn');
      if (resetBtn) {
        resetBtn.onclick = () => {
          store.toggleSettings(false);
          store.resetOnboarding();
          location.reload();
        };
      }
    }, 0);
  }

  overlay.onclick = () => store.toggleSettings(false);

  render();
  store.subscribe(() => render());

  const wrapper = document.createDocumentFragment();
  wrapper.appendChild(overlay);
  wrapper.appendChild(drawer);

  return wrapper;
}
