import { store } from './state.js';
import { initBackgroundCanvas } from './components/BackgroundCanvas.js';
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

  // 1. Initialize Code-Particle Floating Background Canvas
  initBackgroundCanvas(store);

  root.innerHTML = '';
  root.className = 'min-h-screen flex flex-col transition-colors duration-300 font-sans relative overflow-x-hidden';

  // 2. Navigation (Floating Left Sidebar)
  root.appendChild(createNavigation(store));

  // 3. Settings Drawer
  root.appendChild(createSettingsDrawer(store));

  // 4. Main View Container (Shifted on desktop to accommodate left floating nav)
  const mainContent = document.createElement('main');
  mainContent.id = 'app-content';
  mainContent.className = 'flex-1 w-full md:pl-28 lg:pl-36 md:pr-8 transition-all duration-300';
  root.appendChild(mainContent);

  // 5. Footer (Shifted on desktop)
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'w-full md:pl-28 lg:pl-36 md:pr-8';
  footerWrapper.appendChild(createFooter(store));
  root.appendChild(footerWrapper);

  // Render Page View
  function renderView() {
    mainContent.innerHTML = '';
    mainContent.className = 'flex-1 w-full md:pl-28 lg:pl-36 md:pr-8 transition-all duration-300 animate-fade-in';

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

  // 6. Onboarding Modal (if first visit)
  if (!store.onboardingComplete) {
    document.body.appendChild(createOnboardingModal(store));
  }
});
