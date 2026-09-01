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

    // ==========================================
    // DESKTOP: Floating Left Vertical Navbar
    // ==========================================
    const desktopNav = document.createElement('div');
    desktopNav.className = 'hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6 p-4 rounded-3xl bg-neutral-900/90 dark:bg-neutral-900/90 light:bg-white/90 backdrop-blur-2xl border border-white/20 dark:border-white/15 light:border-black/15 shadow-2xl shadow-black/50 transition-all duration-300';

    // WOVO Logo Button (Larger & Theme Inverted)
    const logoBtn = document.createElement('button');
    logoBtn.ariaLabel = 'WOVO Home';
    logoBtn.className = 'p-2 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-transform duration-300 hover:scale-110 active:scale-95 mb-1 group';
    logoBtn.innerHTML = `
      <img src="/assets/logo.png" alt="WOVO Logo" class="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-all duration-300 filter dark:invert dark:brightness-200 light:invert-0" />
    `;
    logoBtn.onclick = () => store.setCurrentPage('home');
    desktopNav.appendChild(logoBtn);

    // Separator line
    const sep = document.createElement('div');
    sep.className = 'w-8 h-px bg-white/20 dark:bg-white/20 light:bg-black/20 mb-1';
    desktopNav.appendChild(sep);

    // Page Buttons
    navItems.forEach(item => {
      const isActive = store.currentPage === item.id;
      const btn = document.createElement('button');
      btn.className = `group relative p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center ${
        isActive 
          ? 'bg-neutral-100 text-black dark:bg-white dark:text-black light:bg-neutral-950 light:text-white shadow-xl shadow-cyan-500/20 scale-105 border border-cyan-400/40' 
          : 'text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/10 hover:scale-110'
      }`;
      btn.innerHTML = item.icon;
      btn.onclick = () => store.setCurrentPage(item.id);

      // Tooltip pill on hover (opens to the right)
      const tooltip = document.createElement('span');
      tooltip.className = 'absolute left-full ml-4 px-3.5 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-900 light:bg-white text-white dark:text-white light:text-black border border-white/20 light:border-black/20 text-xs font-bold tracking-wide shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-50 flex items-center gap-2';
      tooltip.innerHTML = `
        <span class="w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-neutral-500'}"></span>
        ${store.t(item.labelKey)}
      `;
      btn.appendChild(tooltip);

      desktopNav.appendChild(btn);
    });

    // Settings Toggle Button
    const settingsBtn = document.createElement('button');
    settingsBtn.className = `group relative p-3.5 rounded-2xl transition-all duration-300 mt-2 flex items-center justify-center ${
      store.settingsOpen 
        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/60 shadow-lg shadow-cyan-500/20 scale-105' 
        : 'text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/10 hover:scale-110'
    }`;
    settingsBtn.innerHTML = Icons.settings('w-6 h-6');
    settingsBtn.onclick = () => store.toggleSettings();

    const settingsTooltip = document.createElement('span');
    settingsTooltip.className = 'absolute left-full ml-4 px-3.5 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-900 light:bg-white text-white dark:text-white light:text-black border border-white/20 light:border-black/20 text-xs font-bold tracking-wide shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-50 flex items-center gap-2';
    settingsTooltip.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
      ${store.t('nav_settings')}
    `;
    settingsBtn.appendChild(settingsTooltip);

    desktopNav.appendChild(settingsBtn);

    // ==========================================
    // MOBILE: Floating Bottom Touch Nav Capsule
    // ==========================================
    const mobileNav = document.createElement('div');
    mobileNav.className = 'flex md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 items-center justify-around gap-2 p-2.5 px-4 rounded-full bg-neutral-900/95 dark:bg-neutral-950/95 light:bg-white/95 backdrop-blur-2xl border border-white/20 dark:border-white/15 light:border-black/15 shadow-2xl max-w-[94vw]';

    navItems.forEach(item => {
      const isActive = store.currentPage === item.id;
      const btn = document.createElement('button');
      btn.className = `relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-neutral-100 text-black dark:bg-white dark:text-black light:bg-black light:text-white shadow-lg scale-105' 
          : 'text-neutral-400 active:scale-95'
      }`;
      btn.innerHTML = item.icon;
      btn.onclick = () => store.setCurrentPage(item.id);
      mobileNav.appendChild(btn);
    });

    const mobileSettingsBtn = document.createElement('button');
    mobileSettingsBtn.className = `relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
      store.settingsOpen ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40' : 'text-neutral-400 active:scale-95'
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
