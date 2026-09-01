import { store } from './state.js';
import { createNavigation } from './components/Nav.js';
import { createOnboardingModal } from './components/Onboarding.js';
import { createSettingsDrawer } from './components/Settings.js';
import { createFooter } from './components/Footer.js';

import { createHomePage } from './pages/HomePage.js';
import { createServicesPage } from './pages/ServicesPage.js';
import { createAboutPage } from './pages/AboutPage.js';
import { createContactPage } from './pages/ContactPage.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app-root');
  if (!root) return;

  root.innerHTML = '';
  root.className = 'min-h-screen flex flex-col bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white light:bg-slate-50 light:text-slate-900 transition-colors duration-300 font-sans relative overflow-x-hidden';

  // 1. Navigation (Floating Sidebar)
  root.appendChild(createNavigation(store));

  // 2. Settings Drawer Overlay
  root.appendChild(createSettingsDrawer(store));

  // 3. Main View Area (Shifted with md:pl-32 lg:pl-40 so floating left sidebar never overlaps content)
  const mainContent = document.createElement('main');
  mainContent.id = 'app-content';
  mainContent.className = 'flex-1 w-full md:pl-32 lg:pl-40 md:pr-10 transition-all duration-300';
  root.appendChild(mainContent);

  // 4. Footer (Shifted with md:pl-32 lg:pl-40)
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'w-full md:pl-32 lg:pl-40 md:pr-10';
  footerWrapper.appendChild(createFooter(store));
  root.appendChild(footerWrapper);

  // Render current page view
  function renderView() {
    mainContent.innerHTML = '';
    mainContent.className = 'flex-1 w-full md:pl-32 lg:pl-40 md:pr-10 transition-all duration-300 animate-fade-in';

    switch (store.currentPage) {
      case 'home':
        mainContent.appendChild(createHomePage(store));
        break;
      case 'services':
        mainContent.appendChild(createServicesPage(store));
        break;
      case 'about':
        mainContent.appendChild(createAboutPage(store));
        break;
      case 'contact':
        mainContent.appendChild(createContactPage(store));
        break;
      default:
        mainContent.appendChild(createHomePage(store));
    }
  }

  renderView();
  store.subscribe(() => renderView());

  // 5. Onboarding Modal (if first visit on device)
  if (!store.onboardingComplete) {
    document.body.appendChild(createOnboardingModal(store));
  }
});
