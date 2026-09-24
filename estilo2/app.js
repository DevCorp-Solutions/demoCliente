/**
 * DevCorp GastroSuite - Módulo Autónomo para ESTILO2
 * Este archivo funciona de forma 100% independiente en su propia carpeta.
 */


const ICONS = {
  cart: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  star: `<svg class="w-4 h-4 text-amber-400 inline-block fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  arrow: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  external: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  eye: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
  zoom: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>`,
  google: `<svg class="w-4 h-4 inline-block flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`,
  whatsapp: `<svg class="w-4 h-4 inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  mail: `<svg class="w-4 h-4 inline-block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};

function formatCurrency(val) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);
}

const VUKATA_ALLERGENS = {
  apio: {
    id: "apio",
    name: "Apio",
    color: "#68b828",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2C10.5 2 9.5 3.5 10 5c.3 1 .9 2 1 3-1.5-.5-3-1.5-4-1-1.2.6-1 2.2 0 3.2 1 1 2.5 1.5 4 1.5-1 1-2.5 2-2.8 3.5-.3 1.5.5 2.5 1.8 2.5.5 0 1-.2 1.5-.5-.2 1.2.2 2.3 1.2 2.8.8.4 1.8.2 2.3-.5.4-.6.5-1.5.5-2.5 1 .5 2.2.3 2.8-.5.6-.8.4-1.8-.2-2.4-1-.9-2.2-1.4-3.3-1.6 1.2-.8 2.5-1.8 2.8-3.2.4-1.5-.5-2.8-2-2.8-.5 0-1 .2-1.5.5.2-1.2-.1-2.4-1-3.2-.8-.7-1.8-1-2.8-1zM11 9c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V10c0-.6.4-1 1-1z"/></svg>`
  },
  mostaza: {
    id: "mostaza",
    name: "Mostaza",
    color: "#cca038",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M18.5 7.5c-.8-1.5-2.5-2.5-4.5-2.5h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-2.5 0-4.5 1.8-4.5 4 0 1.2.6 2.3 1.5 3.1L5 19c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3l-1-6.9c.9-.8 1.5-1.9 1.5-3.1 0-.6-.4-1.1-.9-1.3zM14 12c-1.1 0-2-.9-2-2 0-.6-.4-1-1-1s-1 .4-1 1c0 2.2 1.8 4 4 4 .6 0 1-.4 1-1s-.4-1-1-1z"/></svg>`
  },
  sesamo: {
    id: "sesamo",
    name: "Granos de Sésamo",
    color: "#9e9e9e",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M8 7c0 1.7 1.3 3 3 3s3-1.3 3-3c0-2-3-5-3-5s-3 3-3 5zm-3 8c0 1.4 1.1 2.5 2.5 2.5S10 16.4 10 15c0-1.7-2.5-4.2-2.5-4.2S5 13.3 5 15zm9 0c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.7-2.5-4.2-2.5-4.2s-2.5 2.5-2.5 4.2z"/></svg>`
  },
  gluten: {
    id: "gluten",
    name: "Gluten",
    color: "#d97746",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2c-.4 1.8-1.8 3.2-3.6 3.6 1.8.4 3.2 1.8 3.6 3.6.4-1.8 1.8-3.2 3.6-3.6-1.8-.4-3.2-1.8-3.6-3.6zm0 7.2c-.5 1.8-1.9 3.2-3.7 3.6 1.8.4 3.2 1.8 3.7 3.6.5-1.8 1.9-3.2 3.7-3.6-1.8-.4-3.2-1.8-3.7-3.6zm-1 9.8v3h2v-3c2-.5 3.5-2 4-4-1.8-.4-3.2-1.8-3.6-3.6-.4 1.8-1.8 3.2-3.6 3.6.5 2 2 3.5 4 4h-2.8z"/></svg>`
  },
  crustaceos: {
    id: "crustaceos",
    name: "Crustáceos",
    color: "#29b6f6",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M21 10.5c-1-1.5-2.8-2.3-4.5-2.1.8-1.3.8-3-.2-4.1-1.2-1.3-3.2-1.3-4.3 0-1.1-1.3-3.1-1.3-4.3 0-1 1.1-1 2.8-.2 4.1-1.7-.2-3.5.6-4.5 2.1-1.1 1.7-.8 3.9.7 5.2l.8.7C4.2 17.5 5 19 6 20c.5.5 1.3.6 1.9.2.7-.4.9-1.2.6-1.9-.5-.9-.9-2-.8-3.1 1.3 1.1 3 1.8 4.8 1.8s3.5-.7 4.8-1.8c.1 1.1-.3 2.2-.8 3.1-.3.7-.1 1.5.6 1.9.6.4 1.4.3 1.9-.2 1-1 1.8-2.5 1.5-3.6l.8-.7c1.5-1.3 1.8-3.5.7-5.2zM7.5 6.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zm9 1.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"/></svg>`
  },
  huevos: {
    id: "huevos",
    name: "Huevos",
    color: "#fb8c00",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C9 3 6.5 7.5 6.5 12.5 6.5 17 9 20.5 12 20.5s5.5-3.5 5.5-8C17.5 7.5 15 3 12 3zm-6 8c-2 0-3.5 2.5-3.5 5.5S4 21 6 21s3.5-2 3.5-4.5-1.5-5.5-3.5-5.5zm12 0c-2 0-3.5 3-3.5 5.5s1.5 4.5 3.5 4.5 3.5-2 3.5-4.5-1.5-5.5-3.5-5.5z"/></svg>`
  },
  pescado: {
    id: "pescado",
    name: "Pescado",
    color: "#283593",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M22 12c-3.5 3-7.5 4.5-12 4.5 2-1.5 3-3 3-4.5s-1-3-3-4.5c4.5 0 8.5 1.5 12 4.5zm-15 4c-1.5 0-3-.5-4.5-1.5L1 15l1.5-3L1 9l1.5.5C4 8.5 5.5 8 7 8l2 4-2 4zm1.5-5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"/></svg>`
  },
  frutos_cascara: {
    id: "frutos_cascara",
    name: "Frutos de Cáscara",
    color: "#b71c1c",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C8 3 4.5 6.5 4.5 11c0 5 4 9.5 7.5 10 3.5-.5 7.5-5 7.5-10 0-4.5-3.5-8-7.5-8zm0 2.5c2.8 0 5 3 5 6.5 0 3.8-3.2 7.2-5 7.5-1.8-.3-5-3.7-5-7.5 0-3.5 2.2-6.5 5-6.5zm-1 2v9c-1.5-.5-3-2.5-3-4.5 0-2.2 1.5-4 3-4.5zm2 0c1.5.5 3 2.3 3 4.5 0 2-1.5 4-3 4.5V7.5z"/></svg>`
  },
  lacteos: {
    id: "lacteos",
    name: "Lácteos",
    color: "#4e342e",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M10 2h4v2h-4V2zm4 3l1 3H9l1-3h4zm2.5 4.5L16 20c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2L7.5 9.5C6.6 9.8 6 10.7 6 11.7V17c0 1.7 1.3 3 3 3h.5l-.5 2H8c-2.8 0-5-2.2-5-5v-5.3c0-2.2 1.5-4.1 3.7-4.6l.8-2.6C7.8 4.2 8.8 3.5 10 3.5h4c1.2 0 2.2.7 2.5 1.9l.8 2.6c2.2.5 3.7 2.4 3.7 4.6V17c0 2.8-2.2 5-5 5h-1l-.5-2h.5c1.7 0 3-1.3 3-3v-5.3c0-1-.6-1.9-1.5-2.2z"/></svg>`
  },
  soja: {
    id: "soja",
    name: "Soja",
    color: "#00a651",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3c-4.5 0-8 3.5-8 8 0 3.5 2.5 6.5 6 7.5V21h4v-2.5c3.5-1 6-4 6-7.5 0-4.5-3.5-8-8-8zm-2 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm4-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`
  },
  cacahuete: {
    id: "cacahuete",
    name: "Cacahuete",
    color: "#c69255",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M15.5 3.5c-1.8 0-3.3 1.1-4 2.6-.7-.8-1.7-1.4-2.8-1.4-2.2 0-4 1.8-4 4 0 1.2.5 2.3 1.4 3-.9.7-1.4 1.8-1.4 3 0 2.2 1.8 4 4 4 1.1 0 2.1-.5 2.8-1.4.7 1.5 2.2 2.6 4 2.6 2.5 0 4.5-2 4.5-4.5 0-1.5-.7-2.8-1.8-3.6 1.1-.8 1.8-2.1 1.8-3.6 0-2.5-2-4.7-4.5-4.7zm-2 9.5c-.8.8-2 .8-2.8 0-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5c.8-.8 2-.8 2.8 0 .8.8.8 2.2 0 3z"/></svg>`
  },
  altramuces: {
    id: "altramuces",
    name: "Altramuces",
    color: "#ffca28",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-5 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm10 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></svg>`
  },
  moluscos: {
    id: "moluscos",
    name: "Moluscos",
    color: "#4fc3f7",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C6.5 3 2 7.5 2 13c0 3.5 1.8 6.5 4.5 8.2l1.2-2.5C5.8 17.5 5 15.5 5 13.5c0-4 3.1-7.5 7-7.5s7 3.5 7 7.5c0 2-.8 4-2.7 5.2l1.2 2.5c2.7-1.7 4.5-4.7 4.5-8.2 0-5.5-4.5-10-10-10zm-1 16.5h2v2.5h-2zM9 13c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-3 5-3 5s-3-3-3-5z"/></svg>`
  },
  sulfitos: {
    id: "sulfitos",
    name: "Dióxido de Azufre y Sulfitos",
    color: "#7b1fa2",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2l7 4v8l-7 4-7-4V6l7-4zm0 2.3L6.5 7.5v6.9l5.5 3.2 5.5-3.2V7.5L12 4.3zM10.2 9h3.6v1.4h-2.2v1.2h1.9v1.3h-1.9v1.4h2.3V16h-3.7V9zm-3.5 2.8h1.8v1.4H6.7v-1.4z"/></svg>`
  }
};

const ALLERGEN_ALIAS = {
  lactosa: 'lacteos',
  huevo: 'huevos',
  cacahuetes: 'cacahuete',
  marisco: 'crustaceos',
  frutos_secos: 'frutos_cascara'
};

function getAllergenDef(code) {
  if (!code) return null;
  const normalized = ALLERGEN_ALIAS[code] || code;
  return VUKATA_ALLERGENS[normalized] || {
    id: normalized,
    name: normalized.charAt(0).toUpperCase() + normalized.slice(1),
    color: '#64748b',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9"/></svg>`
  };
}

function renderAllergenBadge(code, size = 'sm', showLabel = false) {
  const def = getAllergenDef(code);
  if (!def) return '';

  const sizeClasses = {
    xs: { pill: 'w-4 h-4', icon: 'w-2.5 h-2.5', text: 'text-[9px]' },
    sm: { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-[11px]' },
    md: { pill: 'w-7 h-7', icon: 'w-4 h-4', text: 'text-xs' },
    lg: { pill: 'w-9 h-9', icon: 'w-5 h-5', text: 'text-sm' }
  }[size] || { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-xs' };

  if (showLabel) {
    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white shadow-sm" style="background-color: ${def.color};" title="${def.name}">
        <span class="${sizeClasses.icon} flex items-center justify-center flex-shrink-0">${def.svg}</span>
        <span class="${sizeClasses.text} font-bold uppercase tracking-wider">${def.name}</span>
      </span>
    `;
  }

  return `
    <span class="vukata-allergen-pill ${sizeClasses.pill}" style="background-color: ${def.color};" title="Contiene ${def.name}">
      <span class="${sizeClasses.icon} flex items-center justify-center flex-shrink-0">${def.svg}</span>
    </span>
  `;
}

function renderAllergenBadges(allergenList, size = 'sm') {
  if (!allergenList || !Array.isArray(allergenList) || allergenList.length === 0) return '';
  return `
    <div class="inline-flex items-center gap-1 flex-wrap align-middle" title="Alérgenos presentes">
      ${allergenList.map(code => renderAllergenBadge(code, size)).join('')}
    </div>
  `;
}

function renderVukataAllergenLegend(activeAllergens = []) {
  const allergens = Object.values(VUKATA_ALLERGENS);
  return `
    <div class="w-full">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 text-primary mb-2">
          <span class="w-6 h-[2px] bg-primary"></span>
          <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] uppercase font-bold text-primary">DIRECTIVA OFICIAL EUROPEA</span>
          <span class="w-6 h-[2px] bg-primary"></span>
        </div>
        <h3 class="font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold">Información de Alérgenos de Nuestra Carta</h3>
        <p class="font-body-md text-on-surface-variant text-sm mt-2">
          Reglamento (UE) Nº 1169/2011 sobre alérgenos e información alimentaria facilitada al consumidor. Pulsa sobre cualquier alérgeno para filtrar u ocultar platos automáticamente en la carta.
        </p>
      </div>

      <!-- Cuadrícula de 14 alérgenos con tarjetas nítidas sobre fondo blanco alargado -->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 justify-items-center">
        ${allergens.map(a => {
          const isSelected = activeAllergens && activeAllergens.includes(a.id);
          return `
            <button data-allergen="${a.id}" class="flex flex-col items-center text-center group cursor-pointer p-3 sm:p-4 rounded-2xl transition-all w-full border ${
              isSelected
                ? 'bg-primary/5 border-primary shadow-md ring-2 ring-primary/30'
                : 'bg-surface-container-low hover:bg-surface-container-highest border-outline-variant/30 hover:border-outline-variant/60 shadow-xs'
            }" title="${isSelected ? 'Quitar filtro de ' + a.name : 'Filtrar platos con ' + a.name}">
              <span class="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 flex-shrink-0" style="background-color: ${a.color};">
                <span class="w-5 h-5 flex items-center justify-center">${a.svg}</span>
              </span>
              <span class="font-kicker-eyebrow text-[11px] font-bold text-on-surface uppercase tracking-tight mt-2.5 leading-tight group-hover:text-primary transition-colors">
                ${a.name}
              </span>
              ${isSelected ? '<span class="text-[10px] text-primary font-bold mt-1">✕ Activo</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>

      <div class="mt-10 pt-8 border-t border-outline-variant/20 text-center space-y-1.5 text-xs text-on-surface-variant">
        <p class="font-bold text-on-surface text-sm">Todos los precios de nuestra carta incluyen el IVA. Los platos se mantendrán hasta fin de existencias.</p>
        <p class="text-primary font-medium">Consulte siempre a nuestro personal de sala sobre alérgenos específicos, protocolos de cocina y opciones para intolerancias.</p>
      </div>
    </div>
  `;
}

function getAllergenLabel(code) {
  const def = getAllergenDef(code);
  return def ? def.name : code;
}


const STORAGE_KEY = 'devcorp_gastrosuite_state_estilo2_v1';

const INITIAL_DISH_SALES = {
  "e1_asado": 54, "e1_emp": 48, "e1_pro": 39, "e1_hue": 42, "e1_parr2": 37, "e1_tarta": 45,
  "e2_1": 78, "e2_2": 52, "e2_3": 41, "e2_4": 64, "e2_5": 39, "e2_6": 47,
  "e3_1": 65, "e3_2": 44, "e3_3": 58, "e3_4": 49, "e3_5": 32, "e3_6": 41,
  "e4_1": 82, "e4_2": 114, "e4_3": 56, "e4_4": 69, "e4_5": 48, "e4_6": 39
};

const INITIAL_DEMO_ORDERS = [
  {
    id: "ORD-101",
    timestamp: "14:15",
    type: "mesa",
    tableNumber: "Mesa 4 (Comedor)",
    customerName: "Carlos M.",
    items: [
      { id: "item_1", name: "Plato Especial", qty: 1, price: 17.50, notes: "Al punto" }
    ],
    total: 17.50,
    status: "kitchen",
    elapsedMinutes: 14
  }
];

class AppStore {
  constructor() {
    this.subscribers = [];
    this.state = this.loadState();
  }

  loadState() {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            presetId: 'estilo2',
            currentView: parsed.currentView || 'menu',
            cart: parsed.cart || [],
            orders: (parsed.orders && parsed.orders.length > 0) ? parsed.orders : INITIAL_DEMO_ORDERS,
            reservations: parsed.reservations || [],
            dishSales: parsed.dishSales || INITIAL_DISH_SALES,
            activeCategory: 'all',
            activeAllergenFilter: null,
            activeAllergenFilters: []
          };
        }
      } catch (e) {
        console.warn("Could not read local state, fallback to initial", e);
      }
    }

    return {
      presetId: 'estilo2',
      currentView: 'menu',
      cart: [],
      orders: INITIAL_DEMO_ORDERS,
      reservations: [],
      dishSales: { ...INITIAL_DISH_SALES },
      activeCategory: 'all',
      activeAllergenFilter: null,
      activeAllergenFilters: []
    };
  }

  save() {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          presetId: 'estilo2',
          currentView: this.state.currentView,
          cart: this.state.cart,
          orders: this.state.orders,
          reservations: this.state.reservations,
          dishSales: this.state.dishSales
        }));
      } catch (e) {
        console.warn("Could not save state", e);
      }
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.state));
  }

  getPreset() {
    return window.CURRENT_PRESET;
  }

  setPreset(presetId) {
    if (presetId !== 'estilo2') {
      window.location.href = '../' + presetId + '/index.html';
    }
  }

  setView(viewName) {
    this.state.currentView = viewName;
    this.save();
  }

  setCategory(cat) {
    this.state.activeCategory = cat;
    this.notify();
  }

  toggleAllergenFilter(allergen) {
    if (!this.state.activeAllergenFilters) {
      this.state.activeAllergenFilters = [];
    }
    const idx = this.state.activeAllergenFilters.indexOf(allergen);
    if (idx > -1) {
      this.state.activeAllergenFilters.splice(idx, 1);
    } else {
      this.state.activeAllergenFilters.push(allergen);
    }
    this.state.activeAllergenFilter = this.state.activeAllergenFilters[0] || null;
    this.notify();
  }

  clearAllergenFilters() {
    this.state.activeAllergenFilters = [];
    this.state.activeAllergenFilter = null;
    this.notify();
  }

  setAllergenFilter(allergen) {
    this.toggleAllergenFilter(allergen);
  }

  getDishSalesCount(dishId) {
    return this.state.dishSales[dishId] || 15;
  }

  getMostOrderedDish() {
    const preset = this.getPreset();
    let topDish = (preset && preset.menu && preset.menu[0]) ? preset.menu[0] : null;
    let maxCount = -1;

    if (preset && preset.menu) {
      preset.menu.forEach(dish => {
        const count = this.getDishSalesCount(dish.id);
        if (count > maxCount) {
          maxCount = count;
          topDish = dish;
        }
      });
    }

    return {
      dish: topDish,
      count: maxCount > 0 ? maxCount : 15
    };
  }

  incrementDishSale(dishId, qty = 1) {
    if (!this.state.dishSales[dishId]) {
      this.state.dishSales[dishId] = 15;
    }
    this.state.dishSales[dishId] += qty;
    this.save();
  }

  addToCart(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    this.save();
  }

  addToCartSilent(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          presetId: 'estilo2',
          currentView: this.state.currentView,
          cart: this.state.cart,
          orders: this.state.orders,
          reservations: this.state.reservations,
          dishSales: this.state.dishSales
        }));
      } catch (e) {
        console.warn("Could not save state silently", e);
      }
    }
  }

  removeFromCart(index) {
    if (this.state.cart[index]) {
      this.state.cart.splice(index, 1);
      this.save();
    }
  }

  updateCartQty(index, delta) {
    if (this.state.cart[index]) {
      this.state.cart[index].qty += delta;
      if (this.state.cart[index].qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.save();
      }
    }
  }

  clearCart() {
    this.state.cart = [];
    this.save();
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartItemCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  createOrder(orderData) {
    const newOrder = {
      id: "ORD-" + Math.floor(100 + Math.random() * 900),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: orderData.type || "mesa",
      tableNumber: orderData.tableNumber || (orderData.type === "mesa" ? "Mesa 1 (Sala)" : "Para Llevar"),
      customerName: orderData.customerName || "Cliente",
      phone: orderData.phone || "",
      address: orderData.address || "",
      notes: orderData.notes || "",
      items: [...this.state.cart],
      total: this.getCartTotal(),
      status: "pending",
      elapsedMinutes: 0
    };

    this.state.orders.unshift(newOrder);

    this.state.cart.forEach(item => {
      this.incrementDishSale(item.id, item.qty);
    });

    this.clearCart();
    this.save();
    return newOrder;
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      this.save();
    }
  }

  addReservation(reservationData) {
    const newRes = {
      id: "RES-" + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toLocaleString(),
      ...reservationData,
      status: "confirmed"
    };
    this.state.reservations.unshift(newRes);
    this.save();
    return newRes;
  }

  resetDemo() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    this.state = this.loadState();
    this.notify();
  }
}

