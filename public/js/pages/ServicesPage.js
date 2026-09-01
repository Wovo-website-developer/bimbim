import { Icons } from '../components/Icons.js';

export function createServicesPage(store) {
  const page = document.createElement('div');
  page.className = 'w-full min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-2xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">WOVO SERVICES // TAILORED ARCHITECTURE</span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        ${store.t('srv_page_title')}
      </h1>
      <p class="text-base text-neutral-600 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
        ${store.t('srv_page_subtitle')}
      </p>
    </div>

    <!-- SERVICES GRID -->
    <div class="space-y-12">
      <!-- Service 1: Portfolio Websites -->
      <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-6">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              ${Icons.portfolio("w-6 h-6")}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_portfolio_title')}</h2>
          </div>
          <span class="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-neutral-400">PERSONAL IDENTITIES</span>
        </div>
        <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
          ${store.t('service_portfolio_desc')} Designed for developers, designers, creators, freelancers, and personal brands who want to showcase their skills with interactive, pixel-perfect elegance.
        </p>
        <button class="srv-request-btn px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:scale-105 transition-all inline-flex items-center gap-2">
          <span>${store.t('srv_request_btn')}</span>
          ${Icons.arrowRight("w-4 h-4")}
        </button>
      </div>

      <!-- Service 2: Brand Showcase Websites -->
      <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-6">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              ${Icons.brand("w-6 h-6")}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_brand_title')}</h2>
          </div>
          <span class="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-neutral-400">MARKETPLACE REDIRECTS</span>
        </div>
        <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
          ${store.t('service_brand_desc')} Connect customers directly from your premium brand showcase website to your active Amazon, Trendyol, eBay, or online marketplace store listings for seamless buying flow.
        </p>
        <button class="srv-request-btn px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:scale-105 transition-all inline-flex items-center gap-2">
          <span>${store.t('srv_request_btn')}</span>
          ${Icons.arrowRight("w-4 h-4")}
        </button>
      </div>

      <!-- Service 3: Custom Website Systems -->
      <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-6">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              ${Icons.systems("w-6 h-6")}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_systems_title')}</h2>
          </div>
          <span class="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-neutral-400">CONTENT MANAGEMENT</span>
        </div>
        <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
          ${store.t('service_systems_desc')} Lightweight password-protected administrative interfaces allowing effortless editing of text content, FAQs, announcements, portfolio items, multi-language choices, and themes.
        </p>
        <button class="srv-request-btn px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:scale-105 transition-all inline-flex items-center gap-2">
          <span>${store.t('srv_request_btn')}</span>
          ${Icons.arrowRight("w-4 h-4")}
        </button>
      </div>

      <!-- Service 4 (MUST BE LAST): Custom Websites -->
      <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-6">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              ${Icons.custom("w-6 h-6")}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_custom_title')}</h2>
          </div>
          <span class="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono">BESPOKE CONCEPTS</span>
        </div>
        <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
          ${store.t('service_custom_desc')} Weddings, events, restaurants, promotional campaigns, or custom interactive experiences tailored around your concept.
        </p>
        <div class="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-300 text-xs font-mono leading-relaxed flex items-start gap-2.5">
          ${Icons.bulb("w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5")}
          <span>${store.t('srv_custom_notice')}</span>
        </div>
        <button class="srv-request-btn px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:scale-105 transition-all inline-flex items-center gap-2">
          <span>${store.t('srv_request_btn')}</span>
          ${Icons.arrowRight("w-4 h-4")}
        </button>
      </div>
    </div>

    <!-- ADDITIONAL SIMPLE CAPABILITIES -->
    <div class="p-8 lg:p-12 rounded-3xl bg-neutral-950 border border-white/15 space-y-8">
      <h2 class="text-2xl font-bold text-white">${store.t('srv_capability_title')}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_responsive')}</span>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_perf')}</span>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_anim')}</span>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_ui')}</span>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_seo')}</span>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
          ${Icons.check("w-4 h-4 text-cyan-400 flex-shrink-0")}
          <span>${store.t('srv_cap_access')}</span>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    page.querySelectorAll('.srv-request-btn').forEach(btn => {
      btn.onclick = () => store.setCurrentPage('contact');
    });
  }, 0);

  return page;
}
