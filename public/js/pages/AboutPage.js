import { Icons } from '../components/Icons.js';

export function createAboutPage(store) {
  const page = document.createElement('div');
  const isDark = store.theme === 'dark';
  page.className = 'w-full min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16';

  page.innerHTML = `
    <!-- Header -->
    <div class="space-y-4 max-w-3xl text-left pt-6">
      <span class="px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
        WOVO IDENTITY // PHILOSOPHY
      </span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
        ${store.t('abt_page_title')}
      </h1>
      <p class="text-lg leading-relaxed font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}">
        ${store.t('srv_about_intro')}
      </p>
    </div>

    <!-- HOW WOVO WORKS: Rendered as Normal Inline Typography (Unboxed) -->
    <div class="space-y-6 pt-2 pb-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          ${Icons.bulb("w-5 h-5")}
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
          ${store.t('abt_how_title')}
        </h2>
      </div>

      <p class="text-base sm:text-lg leading-relaxed max-w-4xl ${isDark ? 'text-neutral-300' : 'text-slate-700'}">
        ${store.t('abt_how_desc')} We reject rigid templates and generic page builders in favor of handcrafted codebases tailored directly to your brand's unique presence.
      </p>

      <!-- Architecture Specifications Grid (Dark Sleek Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
        <div class="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-white shadow-xl">
          <div class="flex items-center gap-2 mb-2 text-cyan-400 font-bold">
            ${Icons.design("w-4 h-4")}
            <span>Custom Architecture</span>
          </div>
          <p class="text-neutral-400">Bespoke UI layouts designed from scratch without cookie-cutter themes.</p>
        </div>

        <div class="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-white shadow-xl">
          <div class="flex items-center gap-2 mb-2 text-cyan-400 font-bold">
            ${Icons.code("w-4 h-4")}
            <span>Modular Precision</span>
          </div>
          <p class="text-neutral-400">Lightweight, semantic JavaScript and CSS engineered for peak speed.</p>
        </div>

        <div class="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-white shadow-xl">
          <div class="flex items-center gap-2 mb-2 text-cyan-400 font-bold">
            ${Icons.globe("w-4 h-4")}
            <span>Global Localization</span>
          </div>
          <p class="text-neutral-400">9 localized languages with bidirectional LTR/RTL support.</p>
        </div>
      </div>
    </div>

    <!-- WHAT IS AND IS NOT INCLUDED (Dark Sleek Container Box) -->
    <div class="p-8 lg:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          ${Icons.info("w-5 h-5")}
        </div>
        <h2 class="text-2xl font-bold text-white">${store.t('abt_included_title')}</h2>
      </div>

      <p class="text-sm sm:text-base leading-relaxed text-neutral-400">
        ${store.t('abt_included_desc')}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
        <div class="p-5 rounded-2xl bg-neutral-950 border border-white/10 text-neutral-300 space-y-2">
          <span class="text-cyan-400 font-bold flex items-center gap-1.5">
            ${Icons.check("w-4 h-4")}
            INCLUDED WORK:
          </span>
          <p class="text-neutral-400 leading-relaxed">
            Bespoke layout design, responsive front-end code, interactive canvas animations, localization structure, speed optimization, and custom component builds.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-neutral-950 border border-white/10 text-neutral-300 space-y-2">
          <span class="text-amber-400 font-bold flex items-center gap-1.5">
            ${Icons.info("w-4 h-4")}
            EXTERNAL SERVICES:
          </span>
          <p class="text-neutral-400 leading-relaxed">
            Domains, web hosting subscriptions, third-party paid APIs or cloud integrations are external costs evaluated separately per project.
          </p>
        </div>
      </div>
    </div>
  `;

  return page;
}
