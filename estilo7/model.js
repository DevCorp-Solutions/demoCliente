/* Shared labels and browser-local settings for the package demonstrations. */
window.GANCHO_ALLERGENS=[['gluten','Gluten'],['crustaceos','Crustáceos'],['huevos','Huevos'],['pescado','Pescado'],['cacahuetes','Cacahuetes'],['soja','Soja'],['leche','Leche'],['frutos','Frutos de cáscara'],['apio','Apio'],['mostaza','Mostaza'],['sesamo','Sésamo'],['sulfitos','Sulfitos'],['altramuces','Altramuces'],['moluscos','Moluscos']];
window.GANCHO_KEYS={menu:'gancho_menu_v1',settings:'gancho_settings_v1'};
window.ganchoExternalUrl=value=>{try{const u=new URL(value);const host=u.hostname.toLowerCase();return u.protocol==='https:'&&!/(^|\.)ganchoydirecto\.(com|es)$/.test(host)?u.href:''}catch{return ''}};
window.loadGanchoSettings=()=>{try{const v=JSON.parse(localStorage.getItem(GANCHO_KEYS.settings)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch{return {}}};
window.loadGanchoMenu=()=>{try{const v=JSON.parse(localStorage.getItem(GANCHO_KEYS.menu)||'null');return Array.isArray(v)?v.filter(d=>d&&typeof d.id==='string'&&typeof d.name==='string'):structuredClone(GANCHO_MENU)}catch{return structuredClone(GANCHO_MENU)}};
