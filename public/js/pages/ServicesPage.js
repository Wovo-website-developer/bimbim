import { Icons } from '../components/Icons.js';

export function createServicesPage(store) {
  const page = document.createElement('div');
  const isDark = store.theme === 'dark';
  page.className = 'w-full min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  const VARIANTS = [
    {
      id: 'portfolio',
      icon: Icons.portfolio("w-6 h-6"),
      badge: "PERSONAL IDENTITIES",
      titleKey: 'service_portfolio_title',
      descKey: 'service_portfolio_desc',
      fullKey: 'service_portfolio_full'
    },
    {
      id: 'brand',
      icon: Icons.brand("w-6 h-6"),
      badge: "MARKETPLACE REDIRECTS",
      titleKey: 'service_brand_title',
      descKey: 'service_brand_desc',
      fullKey: 'service_brand_full'
    },
    {
      id: 'systems',
      icon: Icons.systems("w-6 h-6"),
      badge: "CONTENT MANAGEMENT",
      titleKey: 'service_systems_title',
      descKey: 'service_systems_desc',
      fullKey: 'service_systems_full'
    },
    {
      id: 'custom',
      icon: Icons.custom("w-6 h-6"),
      badge: "BESPOKE CONCEPTS",
      titleKey: 'service_custom_title',
      descKey: 'service_custom_desc',
      fullKey: 'service_custom_full'
    }
  ];

  const CAPABILITIES = [
    {
      id: 'responsive',
      titleKey: 'srv_cap_responsive',
      descKey: 'srv_cap_responsive_desc'
    },
    {
      id: 'perf',
      titleKey: 'srv_cap_perf',
      descKey: 'srv_cap_perf_desc'
    },
    {
      id: 'anim',
      titleKey: 'srv_cap_anim',
      descKey: 'srv_cap_anim_desc'
    },
    {
      id: 'ui',
      titleKey: 'srv_cap_ui',
      descKey: 'srv_cap_ui_desc'
    },
    {
      id: 'seo',
      titleKey: 'srv_cap_seo',
      descKey: 'srv_cap_seo_desc'
    },
    {
      id: 'access',
      titleKey: 'srv_cap_access',
      descKey: 'srv_cap_access_desc'
    }
  ];

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-3xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
        WOVO SERVICES // TAILORED ARCHITECTURE
      </span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
        ${store.t('srv_page_title')}
      </h1>
      <p class="text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-700'}">
        ${store.t('srv_page_subtitle')}
      </p>
    </div>

    <!-- CONTAINER BOX 1: SERVICES / VARIANTS (Dark High-Contrast Card) -->
    <div class="p-6 sm:p-10 lg:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl space-y-8">
      <div class="flex items-center justify-between border-b border-white/10 pb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.services("w-5 h-5")}
          </div>
          <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white">
            ${store.t('srv_section_variants')}
          </h2>
        </div>
        <span class="text-xs font-mono text-cyan-400 font-bold hidden sm:inline-block">04 VARIANTS</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${VARIANTS.map(v => `
          <div class="p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  ${v.icon}
                </div>
                <span class="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 text-neutral-400 border border-white/10">${v.badge}</span>
              </div>

              <h3 class="text-xl font-bold text-white">
                ${store.t(v.titleKey)}
              </h3>

              <p class="text-sm leading-relaxed text-neutral-400">
                ${store.t(v.descKey)}
              </p>

              <!-- Collapsible Deep Description -->
              <div id="variant-details-${v.id}" class="hidden pt-3 border-t border-white/10 text-xs leading-relaxed font-mono text-neutral-300">
                <span>${store.t(v.fullKey)}</span>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button data-variant-toggle="${v.id}" class="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
                <span class="toggle-text">${store.t('srv_learn_more')}</span>
                ${Icons.chevronDown("w-3.5 h-3.5 toggle-icon transition-transform")}
              </button>

              <button class="srv-request-btn px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-wider transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2 border border-cyan-300">
                <span>${store.t('srv_request_btn')}</span>
                ${Icons.arrowRight("w-3.5 h-3.5")}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- CONTAINER BOX 2: SERVICES / ADDITIONAL CAPABILITIES (Dark High-Contrast Card) -->
    <div class="p-6 sm:p-10 lg:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl space-y-8">
      <div class="flex items-center justify-between border-b border-white/10 pb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.systems("w-5 h-5")}
          </div>
          <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white">
            ${store.t('srv_section_capabilities')}
          </h2>
        </div>
        <span class="text-xs font-mono text-cyan-400 font-bold hidden sm:inline-block">06 CAPABILITIES</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${CAPABILITIES.map(c => `
          <div class="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between space-y-3">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                ${Icons.check("w-4 h-4")}
              </div>
              <h3 class="text-xs font-bold font-mono text-white">
                ${store.t(c.titleKey)}
              </h3>
            </div>

            <!-- Collapsible explanation -->
            <div id="cap-details-${c.id}" class="hidden text-xs font-mono leading-relaxed pt-2 border-t border-white/10 text-neutral-400">
              <span>${store.t(c.descKey)}</span>
            </div>

            <button data-cap-toggle="${c.id}" class="self-start text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1 font-bold pt-1">
              <span class="cap-toggle-text">${store.t('srv_learn_more')}</span>
              ${Icons.chevronDown("w-3.5 h-3.5 cap-toggle-icon transition-transform")}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach event handlers
  setTimeout(() => {
    // Variant "Learn More" Expand/Collapse
    page.querySelectorAll('[data-variant-toggle]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-variant-toggle');
        const detailEl = page.querySelector(`#variant-details-${id}`);
        const textEl = btn.querySelector('.toggle-text');
        const iconEl = btn.querySelector('.toggle-icon');

        if (detailEl.classList.contains('hidden')) {
          detailEl.classList.remove('hidden');
          textEl.textContent = store.t('srv_show_less');
          iconEl.classList.add('rotate-180');
        } else {
          detailEl.classList.add('hidden');
          textEl.textContent = store.t('srv_learn_more');
          iconEl.classList.remove('rotate-180');
        }
      };
    });

    // Capability "Learn More" Expand/Collapse
    page.querySelectorAll('[data-cap-toggle]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-cap-toggle');
        const detailEl = page.querySelector(`#cap-details-${id}`);
        const textEl = btn.querySelector('.cap-toggle-text');
        const iconEl = btn.querySelector('.cap-toggle-icon');

        if (detailEl.classList.contains('hidden')) {
          detailEl.classList.remove('hidden');
          textEl.textContent = store.t('srv_show_less');
          iconEl.classList.add('rotate-180');
        } else {
          detailEl.classList.add('hidden');
          textEl.textContent = store.t('srv_learn_more');
          iconEl.classList.remove('rotate-180');
        }
      };
    });

    // Request Project Buttons
    page.querySelectorAll('.srv-request-btn').forEach(btn => {
      btn.onclick = () => store.setCurrentPage('contact');
    });
  }, 0);

  return page;
}
