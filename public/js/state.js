import { LANGUAGES, TRANSLATIONS } from './translations.js';

class StateStore {
  constructor() {
    this.lang = localStorage.getItem('wovo_lang') || 'en';
    this.theme = localStorage.getItem('wovo_theme') || 'dark';
    this.region = localStorage.getItem('wovo_region') || 'Global';
    this.onboardingComplete = localStorage.getItem('wovo_onboarding_complete') === 'true';
    this.currentPage = 'home';
    this.settingsOpen = false;

    // Admin State
    this.adminAuthenticated = localStorage.getItem('wovo_admin_auth') === 'true';
    this.adminPassword = localStorage.getItem('wovo_admin_pass') || '1234';
    this.adminEditMode = false;
    this.customOverrides = JSON.parse(localStorage.getItem('wovo_overrides') || '{}');
    
    this.listeners = [];

    // Ensure valid language
    if (!TRANSLATIONS[this.lang]) {
      this.lang = 'en';
    }

    this.applyTheme();
    this.applyDir();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  setLanguage(langCode) {
    if (TRANSLATIONS[langCode]) {
      this.lang = langCode;
      localStorage.setItem('wovo_lang', langCode);
      this.applyDir();
      this.notify();
    }
  }

  setTheme(themeName) {
    this.theme = themeName;
    localStorage.setItem('wovo_theme', themeName);
    this.applyTheme();
    this.notify();
  }

  setRegion(regionName) {
    this.region = regionName;
    localStorage.setItem('wovo_region', regionName);
    this.notify();
  }

  completeOnboarding(lang, theme, region) {
    this.lang = lang || this.lang;
    this.theme = theme || this.theme;
    this.region = region || this.region;
    this.onboardingComplete = true;
    
    localStorage.setItem('wovo_lang', this.lang);
    localStorage.setItem('wovo_theme', this.theme);
    localStorage.setItem('wovo_region', this.region);
    localStorage.setItem('wovo_onboarding_complete', 'true');
    
    this.applyTheme();
    this.applyDir();
    this.notify();
  }

  resetOnboarding() {
    this.onboardingComplete = false;
    localStorage.removeItem('wovo_onboarding_complete');
    this.notify();
  }

  setCurrentPage(page) {
    if (['home', 'services', 'about', 'contact'].includes(page)) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.notify();
    }
  }

  toggleSettings(open) {
    this.settingsOpen = open !== undefined ? open : !this.settingsOpen;
    this.notify();
  }

  // Admin Methods
  authenticateAdmin(password) {
    if (password === this.adminPassword) {
      this.adminAuthenticated = true;
      this.adminEditMode = true;
      localStorage.setItem('wovo_admin_auth', 'true');
      this.notify();
      return true;
    }
    return false;
  }

  logoutAdmin() {
    this.adminAuthenticated = false;
    this.adminEditMode = false;
    localStorage.removeItem('wovo_admin_auth');
    this.notify();
  }

  setAdminPassword(newPassword) {
    if (newPassword && newPassword.trim()) {
      this.adminPassword = newPassword.trim();
      localStorage.setItem('wovo_admin_pass', this.adminPassword);
      this.notify();
      return true;
    }
    return false;
  }

  toggleAdminEditMode(active) {
    this.adminEditMode = active !== undefined ? active : !this.adminEditMode;
    this.notify();
  }

  setCustomOverride(key, value) {
    this.customOverrides[key] = value;
    localStorage.setItem('wovo_overrides', JSON.stringify(this.customOverrides));
    this.notify();
  }

  clearCustomOverrides() {
    this.customOverrides = {};
    localStorage.removeItem('wovo_overrides');
    this.notify();
  }

  applyTheme() {
    const root = document.documentElement;
    if (this.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }

  applyDir() {
    const langObj = LANGUAGES.find(l => l.code === this.lang);
    const dir = langObj ? langObj.dir : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', this.lang);
  }

  t(key) {
    if (this.customOverrides[key]) {
      return this.customOverrides[key];
    }
    const langDict = TRANSLATIONS[this.lang] || TRANSLATIONS['en'];
    return langDict[key] || TRANSLATIONS['en'][key] || key;
  }
}

export const store = new StateStore();
