// admin/admin.js - Controlador del Backoffice de DevCorp GastroSuite
(function() {
  let activeTab = 'estilo1';
  let stylesData = {
    estilo1: null,
    estilo2: null,
    estilo3: null,
    estilo4: null
  };

  function loadAllStyles() {
    ['estilo1', 'estilo2', 'estilo3', 'estilo4'].forEach(id => {
      const windowKey = id.toUpperCase() + '_DATA';
      let data = (typeof window[windowKey] !== 'undefined') ? JSON.parse(JSON.stringify(window[windowKey])) : null;
      if (!data && window.DEV_CORP_STYLES && window.DEV_CORP_STYLES[id]) {
        data = JSON.parse(JSON.stringify(window.DEV_CORP_STYLES[id]));
      }
      if (typeof localStorage !== 'undefined') {
        try {
          const custom = localStorage.getItem('devcorp_data_' + id);
          if (custom) {
            data = { ...(data || {}), ...JSON.parse(custom) };
          }
        } catch (e) {
          console.warn('Error cargando storage de ' + id, e);
        }
      }
      stylesData[id] = data;
    });
  }

  function updateTabButtonsUI() {
    const tabButtons = document.querySelectorAll('.admin-tab');
    tabButtons.forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      if (tab === activeTab) {
        if (tab === 'unified') {
          btn.className = 'admin-tab px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-purple-600 text-white shadow-lg shadow-purple-600/30';
        } else {
          btn.className = 'admin-tab px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-blue-600 text-white shadow-lg shadow-blue-600/30';
        }
      } else {
        if (tab === 'unified') {
          btn.className = 'admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-500/30';
        } else {
          btn.className = 'admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60';
        }
      }
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('admin-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 4000);
  }

  function renderAdminMain() {
    const main = document.getElementById('admin-main');
    if (!main) return;

    if (activeTab === 'unified') {
      renderUnifiedSettings(main);
      return;
    }

    const currentStyle = stylesData[activeTab];
    if (!currentStyle) {
      main.innerHTML = '<p class="text-red-400">Error: No se han podido cargar los datos del estilo ' + activeTab + '</p>';
      return;
    }

    main.innerHTML = `
      <div class="space-y-8">
        
        <!-- Tarjeta de Cabecera del Estilo -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs uppercase font-mono tracking-widest text-slate-400">Modo Edición Activo</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">${currentStyle.name}</h2>
            <p class="text-sm text-slate-400">${currentStyle.tagline || ''} · ${currentStyle.neighborhood || ''}</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button id="save-style-btn" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all">
              <span class="material-symbols-outlined text-[18px]">save</span> Guardar Cambios
            </button>
            <button id="reset-style-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 border border-slate-700 cursor-pointer transition-all">
              Restablecer Valores
            </button>
            <a href="../${activeTab}/index.html" target="_blank" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">visibility</span> Ver en Vivo ↗
            </a>
          </div>
        </div>

        <!-- Formulario de Información General del Negocio -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-400">business</span> Datos Principales del Establecimiento
            </h3>
            <span class="text-xs text-slate-400">Se reflejan de inmediato en cabecera, pie y reservas</span>
          </div>

          <form id="style-info-form" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Nombre del Restaurante</label>
              <input type="text" id="info-name" value="${currentStyle.name || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Eslogan / Subtítulo</label>
              <input type="text" id="info-tagline" value="${currentStyle.tagline || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Barrio / Ciudad</label>
              <input type="text" id="info-neighborhood" value="${currentStyle.neighborhood || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Teléfono de Reservas</label>
              <input type="text" id="info-phone" value="${currentStyle.phone || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">WhatsApp Pedidos</label>
              <input type="text" id="info-whatsapp" value="${currentStyle.whatsapp || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Email de Gerencia</label>
              <input type="text" id="info-email" value="${currentStyle.email || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Dirección Completa</label>
              <input type="text" id="info-address" value="${currentStyle.address || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Horarios de Servicio</label>
              <input type="text" id="info-hours" value="${currentStyle.serviceHours || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
          </form>
        </div>

        <!-- Catálogo de Platos de la Carta -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-400">restaurant_menu</span> Platos en Carta (${currentStyle.menu ? currentStyle.menu.length : 0})
              </h3>
              <p class="text-xs text-slate-400 mt-1">Gestiona precios, descripciones fotográficas y alérgenos de cada especialidad</p>
            </div>
            <button id="add-dish-btn" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20">
              <span class="material-symbols-outlined text-[16px]">add</span> Añadir Nuevo Plato
            </button>
          </div>

          <!-- Grid de Platos -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="dishes-grid">
            ${(currentStyle.menu || []).map((d, index) => `
              <div class="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex gap-3 group transition-all">
                <img src="${d.image}" alt="${d.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-slate-800" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?w=100'" />
                <div class="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] uppercase font-bold text-blue-400 tracking-wider">${d.category}</span>
                      <span class="font-bold text-sm text-white font-mono">${d.price.toFixed(2)} €</span>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-100 truncate mt-0.5">${d.name}</h4>
                    <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${d.description || ''}</p>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-2">
                    <span class="text-[10px] text-slate-500">${(d.allergens && d.allergens.length) ? d.allergens.length + ' alérgenos' : 'Sin alérgenos'}</span>
                    <div class="flex items-center gap-1">
                      <button data-edit-dish="${d.id}" class="p-1 hover:text-blue-400 text-slate-400 cursor-pointer" title="Editar plato">
                        <span class="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button data-delete-dish="${d.id}" class="p-1 hover:text-red-400 text-slate-400 cursor-pointer" title="Eliminar plato">
                        <span class="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;

    setupMainEvents(currentStyle);
  }

  function renderUnifiedSettings(main) {
    const savedName = localStorage.getItem('devcorp_unified_name') || '';

    main.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex items-center gap-3 text-purple-400 mb-2">
            <span class="material-symbols-outlined text-[32px]">store</span>
            <h2 class="text-2xl font-bold text-white">Marca y Nombre Unificado</h2>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Esta opción permite cambiar el nombre del local de los <strong>cuatro estilos a la vez</strong> de forma simultánea. Es ideal cuando se realiza una demostración comercial personalizada a un nuevo cliente (por ejemplo: "Restaurante Don Ramón") y se quiere que las cuatro páginas muestren la misma marca automáticamente.
          </p>

          <div class="pt-4 space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Nombre Unificado del Cliente / Local</label>
              <input type="text" id="unified-name-input" value="${savedName}" placeholder="Ej: Taberna Don Ramón" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-purple-500 font-semibold" />
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button id="apply-unified-btn" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 cursor-pointer">
                Aplicar a los 4 Estilos
              </button>
              <button id="clear-unified-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer">
                Desactivar Nombre Unificado
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
          <p><strong>Nota:</strong> Los nombres originales de cada preset (Vukata, Cervecería 27, Carlos, Campamento) se restablecen automáticamente si dejas este campo vacío o pulsas "Desactivar".</p>
        </div>
      </div>
    `;

    const applyBtn = document.getElementById('apply-unified-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const val = document.getElementById('unified-name-input').value.trim();
        if (val) {
          localStorage.setItem('devcorp_unified_name', val);
          showToast('✓ Nombre unificado "' + val + '" aplicado a todos los estilos');
        }
      });
    }

    const clearBtn = document.getElementById('clear-unified-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        localStorage.removeItem('devcorp_unified_name');
        document.getElementById('unified-name-input').value = '';
        showToast('✓ Nombre unificado desactivado');
      });
    }
  }

  function setupMainEvents(currentStyle) {
    const saveBtn = document.getElementById('save-style-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        currentStyle.name = document.getElementById('info-name').value;
        currentStyle.tagline = document.getElementById('info-tagline').value;
        currentStyle.neighborhood = document.getElementById('info-neighborhood').value;
        currentStyle.phone = document.getElementById('info-phone').value;
        currentStyle.whatsapp = document.getElementById('info-whatsapp').value;
        currentStyle.email = document.getElementById('info-email').value;
        currentStyle.address = document.getElementById('info-address').value;
        currentStyle.serviceHours = document.getElementById('info-hours').value;

        localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
        showToast('✓ Cambios guardados para ' + currentStyle.name);
      });
    }

    const resetBtn = document.getElementById('reset-style-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas restablecer los datos de este estilo a sus valores de fábrica?')) {
          localStorage.removeItem('devcorp_data_' + activeTab);
          loadAllStyles();
          renderAdminMain();
          showToast('✓ Valores originales restablecidos');
        }
      });
    }

    const addDishBtn = document.getElementById('add-dish-btn');
    if (addDishBtn) {
      addDishBtn.addEventListener('click', () => {
        openDishEditorModal(null, currentStyle);
      });
    }

    document.querySelectorAll('[data-edit-dish]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-edit-dish');
        const dish = currentStyle.menu.find(d => d.id === dishId);
        if (dish) openDishEditorModal(dish, currentStyle);
      });
    });

    document.querySelectorAll('[data-delete-dish]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-delete-dish');
        if (confirm('¿Eliminar este plato de la carta?')) {
          currentStyle.menu = currentStyle.menu.filter(d => d.id !== dishId);
          localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
          renderAdminMain();
          showToast('✓ Plato eliminado');
        }
      });
    });
  }

  function openDishEditorModal(dish, currentStyle) {
    const modal = document.getElementById('dish-editor-modal');
    const form = document.getElementById('dish-editor-form');
    const title = document.getElementById('editor-modal-title');
    if (!modal || !form) return;

    if (dish) {
      title.textContent = 'Editar Plato: ' + dish.name;
      document.getElementById('dish-edit-id').value = dish.id;
      document.getElementById('dish-edit-name').value = dish.name;
      document.getElementById('dish-edit-price').value = dish.price;
      document.getElementById('dish-edit-category').value = dish.category;
      document.getElementById('dish-edit-badge').value = dish.badge || '';
      document.getElementById('dish-edit-description').value = dish.description || '';
      document.getElementById('dish-edit-image').value = dish.image || '';
      document.getElementById('dish-edit-allergens').value = (dish.allergens || []).join(', ');
    } else {
      title.textContent = 'Añadir Nuevo Plato a la Carta';
      form.reset();
      document.getElementById('dish-edit-id').value = '';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const closeBtn = document.getElementById('close-editor-modal');
    const cancelBtn = document.getElementById('cancel-dish-edit');
    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };
    if (closeBtn) closeBtn.onclick = closeModal;
    if (cancelBtn) cancelBtn.onclick = closeModal;

    form.onsubmit = (e) => {
      e.preventDefault();
      const idVal = document.getElementById('dish-edit-id').value;
      const name = document.getElementById('dish-edit-name').value;
      const price = parseFloat(document.getElementById('dish-edit-price').value) || 0;
      const category = document.getElementById('dish-edit-category').value;
      const badge = document.getElementById('dish-edit-badge').value;
      const description = document.getElementById('dish-edit-description').value;
      const image = document.getElementById('dish-edit-image').value;
      const allergens = document.getElementById('dish-edit-allergens').value
        .split(',')
        .map(a => a.trim().toLowerCase())
        .filter(a => a.length > 0);

      if (idVal) {
        const existing = currentStyle.menu.find(d => d.id === idVal);
        if (existing) {
          existing.name = name;
          existing.price = price;
          existing.category = category;
          existing.badge = badge;
          existing.description = description;
          existing.image = image;
          existing.allergens = allergens;
        }
      } else {
        const newDish = {
          id: 'dish_' + Date.now(),
          name, price, category, badge, description, image, allergens
        };
        currentStyle.menu.push(newDish);
      }

      localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
      closeModal();
      renderAdminMain();
      showToast('✓ Plato guardado en ' + currentStyle.name);
    };
  }

  function initAdmin() {
    loadAllStyles();

    const tabButtons = document.querySelectorAll('.admin-tab');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        updateTabButtonsUI();
        renderAdminMain();
      });
    });

    updateTabButtonsUI();
    renderAdminMain();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdmin);
  } else {
    initAdmin();
  }
})();
