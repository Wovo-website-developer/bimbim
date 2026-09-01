import { Icons } from './Icons.js';

export function createFooter(store) {
  const footer = document.createElement('footer');
  footer.className = 'w-full py-12 px-6 border-t border-white/10 dark:border-white/10 light:border-black/10 bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-100 text-neutral-400 text-xs font-mono select-none mt-auto';

  function render() {
    footer.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Logo & Copyright -->
        <div class="flex items-center gap-4">
          <img src="/assets/logo.png" alt="WOVO" class="w-6 h-6 object-contain dark:invert-0 light:invert" />
          <span class="text-neutral-500 font-bold tracking-widest">WOVO</span>
          <span class="text-neutral-600">|</span>
          <span class="text-neutral-500">© ${new Date().getFullYear()} ${store.t('footer_rights')}</span>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
          <button id="ft-home" class="hover:text-white transition-colors">${store.t('nav_home')}</button>
          <button id="ft-services" class="hover:text-white transition-colors">${store.t('nav_services')}</button>
          <button id="ft-about" class="hover:text-white transition-colors">${store.t('nav_about')}</button>
          <button id="ft-contact" class="hover:text-white transition-colors">${store.t('nav_contact')}</button>
        </div>

        <!-- System Controls & Social Links -->
        <div class="flex items-center gap-4">
          <button id="ft-lang-btn" class="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 flex items-center gap-1.5 transition-colors">
            ${Icons.globe("w-4 h-4 text-cyan-400")}
            <span>${store.lang.toUpperCase()}</span>
          </button>

          <button id="ft-theme-btn" class="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 flex items-center gap-1.5 transition-colors">
            ${store.theme === 'dark' ? Icons.moon("w-4 h-4 text-cyan-400") + '<span>Dark</span>' : Icons.sun("w-4 h-4 text-amber-400") + '<span>Light</span>'}
          </button>

          <a href="https://www.instagram.com/wovo_official/" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-white/10 text-pink-400 transition-colors" aria-label="Instagram">
            ${Icons.instagram("w-4 h-4")}
          </a>

          <a href="mailto:wovo.website.developer@gmail.com" class="p-2 rounded-full hover:bg-white/10 text-cyan-400 transition-colors" aria-label="Gmail">
            ${Icons.gmail("w-4 h-4")}
          </a>
        </div>
      </div>
    `;

    setTimeout(() => {
      const hBtn = footer.querySelector('#ft-home');
      if (hBtn) hBtn.onclick = () => store.setCurrentPage('home');

      const sBtn = footer.querySelector('#ft-services');
      if (sBtn) sBtn.onclick = () => store.setCurrentPage('services');

      const aBtn = footer.querySelector('#ft-about');
      if (aBtn) aBtn.onclick = () => store.setCurrentPage('about');

      const cBtn = footer.querySelector('#ft-contact');
      if (cBtn) cBtn.onclick = () => store.setCurrentPage('contact');

      const langBtn = footer.querySelector('#ft-lang-btn');
      if (langBtn) langBtn.onclick = () => store.toggleSettings(true);

      const themeBtn = footer.querySelector('#ft-theme-btn');
      if (themeBtn) themeBtn.onclick = () => store.setTheme(store.theme === 'dark' ? 'light' : 'dark');
    }, 0);
  }

  render();
  store.subscribe(() => render());

  return footer;
}
