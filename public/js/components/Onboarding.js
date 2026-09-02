import { LANGUAGES } from '../translations.js';
import { Icons } from './Icons.js';

export function createOnboardingModal(store) {
  const container = document.createElement('div');
  container.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl transition-all duration-500 select-none';

  let currentStep = 1; // 1: Language, 2: Theme, 3: Region, 4: Statement & ENTER
  let tempLang = store.lang;
  let tempTheme = store.theme;
  let tempRegion = store.region;

  const REGIONS = [
    { id: 'Global', label: 'Global / Worldwide' },
    { id: 'Europe', label: 'Europe' },
    { id: 'Americas', label: 'Americas' },
    { id: 'AsiaPacific', label: 'Asia Pacific' },
    { id: 'MiddleEast', label: 'Middle East' },
    { id: 'Africa', label: 'Africa' }
  ];

  function render() {
    container.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'relative w-full max-w-xl p-6 sm:p-10 rounded-3xl bg-neutral-900 border border-white/20 shadow-2xl text-white overflow-hidden backdrop-blur-2xl animate-fade-in flex flex-col justify-between min-h-[460px]';

    // Top Header & Progress Bar
    const topBar = document.createElement('div');
    topBar.className = 'space-y-4';
    topBar.innerHTML = `
      <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div class="h-full bg-cyan-400 transition-all duration-500" style="width: ${(currentStep / 4) * 100}%"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/assets/logo.png" alt="WOVO" class="w-8 h-8 object-contain filter invert brightness-200" />
          <span class="font-mono text-xs tracking-widest text-neutral-400">WOVO // SYSTEM INITIALIZATION</span>
        </div>
        <span class="text-xs font-mono text-cyan-400 font-bold">STEP 0${currentStep} / 04</span>
      </div>
    `;
    card.appendChild(topBar);

    // STEP CONTENT BODY
    const contentArea = document.createElement('div');
    contentArea.className = 'py-6 flex-1 flex flex-col justify-center';

    if (currentStep === 1) {
      // Step 1: 9 Languages
      contentArea.innerHTML = `
        <h2 class="text-2xl font-extrabold mb-1 tracking-tight">Select Preferred Language</h2>
        <p class="text-neutral-400 text-xs sm:text-sm mb-5">Choose your language to personalize the interface.</p>
        <div class="grid grid-cols-3 gap-3">
          ${LANGUAGES.map(l => `
            <button data-lang="${l.code}" class="lang-opt p-3.5 rounded-2xl border text-center text-xs font-semibold transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
              tempLang === l.code 
                ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400' 
                : 'bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300'
            }">
              ${Icons.flag(l.code, "w-7 h-4")}
              <span class="truncate text-xs">${l.name}</span>
            </button>
          `).join('')}
        </div>
      `;

      setTimeout(() => {
        contentArea.querySelectorAll('.lang-opt').forEach(btn => {
          btn.onclick = () => {
            tempLang = btn.dataset.lang;
            render();
          };
        });
      }, 0);

    } else if (currentStep === 2) {
      // Step 2: Theme
      contentArea.innerHTML = `
        <h2 class="text-2xl font-extrabold mb-1 tracking-tight">Choose Visual Theme</h2>
        <p class="text-neutral-400 text-xs sm:text-sm mb-5">Select light or dark mode atmosphere.</p>
        <div class="grid grid-cols-2 gap-4">
          <button id="theme-dark" class="p-6 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center gap-3 ${
            tempTheme === 'dark'
              ? 'bg-neutral-800 border-cyan-400 text-cyan-400 shadow-2xl ring-2 ring-cyan-400'
              : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
          }">
            <div class="w-12 h-12 rounded-2xl bg-neutral-950 border border-white/20 flex items-center justify-center text-cyan-400">
              ${Icons.moon('w-6 h-6')}
            </div>
            <span class="font-bold text-sm text-white">Dark Mode</span>
          </button>

          <button id="theme-light" class="p-6 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center gap-3 ${
            tempTheme === 'light'
              ? 'bg-white border-cyan-400 text-slate-900 shadow-2xl ring-2 ring-cyan-400'
              : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
          }">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 border border-black/10 flex items-center justify-center text-slate-900">
              ${Icons.sun('w-6 h-6 text-amber-500')}
            </div>
            <span class="font-bold text-sm text-slate-900">Light Mode</span>
          </button>
        </div>
      `;

      setTimeout(() => {
        card.querySelector('#theme-dark').onclick = () => {
          tempTheme = 'dark';
          render();
        };
        card.querySelector('#theme-light').onclick = () => {
          tempTheme = 'light';
          render();
        };
      }, 0);

    } else if (currentStep === 3) {
      // Step 3: Region
      contentArea.innerHTML = `
        <h2 class="text-2xl font-extrabold mb-1 tracking-tight">Select Primary Region</h2>
        <p class="text-neutral-400 text-xs sm:text-sm mb-5">Choose your primary region for localized project coordination.</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          ${REGIONS.map(r => `
            <button data-region="${r.id}" class="region-opt p-4 rounded-2xl border text-center text-xs font-semibold transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
              tempRegion === r.id
                ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                : 'bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300'
            }">
              ${Icons.region(r.id, "w-5 h-5 text-cyan-400")}
              <span>${r.label}</span>
            </button>
          `).join('')}
        </div>
      `;

      setTimeout(() => {
        contentArea.querySelectorAll('.region-opt').forEach(btn => {
          btn.onclick = () => {
            tempRegion = btn.dataset.region;
            render();
          };
        });
      }, 0);

    } else if (currentStep === 4) {
      // Step 4: Final Statement & ENTER
      contentArea.innerHTML = `
        <div class="text-center py-4 flex flex-col items-center justify-center">
          <div class="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mb-5 shadow-xl">
            <img src="/assets/logo.png" alt="WOVO" class="w-9 h-9 object-contain filter invert brightness-200" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-black tracking-tight mb-3 text-white">
            "${store.t('onboard_statement')}"
          </h2>
          <p class="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Enter the bespoke precision website development experience.
          </p>

          <button id="onboard-enter-btn" class="px-10 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-cyan-400/30 flex items-center gap-3 border border-cyan-300">
            <span>ENTER</span>
            ${Icons.arrowRight('w-4 h-4')}
          </button>
        </div>
      `;

      setTimeout(() => {
        const enterBtn = card.querySelector('#onboard-enter-btn');
        if (enterBtn) {
          enterBtn.onclick = () => {
            store.completeOnboarding(tempLang, tempTheme, tempRegion);
            container.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
              container.remove();
            }, 500);
          };
        }
      }, 0);
    }

    card.appendChild(contentArea);

    // STEP NAVIGATION FOOTER
    if (currentStep < 4) {
      const footerBar = document.createElement('div');
      footerBar.className = 'pt-4 border-t border-white/10 flex items-center justify-between';

      const backBtn = document.createElement('button');
      backBtn.className = `px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 flex items-center gap-2 ${
        currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`;
      backBtn.innerHTML = `${Icons.arrowLeft('w-3.5 h-3.5')} <span>Back</span>`;
      backBtn.onclick = () => {
        if (currentStep > 1) {
          currentStep--;
          render();
        }
      };

      const nextBtn = document.createElement('button');
      nextBtn.className = 'px-7 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-400/20 flex items-center gap-2';
      nextBtn.innerHTML = `<span>Next</span> ${Icons.arrowRight('w-3.5 h-3.5')}`;
      nextBtn.onclick = () => {
        if (currentStep < 4) {
          currentStep++;
          render();
        }
      };

      footerBar.appendChild(backBtn);
      footerBar.appendChild(nextBtn);
      card.appendChild(footerBar);
    }

    container.appendChild(card);
  }

  render();
  return container;
}
