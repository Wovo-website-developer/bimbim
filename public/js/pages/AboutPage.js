import { Icons } from '../components/Icons.js';

export function createAboutPage(store) {
  const page = document.createElement('div');
  page.className = 'w-full min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-3xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">WOVO IDENTITY // PHILOSOPHY</span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        ${store.t('abt_page_title')}
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-300 light:text-neutral-600 leading-relaxed font-medium">
        ${store.t('srv_about_intro')}
      </p>
    </div>

    <!-- HOW WOVO WORKS & CORE PILLARS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-8 lg:p-10 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-4">
        <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          ${Icons.bulb("w-6 h-6 text-cyan-400")}
        </div>
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('abt_how_title')}</h2>
        <p class="text-sm text-neutral-400 leading-relaxed">${store.t('abt_how_desc')}</p>
      </div>

      <!-- ABSTRACT SYSTEM GRAPHIC -->
      <div class="p-8 lg:p-10 rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl flex flex-col justify-between space-y-6">
        <div class="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-white/10 pb-4">
          <span>AI-ASSISTED AGILITY</span>
          <span class="text-emerald-400 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            OPTIMIZED WORKFLOW
          </span>
        </div>

        <div class="space-y-3 font-mono text-xs">
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <span class="text-neutral-300 flex items-center gap-2">
              ${Icons.design("w-4 h-4 text-cyan-400")}
              Custom Architecture
            </span>
            <span class="text-cyan-400">100% Unique</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <span class="text-neutral-300 flex items-center gap-2">
              ${Icons.code("w-4 h-4 text-purple-400")}
              AI Component Engineering
            </span>
            <span class="text-purple-400">High Precision</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <span class="text-neutral-300 flex items-center gap-2">
              ${Icons.globe("w-4 h-4 text-emerald-400")}
              Internationalization
            </span>
            <span class="text-emerald-400">15 Locales + RTL</span>
          </div>
        </div>
      </div>
    </div>

    <!-- WHAT IS AND IS NOT INCLUDED -->
    <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl space-y-6">
      <div class="flex items-center gap-3 text-amber-400">
        ${Icons.info("w-6 h-6 text-amber-400")}
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('abt_included_title')}</h2>
      </div>

      <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
        ${store.t('abt_included_desc')}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-300 space-y-2">
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            ${Icons.check("w-4 h-4")}
            INCLUDED WORK:
          </span>
          <p class="text-neutral-400 leading-relaxed">Bespoke layout design, responsive front-end code, dynamic animations, localization structure, performance optimization, and custom component builds.</p>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-300 space-y-2">
          <span class="text-amber-400 font-bold flex items-center gap-1.5">
            ${Icons.info("w-4 h-4")}
            EXTERNAL SERVICES:
          </span>
          <p class="text-neutral-400 leading-relaxed">Domains, web hosting subscriptions, third-party paid APIs or cloud integrations are external costs evaluated separately per project.</p>
        </div>
      </div>
    </div>
  `;

  return page;
}
