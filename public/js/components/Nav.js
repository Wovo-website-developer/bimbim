import { Icons } from './Icons.js';

export function createNavigation(store) {
  const navContainer = document.createElement('nav');
  navContainer.className = 'wovo-nav-root';

  const navItems = [
    { id: 'home', icon: Icons.home('w-6 h-6'), labelKey: 'nav_home' },
    { id: 'services', icon: Icons.services('w-6 h-6'), labelKey: 'nav_services' },
    { id: 'about', icon: Icons.about('w-6 h-6'), labelKey: 'nav_about' },
    { id: 'contact', icon: Icons.contact('w-6 h-6'), labelKey: 'nav_contact' }
  ];

  function render() {
    navContainer.innerHTML = '';

    // =========================================================================
    // DESKTOP: Floating Left Vertical Navbar (Always sleek dark for high contrast)
    // =========================================================================
    const desktopNav = document.createElement('div');
    desktopNav.className = 'hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5 p-3.5 rounded-3xl bg-neutral-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/60 text-white transition-all duration-300 select-none';

    // WOVO Logo Button
    const logoBtn = document.createElement('button');
    logoBtn.ariaLabel = 'WOVO Home';
    logoBtn.className = 'p-2 rounded-2xl hover:bg-white/10 transition-transform duration-300 hover:scale-110 active:scale-95 mb-1 group';
    logoBtn.innerHTML = `
      <img src="/assets/logo.png" alt="WOVO Logo" class="w-10 h-10 object-contain transition-all duration-300 filter invert brightness-200" />
    `;
    logoBtn.onclick = () => store.setCurrentPage('home');
    desktopNav.appendChild(logoBtn);

    // Separator line
    const sep = document.createElement('div');
    sep.className = 'w-8 h-px bg-white/15 mb-1';
    desktopNav.appendChild(sep);

    // Page Buttons
    navItems.forEach(item => {
      const isActive = store.currentPage === item.id;
      const btn = document.createElement('button');
      btn.className = `group relative p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-center ${
        isActive 
          ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/30 scale-105 border border-cyan-300 font-bold' 
          : 'text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-105'
      }`;
      btn.innerHTML = item.icon;
      btn.onclick = () => store.setCurrentPage(item.id);

      // Tooltip pill on hover
      const tooltip = document.createElement('span');
      tooltip.className = 'absolute left-full ml-4 px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-50 flex items-center gap-2 bg-neutral-900 border border-white/20 text-white';
      tooltip.innerHTML = `
        <span class="w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-neutral-500'}"></span>
        ${store.t(item.labelKey)}
      `;
      btn.appendChild(tooltip);

      desktopNav.appendChild(btn);
    });

    // Settings Toggle Button
    const settingsBtn = document.createElement('button');
    settingsBtn.className = `group relative p-3.5 rounded-2xl transition-all duration-200 mt-2 flex items-center justify-center ${
      store.settingsOpen 
        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400 shadow-md scale-105' 
        : 'text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-105'
    }`;
    settingsBtn.innerHTML = Icons.settings('w-6 h-6');
    settingsBtn.onclick = () => store.toggleSettings();

    const settingsTooltip = document.createElement('span');
    settingsTooltip.className = 'absolute left-full ml-4 px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-50 flex items-center gap-2 bg-neutral-900 border border-white/20 text-white';
    settingsTooltip.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
      ${store.t('nav_settings')}
    `;
    settingsBtn.appendChild(settingsTooltip);

    desktopNav.appendChild(settingsBtn);

    // =========================================================================
    // MOBILE: Floating Bottom Touch Capsule (Always sleek dark for high contrast)
    // =========================================================================
    const mobileNav = document.createElement('div');
    mobileNav.className = 'flex md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 items-center justify-around gap-2 p-2 px-4 rounded-full bg-neutral-950/95 backdrop-blur-2xl border border-white/15 text-white shadow-2xl max-w-[94vw] select-none';

    navItems.forEach(item => {
      const isActive = store.currentPage === item.id;
      const btn = document.createElement('button');
      btn.className = `relative flex items-center justify-center p-3 rounded-full transition-all ${
        isActive ? 'bg-cyan-400 text-black shadow-md scale-105 font-bold' : 'text-neutral-400 active:scale-95'
      }`;
      btn.innerHTML = item.icon;
      btn.onclick = () => store.setCurrentPage(item.id);
      mobileNav.appendChild(btn);
    });

    const mobileSettingsBtn = document.createElement('button');
    mobileSettingsBtn.className = `relative flex items-center justify-center p-3 rounded-full transition-all ${
      store.settingsOpen ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400' : 'text-neutral-400 active:scale-95'
    }`;
    mobileSettingsBtn.innerHTML = Icons.settings('w-6 h-6');
    mobileSettingsBtn.onclick = () => store.toggleSettings();
    mobileNav.appendChild(mobileSettingsBtn);

    navContainer.appendChild(desktopNav);
    navContainer.appendChild(mobileNav);
  }

  render();
  store.subscribe(() => render());

  return navContainer;
}
