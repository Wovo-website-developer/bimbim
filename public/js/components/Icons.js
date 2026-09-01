// Advanced Cybernetic Vector Icon Suite for WOVO (Unified Blue Aesthetics & Zero Emojis)

export const Icons = {
  // Navigation & Core UI
  home: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z"/>
      <path d="M12 7V10" stroke-width="2.5"/>
    </svg>
  `,

  services: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="8" height="8" rx="2"/>
      <rect x="13" y="3" width="8" height="8" rx="2"/>
      <rect x="13" y="13" width="8" height="8" rx="2"/>
      <rect x="3" y="13" width="8" height="8" rx="2"/>
    </svg>
  `,

  about: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L3 7V12C3 17.5228 7.02944 21.6 12 22C16.9706 21.6 21 17.5228 21 12V7L12 2Z"/>
      <circle cx="12" cy="9" r="2.5"/>
      <path d="M8 17C9 15 10.5 14.5 12 14.5C13.5 14.5 15 15 16 17"/>
    </svg>
  `,

  contact: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3"/>
      <path d="M22 6L12 13L2 6"/>
      <path d="M2 18L9.5 11.5"/>
      <path d="M22 18L14.5 11.5"/>
    </svg>
  `,

  settings: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3.5"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  `,

  // Directives & Actions
  arrowRight: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  arrowLeft: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  chevronDown: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `,

  chevronUp: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  `,

  chevronRight: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  `,

  check: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  close: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  reset: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
    </svg>
  `,

  // Themes & Environments
  sun: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  `,

  moon: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  `,

  globe: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  `,

  region: (id, cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <polygon points="12 2 14.5 9 22 12 14.5 15 12 22 9.5 15 2 12 9.5 9 12 2" fill="currentColor" fill-opacity="0.15"/>
    </svg>
  `,

  // Social & Channels (Official Brand Vectors)
  tiktok: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.92a6.34 6.34 0 0 0-3.41.97A6.33 6.33 0 0 0 3.7 14a6.34 6.34 0 0 0 10.84 4.46V10.8a8.16 8.16 0 0 0 5.05 1.74V9.08a4.84 4.84 0 0 1-2.5-1.39 4.84 4.84 0 0 1-1.02-2.03z"/>
    </svg>
  `,

  instagram: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="3"/>
    </svg>
  `,

  gmail: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  `,

  send: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  `,

  externalLink: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  `,

  // Core Creative Feature Vectors (Blue Unified Aesthetics)
  design: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  `,

  code: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20" stroke-width="2"/>
    </svg>
  `,

  experience: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  `,

  bulb: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1.55.64 2.91 1.68 3.9.7.74 1.15 1.5 1.32 2.1"/>
    </svg>
  `,

  info: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8" stroke-width="3"/>
    </svg>
  `,

  lock: (cls = "w-4 h-4") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  `,

  // Services Icons
  portfolio: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  `,

  brand: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  `,

  systems: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  `,

  custom: (cls = "w-6 h-6") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 16.6l-6.3 4.6 2.3-7.2-6-4.6h7.6z"/>
    </svg>
  `,

  // Admin Tools
  editPin: (cls = "w-3.5 h-3.5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  `,

  adminLock: (cls = "w-5 h-5") => `
    <svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // Crisp Vector Country SVG Flags for all 15 Locales
  flag: (code, cls = "w-5 h-3.5") => {
    const flags = {
      tr: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 600 400"><rect width="600" height="400" fill="#E30A17"/><circle cx="210" cy="200" r="150" fill="#fff"/><circle cx="240" cy="200" r="120" fill="#E30A17"/><polygon points="340,200 378,212 355,180 378,148 340,160 328,122 316,160 278,148 301,180 278,212 316,200 328,238" fill="#fff"/></svg>`,
      en: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 741 390"><rect width="741" height="390" fill="#b22234"/><rect y="30" width="741" height="30" fill="#fff"/><rect y="90" width="741" height="30" fill="#fff"/><rect y="150" width="741" height="30" fill="#fff"/><rect y="210" width="741" height="30" fill="#fff"/><rect y="270" width="741" height="30" fill="#fff"/><rect y="330" width="741" height="30" fill="#fff"/><rect width="296" height="210" fill="#3c3b6e"/></svg>`,
      ar: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 600 400"><rect width="600" height="400" fill="#006C35"/><path d="M150 220 h300 v10 h-300 z" fill="#fff"/><circle cx="300" cy="160" r="40" fill="none" stroke="#fff" stroke-width="8"/></svg>`,
      de: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 5 3"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCC00"/></svg>`,
      fr: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 3 2"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>`,
      es: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 750 500"><rect width="750" height="500" fill="#AA151B"/><rect y="125" width="750" height="250" fill="#F1BF00"/></svg>`,
      it: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>`,
      pt: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 600 400"><rect width="240" height="400" fill="#046A38"/><rect x="240" width="360" height="400" fill="#DA291C"/><circle cx="240" cy="200" r="60" fill="#FFC72C"/></svg>`,
      nl: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 9 6"><rect width="9" height="2" fill="#AE1C28"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#21468B"/></svg>`,
      ru: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 9 6"><rect width="9" height="2" fill="#fff"/><rect y="2" width="9" height="2" fill="#0039A6"/><rect y="4" width="9" height="2" fill="#D52B1E"/></svg>`,
      zh: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 900 600"><rect width="900" height="600" fill="#DE2910"/><polygon points="150,90 167,143 223,143 178,176 195,229 150,196 105,229 122,176 77,143 133,143" fill="#FFDE00"/></svg>`,
      ja: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#BC002D"/></svg>`,
      ko: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="150" fill="#C60C30"/></svg>`,
      hi: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 900 600"><rect width="900" height="200" fill="#FF9933"/><rect y="200" width="900" height="200" fill="#fff"/><rect y="400" width="900" height="200" fill="#138808"/><circle cx="450" cy="300" r="70" fill="none" stroke="#000080" stroke-width="12"/></svg>`,
      el: `<svg class="${cls} rounded-sm overflow-hidden inline-block align-middle shadow-sm" viewBox="0 0 27 18"><rect width="27" height="18" fill="#0D5EAF"/><rect y="2" width="27" height="2" fill="#fff"/><rect y="6" width="27" height="2" fill="#fff"/><rect y="10" width="27" height="2" fill="#fff"/><rect y="14" width="27" height="2" fill="#fff"/><rect width="10" height="10" fill="#0D5EAF"/><rect x="4" width="2" height="10" fill="#fff"/><rect y="4" width="10" height="2" fill="#fff"/></svg>`
    };
    return flags[code] || flags['en'];
  }
};