const store = new AppStore();
window.store = store;

class GastroApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.modalQty = 1;
    this.currentModalDish = null;
    this.menuMode = 'cards';
    this.isAllergenBoxOpen = false;
    this.currentPresetId = 'estilo2';
    this.init();
  }

  init() {
    store.subscribe(() => {
      this.render();
    });
    this.setupGlobalEvents();
    this.render();
  }

  setupGlobalEvents() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('scroll', () => {
        this.updateHeaderScroll();
      }, { passive: true });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox-container');
        if (lb && lb.innerHTML !== '') {
          this.renderLightbox(null);
          return;
        }
        const dishModal = document.getElementById('dish-modal-container');
        if (dishModal && dishModal.innerHTML !== '') {
          dishModal.innerHTML = '';
          this.currentModalDish = null;
          this.modalQty = 1;
          return;
        }
        const reviewModal = document.getElementById('review-modal-container');
        if (reviewModal && reviewModal.innerHTML !== '') {
          reviewModal.innerHTML = '';
          return;
        }
        const checkoutModal = document.getElementById('checkout-modal-container');
        if (checkoutModal && checkoutModal.innerHTML !== '') {
          checkoutModal.innerHTML = '';
          return;
        }
        const cartDrawer = document.getElementById('cart-drawer-container');
        if (cartDrawer && cartDrawer.innerHTML !== '') {
          this.renderCartDrawer(false);
          return;
        }
      }
    });

    document.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('[data-view]');
      if (viewBtn) {
        e.preventDefault();
        store.setView(viewBtn.getAttribute('data-view'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const modalMinus = e.target.closest('[data-modal-qty-minus]');
      if (modalMinus) {
        e.preventDefault();
        e.stopPropagation();
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
        return;
      }
      const modalPlus = e.target.closest('[data-modal-qty-plus]');
      if (modalPlus) {
        e.preventDefault();
        e.stopPropagation();
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
        return;
      }

      const modalAddBtn = e.target.closest('[data-modal-add-cart]');
      if (modalAddBtn && this.currentModalDish) {
        e.preventDefault();
        e.stopPropagation();
        const dish = this.currentModalDish;
        store.addToCartSilent(dish, "", this.modalQty);
        this.updateCartBadge();
        this.showToast(`✓ ${dish.name} (x${this.modalQty}) añadido a la comanda`);
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      const modeBtn = e.target.closest('[data-menu-mode]');
      if (modeBtn) {
        e.preventDefault();
        e.stopPropagation();
        const newMode = modeBtn.getAttribute('data-menu-mode');
        if (this.menuMode !== newMode) {
          this.menuMode = newMode;
          const savedScrollY = (typeof window !== 'undefined') ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
          const content = document.getElementById('view-content');
          if (content) {
            const prevH = content.offsetHeight;
            if (prevH > 0) content.style.minHeight = `${prevH}px`;
            this.renderMenuView(content, store.getPreset());
            if (savedScrollY > 0 && typeof window !== 'undefined') {
              window.scrollTo({ top: savedScrollY, behavior: 'instant' });
              requestAnimationFrame(() => {
                window.scrollTo({ top: savedScrollY, behavior: 'instant' });
                setTimeout(() => { if (content) content.style.minHeight = ''; }, 50);
              });
            } else {
              content.style.minHeight = '';
            }
          }
        }
        return;
      }

      const lbBtn = e.target.closest('[data-open-lightbox]');
      if (lbBtn) {
        e.preventDefault();
        e.stopPropagation();
        const imgUrl = lbBtn.getAttribute('data-open-lightbox');
        const imgTitle = lbBtn.getAttribute('data-lightbox-title') || 'Plato';
        if (imgUrl) {
          this.renderLightbox(imgUrl, imgTitle);
        }
        return;
      }
      if (e.target.closest('#close-lightbox') || e.target.id === 'lightbox-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        this.renderLightbox(null);
        return;
      }

      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat') || 'all';
        const catName = catPill.getAttribute('data-category-name');
        
        document.querySelectorAll('.cat-filter').forEach(btn => {
          btn.classList.remove('active', 'bg-inverse-surface', 'text-inverse-on-surface');
          btn.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        catPill.classList.add('active', 'bg-inverse-surface', 'text-inverse-on-surface');
        catPill.classList.remove('bg-surface-container', 'text-on-surface-variant');

        const groups = document.querySelectorAll('.menu-group');
        groups.forEach(g => {
          const gId = g.getAttribute('data-group');
          const gCat = g.getAttribute('data-category');
          if (cat === 'all' || gId === cat || gCat === cat || (catName && gCat === catName)) {
            g.style.display = 'block';
          } else {
            g.style.display = 'none';
          }
        });

        store.state.activeCategory = cat;
        return;
      }

      const catBtn = e.target.closest('button[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      const allergenBtn = e.target.closest('[data-allergen]');
      if (allergenBtn) {
        e.preventDefault();
        store.toggleAllergenFilter(allergenBtn.getAttribute('data-allergen'));
        return;
      }

      const clearAllergensBtn = e.target.closest('[data-clear-allergens]');
      if (clearAllergensBtn) {
        e.preventDefault();
        store.clearAllergenFilters();
        return;
      }

      const openDishBtn = e.target.closest('[data-open-dish-modal]');
      if (openDishBtn) {
        e.preventDefault();
        const dishId = openDishBtn.getAttribute('data-open-dish-modal');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          this.renderDishDetailModal(dish, preset);
        }
        return;
      }

      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) {
        e.preventDefault();
        e.stopPropagation();
        const dishId = addCartBtn.getAttribute('data-add-cart');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          store.addToCartSilent(dish);
          this.updateCartBadge();
          this.showToast(`✓ ${dish.name} añadido a la comanda`);
        }
        return;
      }

      const simBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simBtn) {
        e.preventDefault();
        const dishId = simBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(`+1 Venta simulada para estadísticas en vivo`);
        return;
      }

      if (e.target.closest('#open-cart-btn') || e.target.closest('#mobile-cart-btn')) {
        this.renderCartDrawer(true);
        return;
      }
      if (e.target.closest('#close-cart-btn') || e.target.closest('#cart-backdrop')) {
        this.renderCartDrawer(false);
        return;
      }

      const plusBtn = e.target.closest('[data-cart-plus]');
      if (plusBtn) {
        store.updateCartQty(parseInt(plusBtn.getAttribute('data-cart-plus')), 1);
        this.renderCartDrawer(true);
        return;
      }
      const minusBtn = e.target.closest('[data-cart-minus]');
      if (minusBtn) {
        store.updateCartQty(parseInt(minusBtn.getAttribute('data-cart-minus')), -1);
        this.renderCartDrawer(true);
        return;
      }
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        store.removeFromCart(parseInt(removeBtn.getAttribute('data-cart-remove')));
        this.renderCartDrawer(true);
        return;
      }

      if (e.target.closest('#open-checkout-modal-btn')) {
        this.renderCartDrawer(false);
        this.renderCheckoutModal();
        return;
      }
      if (e.target.closest('#close-checkout-modal') || e.target.id === 'checkout-modal-backdrop') {
        const container = document.getElementById('checkout-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      if (e.target.closest('#close-review-modal') || e.target.id === 'review-modal-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        const container = document.getElementById('review-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      if (e.target.closest('#toggle-allergens')) {
        e.preventDefault();
        e.stopPropagation();
        const box = document.getElementById('allergen-box');
        if (box) {
          box.classList.toggle('hidden');
          this.isAllergenBoxOpen = !box.classList.contains('hidden');
        }
        return;
      }
    });

    document.addEventListener('submit', (e) => {
      if (e.target.id === 'reservas-direct-form') {
        e.preventDefault();
        const nameInput = document.getElementById('direct-res-name');
        const phoneInput = document.getElementById('direct-res-phone');
        const guestsInput = document.getElementById('direct-res-guests');
        const dateInput = document.getElementById('direct-res-date');
        const shiftInput = document.getElementById('direct-res-shift');
        
        const name = nameInput ? nameInput.value : 'Comensal';
        const phone = phoneInput ? phoneInput.value : '';
        const guests = guestsInput ? guestsInput.value : '2';
        const date = dateInput ? dateInput.value : new Date().toISOString().split('T')[0];
        const time = shiftInput ? shiftInput.value : '21:00';

        store.addReservation({
          name, phone, guests: parseInt(guests), date, time, zone: 'Mesa Brasas Directa'
        });

        const successBanner = document.getElementById('res-direct-success');
        if (successBanner) {
          successBanner.classList.remove('hidden');
          e.target.reset();
          setTimeout(() => {
            successBanner.classList.add('hidden');
          }, 6000);
        } else {
          this.showToast(`✓ Mesa reservada para ${name} (${guests} personas)`);
          e.target.reset();
        }
      }

      if (e.target.id === 'checkout-form') {
        e.preventDefault();
        const customerName = document.getElementById('checkout-name').value;
        const phone = document.getElementById('checkout-phone').value;
        const orderType = document.querySelector('input[name="orderType"]:checked').value;
        const tableNumber = (orderType === 'mesa') ? (document.getElementById('checkout-table').value || "Mesa 1") : "Take Away";
        const address = (orderType === 'delivery') ? (document.getElementById('checkout-address').value || "") : "";
        const notes = document.getElementById('checkout-notes') ? document.getElementById('checkout-notes').value : "";

        const order = store.createOrder({
          customerName, phone, type: orderType, tableNumber, address, notes
        });

        const modalBody = document.getElementById('checkout-modal-body');
        if (modalBody) {
          modalBody.innerHTML = `
            <div class="p-8 text-center space-y-4">
              <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900">¡Comanda Recibida en Cocina!</h3>
              <p class="text-sm text-slate-600">Número de Pedido: <strong>${order.id}</strong></p>
              <p class="text-xs text-slate-500">Goran Vukata y el equipo de brasas han recibido tu comanda al instante en la pantalla KDS.</p>
              <div class="pt-4">
                <button id="close-checkout-modal" class="btn-primary w-full py-3 rounded-xl font-bold">Cerrar y seguir navegando</button>
              </div>
            </div>
          `;
        }
      }
    });
  }

  render(preserveScroll = true) {
    const preset = store.getPreset();
    const currentView = store.state.currentView;
    const cartCount = store.getCartItemCount();

    const savedScrollY = (preserveScroll && typeof window !== 'undefined')
      ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0)
      : 0;

    document.documentElement.className = `min-h-screen ${preset.themeClass}`;
    document.body.className = `min-h-screen flex flex-col font-sans antialiased ${preset.themeClass}`;

    const isShellMounted = (
      this.currentRenderedView === currentView &&
      document.getElementById('view-content')
    );

    if (isShellMounted) {
      const content = document.getElementById('view-content');
      const prevHeight = content ? content.offsetHeight : 0;
      if (content && prevHeight > 0) {
        content.style.minHeight = `${prevHeight}px`;
      }
      if (currentView === 'menu') {
        this.renderMenuView(content, preset);
      } else if (currentView === 'reservations') {
        this.renderReservationsView(content, preset);
      } else if (currentView === 'kds') {
        this.renderKdsView(content, preset);
      } else if (currentView === 'metrics') {
        this.renderMetricsView(content, preset);
      } else if (currentView === 'roi') {
        this.renderRoiView(content, preset);
      }
      this.updateCartBadge();
      this.updateHeaderScroll();

      if (savedScrollY > 0 && typeof window !== 'undefined') {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedScrollY, behavior: 'instant' });
          if (content) content.style.minHeight = '';
        });
      } else if (content) {
        content.style.minHeight = '';
      }
      return;
    }

    this.currentRenderedView = currentView;

    const headerHtml = this.renderHeaderForStyle(preset, currentView, cartCount);
    const footerHtml = this.renderFooterForStyle(preset);

    this.appContainer.innerHTML = `
      ${headerHtml}

      <!-- CONTENEDOR PRINCIPAL -->
      ${preset.id === 'estilo1' ? `
        <main class="w-full pt-20 bg-surface flex-1">
          <div id="view-content" class="flex flex-col w-full ${currentView !== 'menu' ? 'max-w-[1360px] mx-auto px-6 lg:px-10 py-10' : ''}"></div>
        </main>
      ` : `
        <main class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full pt-20">
          <div id="view-content"></div>
        </main>
      `}

      <!-- CONTENEDORES DE MODALES TEMÁTICOS Y LIGHTBOX -->
      <div id="lightbox-container"></div>
      <div id="dish-modal-container"></div>
      <div id="cart-drawer-container"></div>
      <div id="checkout-modal-container"></div>
      <div id="review-modal-container"></div>

      ${footerHtml}
    `;

    const styleSelect = document.getElementById('style-select');
    if (styleSelect) {
      styleSelect.addEventListener('change', (e) => {
        const target = e.target.value;
        if (target !== 'estilo2') {
          window.location.href = '../' + target + '/index.html';
        }
      });
    }

    this.updateHeaderScroll();

    const content = document.getElementById('view-content');
    if (currentView === 'menu') {
      this.renderMenuView(content, preset);
    } else if (currentView === 'reservations') {
      this.renderReservationsView(content, preset);
    } else if (currentView === 'kds') {
      this.renderKdsView(content, preset);
    } else if (currentView === 'metrics') {
      this.renderMetricsView(content, preset);
    } else if (currentView === 'roi') {
      this.renderRoiView(content, preset);
    }

    if (savedScrollY > 0 && typeof window !== 'undefined') {
      window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      });
    }
  }

  renderMenuView(container, preset) {
    const activeCategory = store.state.activeCategory;
    const activeAllergens = (store.state.activeAllergenFilters && Array.isArray(store.state.activeAllergenFilters))
      ? store.state.activeAllergenFilters
      : (store.state.activeAllergenFilter ? [store.state.activeAllergenFilter] : []);
    const topData = store.getMostOrderedDish();

    let filteredMenu = preset.menu;
    if (activeCategory !== 'all') {
      filteredMenu = filteredMenu.filter(d => d.category === activeCategory);
    }
    if (activeAllergens.length > 0) {
      filteredMenu = filteredMenu.filter(d => {
        if (!d.allergens || !Array.isArray(d.allergens)) return true;
        return !d.allergens.some(a => {
          const norm = ALLERGEN_ALIAS[a] || a;
          return activeAllergens.includes(norm) || activeAllergens.includes(a);
        });
      });
    }

    const layoutHtml = this.renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) + this.renderGoogleReviewsSection(preset);;
    container.innerHTML = layoutHtml;
  }

    renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    return `
      <!-- TOP DESTACADO EN BENTO APP -->
      <div class="mb-6 p-4 rounded-2xl bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-100">
        <div class="flex items-center space-x-3">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Top de la Barra</span>
              <span class="text-[10px] text-slate-400 font-mono">(${topData.count} comandas hoy)</span>
            </div>
            <h3 class="text-base font-bold mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</h3>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-3 py-1.5 rounded-xl border border-slate-700 flex items-center space-x-1">
            ${ICONS.eye}
            <span>Detalle</span>
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow">
            Añadir
          </button>
        </div>
      </div>

      <!-- HERO BENTO GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div class="bento-card p-6 md:col-span-2 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">${preset.type}</span>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">${preset.name}</h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">${preset.tagline}</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
            <span>📍 ${preset.address}</span>
            <span>·</span>
            <span>📞 ${preset.phone}</span>
            <span>·</span>
            <span class="text-sky-400 font-bold">★ ${preset.rating} (${preset.totalReviews} reseñas)</span>
          </div>
        </div>

        <div class="bento-card p-6 flex flex-col justify-between">
          <span class="text-xs font-bold text-sky-400 uppercase">Especialidad de la Casa</span>
          <div>
            <h3 class="text-lg font-bold text-white mt-2">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-slate-300 mt-1">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs text-slate-400 font-mono">Bestseller</span>
            <span class="text-xs font-mono text-sky-400 font-bold">${preset.aboutUs.specialtyHighlight.price || preset.aboutUs.specialtyHighlight.badge || ""}</span>
          </div>
        </div>
      </div>

      <!-- SOBRE NOSOTROS: BENTO METRICS -->
      <section class="mb-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${(preset.aboutUs.bentoCards || preset.aboutUs.pillars || []).map(b => `
            <div class="bento-card p-5">
              <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">${b.tag || b.icon || "DESTACADO"}</span>
              <span class="text-xl sm:text-2xl font-black text-white block mt-1">${b.metric || b.title}</span>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">${b.label || b.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS Y FILTROS DE ALÉRGENOS (ESTILO 2) -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-800">
        <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar">
          <button data-category="all" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
            Todo (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Filtro de alérgenos estilo App -->
        <div class="flex items-center space-x-2 text-xs font-mono">
          <span class="text-slate-400 text-[11px]">Alérgenos:</span>
          <button data-allergen="gluten" class="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${activeAllergens && activeAllergens.includes('gluten') ? 'bg-sky-600 border-sky-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}">
            🌾 Sin Gluten
          </button>
          <button data-allergen="lactosa" class="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${(activeAllergens && (activeAllergens.includes('lactosa') || activeAllergens.includes('lacteos'))) ? 'bg-sky-600 border-sky-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}">
            🥛 Sin Lactosa
          </button>
          ${activeAllergens && activeAllergens.length > 0 ? `
            <button data-clear-allergens class="text-xs text-sky-400 hover:underline px-1.5">✕ Limpiar</button>
          ` : ''}
        </div>
      </div>

      <!-- CUADRÍCULA DE PLATOS TIPO APP BENTO -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="bento-card p-4 flex flex-col justify-between group">
              <div>
                <div class="relative h-48 rounded-xl overflow-hidden mb-3 bg-slate-800 cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-slate-900/90 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                  <button data-open-lightbox="${dish.image}" data-lightbox-title="${dish.name}" class="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity" title="Ampliar imagen completa">
                    ${ICONS.zoom}
                  </button>
                  <div class="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    ${ICONS.eye}
                    <span>Info</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>${dish.category}</span>
                  <span>⏱️ ${dish.prepTime || '6 min'}</span>
                </div>
                <h3 class="text-base font-bold text-white cursor-pointer hover:text-sky-300 transition-colors" data-open-dish-modal="${dish.id}">${dish.name}</h3>
                <p class="text-xs text-slate-300 mt-1 line-clamp-2">${dish.description}</p>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="font-mono text-lg font-bold text-white">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-slate-500">${sales} pedidos hoy</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-open-dish-modal="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-2.5 py-1.5 rounded-lg" title="Ver ingredientes y alérgenos">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-slate-400 text-[11px] px-2 py-1.5 rounded-lg">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA CON FILTROS Y FOTOS
  // -------------------------------------------------------------------------

    renderHeaderForStyle(preset, currentView, cartCount) {
    const kdsPending = store.state.orders.filter(o => o.status !== 'served').length;

    // Selector HTML estándar adaptado a la estética de cada estilo
    const selectorHtml = `
      <select id="style-select" class="text-xs font-semibold rounded-xl py-2 px-3 focus:outline-none focus:ring-2 transition-all cursor-pointer shadow-sm ${
        preset.id === 'estilo1' ? 'bg-white text-stone-900 border-2 border-[#8B1E1E]/40 focus:ring-[#8B1E1E]' :
        preset.id === 'estilo2' ? 'bg-slate-900 text-sky-300 border border-slate-700 focus:ring-sky-500' :
        preset.id === 'estilo3' ? 'bg-white text-[#3d3228] border-2 border-[#8c7b6c] focus:ring-[#8c7b6c] font-serif' :
        'bg-white text-zinc-800 border border-zinc-300 focus:ring-zinc-900'
      }">
        <option value="estilo1" ${preset.id === 'estilo1' ? 'selected' : ''}>Estilo 1: Parrilla Vukata</option>
        <option value="estilo2" ${preset.id === 'estilo2' ? 'selected' : ''}>Estilo 2: Cervecería 27</option>
        <option value="estilo3" ${preset.id === 'estilo3' ? 'selected' : ''}>Estilo 3: Pizzería Carlos</option>
        <option value="estilo4" ${preset.id === 'estilo4' ? 'selected' : ''}>Estilo 4: Cervecería Veinti7</option>
      </select>
    `;

    // --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      const scrollY = (typeof window !== 'undefined') ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0) : 0;
      const isAtTop = (currentView === 'menu' && scrollY <= 45);

      return `
        <header id="main-header" class="fixed top-0 w-full z-50 transition-all duration-300 ${isAtTop ? 'is-transparent-dark' : 'is-light-scrolled'}">
          <div class="h-20 max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
            
            <!-- Identidad: Logo DevCorp Oficial + Separador + Logotipo Vukata -->
            <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center group flex-shrink-0" title="DevCorp Solutions">
                <img src="../assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow transition-transform group-hover:scale-105"/>
              </a>
              <div class="h-8 w-[1px] header-divider hidden sm:block"></div>
              <button data-view="menu" class="flex items-center gap-2.5 group text-decoration-none cursor-pointer bg-transparent border-0 text-left p-0">
                <span class="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">local_fire_department</span>
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm tracking-tight leading-none font-semibold header-brand-title">VU<span class="text-[#E52D27]">KA</span>TA</span>
                  <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] uppercase mt-1 header-brand-sub">ASADOR · PARRILLA</span>
                </div>
              </button>
            </div>

            <!-- Navegación Central Stitch (Cápsula Segmentada con las Vistas del Sistema) -->
            <nav class="hidden md:flex items-center gap-1 header-nav-capsule px-2 py-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] border">
              <button data-view="menu" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer ${currentView === 'menu' ? 'active-view font-semibold shadow-xs' : ''}">
                Carta
              </button>
              <button data-view="reservations" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer ${currentView === 'reservations' ? 'active-view font-semibold shadow-xs' : ''}">
                Reservas
              </button>
              <button data-view="kds" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer flex items-center gap-1.5 ${currentView === 'kds' ? 'active-view font-semibold shadow-xs' : ''}">
                <span>Cocina</span>
                ${kdsPending > 0 ? `<span class="bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.2 rounded-full">${kdsPending}</span>` : ''}
              </button>
              <button data-view="metrics" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer ${currentView === 'metrics' ? 'active-view font-semibold shadow-xs' : ''}">
                Métricas
              </button>
              <button data-view="roi" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer ${currentView === 'roi' ? 'active-view font-semibold shadow-xs' : ''}">
                Rentabilidad
              </button>
            </nav>

            <!-- Acciones: Selector de Estilos, Botón Reservar y Carrito -->
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              ${selectorHtml}

              <button data-view="reservations" class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(156,56,44,0.2)] cursor-pointer">
                <span class="material-symbols-outlined text-[18px]">restaurant</span>
                <span class="hidden sm:inline">Reservar mesa</span>
              </button>

              <button id="open-cart-btn" class="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-label-action text-label-action transition-colors shadow-sm cursor-pointer border" title="Ver comanda">
                <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span class="font-bold font-mono text-xs sm:text-sm">${formatCurrency(store.getCartTotal())}</span>
                ${cartCount > 0 ? `<span class="bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full">${cartCount}</span>` : ''}
              </button>
            </div>

          </div>

          <!-- Barra táctil de vistas para móviles y tablets -->
          <div id="mobile-nav-bar" class="md:hidden border-t px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-label-action whitespace-nowrap">
            <button data-view="menu" class="px-3 py-1.5 rounded-full ${currentView === 'menu' ? 'active-view font-semibold shadow-xs' : ''}">Carta</button>
            <button data-view="reservations" class="px-3 py-1.5 rounded-full ${currentView === 'reservations' ? 'active-view font-semibold shadow-xs' : ''}">Reservas</button>
            <button data-view="kds" class="px-3 py-1.5 rounded-full ${currentView === 'kds' ? 'active-view font-semibold shadow-xs' : ''}">Cocina (${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1.5 rounded-full ${currentView === 'metrics' ? 'active-view font-semibold shadow-xs' : ''}">Métricas</button>
            <button data-view="roi" class="px-3 py-1.5 rounded-full ${currentView === 'roi' ? 'active-view font-semibold shadow-xs' : ''}">Rentabilidad</button>
          </div>
        </header>
      `;
    }

    

    // --- CABECERA ESTILO 2: APP INTERACTIVA & BENTO GRID ---
    if (preset.id === 'estilo2') {
      return `
        <header class="sticky top-0 z-40 bg-[#070a13]/90 backdrop-blur-md text-slate-100 border-b border-slate-800">
          <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20 sm:h-24 py-2 gap-2">
              
              <div class="flex items-center space-x-3 flex-shrink-0">
                <a href="https://devcorpsolutions.com" target="_blank" class="flex-shrink-0 group" title="DevCorp Solutions">
                  <img src="../assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow transition-transform group-hover:scale-105"/>
                </a>
                <span class="hidden xl:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  ${preset.serviceStatus}
                </span>
              </div>

              <!-- Cápsula Flotante (Segmented Control) -->
              <nav class="hidden lg:flex items-center bento-pill-nav space-x-1.5 text-xs font-semibold">
                <button data-view="menu" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'menu' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Carta Interactiva</button>
                <button data-view="reservations" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'reservations' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Reservas</button>
                <button data-view="kds" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'kds' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">KDS Cocina (${kdsPending})</button>
                <button data-view="metrics" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'metrics' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Métricas</button>
                <button data-view="roi" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'roi' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Ahorro 0%</button>
              </nav>

              <div class="flex items-center space-x-2.5 flex-shrink-0">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow flex items-center space-x-1.5">
                  ${ICONS.cart}
                  <span class="font-mono">${formatCurrency(store.getCartTotal())}</span>
                  ${cartCount > 0 ? `<span class="bg-white text-blue-800 text-[10px] font-black px-1.5 py-0.2 rounded-full">${cartCount}</span>` : ''}
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil táctil con botones redondeados -->
          <nav class="lg:hidden bg-slate-900 border-t border-slate-800 px-2 py-2 overflow-x-auto no-scrollbar flex items-center space-x-2 text-xs font-medium min-w-max">
            <button data-view="menu" class="px-3 py-1.5 rounded-lg ${currentView === 'menu' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Carta</button>
            <button data-view="reservations" class="px-3 py-1.5 rounded-lg ${currentView === 'reservations' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Reservas</button>
            <button data-view="kds" class="px-3 py-1.5 rounded-lg ${currentView === 'kds' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Cocina (${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1.5 rounded-lg ${currentView === 'metrics' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Métricas</button>
            <button data-view="roi" class="px-3 py-1.5 rounded-lg ${currentView === 'roi' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Ahorro</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA ---
    if (preset.id === 'estilo3') {
      return `
        <header class="sticky top-0 z-40 bg-[#f6f3eb] text-[#2b2520] border-b-2 border-[#8c7b6c] shadow-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20 sm:h-24 py-2">
              
              <div class="flex items-center space-x-4 flex-shrink-0">
                <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" class="group">
                  <img src="../assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"/>
                </a>
                <div class="hidden sm:block border-l-2 border-[#8c7b6c]/40 pl-3">
                  <span class="font-serif font-bold text-base block text-[#3d3228]">${preset.name}</span>
                  <span class="text-[10px] text-[#7a6b5d] uppercase tracking-wider block font-sans">${preset.neighborhood || 'Madrid'} · Tel. ${preset.phone}</span>
                </div>
              </div>

              <!-- Menú Clásico de Fichero / Pestañas Rectangulares -->
              <nav class="hidden md:flex items-center space-x-1.5 font-serif text-sm font-semibold">
                <button data-view="menu" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'menu' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Carta del Día</button>
                <button data-view="reservations" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'reservations' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Reservar Mesa</button>
                <button data-view="kds" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'kds' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comandero (${kdsPending})</button>
                <button data-view="metrics" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'metrics' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Caja & Datos</button>
                <button data-view="roi" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'roi' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comparativa Comisiones</button>
              </nav>

              <div class="flex items-center space-x-2.5 flex-shrink-0">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] text-xs font-bold px-3.5 py-2 rounded shadow flex items-center space-x-1.5 font-serif">
                  ${ICONS.cart}
                  <span>Comanda (${cartCount})</span>
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil estilo fichero -->
          <nav class="md:hidden bg-[#eee7db] border-t border-[#8c7b6c] px-3 py-2 overflow-x-auto no-scrollbar flex items-center space-x-2.5 text-xs font-serif min-w-max">
            <button data-view="menu" class="px-2.5 py-1.5 rounded ${currentView === 'menu' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Carta</button>
            <button data-view="reservations" class="px-2.5 py-1.5 rounded ${currentView === 'reservations' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Reservas</button>
            <button data-view="kds" class="px-2.5 py-1.5 rounded ${currentView === 'kds' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comandero (${kdsPending})</button>
            <button data-view="metrics" class="px-2.5 py-1.5 rounded ${currentView === 'metrics' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Caja</button>
            <button data-view="roi" class="px-2.5 py-1.5 rounded ${currentView === 'roi' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comisiones</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO ---
    return `
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-zinc-900 border-b border-zinc-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20 sm:h-24 py-2">
            
            <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center space-x-3 flex-shrink-0 group" title="DevCorp Solutions">
              <img src="../assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"/>
              <span class="text-xs font-medium tracking-widest text-zinc-500 uppercase hidden sm:inline">${preset.name}</span>
            </a>

            <!-- Navegación Minimalista Espaciada -->
            <nav class="hidden md:flex items-center space-x-9 text-xs font-light tracking-widest uppercase">
              <button data-view="menu" class="transition-colors ${currentView === 'menu' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Menú</button>
              <button data-view="reservations" class="transition-colors ${currentView === 'reservations' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Mesa</button>
              <button data-view="kds" class="transition-colors ${currentView === 'kds' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Obrador (${kdsPending})</button>
              <button data-view="metrics" class="transition-colors ${currentView === 'metrics' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Estadísticas</button>
              <button data-view="roi" class="transition-colors ${currentView === 'roi' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Rentabilidad</button>
            </nav>

            <div class="flex items-center space-x-3 flex-shrink-0">
              ${selectorHtml}
              <button id="open-cart-btn" class="text-xs font-medium tracking-wide flex items-center space-x-1.5 text-zinc-900 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-lg transition-colors">
                ${ICONS.cart}
                <span>(${cartCount})</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Barra móvil minimalista -->
        <nav class="md:hidden bg-zinc-50 border-t border-zinc-200 px-3 py-2.5 overflow-x-auto no-scrollbar flex items-center space-x-6 text-xs font-light tracking-widest uppercase min-w-max">
          <button data-view="menu" class="${currentView === 'menu' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Menú</button>
          <button data-view="reservations" class="${currentView === 'reservations' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Mesa</button>
          <button data-view="kds" class="${currentView === 'kds' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Obrador (${kdsPending})</button>
          <button data-view="metrics" class="${currentView === 'metrics' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Estadísticas</button>
          <button data-view="roi" class="${currentView === 'roi' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Rentabilidad</button>
        </nav>
      </header>
    `;
  }

  // =========================================================================
  // VISTA 1: CARTA DIGITAL (DELEGADOR SEGÚN EL ESTILO ACTIVO)
  // =========================================================================

    renderFooterForStyle(preset) {
    if (preset.id === 'estilo1') {
      return `
        <footer class="w-full bg-[#f3ede4] text-[#1c1c19] py-16 border-t border-[#e2d8cc]">
          <div class="max-w-[1360px] mx-auto px-6 lg:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
              
              <!-- Col 1: Marca y Tradición -->
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[#8B1E1E] text-[26px]">local_fire_department</span>
                  <span class="font-headline-sm text-xl tracking-tight text-[#1c1c19] font-bold">VU<span class="text-[#E52D27]">KA</span>TA</span>
                </div>
                <p class="font-body-md text-[#57423f] leading-relaxed">
                  Parrilla tradicional al carbón de encina y maduración artesanal de cortes nobles en Aluche. Experiencia carnívora de excelencia.
                </p>
                <div class="flex items-center gap-2 pt-2 text-[#8B1E1E]">
                  <span class="material-symbols-outlined text-[20px]">verified</span>
                  <span class="font-kicker-eyebrow text-[11px] uppercase tracking-widest font-bold">Carbón de encina 100%</span>
                </div>
              </div>

              <!-- Col 2: Ubicación & Contacto -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Ubicación & Contacto</span>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px] mt-0.5">location_on</span>
                  <p class="font-body-md text-[#57423f]">${preset.address}<br/>Aluche, 28024 Madrid</p>
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px]">call</span>
                  <a class="font-body-md text-[#1c1c19] hover:text-[#8B1E1E] transition-colors font-medium" href="tel:${preset.phone.replace(/\s+/g, '')}">${preset.phone}</a>
                </div>
              </div>

              <!-- Col 3: Horarios de Brasas -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Horarios de Brasas</span>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px] mt-0.5">schedule</span>
                  <div class="space-y-1.5 font-body-md text-[#57423f]">
                    <p><strong class="text-[#1c1c19] font-semibold">Comidas:</strong> 12:00 a 17:00</p>
                    <p><strong class="text-[#1c1c19] font-semibold">Cenas:</strong> 19:30 a 00:00</p>
                    <p class="text-[#8B1E1E] font-medium pt-1">Martes cerrado por descanso</p>
                  </div>
                </div>
              </div>

              <!-- Col 4: Servicios & Pedidos -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Servicios & Pedidos</span>
                <p class="font-body-md text-[#57423f] leading-relaxed">
                  Disfrute de nuestros asados al momento en sala o solicite recogida en local a través de nuestro servicio take away sin intermediarios ni comisiones.
                </p>
                <div class="pt-2">
                  <a href="#reservas-direct" class="inline-flex items-center gap-2 font-label-action text-[13px] text-[#1c1c19] hover:text-[#8B1E1E] transition-colors font-semibold">
                    <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Reservar Mesa / Take Away →</span>
                  </a>
                </div>
              </div>

            </div>

            <!-- Barra Inferior Legal -->
            <div class="pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#786b5f] text-xs bg-[#e9e1d5]/60 px-6 py-4 rounded-xl border border-[#ded5c8]">
              <p>© 2024 Vukata Asador · GastroSuite by <a href="https://devcorpsolutions.com" target="_blank" class="underline font-semibold hover:text-[#1c1c19]">DevCorp Solutions</a>. Todos los derechos reservados.</p>
              <div class="flex items-center gap-6 font-medium">
                <a class="hover:text-[#1c1c19] transition-colors" href="#">Aviso Legal</a>
                <a class="hover:text-[#1c1c19] transition-colors" href="#">Privacidad</a>
                <a class="hover:text-[#1c1c19] transition-colors" href="https://devcorpsolutions.com" target="_blank">devcorpsolutions.com</a>
              </div>
            </div>

          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <footer class="bg-[#070a13] border-t border-slate-800 text-slate-400 text-xs py-8">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <span class="font-bold text-white">${preset.name}</span>
              <span class="text-slate-600">·</span>
              <span class="text-sky-400 font-mono">Canal Directo 0% Comisiones</span>
            </div>
            <div class="flex items-center space-x-4 text-slate-400 font-mono text-[11px]">
              <span>${preset.address}</span>
              <span>·</span>
              <span>${preset.phone}</span>
            </div>
            <div>
              <a href="https://devcorpsolutions.com" target="_blank" class="text-sky-400 hover:text-sky-300 font-mono text-xs">
                Tecnología GastroSuite by DevCorp Solutions
              </a>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <footer class="bg-[#eee7db] border-t-2 border-[#8c7b6c] text-[#594d40] text-xs font-serif py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h4 class="bistro-serif text-lg font-bold text-[#2b2520]">${preset.name}</h4>
            <p class="italic text-xs">${preset.tagline}</p>
            <div class="flex flex-wrap justify-center gap-4 text-xs font-serif text-[#7a6b5d] pt-2">
              <span>${preset.address}</span>
              <span>·</span>
              <span>Teléfono de Encargos: ${preset.phone}</span>
              <span>·</span>
              <span>${preset.serviceNote}</span>
            </div>
            <p class="pt-4 text-[11px] text-[#7a6b5d] border-t border-[#dfd7cc] max-w-md mx-auto font-sans">
              Página oficial sin comisiones desarrollada por <a href="https://devcorpsolutions.com" target="_blank" class="text-[#2b2520] font-bold underline">DevCorp Solutions</a>.
            </p>
          </div>
        </footer>
      `;
    }

    return `
      <footer class="bg-white border-t border-zinc-200 text-zinc-500 text-xs py-12 font-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span class="text-zinc-900 uppercase tracking-widest text-xs font-medium">${preset.name}</span>
            <p class="mt-1 text-zinc-400">${preset.address} · ${preset.openingHours}</p>
          </div>
          <div class="flex items-center space-x-6 text-xs font-mono text-zinc-400">
            <a href="https://devcorpsolutions.com" target="_blank" class="hover:text-zinc-900 transition-colors">DevCorp Solutions</a>
            <span>·</span>
            <span>${preset.name}</span>
          </div>
        </div>
      </footer>
    `;
  }

    renderReservationsView(container, preset) {
    const today = new Date().toISOString().split('T')[0];
    const isDark = (preset.id === 'estilo2');

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="max-w-3xl mx-auto bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-3xl shadow-md p-6 sm:p-10">
          <div class="border-b border-stone-200 pb-6 mb-8">
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Motor de Reservas Directas</span>
            <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Reserva de Mesa · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-sm vukata-font-desc text-stone-600 mt-2">Sin comisiones por cubierto ni intermediarios. Confirmación inmediata en parrilla.</p>
          </div>

          <form id="reservation-form" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Fecha</label>
                <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Turno</label>
                <select id="res-turn" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="Comida (13:30h - 14:30h)">Comida (13:30h - 14:30h)</option>
                  <option value="Comida (14:30h - 16:00h)">Comida (14:30h - 16:00h)</option>
                  <option value="Cena (20:30h - 21:30h)">Cena (20:30h - 21:30h)</option>
                  <option value="Cena (21:30h - 23:00h)">Cena (21:30h - 23:00h)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Comensales</label>
                <select id="res-guests" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="2 personas">2 personas</option>
                  <option value="4 personas" selected>4 personas</option>
                  <option value="6 personas">6 personas</option>
                  <option value="8 personas">8 personas</option>
                  <option value="Mesa Grande (10+)">Mesa Grande (10+ personas)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Preferencia de Sala</label>
                <select id="res-zone" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="Comedor Principal">Comedor Principal</option>
                  <option value="Zona Parrilla">Junto a la Brasa</option>
                  <option value="Terraza Exterior">Terraza Exterior</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Nombre Completo</label>
                <input type="text" id="res-name" placeholder="Ej: Ignacio Ramos" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Teléfono de Contacto</label>
                <input type="tel" id="res-phone" placeholder="600 000 000" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>
            </div>

            <button type="submit" class="w-full btn-vukata-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2 cursor-pointer">
              <span>Confirmar Reserva en Parrilla Vukata</span>
              ${ICONS.arrow}
            </button>
          </form>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="max-w-3xl mx-auto ${isDark ? 'bg-stone-900 border-stone-800 text-stone-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl border shadow-sm p-6 sm:p-10">
          <div class="border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} pb-6 mb-8">
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Motor de Reservas Directas</span>
            <h2 class="text-2xl sm:text-3xl font-bold mt-1">Reserva de Mesa · ${preset.name}</h2>
            <p class="text-sm text-slate-400 mt-2">Sin comisiones por cubierto ni intermediarios. Confirmación inmediata.</p>
          </div>

          <form id="reservation-form" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Fecha</label>
                <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Turno</label>
                <select id="res-turn" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="Comida (13:30h - 14:30h)">Comida (13:30h - 14:30h)</option>
                  <option value="Comida (14:30h - 16:00h)">Comida (14:30h - 16:00h)</option>
                  <option value="Cena (20:30h - 21:30h)">Cena (20:30h - 21:30h)</option>
                  <option value="Cena (21:30h - 23:00h)">Cena (21:30h - 23:00h)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Comensales</label>
                <select id="res-guests" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="2 personas">2 personas</option>
                  <option value="4 personas" selected>4 personas</option>
                  <option value="6 personas">6 personas</option>
                  <option value="8 personas">8 personas</option>
                  <option value="Mesa Grande (10+)">Mesa Grande (10+ personas)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Preferencia de Sala</label>
                <select id="res-zone" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="Comedor Principal">Comedor Principal</option>
                  <option value="Terraza Exterior">Terraza Exterior</option>
                  <option value="Zona Barra">Zona Barra</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-stone-800' : 'border-slate-100'}">
              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Nombre Completo</label>
                <input type="text" id="res-name" placeholder="Ej: Ignacio Ramos" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Teléfono de Contacto</label>
                <input type="tel" id="res-phone" placeholder="600 000 000" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>
            </div>

            <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2">
              <span>Confirmar Reserva Directa</span>
              ${ICONS.arrow}
            </button>
          </form>
        </div>
      `;
    }

    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('res-name').value;
        const date = document.getElementById('res-date').value;
        const turn = document.getElementById('res-turn').value;
        const guests = document.getElementById('res-guests').value;
        this.showToast(`✓ Reserva confirmada para ${name} (${guests}, ${date} en ${turn})`);
        form.reset();
      });
    }
  }

  // =========================================================================
  // VISTA 5: CALCULADORA DE RENTABILIDAD Y AHORRO
  // =========================================================================

  renderKdsView(container, preset) {
    const orders = store.state.orders;
    const isDark = (preset.id === 'estilo2');
    const isVukata = (preset.id === 'estilo1');

    if (isVukata) {
      container.innerHTML = `
        <div class="space-y-6 text-stone-900">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#E52D27] animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Sistema KDS en Vivo · Sala y Brasas</span>
              </div>
              <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Comandero de Cocina · VU<span class="text-[#E52D27]">KA</span>TA</h2>
              <p class="text-xs vukata-font-desc text-stone-600 mt-1">Sincronización instantánea con los pedidos de la carta digital.</p>
            </div>

            <div class="flex items-center space-x-2">
              <button id="simulate-order-btn" class="btn-vukata-primary text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow flex items-center space-x-1.5 cursor-pointer">
                <span>+ Generar Comanda Demo</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- COLUMNA 1: PENDIENTES -->
            <div class="bg-white border-2 border-amber-400/50 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-stone-900">Pendiente (${orders.filter(o => o.status === 'pending').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'pending'), preset)}
              </div>
            </div>

            <!-- COLUMNA 2: EN PREPARACIÓN -->
            <div class="bg-white border-2 border-[#8B1E1E]/40 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#E52D27]"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-[#8B1E1E]">En Fuego / Parrilla (${orders.filter(o => o.status === 'cooking').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'cooking'), preset)}
              </div>
            </div>

            <!-- COLUMNA 3: LISTOS PARA SALA / SALIR -->
            <div class="bg-white border-2 border-emerald-500/40 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-emerald-800">Pase Listo para Servir (${orders.filter(o => o.status === 'ready').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'ready'), preset)}
              </div>
            </div>

          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-6 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider font-mono text-emerald-400">Sistema KDS en Vivo</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Comandero de Cocina · ${preset.name}</h2>
              <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Sincronización instantánea con los pedidos de la carta digital.</p>
            </div>

            <div class="flex items-center space-x-2">
              <button id="simulate-order-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow flex items-center space-x-1.5">
                <span>+ Generar Comanda Demo</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- COLUMNA 1: PENDIENTES -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">Pendiente (${orders.filter(o => o.status === 'pending').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'pending'), preset)}
              </div>
            </div>

            <!-- COLUMNA 2: EN PREPARACIÓN -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">En Marcha (${orders.filter(o => o.status === 'cooking').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'cooking'), preset)}
              </div>
            </div>

            <!-- COLUMNA 3: LISTOS PARA SALA / SALIR -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">Pase Listo (${orders.filter(o => o.status === 'ready').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'ready'), preset)}
              </div>
            </div>

          </div>
        </div>
      `;
    }

    // Botón simular comanda
    const simBtn = document.getElementById('simulate-order-btn');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        const p = store.getPreset();
        const randDish = p.menu[Math.floor(Math.random() * p.menu.length)];
        const newOrder = {
          id: `ORD-${Math.floor(200 + Math.random() * 800)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "mesa",
          tableNumber: `Mesa ${Math.floor(1 + Math.random() * 8)}`,
          customerName: "Comensal Demo",
          items: [{ id: randDish.id, name: randDish.name, qty: 1, price: randDish.price }],
          total: randDish.price,
          status: "pending",
          elapsedMinutes: 1
        };
        store.state.orders.unshift(newOrder);
        store.incrementDishSale(randDish.id, 1);
        this.showToast(`✓ Nueva comanda demo generada: ${newOrder.id}`);
        this.renderKdsView(container, preset);
      });
    }

    // Botones de cambio de estado KDS
    container.querySelectorAll('[data-kds-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = btn.getAttribute('data-order-id');
        const nextStatus = btn.getAttribute('data-kds-action');
        const order = store.state.orders.find(o => o.id === orderId);
        if (order) {
          order.status = nextStatus;
          store.save();
          this.renderKdsView(container, preset);
        }
      });
    });
  }


  renderKdsOrderCards(orders, preset) {
    if (orders.length === 0) {
      return `<p class="text-xs text-stone-500 py-6 text-center">Sin comandas en este estado</p>`;
    }

    if (preset.id === 'estilo1') {
      return orders.map(order => `
        <div class="bg-[#F4F5F7] border border-stone-300/80 p-3.5 rounded-xl text-xs space-y-2.5 shadow-sm">
          <div class="flex justify-between items-start">
            <div>
              <span class="font-bold font-mono text-[#8B1E1E] text-xs">${order.id}</span>
              <span class="vukata-font-dish font-black text-base text-stone-950 block mt-0.5">${order.tableNumber} · ${order.customerName}</span>
            </div>
            <span class="text-[10px] font-mono text-stone-500 font-semibold">${order.timestamp}</span>
          </div>

          <div class="border-t border-stone-200 pt-2 space-y-1">
            ${order.items.map(item => `
              <div class="flex justify-between items-center text-xs">
                <span class="vukata-font-dish font-bold text-stone-900">${item.qty}x ${item.name}</span>
              </div>
            `).join('')}
          </div>

          <div class="pt-2 border-t border-stone-200 flex items-center justify-between">
            <span class="vukata-font-dish font-black text-base text-[#8B1E1E]">${formatCurrency(order.total)}</span>
            <div>
              ${order.status === 'pending' ? `
                <button data-order-id="${order.id}" data-kds-action="cooking" class="btn-vukata-primary text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  A la Parrilla 🔥
                </button>
              ` : order.status === 'cooking' ? `
                <button data-order-id="${order.id}" data-kds-action="ready" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  Emplatar
                </button>
              ` : `
                <button data-order-id="${order.id}" data-kds-action="served" class="bg-stone-800 hover:bg-stone-700 text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  Servir a Mesa
                </button>
              `}
            </div>
          </div>
        </div>
      `).join('');
    }

    const isDark = (preset.id === 'estilo2');

    return orders.map(order => `
      <div class="${isDark ? 'bg-stone-950 border-stone-800' : 'bg-slate-50 border-slate-200'} p-3.5 rounded-xl border text-xs space-y-2.5 shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <span class="font-bold font-mono text-blue-400">${order.id}</span>
            <span class="font-bold block text-sm mt-0.5">${order.tableNumber} · ${order.customerName}</span>
          </div>
          <span class="text-[10px] font-mono text-stone-400">${order.timestamp}</span>
        </div>

        <div class="border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} pt-2 space-y-1">
          ${order.items.map(item => `
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold">${item.qty}x ${item.name}</span>
            </div>
          `).join('')}
        </div>

        <div class="pt-2 border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} flex items-center justify-between">
          <span class="font-mono font-bold">${formatCurrency(order.total)}</span>
          <div>
            ${order.status === 'pending' ? `
              <button data-order-id="${order.id}" data-kds-action="cooking" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Iniciar Fuego
              </button>
            ` : order.status === 'cooking' ? `
              <button data-order-id="${order.id}" data-kds-action="ready" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Emplatar
              </button>
            ` : `
              <button data-order-id="${order.id}" data-kds-action="served" class="bg-stone-700 hover:bg-stone-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Servir a Sala
              </button>
            `}
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // VISTA 3: MÉTRICAS Y CONTROL DE SALA
  // =========================================================================

  renderMetricsView(container, preset) {
    const orders = store.state.orders;
    const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
    const avgTicket = orders.length > 0 ? (totalSales / orders.length) : 0;
    const isDark = (preset.id === 'estilo2');

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="space-y-8 text-stone-900">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Panel de Control y Rendimiento</span>
            <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Métricas de Servicio · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-xs vukata-font-desc text-stone-600 mt-1">Datos actualizados al minuto con cada comanda tramitada en sala o brasa.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Facturación Estimada Hoy</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-[#8B1E1E]">${formatCurrency(totalSales)}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Comandas en Servicio</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-stone-950">${orders.length}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Ticket Medio</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-stone-950">${formatCurrency(avgTicket)}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-emerald-700">Ahorro frente a Agregadores</span>
              <p class="text-3xl sm:text-4xl font-black text-emerald-700 mt-2 vukata-font-dish">${formatCurrency(totalSales * 0.30)}</p>
            </div>
          </div>

          <!-- Ranking en Tiempo Real -->
          <div class="bg-white border-2 border-stone-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="vukata-font-title font-bold text-base text-stone-950">Rotación de Platos en Sala (Tiempo Real)</h3>
                <p class="text-xs text-stone-500 font-sans mt-0.5">Listado completo con scroll independiente y visualización de precios unitarios</p>
              </div>
              <span class="text-xs font-mono font-bold text-[#8B1E1E] bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg">${preset.menu.length} Platos</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              ${preset.menu.map(dish => {
                const count = store.getDishSalesCount(dish.id);
                return `
                  <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 bg-[#F4F5F7] border border-stone-200 rounded-xl text-xs">
                    <div class="flex items-center space-x-2.5 min-w-0">
                      <span class="font-bold text-[#8B1E1E] w-8 font-mono text-sm flex-shrink-0">${count}x</span>
                      <span class="vukata-font-dish font-black text-base text-stone-950 truncate max-w-[160px] sm:max-w-none">${dish.name}</span>
                      <span class="text-stone-500 hidden sm:inline font-sans text-xs">(${dish.category})</span>
                    </div>
                    <div class="flex items-center space-x-3 flex-shrink-0">
                      <span class="text-stone-500 font-mono text-[11px] hidden sm:inline">PVP: ${formatCurrency(dish.price)}</span>
                      <span class="vukata-font-dish font-black text-base text-[#8B1E1E]">${formatCurrency(dish.price * count)}</span>
                      <button data-quick-simulate-dish="${dish.id}" class="btn-vukata-primary text-white px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer">
                        +1 Venta
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Panel de Control</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Métricas de Servicio · ${preset.name}</h2>
            <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Datos actualizados al minuto con cada comanda tramitada.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Facturación Estimada Hoy</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono text-amber-400">${formatCurrency(totalSales)}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Comandas en Servicio</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${orders.length}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Ticket Medio</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${formatCurrency(avgTicket)}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-emerald-500">Ahorro frente a Agregadores</span>
              <p class="text-2xl sm:text-3xl font-bold text-emerald-500 mt-2 font-mono">${formatCurrency(totalSales * 0.30)}</p>
            </div>
          </div>

          <!-- Ranking en Tiempo Real -->
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-3xl border shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-base">Rotación de Platos en Sala (Tiempo Real)</h3>
              <span class="text-xs font-mono opacity-60">${preset.menu.length} Platos</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              ${preset.menu.map(dish => {
                const count = store.getDishSalesCount(dish.id);
                return `
                  <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 ${isDark ? 'bg-stone-950/80 border-stone-800' : 'bg-slate-50 border-slate-200'} border rounded-xl text-xs">
                    <div class="flex items-center space-x-2.5 min-w-0">
                      <span class="font-bold text-amber-400 w-7 font-mono flex-shrink-0">${count}x</span>
                      <span class="font-semibold truncate max-w-[160px] sm:max-w-none">${dish.name}</span>
                      <span class="text-slate-400 hidden sm:inline">(${dish.category})</span>
                    </div>
                    <div class="flex items-center space-x-3 flex-shrink-0">
                      <span class="font-mono text-[11px] opacity-60 hidden sm:inline">PVP: ${formatCurrency(dish.price)}</span>
                      <span class="font-mono font-bold">${formatCurrency(dish.price * count)}</span>
                      <button data-quick-simulate-dish="${dish.id}" class="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                        +1 Venta
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // VISTA 4: RESERVAS ONLINE
  // =========================================================================

  renderRoiView(container, preset) {
    let ordersSlider = 400;
    let ticketSlider = 26;
    const isDark = (preset.id === 'estilo2');

    const calculateSavings = (orders, ticket) => {
      const grossMonthly = orders * ticket;
      const avgCommissionRate = 0.30;
      const commissionMonthly = grossMonthly * avgCommissionRate;
      const commissionAnnual = commissionMonthly * 12;
      return {
        grossMonthly,
        monthlySavings: commissionMonthly,
        annualSavings: commissionAnnual
      };
    };

    const renderCalculation = () => {
      const data = calculateSavings(ordersSlider, ticketSlider);
      const resContainer = document.getElementById('roi-results-container');
      if (!resContainer) return;

      if (preset.id === 'estilo1') {
        resContainer.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 sm:p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-stone-900 shadow-sm">
              <span class="text-xs vukata-font-title font-bold uppercase text-[#8B1E1E] flex items-center space-x-1.5">
                <span>✕</span>
                <span>Con Plataformas de Agregación (30% Comisión)</span>
              </span>
              <h3 class="vukata-font-title text-xl font-bold text-[#8B1E1E] mt-4">Comisiones que asume el restaurante</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-700">
                <div class="flex justify-between pb-2 border-b border-red-200 font-sans">
                  <span>Comisión media mensual:</span>
                  <span class="vukata-font-dish font-black text-lg text-[#8B1E1E]">-${formatCurrency(data.monthlySavings)} / mes</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-200 font-sans">
                  <span>Pérdida anual acumulada:</span>
                  <span class="vukata-font-dish font-black text-lg text-[#8B1E1E]">-${formatCurrency(data.annualSavings)} / año</span>
                </div>
              </div>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#8B1E1E]/30 text-stone-900 shadow-md relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs vukata-font-title font-bold uppercase text-emerald-700 flex items-center space-x-1.5">
                  <span>✓</span>
                  <span>Con Sistema Web Propio DevCorp · VU<span class="text-[#E52D27]">KA</span>TA</span>
                </span>
                <h3 class="vukata-font-title text-xl font-black text-stone-950 mt-4">El 100% de la venta para el asador</h3>
                <div class="mt-6 space-y-3 text-xs text-stone-700">
                  <div class="flex justify-between pb-2 border-b border-stone-200 font-sans">
                    <span>Comisión por pedido:</span>
                    <span class="vukata-font-dish font-black text-lg text-emerald-700">0,00 € (0%)</span>
                  </div>
                  <div class="bg-red-50/70 p-4 rounded-xl text-center border-2 border-[#8B1E1E]/20 mt-4">
                    <span class="text-xs uppercase vukata-font-title text-[#8B1E1E] block font-bold">Ahorro Anual que Conserva Parrilla Vukata:</span>
                    <span class="text-3xl sm:text-4xl font-black text-[#8B1E1E] vukata-font-dish mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        resContainer.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 rounded-3xl bg-red-950/30 border border-red-800/50 text-stone-100">
              <span class="text-xs font-mono font-bold uppercase text-red-400 flex items-center space-x-1.5">
                <span>✕</span>
                <span>Con Plataformas de Agregación (30% Comisión)</span>
              </span>
              <h3 class="text-xl font-bold text-red-200 mt-4">Comisiones que asume el restaurante</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-red-900/60">
                  <span>Comisión media mensual:</span>
                  <span class="font-mono font-bold text-red-400">-${formatCurrency(data.monthlySavings)} / mes</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-900/60">
                  <span>Pérdida anual acumulada:</span>
                  <span class="font-mono font-bold text-red-400">-${formatCurrency(data.annualSavings)} / año</span>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-700/60 text-stone-100 relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center space-x-1.5">
                  <span>✓</span>
                  <span>Con Sistema Web Propio DevCorp GastroSuite</span>
                </span>
                <h3 class="text-xl font-bold text-emerald-300 mt-4">El 100% de la venta para el restaurante</h3>
                <div class="mt-6 space-y-3 text-xs text-stone-300">
                  <div class="flex justify-between pb-2 border-b border-emerald-900/60">
                    <span>Comisión por pedido:</span>
                    <span class="font-mono font-bold text-emerald-400">0,00 € (0%)</span>
                  </div>
                  <div class="bg-emerald-900/40 p-4 rounded-xl text-center border border-emerald-700 mt-4">
                    <span class="text-xs uppercase text-emerald-200 block font-semibold">Ahorro Anual que Conserva el Negocio:</span>
                    <span class="text-3xl font-black text-emerald-300 font-mono mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    };

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-8 text-stone-900">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Rentabilidad y Márgenes</span>
            <h2 class="vukata-font-title text-2xl sm:text-4xl font-black text-stone-950 mt-1">Comparativa de Comisiones de Delivery · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-xs sm:text-sm vukata-font-desc text-stone-600 mt-2">Calcula cuánto dinero ahorra Parrilla Vukata al operar su propio canal directo sin comisiones por pedido.</p>
          </div>

          <div class="bg-white border-2 border-stone-200 p-6 sm:p-8 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase vukata-font-title text-stone-700">Pedidos mensuales (Delivery / Takeaway):</label>
                <span id="orders-val" class="vukata-font-dish font-black text-[#8B1E1E] text-lg">400 pedidos</span>
              </div>
              <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-stone-200 accent-[#8B1E1E] rounded-lg cursor-pointer"/>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase vukata-font-title text-stone-700">Ticket medio por pedido:</label>
                <span id="ticket-val" class="vukata-font-dish font-black text-[#8B1E1E] text-lg">26,00 €</span>
              </div>
              <input type="range" id="ticket-slider" min="12" max="75" step="1" value="26" class="w-full h-2 bg-stone-200 accent-[#8B1E1E] rounded-lg cursor-pointer"/>
            </div>
          </div>

          <div id="roi-results-container"></div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Rentabilidad y Márgenes</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold mt-1">Comparativa de Comisiones de Delivery</h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-2">Calcula cuánto dinero ahorra un restaurante al operar su propio canal directo sin comisiones por pedido.</p>
          </div>

          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 sm:p-8 rounded-3xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase">Pedidos mensuales (Delivery / Takeaway):</label>
                <span id="orders-val" class="font-mono font-bold text-blue-500 text-base">400 pedidos</span>
              </div>
              <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase">Ticket medio por pedido:</label>
                <span id="ticket-val" class="font-mono font-bold text-blue-500 text-base">26,00 €</span>
              </div>
              <input type="range" id="ticket-slider" min="12" max="75" step="1" value="26" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
            </div>
          </div>

          <div id="roi-results-container"></div>
        </div>
      `;
    }

    renderCalculation();

    const oSlider = document.getElementById('orders-slider');
    const tSlider = document.getElementById('ticket-slider');
    const oVal = document.getElementById('orders-val');
    const tVal = document.getElementById('ticket-val');

    if (oSlider && tSlider) {
      oSlider.addEventListener('input', (e) => {
        ordersSlider = parseInt(e.target.value);
        oVal.innerText = `${ordersSlider} pedidos`;
        renderCalculation();
      });
      tSlider.addEventListener('input', (e) => {
        ticketSlider = parseInt(e.target.value);
        tVal.innerText = `${ticketSlider},00 €`;
        renderCalculation();
      });
    }
  }

  // =========================================================================
  // SECCIÓN DE RESEÑAS DE GOOGLE (LLAMATIVAS CON ESTRELLAS Y BOTONES EN LOS 4 ESTILOS)
  // =========================================================================

  renderDishDetailModal(dish, preset) {
    this.currentModalDish = dish;
    this.modalQty = 1;
    const container = document.getElementById('dish-modal-container');
    if (!container) return;

    const allergensList = (dish.allergens && dish.allergens.length > 0)
      ? (preset.id === 'estilo1'
          ? dish.allergens.map(a => renderAllergenBadge(a, 'md', true)).join('')
          : dish.allergens.map(a => `<span class="allergen-chip ${
              preset.id === 'estilo2' ? 'badge-allergen-estilo2' :
              preset.id === 'estilo3' ? 'badge-allergen-estilo3' :
              'badge-allergen-estilo4'
            }">${getAllergenLabel(a)}</span>`).join(''))
      : `<span class="text-xs ${preset.id === 'estilo1' ? 'text-on-surface-variant font-medium' : preset.id === 'estilo2' ? 'text-slate-400' : 'text-zinc-500'}">✓ No contiene alérgenos comunes declarados</span>`;

    let cardThemeClasses = '';
    let headerTextClass = '';
    let bodyTextClass = '';
    let btnThemeClass = '';

    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-3xl shadow-2xl';
      headerTextClass = 'font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold tracking-tight';
      bodyTextClass = 'text-on-surface-variant font-body-md';
      btnThemeClass = 'bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3.5 rounded-full shadow-[0_4px_16px_rgba(156,56,44,0.25)] transition-all';
    } else if (preset.id === 'estilo2') {
      cardThemeClasses = 'bg-[#0b1020] border border-slate-700 text-slate-100 shadow-2xl rounded-3xl';
      headerTextClass = 'font-sans text-white font-black text-xl';
      bodyTextClass = 'text-slate-300';
      btnThemeClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      cardThemeClasses = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] shadow-2xl rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold text-2xl';
      bodyTextClass = 'text-[#594d40] font-serif';
      btnThemeClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold text-xs rounded shadow';
    } else {
      cardThemeClasses = 'bg-white border border-zinc-200 text-zinc-900 shadow-2xl rounded-2xl';
      headerTextClass = 'font-light tracking-tight text-zinc-900 text-2xl';
      bodyTextClass = 'text-zinc-600 font-light';
      btnThemeClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider text-xs rounded-none py-3.5';
    }

    container.innerHTML = `
      <div id="dish-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate relative max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden ${cardThemeClasses}">
          
          <!-- Botón de Cerrar Modal adaptado a la estética de Stitch -->
          ${preset.id === 'estilo1' ? `
            <button type="button" id="close-dish-modal" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container/90 hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all hover:scale-105 font-bold z-30 shadow-lg border border-outline-variant/40 cursor-pointer" title="Cerrar modal">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          ` : `
            <button type="button" id="close-dish-modal" class="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 font-bold z-30 shadow-2xl border border-white/30 cursor-pointer" title="Cerrar modal (Esc)">
              ✕
            </button>
          `}

          <!-- Fotografía Nítida (Sin velos oscuros) con botón de ampliación -->
          <div class="relative w-full h-56 sm:h-72 bg-surface-container-highest flex-shrink-0 overflow-hidden cursor-zoom-in group" data-open-lightbox="${dish.image || ''}" data-lightbox-title="${dish.name}" title="Clic para ampliar imagen completa">
            ${dish.image ? `
              <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"/>
            ` : `
              <div class="w-full h-full flex items-center justify-center text-5xl">🍽️</div>
            `}
            
            <!-- Botón llamativo de 'Ampliar Imagen Completa' -->
            ${preset.id === 'estilo1' ? `
              <div class="absolute bottom-3 right-3 bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-outline-variant/30 flex items-center space-x-2 shadow-lg transition-transform group-hover:scale-105 pointer-events-none">
                <span class="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
                <span class="font-label-action text-label-action">Ampliar foto completa</span>
              </div>
            ` : `
              <div class="absolute bottom-3 right-3 bg-black/80 hover:bg-black text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/30 flex items-center space-x-2 shadow-2xl transition-transform group-hover:scale-105 pointer-events-none">
                ${ICONS.zoom}
                <span class="font-semibold">Ampliar foto completa</span>
              </div>
            `}
          </div>

          <!-- Cabecera de Texto del Plato debajo de la foto para máxima legibilidad -->
          <div class="p-5 sm:p-6 pb-4 border-b ${preset.id === 'estilo1' ? 'border-outline-variant/20 bg-surface-container-low' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex-shrink-0">
            <div class="flex items-center space-x-2 mb-2">
              ${dish.badge ? `<span class="px-3 py-1 rounded-full text-[11px] font-kicker-eyebrow uppercase tracking-wider ${preset.id === 'estilo1' ? 'bg-primary-container text-on-primary' : 'bg-blue-600 text-white'}">${dish.badge}</span>` : ''}
              <span class="text-xs font-mono opacity-70 uppercase tracking-widest">${dish.category}</span>
            </div>
            <h2 class="${headerTextClass}">${dish.name}</h2>
          </div>

          <!-- Cuerpo con Scroll y Detalles -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 ${bodyTextClass} text-xs sm:text-sm">
            
            <div>
              <h4 class="text-xs font-kicker-eyebrow uppercase tracking-widest mb-1.5 ${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Descripción</h4>
              <p class="leading-relaxed font-body-md text-on-surface text-sm">${dish.description}</p>
            </div>

            ${dish.ingredients ? `
              <div class="p-4 rounded-2xl ${preset.id === 'estilo1' ? 'bg-surface-container-low border border-outline-variant/30' : preset.id === 'estilo2' ? 'bg-slate-900/90 border border-slate-800' : preset.id === 'estilo3' ? 'bg-[#eee7db] border border-[#dfd7cc]' : 'bg-zinc-50 border border-zinc-200'}">
                <span class="font-kicker-eyebrow text-[11px] block mb-1 uppercase tracking-widest ${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-300' : 'text-stone-700'}">Ingredientes y Preparación</span>
                <p class="text-xs font-body-sm leading-relaxed text-on-surface-variant">${dish.ingredients}</p>
              </div>
            ` : ''}

            <!-- Alérgenos -->
            <div>
              <h4 class="text-xs font-kicker-eyebrow uppercase tracking-widest mb-2.5 ${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Información de Alérgenos (Reglamento UE 1169/2011)</h4>
              <div class="flex flex-wrap gap-2">
                ${allergensList}
              </div>
            </div>

            <!-- Sugerencia de Maridaje o Nota Culinaria -->
            ${dish.pairing || dish.beerPairing || dish.dietary ? `
              <div class="border-t pt-4 ${preset.id === 'estilo1' ? 'border-outline-variant/20' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex flex-wrap gap-4 text-xs font-mono">
                ${dish.pairing ? `<span class="${preset.id === 'estilo1' ? 'text-primary font-semibold' : 'text-amber-300'}">🍷 Maridaje: ${dish.pairing}</span>` : ''}
                ${dish.beerPairing ? `<span class="text-sky-300">🍺 Maridaje: ${dish.beerPairing}</span>` : ''}
                ${dish.dietary ? `<span class="opacity-75">🌿 ${dish.dietary}</span>` : ''}
              </div>
            ` : ''}

          </div>

          <!-- Pie del Modal con Selector de Cantidad y Botón Temático -->
          <div class="p-4 sm:p-5 border-t ${preset.id === 'estilo1' ? 'border-outline-variant/20 bg-surface-container-low' : preset.id === 'estilo2' ? 'border-slate-800 bg-[#070a13]' : preset.id === 'estilo3' ? 'border-[#dfd7cc] bg-[#f5f1e8]' : 'border-zinc-200 bg-zinc-50'} flex items-center justify-between gap-4 flex-shrink-0">
            
            <div class="flex items-center space-x-3">
              <span class="${preset.id === 'estilo1' ? 'text-primary font-headline-md font-bold text-2xl sm:text-3xl' : preset.id === 'estilo2' ? 'text-white font-mono text-xl sm:text-2xl font-bold' : preset.id === 'estilo3' ? 'text-[#3d3228] font-mono text-xl sm:text-2xl font-bold' : 'text-zinc-900 font-mono text-xl sm:text-2xl font-bold'}">
                ${formatCurrency(dish.price)}
              </span>

              <div class="flex items-center space-x-2 border ${preset.id === 'estilo1' ? 'border-outline-variant/40 bg-surface-container-lowest text-on-surface rounded-full px-3 py-1.5' : preset.id === 'estilo2' ? 'border-slate-700 bg-slate-800 rounded-xl px-2 py-1' : preset.id === 'estilo3' ? 'border-[#8c7b6c] bg-white rounded-xl px-2 py-1' : 'border-zinc-300 bg-white rounded-xl px-2 py-1'}">
                <button type="button" data-modal-qty-minus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">-</button>
                <span id="modal-dish-qty-val" class="w-6 text-center font-bold font-mono text-sm select-none">1</span>
                <button type="button" data-modal-qty-plus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">+</button>
              </div>
            </div>

            <button type="button" data-modal-add-cart class="${btnThemeClass} flex items-center space-x-2 cursor-pointer select-none">
              <span>Añadir a la Comanda</span>
              ${preset.id === 'estilo1' ? '<span class="material-symbols-outlined text-[18px]">shopping_basket</span>' : ICONS.arrow}
            </button>

          </div>

        </div>
      </div>
    `;

    // Direct event listener binding to guarantee 100% responsiveness and reliability
    const closeDishBtn = document.getElementById('close-dish-modal');
    const dishBackdrop = document.getElementById('dish-modal-backdrop');
    const minusBtn = container.querySelector('[data-modal-qty-minus]');
    const plusBtn = container.querySelector('[data-modal-qty-plus]');
    const addCartBtn = container.querySelector('[data-modal-add-cart]');
    const lightboxTrigger = container.querySelector('[data-open-lightbox]');

    const closeDishModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      container.innerHTML = '';
      this.currentModalDish = null;
      this.modalQty = 1;
    };

    if (closeDishBtn) closeDishBtn.addEventListener('click', closeDishModal);
    if (dishBackdrop) {
      dishBackdrop.addEventListener('click', (e) => {
        if (e.target === dishBackdrop) closeDishModal(e);
      });
    }
    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
      });
    }
    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
      });
    }
    if (addCartBtn) {
      addCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        store.addToCartSilent(dish, "", this.modalQty);
        this.updateCartBadge();
        this.showToast(`✓ ${dish.name} (x${this.modalQty}) añadido a la comanda`);
        closeDishModal();
      });
    }
    if (lightboxTrigger) {
      lightboxTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const imgUrl = lightboxTrigger.getAttribute('data-open-lightbox');
        const imgTitle = lightboxTrigger.getAttribute('data-lightbox-title') || dish.name;
        if (imgUrl) this.renderLightbox(imgUrl, imgTitle);
      });
    }
  }

  // =========================================================================
  // CARRITO DRAWER (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================

  renderCartDrawer(isOpen = true) {
    const container = document.getElementById('cart-drawer-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    if (!isOpen) {
      container.innerHTML = '';
      return;
    }

    let drawerContainerClasses = '';
    let headerClasses = '';
    let bodyClasses = '';
    let footerClasses = '';
    let itemClasses = '';
    let btnClass = '';
    let qtyBtnClass = '';

    if (preset.id === 'estilo1') {
      drawerContainerClasses = 'bg-white text-stone-900 border-l border-stone-200';
      headerClasses = 'p-5 border-b border-red-100 flex items-center justify-between bg-[#F4F5F7] text-[#8B1E1E] vukata-font-title tracking-wider';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-stone-800';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-stone-100 text-xs';
      footerClasses = 'p-5 border-t border-stone-200 bg-[#F4F5F7] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-stone-100 text-stone-900 hover:bg-stone-200 font-mono font-bold flex items-center justify-center border border-stone-300';
      btnClass = 'w-full btn-vukata-primary font-bold py-3.5 rounded-xl text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo2') {
      drawerContainerClasses = 'bg-[#070a13] text-slate-100 border-l border-slate-800';
      headerClasses = 'p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900 text-sky-400 font-mono';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-slate-200';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-slate-800 text-xs';
      footerClasses = 'p-5 border-t border-slate-800 bg-slate-900 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-lg bg-slate-800 text-sky-300 hover:bg-slate-700 font-mono font-bold flex items-center justify-center';
      btnClass = 'w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo3') {
      drawerContainerClasses = 'bg-[#fbf9f5] text-[#2b2520] border-l-2 border-[#8c7b6c]';
      headerClasses = 'p-5 border-b-2 border-[#8c7b6c] flex items-center justify-between bg-[#eee7db] text-[#3d3228] font-serif';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-[#3d3228] font-serif';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-[#dfd7cc] text-xs';
      footerClasses = 'p-5 border-t-2 border-[#8c7b6c] bg-[#eee7db] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] font-serif font-bold flex items-center justify-center';
      btnClass = 'w-full bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else {
      drawerContainerClasses = 'bg-white text-zinc-900 border-l border-zinc-200';
      headerClasses = 'p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 text-zinc-900 uppercase tracking-widest text-xs font-light';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-zinc-800 font-light';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-zinc-100 text-xs';
      footerClasses = 'p-5 border-t border-zinc-200 bg-zinc-50 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-none border border-zinc-300 hover:bg-zinc-100 text-zinc-900 font-mono text-xs flex items-center justify-center';
      btnClass = 'w-full bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs flex items-center justify-center space-x-2 disabled:opacity-40';
    }

    container.innerHTML = `
      <div id="cart-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"></div>
      <div class="drawer-animate fixed inset-y-0 right-0 max-w-md w-full ${drawerContainerClasses} shadow-2xl z-50 flex flex-col justify-between">
        
        <div class="${headerClasses}">
          <div class="flex items-center space-x-2">
            ${ICONS.cart}
            <h3 class="font-bold text-sm sm:text-base">Comanda de Sala · ${preset.name}</h3>
          </div>
          <button id="close-cart-btn" class="p-1 opacity-70 hover:opacity-100 text-base">✕</button>
        </div>

        <div class="${bodyClasses}">
          ${cart.length === 0 ? `
            <div class="h-64 flex flex-col items-center justify-center opacity-60 text-xs text-center">
              <span class="text-4xl mb-3">🍽️</span>
              <p class="font-bold text-sm">La comanda está vacía</p>
              <p class="mt-1 max-w-xs">Selecciona cualquier plato de la carta o pulsa en 'Ver Detalle' para añadirlo a la prueba.</p>
            </div>
          ` : cart.map((item, idx) => `
            <div class="${itemClasses}">
              <div class="pr-2 flex-1">
                <span class="font-bold block">${item.name}</span>
                <span class="font-mono opacity-75 text-[11px]">${formatCurrency(item.price)} / ud.</span>
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <button data-cart-minus="${idx}" class="${qtyBtnClass}">-</button>
                <span class="font-bold w-4 text-center font-mono text-xs">${item.qty}</span>
                <button data-cart-plus="${idx}" class="${qtyBtnClass}">+</button>
                <button data-cart-remove="${idx}" class="text-red-400 hover:text-red-600 ml-2 text-xs font-bold" title="Eliminar">✕</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="${footerClasses}">
          <div class="flex justify-between items-center font-bold text-base">
            <span>Total Comanda:</span>
            <span class="font-mono text-xl ${preset.id === 'estilo1' ? 'text-[#8B1E1E] font-black' : preset.id === 'estilo2' ? 'text-sky-300' : ''}">${formatCurrency(total)}</span>
          </div>
          <button id="open-checkout-modal-btn" ${cart.length === 0 ? 'disabled' : ''} class="${btnClass}">
            <span>Tramitar Pedido en Cocina</span>
            ${ICONS.arrow}
          </button>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // CHECKOUT MODAL (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================

  renderCheckoutModal() {
    const container = document.getElementById('checkout-modal-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    let modalBgClass = '';
    let headerTextClass = '';
    let inputThemeClass = '';
    let submitBtnClass = '';

    if (preset.id === 'estilo1') {
      modalBgClass = 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-2xl';
      headerTextClass = 'vukata-font-title text-[#8B1E1E] font-bold text-base tracking-wider';
      inputThemeClass = 'bg-[#F4F5F7] border-stone-300 text-stone-900 focus:ring-[#8B1E1E] focus:border-[#8B1E1E]';
      submitBtnClass = 'btn-vukata-primary font-bold py-3.5 rounded-xl text-xs';
    } else if (preset.id === 'estilo2') {
      modalBgClass = 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl';
      headerTextClass = 'font-sans text-white font-bold font-mono text-sky-400';
      inputThemeClass = 'bg-[#070a13] border-slate-700 text-white focus:ring-sky-500 focus:border-sky-500';
      submitBtnClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      modalBgClass = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold';
      inputThemeClass = 'bg-white border-[#8c7b6c] text-[#2b2520] focus:ring-[#8c7b6c] focus:border-[#8c7b6c] font-sans';
      submitBtnClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow';
    } else {
      modalBgClass = 'bg-white border border-zinc-200 text-zinc-900 rounded-none';
      headerTextClass = 'font-light tracking-widest uppercase text-zinc-900 text-xs';
      inputThemeClass = 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:ring-zinc-900 focus:border-zinc-900 rounded-none';
      submitBtnClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs';
    }

    container.innerHTML = `
      <div id="checkout-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border ${modalBgClass}">
          
          <div class="p-5 border-b ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#FAF9F7]' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex justify-between items-center flex-shrink-0">
            <h3 class="text-base ${headerTextClass}">Tramitar Comanda · ${preset.name}</h3>
            <button id="close-checkout-modal" class="opacity-70 hover:opacity-100 text-lg">✕</button>
          </div>

          <form id="checkout-form" class="p-5 space-y-4 text-xs overflow-y-auto flex-1">
            <div>
              <label class="block font-semibold uppercase mb-2">Modalidad de Servicio</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center ${preset.id === 'estilo1' ? 'border-[#8B1E1E] bg-red-50 text-[#8B1E1E]' : preset.id === 'estilo2' ? 'border-sky-500 bg-sky-950/40 text-sky-200' : 'border-blue-500 bg-blue-50 text-blue-900'}">
                  <input type="radio" name="order-type" value="mesa" checked class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🪑</span>
                  <span class="font-bold text-[11px]">En Mesa</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#F4F5F7]' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="recogida" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛍️</span>
                  <span class="font-bold text-[11px]">Para Llevar</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#F4F5F7]' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="delivery" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛵</span>
                  <span class="font-bold text-[11px]">Directo 0%</span>
                </label>
              </div>
            </div>

            <div id="table-input-block">
              <label class="block font-semibold uppercase mb-1">Número de Mesa</label>
              <input type="text" id="order-table" value="Mesa 4" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Nombre del Cliente / Comensal</label>
              <input type="text" id="order-customer" value="Visita Comercial" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Observaciones para Cocina</label>
              <input type="text" id="order-notes" placeholder="Ej: carne al punto, salsa aparte..." class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div class="p-4 rounded-xl border ${preset.id === 'estilo1' ? 'bg-[#F4F5F7] border-stone-200' : preset.id === 'estilo2' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-50 border-zinc-200'}">
              <span class="font-bold block mb-1">Resumen de Comanda</span>
              <p class="opacity-75">${cart.length} productos · Total: <span class="font-mono font-bold">${formatCurrency(total)}</span></p>
              <span class="text-[11px] text-emerald-400 block mt-1">✓ 0€ de comisión para el restaurante</span>
            </div>

            <button type="submit" class="w-full ${submitBtnClass} shadow flex items-center justify-center space-x-2">
              <span>Enviar a Pantalla de Cocina (KDS)</span>
              ${ICONS.arrow}
            </button>
          </form>

        </div>
      </div>
    `;

    // Interacción formulario checkout
    const form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = form.querySelector('input[name="order-type"]:checked').value;
        const table = document.getElementById('order-table').value;
        const customer = document.getElementById('order-customer').value;
        const notes = document.getElementById('order-notes').value;

        const newOrder = {
          id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: type,
          tableNumber: type === 'mesa' ? table : (type === 'recogida' ? 'Take Away' : 'Domicilio'),
          customerName: customer,
          items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price, notes: notes })),
          total: total,
          status: 'pending',
          elapsedMinutes: 0
        };

        store.state.orders.unshift(newOrder);
        cart.forEach(item => {
          store.incrementDishSale(item.id, item.qty);
        });
        store.clearCart();
        container.innerHTML = '';
        this.showToast(`✓ Comanda ${newOrder.id} enviada al KDS de cocina`);
        store.setView('kds');
      });
    }
  }

  // =========================================================================
  // VISTA 2: COMANDERO KDS DE COCINA
  // =========================================================================

  renderLightbox(imageUrl, title) {
    const container = document.getElementById('lightbox-container');
    if (!container) return;

    container.innerHTML = `
      <div id="lightbox-backdrop" class="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-3 sm:p-6 transition-all">
        
        <!-- Botón de Cerrar en Esquina Superior -->
        <button id="close-lightbox-btn" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition-all border border-white/20 z-10" title="Cerrar (Esc)">
          ✕
        </button>

        <!-- Contenedor de la Fotografía Completa (Sin recorte) -->
        <div class="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
          <img src="${imageUrl}" alt="${title}" class="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none"/>
          
          <div class="mt-4 text-center px-4">
            <h3 class="text-white text-base sm:text-xl font-bold tracking-wide">${title}</h3>
            <span class="text-stone-400 text-xs mt-1 block">Fotografía completa en alta resolución · Pulsa fuera o pulsa la cruz para volver</span>
          </div>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // CABECERAS DIFERENCIADAS CON LOGO DEVCORP MÁS GRANDE Y LEGIBLE
  // =========================================================================

  renderSmartReviewModal(preset) {
    const container = document.getElementById('review-modal-container');
    if (!container) return;

    let theme = {
      card: '',
      headerBorder: '',
      titleClass: '',
      starBtn: '',
      positiveBtn: '',
      negativeWaBtn: '',
      negativeMailBtn: '',
      badgePos: '',
      badgeNeg: '',
      feedbackBox: '',
      feedbackInput: '',
      feedbackBtn: '',
      backBtn: ''
    };

    if (preset.id === 'estilo1') {
      theme = {
        card: 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-3xl shadow-2xl',
        headerBorder: 'border-b border-stone-200 bg-[#F4F5F7]',
        titleClass: 'vukata-font-title font-bold text-[#8B1E1E] tracking-wider',
        starBtn: 'border border-amber-300 bg-amber-50 hover:bg-amber-100 hover:border-amber-500 text-amber-500 rounded-xl',
        positiveBtn: 'btn-vukata-primary text-white font-bold uppercase tracking-wider rounded-xl shadow-lg',
        negativeWaBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg',
        negativeMailBtn: 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold rounded-xl',
        badgePos: 'bg-emerald-50 border border-emerald-200 text-emerald-800',
        badgeNeg: 'bg-amber-50 border border-amber-200 text-amber-900',
        feedbackBox: 'bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl placeholder-stone-500 focus:border-[#8B1E1E]',
        feedbackInput: 'bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl placeholder-stone-500 focus:border-[#8B1E1E]',
        feedbackBtn: 'btn-vukata-primary text-white font-bold rounded-xl',
        backBtn: 'text-stone-500 hover:text-stone-900'
      };
    } else if (preset.id === 'estilo2') {
      theme = {
        card: 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl shadow-2xl shadow-blue-500/10',
        headerBorder: 'border-b border-slate-800',
        titleClass: 'font-mono font-bold text-cyan-400',
        starBtn: 'border border-slate-700 bg-slate-900 hover:border-cyan-400 hover:bg-cyan-950/40 text-cyan-400 rounded-2xl',
        positiveBtn: 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25',
        negativeWaBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20',
        negativeMailBtn: 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-bold rounded-xl',
        badgePos: 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-300',
        badgeNeg: 'bg-slate-800/80 border border-slate-700 text-slate-300',
        feedbackBox: 'bg-slate-900 border border-slate-700 text-slate-200 rounded-xl placeholder-slate-500 focus:border-cyan-400',
        feedbackInput: 'bg-slate-900 border border-slate-700 text-slate-200 rounded-xl placeholder-slate-500 focus:border-cyan-400',
        feedbackBtn: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-500',
        backBtn: 'text-slate-400 hover:text-cyan-300'
      };
    } else if (preset.id === 'estilo3') {
      theme = {
        card: 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl shadow-2xl',
        headerBorder: 'border-b-2 border-[#8c7b6c]',
        titleClass: 'font-serif font-bold text-[#2b2520]',
        starBtn: 'border border-[#8c7b6c] bg-[#f5efe6] hover:bg-[#ebdcc9] hover:border-[#5a4330] text-[#8c7b6c] hover:text-[#3d3228] rounded-lg',
        positiveBtn: 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold shadow rounded',
        negativeWaBtn: 'bg-[#1e5a32] hover:bg-[#154224] text-white font-serif font-bold rounded shadow',
        negativeMailBtn: 'bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] border border-[#8c7b6c] font-serif font-bold rounded',
        badgePos: 'bg-[#eee7db] border border-[#8c7b6c] text-[#3d3228]',
        badgeNeg: 'bg-[#f0ebe3] border border-[#8c7b6c] text-[#3d3228]',
        feedbackBox: 'bg-[#fbf9f5] border border-[#8c7b6c] text-[#2b2520] font-serif rounded placeholder-[#8c7b6c] focus:border-[#3d3228]',
        feedbackInput: 'bg-[#fbf9f5] border border-[#8c7b6c] text-[#2b2520] font-serif rounded placeholder-[#8c7b6c] focus:border-[#3d3228]',
        feedbackBtn: 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold rounded',
        backBtn: 'text-[#6e5d50] hover:text-[#2b2520]'
      };
    } else {
      theme = {
        card: 'bg-white border border-zinc-200 text-zinc-900 rounded-none shadow-2xl',
        headerBorder: 'border-b border-zinc-200',
        titleClass: 'font-light uppercase tracking-widest text-zinc-900 text-xs',
        starBtn: 'border border-zinc-300 bg-zinc-50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-800 rounded-none',
        positiveBtn: 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none',
        negativeWaBtn: 'bg-emerald-700 hover:bg-emerald-800 text-white font-medium uppercase tracking-wider py-3 rounded-none shadow-sm',
        negativeMailBtn: 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 font-medium uppercase tracking-wider py-3 rounded-none',
        badgePos: 'bg-zinc-100 border border-zinc-200 text-zinc-800',
        badgeNeg: 'bg-zinc-100 border border-zinc-200 text-zinc-800',
        feedbackBox: 'bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-none placeholder-zinc-400 focus:border-zinc-900',
        feedbackInput: 'bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-none placeholder-zinc-400 focus:border-zinc-900',
        feedbackBtn: 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider rounded-none',
        backBtn: 'text-zinc-500 hover:text-zinc-900'
      };
    }

    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <div id="review-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"></div>
        
        <div class="modal-animate relative z-10 max-w-md w-full p-6 shadow-2xl border ${theme.card} overflow-hidden">
          
          <!-- Header -->
          <div class="flex justify-between items-center pb-4 ${theme.headerBorder}">
            <div class="flex items-center space-x-2.5">
              ${ICONS.google}
              <h3 class="font-bold text-sm sm:text-base ${theme.titleClass}">${preset.name}</h3>
            </div>
            <button id="close-review-modal" class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center text-sm transition-colors cursor-pointer" title="Cerrar modal">✕</button>
          </div>

          <!-- Paso 1: Valoración de 1 a 5 estrellas -->
          <div id="review-step-stars" class="pt-5 pb-2 text-center space-y-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-2xl ${theme.badgePos}">⭐</div>
            <div>
              <h4 class="font-bold text-base sm:text-lg">¿Cómo ha sido tu experiencia hoy?</h4>
              <p class="text-xs opacity-75 mt-1 max-w-xs mx-auto leading-relaxed">
                Selecciona tu puntuación para ofrecernos tu valoración sincera:
              </p>
            </div>

            <div class="flex justify-center items-center space-x-2.5 py-3">
              ${[1, 2, 3, 4, 5].map(stars => `
                <button type="button" data-rate-stars="${stars}" class="w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center transition-all transform hover:scale-110 shadow-sm cursor-pointer ${theme.starBtn}">
                  <span class="text-lg leading-none">★</span>
                  <span class="text-[10px] font-mono font-bold mt-0.5">${stars}</span>
                </button>
              `).join('')}
            </div>

            <div class="pt-2 border-t ${theme.headerBorder} text-[11px] opacity-70 flex justify-around">
              <span>★ 1-3: Atención con gerencia</span>
              <span>•</span>
              <span>★ 4-5: Reseña en Google</span>
            </div>
          </div>

          <!-- Paso 2A: Puntuación Alta (4 o 5 estrellas) -> Publicar en Google Maps -->
          <div id="review-step-positive" class="pt-5 pb-2 text-center space-y-4 hidden">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-3xl ${theme.badgePos}">🎉</div>
            <div class="space-y-1">
              <span id="pos-stars-badge" class="inline-block px-3 py-1 text-[11px] font-bold rounded-full ${theme.badgePos}">★★★★★ (5/5)</span>
              <h4 class="font-bold text-base sm:text-lg">¡Nos alegra muchísimo tu satisfacción!</h4>
              <p class="text-xs opacity-80 mt-1 max-w-sm mx-auto leading-relaxed">
                Tu opinión en Google Maps ayuda a posicionar a <strong>${preset.name}</strong> y apoya directamente a nuestro equipo. ¿Nos dedicas 15 segundos para publicarla?
              </p>
            </div>

            <div class="pt-2 space-y-3">
              <a href="${preset.googleMapsUrl}" target="_blank" class="w-full ${theme.positiveBtn} py-3.5 px-5 flex items-center justify-center space-x-2 text-xs transition-transform transform hover:scale-[1.02] cursor-pointer">
                ${ICONS.google}
                <span>Publicar Reseña en Google Maps</span>
                ${ICONS.external}
              </a>

              <button type="button" id="review-back-btn-pos" class="block mx-auto text-xs ${theme.backBtn} underline cursor-pointer pt-1">
                ← Cambiar valoración
              </button>
            </div>
          </div>

          <!-- Paso 2B: Puntuación Baja (1, 2 o 3 estrellas) -> Contacto directo con Gerente por WhatsApp o Email -->
          <div id="review-step-negative" class="pt-4 pb-1 text-center space-y-3.5 hidden">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto text-2xl ${theme.badgeNeg}">🤝</div>
            <div class="space-y-1">
              <span id="neg-stars-badge" class="inline-block px-3 py-0.5 text-[11px] font-bold rounded-full ${theme.badgeNeg}">★★★☆☆ (3/5)</span>
              <h4 class="font-bold text-base">Queremos corregirlo de inmediato</h4>
              <p class="text-xs opacity-80 leading-relaxed max-w-sm mx-auto">
                Lamentamos profundamente si algún detalle no cumplió tus expectativas. En <strong>${preset.name}</strong> tu experiencia es lo primero. Contacta directamente con la dirección para darte una solución personalizada:
              </p>
            </div>

            <!-- Botones de contacto directo -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-left">
              <a id="review-wa-link" href="#" target="_blank" class="${theme.negativeWaBtn} py-2.5 px-3 flex items-center justify-center space-x-2 text-xs transition-transform hover:scale-[1.02] cursor-pointer text-center">
                ${ICONS.whatsapp}
                <span>WhatsApp Gerencia</span>
              </a>
              <a id="review-mail-link" href="#" class="${theme.negativeMailBtn} py-2.5 px-3 flex items-center justify-center space-x-2 text-xs transition-transform hover:scale-[1.02] cursor-pointer text-center">
                ${ICONS.mail}
                <span>Email Privado</span>
              </a>
            </div>

            <div class="text-[11px] opacity-70 font-mono text-center">
              Atiende: <span class="font-bold">${preset.managerName || 'Dirección de Sala'}</span>
            </div>

            <!-- Formulario de mensaje privado en el propio modal -->
            <div class="pt-2 border-t ${theme.headerBorder} text-left space-y-2">
              <p class="text-[11px] font-medium opacity-80">O déjanos tu mensaje y te contactamos hoy mismo:</p>
              <textarea id="private-feedback-msg" rows="2" placeholder="¿Qué podemos mejorar de tu visita?..." class="w-full p-2.5 text-xs outline-none ${theme.feedbackBox}"></textarea>
              <div class="flex space-x-2">
                <input type="tel" id="private-feedback-phone" placeholder="Tu teléfono de contacto" class="flex-1 p-2 text-xs outline-none ${theme.feedbackInput}" />
                <button type="button" id="send-private-feedback-btn" class="px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${theme.feedbackBtn}">
                  Enviar
                </button>
              </div>
            </div>

            <button type="button" id="review-back-btn-neg" class="block mx-auto text-xs ${theme.backBtn} underline cursor-pointer pt-1">
              ← Cambiar valoración
            </button>
          </div>

        </div>
      </div>
    `;

    const stepStars = document.getElementById('review-step-stars');
    const stepPos = document.getElementById('review-step-positive');
    const stepNeg = document.getElementById('review-step-negative');
    const posBadge = document.getElementById('pos-stars-badge');
    const negBadge = document.getElementById('neg-stars-badge');
    const waLink = document.getElementById('review-wa-link');
    const mailLink = document.getElementById('review-mail-link');
    const backBtnPos = document.getElementById('review-back-btn-pos');
    const backBtnNeg = document.getElementById('review-back-btn-neg');
    const sendFeedbackBtn = document.getElementById('send-private-feedback-btn');

    // Manejador de clic en estrellas
    container.querySelectorAll('[data-rate-stars]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const stars = parseInt(btn.getAttribute('data-rate-stars'), 10);
        stepStars.classList.add('hidden');

        if (stars >= 4) {
          // Puntuación positiva (4 o 5) -> Google Maps
          const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars);
          if (posBadge) posBadge.textContent = `${starIcons} (${stars}/5)`;
          stepPos.classList.remove('hidden');
          stepNeg.classList.add('hidden');
        } else {
          // Puntuación baja (1, 2 o 3) -> Contacto privado con gerente
          const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars);
          if (negBadge) negBadge.textContent = `${starIcons} (${stars}/5)`;

          const waText = `Hola, estuve en ${preset.name} y quería comentar un detalle sobre mi servicio (valoración ${stars}/5) con ${preset.managerName || 'la gerencia'}: `;
          if (waLink) {
            waLink.href = `https://wa.me/${preset.whatsapp}?text=${encodeURIComponent(waText)}`;
          }

          const mailSubject = `Comentario sobre el servicio (${stars}/5) - ${preset.name}`;
          const mailBody = `Hola ${preset.managerName || 'Gerencia'},\n\nQuería comentaros mi experiencia en ${preset.name} tras valorar el servicio con ${stars}/5 estrellas:\n\n[Escribe aquí tu comentario]\n\nAtentamente,\n`;
          if (mailLink) {
            mailLink.href = `mailto:${preset.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
          }

          stepNeg.classList.remove('hidden');
          stepPos.classList.add('hidden');
        }
      });
    });

    // Botón de cierre directo
    const closeReviewBtn = document.getElementById('close-review-modal');
    const reviewBackdrop = document.getElementById('review-modal-backdrop');
    const closeReviewModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      container.innerHTML = '';
    };
    if (closeReviewBtn) closeReviewBtn.addEventListener('click', closeReviewModal);
    if (reviewBackdrop) reviewBackdrop.addEventListener('click', closeReviewModal);

    // Botones para volver al selector de estrellas
    const resetToStars = (e) => {
      e.preventDefault();
      stepStars.classList.remove('hidden');
      stepPos.classList.add('hidden');
      stepNeg.classList.add('hidden');
    };
    if (backBtnPos) backBtnPos.addEventListener('click', resetToStars);
    if (backBtnNeg) backBtnNeg.addEventListener('click', resetToStars);

    // Envío del feedback privado dentro del modal
    if (sendFeedbackBtn) {
      sendFeedbackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const msgElem = document.getElementById('private-feedback-msg');
        const phoneElem = document.getElementById('private-feedback-phone');
        const msg = msgElem ? msgElem.value.trim() : '';
        const phone = phoneElem ? phoneElem.value.trim() : '';

        if (!msg && !phone) {
          alert('Por favor, introduce un breve comentario o teléfono para poder contactarte.');
          return;
        }

        container.innerHTML = '';
        this.showToast(`✓ Mensaje enviado a ${preset.managerName || 'dirección'}. Nos pondremos en contacto contigo.`);
      });
    }
  }

  // =========================================================================
  // FOOTER INDIVIDUALIZADO PARA CADA ESTILO
  // =========================================================================

  renderGoogleReviewsSection(preset) {
    const starRow = Array(5).fill(ICONS.star).join('');

    // --- ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      return `
        <section class="mb-16 pt-10 border-t border-[#e6dfd5] text-[#1c1c19]">
          <div class="max-w-[1360px] mx-auto">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-[2px] bg-[#8B1E1E]"></span>
                  <span class="font-kicker-eyebrow text-[#8B1E1E] uppercase tracking-[0.2em]">TESTIMONIOS REALES EN ALUCHE</span>
                </div>
                <h3 class="font-headline-lg text-[#1c1c19]">Lo que opinan de nuestras brasas</h3>
                <p class="font-body-md text-[#57423f] max-w-xl">
                  Reseñas verificadas directamente en Google Maps de comensales que se sientan a nuestra mesa.
                </p>
              </div>

              <!-- Google Badge Card -->
              <div class="inline-flex items-center gap-3 bg-white border border-[#e6dfd5] px-5 py-3 rounded-2xl shadow-xs">
                ${ICONS.google}
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-stat-number text-[20px] font-black text-[#1c1c19]">${preset.rating}</span>
                    <div class="flex text-amber-500">${starRow}</div>
                  </div>
                  <span class="font-body-sm text-xs text-[#57423f]">${preset.totalReviews} reseñas verificadas</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${preset.googleReviews.map(r => `
                <div class="bg-white border border-[#e6dfd5] p-7 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex space-x-1">${starRow}</div>
                      <span class="font-kicker-eyebrow text-[10px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">Verificado</span>
                    </div>
                    <p class="font-body-md text-[#57423f] italic leading-relaxed">"${r.comment}"</p>
                  </div>
                  <div class="mt-6 pt-4 border-t border-[#f1ede8] flex justify-between items-center text-xs">
                    <span class="font-body-md font-bold text-[#1c1c19]">${r.author}</span>
                    <span class="text-[#645d5a] font-sans">${r.timeAgo}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button id="open-smart-review-btn" class="btn-vukata-primary font-label-action text-[13px] px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-105 inline-flex items-center space-x-2.5 cursor-pointer">
                ${ICONS.google}
                <span>Escribir Reseña en Google Maps (+5★)</span>
              </button>
              <a href="${preset.googleMapsUrl}" target="_blank" class="inline-flex items-center space-x-2 text-xs font-label-action text-[#8B1E1E] hover:underline">
                <span>Ver ficha oficial de Parrilla Vukata en Google Maps</span>
                <span class="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>

          </div>
        </section>
      `;
    }

    // --- ESTILO 2: APP & BENTO GRID ---
    if (preset.id === 'estilo2') {
      return `
        <section class="mt-16 pt-10 border-t border-slate-800 text-slate-100">
          <div class="bento-card p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="flex items-center space-x-2">
                ${ICONS.google}
                <span class="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">Google Business Profile</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white mt-1">${preset.rating} de Puntuación en Google</h3>
              <div class="flex items-center space-x-2 mt-2">
                <div class="flex space-x-0.5">${starRow}</div>
                <span class="text-xs font-mono text-slate-300 font-bold">· ${preset.totalReviews} opiniones reales</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-3">
              <button id="open-smart-review-btn" class="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs px-6 py-3.5 rounded-2xl shadow-xl shadow-sky-500/25 flex items-center justify-center space-x-2.5 transition-transform hover:scale-105 cursor-pointer flex-shrink-0">
                ${ICONS.google}
                <span>★ Valorar en Google Maps</span>
                ${ICONS.arrow}
              </button>
              <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono text-sky-400 hover:underline flex items-center space-x-1">
                <span>Ficha directa</span>
                ${ICONS.external}
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${preset.googleReviews.map(r => `
              <div class="bento-card p-5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <div class="flex items-center space-x-1.5">
                      <div class="w-6 h-6 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center uppercase">
                        ${r.author.charAt(0)}
                      </div>
                      <span class="font-bold text-xs text-white">${r.author}</span>
                    </div>
                    <div class="flex space-x-0.5">${starRow}</div>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${r.comment}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex justify-between">
                  <span class="text-sky-400">${r.badge}</span>
                  <span>${r.timeAgo}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    // --- ESTILO 3: BISTRÓ TRADICIONAL ---
    if (preset.id === 'estilo3') {
      return `
        <section class="mt-16 pt-10 border-t-2 border-[#8c7b6c] text-[#2b2520]">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <div class="inline-flex items-center space-x-2 bg-[#eee7db] border border-[#8c7b6c] px-3.5 py-1.5 rounded-full mb-3 text-xs font-serif text-[#3d3228]">
              ${ICONS.google}
              <span class="font-bold">Opiniones Verificadas en Google Maps · ${preset.rating} ★★★★★</span>
            </div>
            <h3 class="bistro-serif text-2xl sm:text-3xl font-bold mt-1">Libro de Visitas & Reseñas de Google</h3>
            <p class="text-xs font-serif text-[#7a6b5d] mt-1">${preset.totalReviews} comensales han dejado su opinión sobre la cocina y el trato familiar</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="bistro-card p-6 flex flex-col justify-between border-2 border-[#dfd7cc]">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex space-x-0.5">${starRow}</div>
                    <span class="text-[10px] font-serif text-[#7a6b5d] font-bold">5.0 / 5</span>
                  </div>
                  <p class="text-xs font-serif italic text-[#594d40] leading-relaxed">"${r.comment}"</p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#dfd7cc] text-[11px] font-serif text-[#7a6b5d] flex justify-between items-center">
                  <span class="font-bold text-[#2b2520]">${r.author}</span>
                  <span class="text-[10px]">${r.badge}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-10 text-center space-y-2">
            <button id="open-smart-review-btn" class="bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif text-xs font-bold px-7 py-3.5 rounded shadow-lg border border-[#8c7b6c] inline-flex items-center space-x-2.5 transition-transform hover:scale-105 cursor-pointer">
              ${ICONS.google}
              <span>★ Añadir una Nota al Libro de Visitas en Google</span>
            </button>
            <div class="text-center">
              <a href="${preset.googleMapsUrl}" target="_blank" class="inline-flex items-center space-x-1.5 text-xs text-[#7a6b5d] hover:text-[#3d3228] underline font-serif">
                <span>Ver ficha oficial en Google Maps</span>
                ${ICONS.external}
              </a>
            </div>
          </div>
        </section>
      `;
    }

    // --- ESTILO 4: MINIMALISMO NÓRDICO ---
    return `
      <section class="mt-16 pt-12 border-t border-zinc-200 text-zinc-900">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-1">
              ${ICONS.google}
              <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">Google Business Verified</span>
            </div>
            <h3 class="text-2xl font-light text-zinc-900 tracking-tight">${preset.rating} ★★★★★ · Experiencias en ${preset.name}</h3>
            <p class="text-xs text-zinc-500 mt-0.5">${preset.totalReviews} clientes han valorado nuestro café y obrador</p>
          </div>

          <div class="flex items-center gap-3 flex-shrink-0">
            <button id="open-smart-review-btn" class="bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-widest text-xs px-6 py-3 rounded-none shadow inline-flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer">
              ${ICONS.google}
              <span>★ Valorar en Google Maps</span>
            </button>
            <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 underline flex items-center space-x-1">
              <span>Google Maps</span>
              ${ICONS.external}
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.googleReviews.map(r => `
            <div class="minimal-card p-5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex space-x-0.5">${starRow}</div>
                  <span class="text-[10px] font-mono text-zinc-400">Google Review</span>
                </div>
                <p class="text-xs text-zinc-600 font-light leading-relaxed">"${r.comment}"</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span class="font-medium text-zinc-800">${r.author}</span>
                <span>${r.timeAgo}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // =========================================================================
  // MODAL DE RESEÑA INTELIGENTE (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================

  showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 border border-slate-700 transition-all transform duration-300';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }


  updateCartBadge() {
    const total = store.getCartTotal();
    const count = store.getCartItemCount();
    const totalFormatted = formatCurrency(total);

    const cartBtns = document.querySelectorAll('#open-cart-btn, #mobile-cart-btn');
    cartBtns.forEach(btn => {
      const monoSpan = btn.querySelector('.font-mono');
      if (monoSpan) {
        monoSpan.textContent = totalFormatted;
      }
      let badge = btn.querySelector('.cart-count-badge');
      if (count > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'cart-count-badge bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full';
          btn.appendChild(badge);
        }
        badge.textContent = count;
      } else if (badge) {
        badge.remove();
      }
    });

    const cartContainer = document.getElementById('cart-drawer-container');
    if (cartContainer && cartContainer.innerHTML.trim() !== '') {
      this.renderCartDrawer(true);
    }
  }


  updateHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const preset = store.getPreset();
    if (preset.id !== 'estilo1') return;

    const isMenu = (store.state.currentView === 'menu');
    const scrollY = (typeof window !== 'undefined') ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0) : 0;
    const isAtTop = isMenu && scrollY <= 45;

    if (isAtTop) {
      header.classList.add('is-transparent-dark');
      header.classList.remove('is-light-scrolled');
    } else {
      header.classList.remove('is-transparent-dark');
      header.classList.add('is-light-scrolled');
    }
  }

}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.gastroApp = new GastroApp();
  });
}
