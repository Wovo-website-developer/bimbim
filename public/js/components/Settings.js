import { LANGUAGES } from '../translations.js';
import { Icons } from './Icons.js';

export function createSettingsDrawer(store) {
  const overlay = document.createElement('div');
  const drawer = document.createElement('div');

  const REGIONS = [
    { id: 'Global', label: 'Global / Worldwide' },
    { id: 'Europe', label: 'Europe' },
    { id: 'Americas', label: 'Americas' },
    { id: 'AsiaPacific', label: 'Asia Pacific' },
    { id: 'MiddleEast', label: 'Middle East' },
    { id: 'Africa', label: 'Africa' }
  ];

  function render() {
    overlay.className = `fixed inset-0 z-[90] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
      store.settingsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;

    drawer.className = `fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-900 border-l border-white/15 text-white shadow-2xl z-[95] p-6 lg:p-8 flex flex-col justify-between transition-transform duration-300 ease-out overflow-y-auto custom-scrollbar ${
      store.settingsOpen ? 'translate-x-0' : 'translate-x-full'
    }`;

    drawer.innerHTML = `
      <div>
        <!-- Drawer Header -->
        <div class="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              ${Icons.settings("w-5 h-5")}
            </div>
            <h3 class="font-bold text-lg tracking-tight text-white">${store.t('settings_title')}</h3>
          </div>
          <button id="close-settings-btn" class="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
            ${Icons.close("w-5 h-5")}
          </button>
        </div>

        <!-- Section 1: Theme Switcher -->
        <div class="mb-6">
          <label class="block text-xs font-mono mb-3 uppercase tracking-wider text-neutral-400">${store.t('settings_theme')}</label>
          <div class="grid grid-cols-2 gap-3">
            <button id="set-theme-dark" class="p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              store.theme === 'dark'
                ? 'bg-neutral-800 border-cyan-400 text-cyan-400 shadow-lg ring-1 ring-cyan-400'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
            }">
              ${Icons.moon("w-4 h-4 text-cyan-400")}
              <span>${store.t('onboard_dark')}</span>
            </button>
            <button id="set-theme-light" class="p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              store.theme === 'light'
                ? 'bg-white border-cyan-400 text-slate-900 shadow-lg ring-1 ring-cyan-400 font-bold'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
            }">
              ${Icons.sun("w-4 h-4 text-amber-400")}
              <span>${store.t('onboard_light')}</span>
            </button>
          </div>
        </div>

        <!-- Section 2: 9 Language Selector -->
        <div class="mb-6">
          <label class="block text-xs font-mono mb-3 uppercase tracking-wider text-neutral-400">${store.t('settings_language')}</label>
          <div class="grid grid-cols-3 gap-2">
            ${LANGUAGES.map(l => `
              <button data-lang-code="${l.code}" class="drawer-lang-btn p-2.5 rounded-xl border text-center text-xs font-medium transition-all flex flex-col items-center justify-center gap-1.5 ${
                store.lang === l.code
                  ? 'bg-cyan-500/25 border-cyan-400 text-white font-bold ring-1 ring-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300'
              }">
                ${Icons.flag(l.code, "w-6 h-4")}
                <span class="truncate text-[11px]">${l.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Section 3: Interactive Region UI Option Buttons -->
        <div class="mb-6">
          <label class="block text-xs font-mono mb-3 uppercase tracking-wider text-neutral-400">${store.t('settings_region')}</label>
          <div class="grid grid-cols-2 gap-2.5">
            ${REGIONS.map(r => `
              <button data-region="${r.id}" class="drawer-region-btn p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                store.region === r.id
                  ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 font-bold ring-1 ring-cyan-400 shadow-sm'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300'
              }">
                <div class="flex items-center gap-2 truncate">
                  ${Icons.region(r.id, "w-4 h-4 text-cyan-400 flex-shrink-0")}
                  <span class="truncate">${r.label}</span>
                </div>
                ${store.region === r.id ? Icons.check("w-3.5 h-3.5 text-cyan-400 flex-shrink-0 ml-1") : ''}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Drawer Footer -->
      <div class="pt-6 border-t border-white/10 mt-4 flex flex-col gap-3">
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

      drawer.querySelectorAll('.drawer-region-btn').forEach(btn => {
        btn.onclick = () => store.setRegion(btn.dataset.region);
      });

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
