/* The URL determines the package, independently of browser preferences. */
(() => {
  const base = new URL('./', document.currentScript.src);
  const ranks = { esencial: 0, profesional: 1, premium: 2 };
  const current = document.documentElement.dataset.paquete || 'premium';
  const list = [{id:'esencial',label:'Paquete Esencial'},{id:'profesional',label:'Paquete Profesional'},{id:'premium',label:'Paquete Premium'}];
  window.DevcorpPaquete = { current, has: min => ranks[current] >= ranks[min], is: id => current === id, base };
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-paquete-select]').forEach(select => {
      select.innerHTML = list.map(p => `<option value="${p.id}" ${p.id === current ? 'selected' : ''}>${p.label}</option>`).join('');
      select.addEventListener('change', () => {
        if (!(select.value in ranks)) return;
        location.href = new URL(`${select.value}/index.html`, base).href;
      });
    });
  });
})();
