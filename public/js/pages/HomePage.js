import { createHeroReveal } from '../components/HeroReveal.js';
import { Icons } from '../components/Icons.js';

export function createHomePage(store) {
  const page = document.createElement('div');
  const isDark = store.theme === 'dark';
  page.className = 'w-full min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20 sm:space-y-28';

  // 1. HERO SECTION
  const heroSection = document.createElement('section');
  heroSection.className = 'relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 sm:pt-10';

  const heroLeft = document.createElement('div');
  heroLeft.className = 'lg:col-span-6 space-y-6 text-left';
  heroLeft.innerHTML = `
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-colors bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
      <span>${store.t('hero_tag')}</span>
    </div>

    <h1 class="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-balance ${
      isDark ? 'text-white' : 'text-slate-900'
    }">
      ${store.t('hero_title')}
    </h1>

    <p class="text-base sm:text-lg font-normal max-w-xl leading-relaxed ${
      isDark ? 'text-neutral-400' : 'text-slate-700'
    }">
      ${store.t('hero_subtitle')}
    </p>

    <div class="flex flex-wrap items-center gap-4 pt-2">
      <button id="hero-btn-work" class="px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-cyan-400/25 flex items-center gap-2 border border-cyan-300">
        <span>${store.t('hero_explore')}</span>
        ${Icons.chevronDown('w-4 h-4')}
      </button>

      <button id="hero-btn-project" class="px-7 py-3.5 rounded-full border font-bold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ${
        isDark ? 'bg-white/5 hover:bg-white/10 border-white/15 text-white' : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-white shadow-md'
      }">
        <span>${store.t('hero_start')}</span>
        ${Icons.arrowRight('w-4 h-4 text-cyan-400')}
      </button>
    </div>
  `;

  const heroRight = document.createElement('div');
  heroRight.className = 'lg:col-span-6 relative flex justify-center items-center';
  heroRight.appendChild(createHeroReveal(store));

  heroSection.appendChild(heroLeft);
  heroSection.appendChild(heroRight);

  // 2. INTRODUCTION SECTION (Dark sleek container box)
  const introSection = document.createElement('section');
  introSection.className = 'p-8 sm:p-12 lg:p-14 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl relative overflow-hidden backdrop-blur-xl';
  introSection.innerHTML = `
    <div class="max-w-3xl space-y-6">
      <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">${store.t('intro_pill')}</span>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
        ${store.t('intro_title')}
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-neutral-300">
        ${store.t('intro_desc')}
      </p>

      <!-- Matrix Graphic (Unified Cyan Aesthetics) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div class="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.design("w-5 h-5")}
          </div>
          <div class="text-xs font-bold font-mono text-cyan-400">01 // DESIGN</div>
          <div class="text-[11px] text-neutral-400">Bespoke Aesthetics</div>
        </div>

        <div class="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.code("w-5 h-5")}
          </div>
          <div class="text-xs font-bold font-mono text-cyan-400">02 // CODE</div>
          <div class="text-[11px] text-neutral-400">Modular Architecture</div>
        </div>

        <div class="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.experience("w-5 h-5")}
          </div>
          <div class="text-xs font-bold font-mono text-cyan-400">03 // EXPERIENCE</div>
          <div class="text-[11px] text-neutral-400">Fluid Interactivity</div>
        </div>
      </div>
    </div>
  `;

  // 3. SERVICES PREVIEW SECTION
  const servicesSection = document.createElement('section');
  servicesSection.className = 'space-y-8';
  servicesSection.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <span class="text-xs font-mono text-cyan-500 dark:text-cyan-400 tracking-widest uppercase font-bold">WOVO CAPABILITIES</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-slate-900'}">
          ${store.t('services_preview_title')}
        </h2>
      </div>
      <button id="view-all-services-btn" class="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:underline flex items-center gap-1.5 group font-bold">
        <span>${store.t('services_preview_subtitle')}</span>
        ${Icons.arrowRight('w-4 h-4 transform group-hover:translate-x-1 transition-transform')}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1 -->
      <div class="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-white transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.portfolio("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-white">${store.t('service_portfolio_title')}</h3>
          <p class="text-sm leading-relaxed text-neutral-400">${store.t('service_portfolio_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('srv_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5 text-cyan-400")}
        </button>
      </div>

      <!-- Card 2 -->
      <div class="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-white transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.brand("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-white">${store.t('service_brand_title')}</h3>
          <p class="text-sm leading-relaxed text-neutral-400">${store.t('service_brand_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('srv_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5 text-cyan-400")}
        </button>
      </div>

      <!-- Card 3 -->
      <div class="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-white transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.systems("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-white">${store.t('service_systems_title')}</h3>
          <p class="text-sm leading-relaxed text-neutral-400">${store.t('service_systems_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('srv_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5 text-cyan-400")}
        </button>
      </div>

      <!-- Card 4 -->
      <div class="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-white transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.custom("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-white">${store.t('service_custom_title')}</h3>
          <p class="text-sm leading-relaxed text-neutral-400">${store.t('service_custom_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('srv_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5 text-cyan-400")}
        </button>
      </div>
    </div>
  `;

  // 4. PORTFOLIO SHOWCASE SECTION (Dark sleek container)
  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects-showcase';
  projectsSection.className = 'space-y-8';
  projectsSection.innerHTML = `
    <div class="space-y-2">
      <span class="text-xs font-mono text-cyan-500 dark:text-cyan-400 tracking-widest uppercase font-bold">PORTFOLIO SHOWCASE</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
        ${store.t('projects_title')}
      </h2>
      <p class="text-sm ${isDark ? 'text-neutral-400' : 'text-slate-600'}">${store.t('projects_subtitle')}</p>
    </div>

    <!-- Browser Mockup Card -->
    <div class="rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-white">
      <!-- Browser Top Bar -->
      <div class="px-5 py-3.5 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div class="px-4 py-1 rounded-full bg-white/5 text-[11px] font-mono text-neutral-400 border border-white/10 flex items-center gap-2">
          ${Icons.lock("w-3.5 h-3.5 text-cyan-400")}
          https://wovo.dev/showcase/portfolio-v1
        </div>
        <div class="text-xs font-mono text-cyan-400 font-bold">WOVO STUDIO</div>
      </div>

      <!-- Mockup Inner Content -->
      <div class="p-8 lg:p-12 space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-3 max-w-xl">
            <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/30 font-bold">${store.t('projects_tag1')}</span>
            <h3 class="text-2xl font-bold text-white">Interactive Developer Architecture Showcase</h3>
            <p class="text-sm leading-relaxed text-neutral-400">
              A high-end developer showcase featuring real-time interactive canvas graphics, custom particle simulations, dark/light mode engineering, and localized translation layers.
            </p>
          </div>

          <!-- Live Frame Preview Graphic -->
          <div class="relative w-full lg:w-96 h-52 rounded-2xl bg-neutral-950 border border-white/15 p-4 flex flex-col justify-between overflow-hidden">
            <div class="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-white/10 pb-2">
              <span>LIVE FRAME PREVIEW</span>
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
            <div class="space-y-2 py-3">
              <div class="h-3 w-3/4 rounded-full bg-white/20"></div>
              <div class="h-3 w-1/2 rounded-full bg-cyan-400/40"></div>
              <div class="h-3 w-5/6 rounded-full bg-white/10"></div>
            </div>
            <div class="flex items-center gap-2 pt-2 text-[10px] font-mono text-cyan-400">
              <span class="px-2 py-0.5 rounded bg-white/10">60 FPS</span>
              <span class="px-2 py-0.5 rounded bg-white/10">0.2s LCP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // 5. CODING SHOWCASE SECTION (Dark sleek container)
  const codeShowcaseSection = document.createElement('section');
  codeShowcaseSection.className = 'p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden space-y-6 text-white';
  codeShowcaseSection.innerHTML = `
    <div class="space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span>${store.t('code_title')}</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
        ${store.t('code_subtitle')}
      </h2>
    </div>

    <!-- Clean Code Terminal -->
    <div class="rounded-2xl bg-neutral-950 border border-white/10 p-6 font-mono text-xs text-neutral-300 space-y-4 shadow-inner">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 text-neutral-500 text-[11px]">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
          <span>${store.t('code_terminal_title')}</span>
        </div>
        <span>UTF-8 // ESM</span>
      </div>

      <div class="space-y-2 text-neutral-300">
        <div class="text-cyan-400"><span class="text-slate-400">const</span> WOVO_ENGINE = <span class="text-cyan-300">{</span></div>
        <div class="pl-4">architecture: <span class="text-cyan-400">"Bespoke Precision Code"</span>,</div>
        <div class="pl-4">performance: <span class="text-cyan-300">100</span>,</div>
        <div class="pl-4">languages: <span class="text-cyan-300">9</span>,</div>
        <div class="pl-4">responsiveness: <span class="text-cyan-300">true</span></div>
        <div class="text-cyan-300">};</div>
        <div class="text-neutral-500 pt-2">// ${store.t('code_stat2')} & ${store.t('code_stat1')}</div>
      </div>
    </div>
  `;

  // 6. ABOUT PREVIEW SECTION (Dark sleek container)
  const aboutPreviewSection = document.createElement('section');
  aboutPreviewSection.className = 'p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8';
  aboutPreviewSection.innerHTML = `
    <div class="space-y-4 max-w-xl">
      <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">${store.t('home_about_title')}</span>
      <h2 class="text-3xl font-extrabold tracking-tight text-white">
        Engineered for Identity & Impact.
      </h2>
      <p class="text-sm leading-relaxed text-neutral-400">
        ${store.t('home_about_desc')}
      </p>
    </div>

    <button id="home-about-learn-more" class="px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-cyan-400/20 whitespace-nowrap flex items-center gap-2 border border-cyan-300">
      <span>${store.t('home_about_btn')}</span>
      ${Icons.arrowRight('w-4 h-4')}
    </button>
  `;

  // 7. FINAL HOME CTA SECTION (Dark sleek container)
  const finalCtaSection = document.createElement('section');
  finalCtaSection.className = 'text-center py-16 px-8 rounded-3xl bg-neutral-900 border border-cyan-500/30 shadow-2xl space-y-6 text-white';
  finalCtaSection.innerHTML = `
    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
      ${store.t('cta_title')}
    </h2>
    <p class="text-base text-neutral-400 max-w-xl mx-auto">
      ${store.t('cta_subtitle')}
    </p>
    <button id="final-contact-btn" class="px-10 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-cyan-400/30 inline-flex items-center gap-2 border border-cyan-300">
      <span>${store.t('cta_btn')}</span>
      ${Icons.arrowRight('w-4 h-4')}
    </button>
  `;

  page.appendChild(heroSection);
  page.appendChild(introSection);
  page.appendChild(servicesSection);
  page.appendChild(projectsSection);
  page.appendChild(codeShowcaseSection);
  page.appendChild(aboutPreviewSection);
  page.appendChild(finalCtaSection);

  setTimeout(() => {
    const workBtn = page.querySelector('#hero-btn-work');
    if (workBtn) workBtn.onclick = () => store.setCurrentPage('services');

    const projectBtn = page.querySelector('#hero-btn-project');
    if (projectBtn) projectBtn.onclick = () => store.setCurrentPage('contact');

    const viewAllBtn = page.querySelector('#view-all-services-btn');
    if (viewAllBtn) viewAllBtn.onclick = () => store.setCurrentPage('services');

    page.querySelectorAll('.nav-to-services-btn').forEach(btn => {
      btn.onclick = () => store.setCurrentPage('services');
    });

    const abtBtn = page.querySelector('#home-about-learn-more');
    if (abtBtn) abtBtn.onclick = () => store.setCurrentPage('about');

    const contactCtaBtn = page.querySelector('#final-contact-btn');
    if (contactCtaBtn) contactCtaBtn.onclick = () => store.setCurrentPage('contact');
  }, 0);

  return page;
}
