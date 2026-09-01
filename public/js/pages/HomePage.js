import { createHeroReveal } from '../components/HeroReveal.js';
import { Icons } from '../components/Icons.js';

export function createHomePage(store) {
  const page = document.createElement('div');
  page.className = 'w-full min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-24 sm:space-y-32';

  // 1. HERO SECTION
  const heroSection = document.createElement('section');
  heroSection.className = 'relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 sm:pt-16';

  const heroLeft = document.createElement('div');
  heroLeft.className = 'lg:col-span-6 space-y-6 text-left';
  heroLeft.innerHTML = `
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 dark:border-white/10 light:border-black/10 text-xs font-mono text-cyan-400">
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
      <span>WOVO // AI-ASSISTED WEB DEVELOPMENT</span>
    </div>

    <h1 class="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-balance text-neutral-900 dark:text-white light:text-neutral-950">
      ${store.t('hero_title')}
    </h1>

    <p class="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 light:text-neutral-600 font-normal max-w-xl leading-relaxed">
      ${store.t('hero_subtitle')}
    </p>

    <div class="flex flex-wrap items-center gap-4 pt-2">
      <button id="hero-btn-work" class="px-7 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black light:bg-black light:text-white font-bold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-cyan-500/10 flex items-center gap-2">
        <span>${store.t('hero_explore')}</span>
        ${Icons.chevronDown('w-4 h-4')}
      </button>

      <button id="hero-btn-project" class="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 dark:border-white/15 light:border-black/15 font-bold text-xs tracking-widest text-neutral-900 dark:text-white light:text-black hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
        <span>${store.t('hero_start')}</span>
        ${Icons.arrowRight('w-4 h-4')}
      </button>
    </div>
  `;

  const heroRight = document.createElement('div');
  heroRight.className = 'lg:col-span-6 relative flex justify-center items-center';
  heroRight.appendChild(createHeroReveal(store));

  heroSection.appendChild(heroLeft);
  heroSection.appendChild(heroRight);

  // 2. INTRODUCTION SECTION
  const introSection = document.createElement('section');
  introSection.className = 'p-8 sm:p-12 lg:p-16 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-neutral-100 border border-white/10 dark:border-white/10 light:border-black/10 relative overflow-hidden backdrop-blur-xl';
  introSection.innerHTML = `
    <div class="max-w-3xl space-y-6">
      <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase">${store.t('intro_pill')}</span>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        ${store.t('intro_title')}
      </h2>
      <p class="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 light:text-neutral-600 leading-relaxed">
        ${store.t('intro_desc')}
      </p>

      <!-- Animated Interactive Matrix Graphic -->
      <div class="grid grid-cols-3 gap-4 pt-6">
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            ${Icons.design("w-5 h-5 text-cyan-400")}
          </div>
          <div class="text-xs font-bold font-mono">01 // DESIGN</div>
          <div class="text-[11px] text-neutral-400">Bespoke Aesthetics</div>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
            ${Icons.code("w-5 h-5 text-purple-400")}
          </div>
          <div class="text-xs font-bold font-mono">02 // CODE</div>
          <div class="text-[11px] text-neutral-400">AI-Assisted Precision</div>
        </div>
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-cyan-400/50 transition-colors">
          <div class="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            ${Icons.experience("w-5 h-5 text-emerald-400")}
          </div>
          <div class="text-xs font-bold font-mono">03 // EXPERIENCE</div>
          <div class="text-[11px] text-neutral-400">Fluid Micro-Interactions</div>
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
        <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase">WOVO CAPABILITIES</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white light:text-neutral-950 mt-1">
          ${store.t('services_preview_title')}
        </h2>
      </div>
      <button id="view-all-services-btn" class="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group">
        <span>${store.t('services_preview_subtitle')}</span>
        ${Icons.arrowRight('w-4 h-4 transform group-hover:translate-x-1 transition-transform')}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Service Card 1 -->
      <div class="group p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            ${Icons.portfolio("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_portfolio_title')}</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">${store.t('service_portfolio_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('service_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5")}
        </button>
      </div>

      <!-- Service Card 2 -->
      <div class="group p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            ${Icons.brand("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_brand_title')}</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">${store.t('service_brand_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('service_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5")}
        </button>
      </div>

      <!-- Service Card 3 -->
      <div class="group p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            ${Icons.systems("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_systems_title')}</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">${store.t('service_systems_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('service_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5")}
        </button>
      </div>

      <!-- Service Card 4 -->
      <div class="group p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            ${Icons.custom("w-6 h-6")}
          </div>
          <h3 class="text-xl font-bold text-neutral-900 dark:text-white light:text-neutral-950">${store.t('service_custom_title')}</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">${store.t('service_custom_desc')}</p>
        </div>
        <button class="nav-to-services-btn self-start px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-2">
          <span>${store.t('service_learn_more')}</span>
          ${Icons.chevronRight("w-3.5 h-3.5")}
        </button>
      </div>
    </div>
  `;

  // 4. MY WORK / PROJECT SHOWCASE SECTION (Inside Browser Mockups)
  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects-showcase';
  projectsSection.className = 'space-y-10';
  projectsSection.innerHTML = `
    <div class="space-y-2">
      <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase">PORTFOLIO SHOWCASE</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        ${store.t('projects_title')}
      </h2>
      <p class="text-sm text-neutral-400">${store.t('projects_subtitle')}</p>
    </div>

    <!-- Browser Mockup Card 1 -->
    <div class="rounded-3xl bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl overflow-hidden">
      <!-- Browser Top Bar -->
      <div class="px-5 py-3 bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-200 border-b border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
        </div>
        <div class="px-4 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-white text-[11px] font-mono text-neutral-400 border border-white/10 flex items-center gap-2">
          ${Icons.lock("w-3.5 h-3.5 text-emerald-400")}
          https://wovo.dev/showcase/portfolio-v1
        </div>
        <div class="text-xs font-mono text-cyan-400">WOVO STUDIO</div>
      </div>

      <!-- Mockup Inner Content / Visual Preview -->
      <div class="p-8 lg:p-12 space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-3 max-w-xl">
            <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/30">${store.t('projects_tag1')}</span>
            <h3 class="text-2xl font-bold text-white">Interactive Developer Architecture Showcase</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              A high-end developer showcase featuring real-time interactive canvas graphics, custom particle simulations, dark mode engineering, and localized translation layers.
            </p>
          </div>

          <!-- Phone & Desktop Responsive Frame Preview Container -->
          <div class="relative w-full lg:w-96 h-56 rounded-2xl bg-neutral-950 border border-white/15 p-4 flex flex-col justify-between overflow-hidden group">
            <div class="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-white/10 pb-2">
              <span>LIVE FRAME PREVIEW</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div class="space-y-2 py-4">
              <div class="h-3 w-3/4 bg-white/20 rounded-full animate-pulse"></div>
              <div class="h-3 w-1/2 bg-cyan-400/40 rounded-full animate-pulse"></div>
              <div class="h-3 w-5/6 bg-white/10 rounded-full"></div>
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

  // 5. CODING / DEVELOPMENT SHOWCASE SECTION
  const codeShowcaseSection = document.createElement('section');
  codeShowcaseSection.className = 'p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl relative overflow-hidden space-y-8';
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

    <!-- Live Animated Code Terminal -->
    <div class="rounded-2xl bg-neutral-900 border border-white/10 p-6 font-mono text-xs text-neutral-300 space-y-4 shadow-inner">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 text-neutral-500 text-[11px]">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
          <span>${store.t('code_terminal_title')}</span>
        </div>
        <span>UTF-8 // ESM</span>
      </div>

      <div class="space-y-2 text-neutral-300">
        <div class="text-cyan-400"><span class="text-purple-400">const</span> WOVO_ENGINE = <span class="text-amber-300">{</span></div>
        <div class="pl-4">architecture: <span class="text-emerald-400">"AI-Assisted Bespoke Code"</span>,</div>
        <div class="pl-4">performance: <span class="text-amber-400">100</span>,</div>
        <div class="pl-4">languages: <span class="text-cyan-300">15</span>,</div>
        <div class="pl-4">responsiveness: <span class="text-cyan-300">true</span></div>
        <div class="text-amber-300">};</div>
        <div class="text-neutral-500 pt-2">// ${store.t('code_stat2')} & ${store.t('code_stat1')}</div>
      </div>
    </div>
  `;

  // 6. ABOUT PREVIEW SECTION
  const aboutPreviewSection = document.createElement('section');
  aboutPreviewSection.className = 'p-8 sm:p-12 rounded-3xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-neutral-100 border border-white/10 dark:border-white/10 light:border-black/10 flex flex-col md:flex-row items-center justify-between gap-8';
  aboutPreviewSection.innerHTML = `
    <div class="space-y-4 max-w-xl">
      <span class="text-xs font-mono text-cyan-400 tracking-widest uppercase">${store.t('home_about_title')}</span>
      <h2 class="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white light:text-neutral-950">
        Engineered for Identity & Impact.
      </h2>
      <p class="text-sm text-neutral-400 leading-relaxed">
        ${store.t('home_about_desc')}
      </p>
    </div>

    <button id="home-about-learn-more" class="px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap flex items-center gap-2">
      <span>${store.t('home_about_btn')}</span>
      ${Icons.arrowRight('w-4 h-4')}
    </button>
  `;

  // 7. FINAL HOME CTA SECTION
  const finalCtaSection = document.createElement('section');
  finalCtaSection.className = 'text-center py-16 px-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/15 shadow-2xl space-y-6';
  finalCtaSection.innerHTML = `
    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
      ${store.t('cta_title')}
    </h2>
    <p class="text-base text-neutral-400 max-w-xl mx-auto">
      ${store.t('cta_subtitle')}
    </p>
    <button id="final-contact-btn" class="px-10 py-4 rounded-full bg-gradient-to-r from-neutral-100 to-white text-black font-extrabold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20 inline-flex items-center gap-2">
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

  // Attach button click event handlers
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
