// Catálogo de tours: edita esta lista para agregar o cambiar salidas.
const TOURS = [
  { id: 'tatio', region: 'norte', title: 'Géiseres del Tatio al amanecer', days: 1, price: 45000, level: 'Fácil', desc: 'Salida a las 4:30, desayuno a 4.300 m y baño en termas de Puritama.' },
  { id: 'luna', region: 'norte', title: 'Valle de la Luna y astroturismo', days: 1, price: 38000, level: 'Fácil', desc: 'Atardecer en el mirador de Kari y observación con telescopios profesionales.' },
  { id: 'valpo', region: 'centro', title: 'Valparaíso patrimonial y viñas', days: 1, price: 52000, level: 'Fácil', desc: 'Recorrido a pie por los cerros, ascensores y cata en el valle de Casablanca.' },
  { id: 'villarrica', region: 'sur', title: 'Ascenso al volcán Villarrica', days: 1, price: 89000, level: 'Exigente', desc: 'Equipo técnico incluido, guías de montaña y descenso en trineo por la nieve.' },
  { id: 'chiloe', region: 'sur', title: 'Chiloé: palafitos e iglesias', days: 3, price: 210000, level: 'Moderado', desc: 'Castro, Dalcahue, isla Quinchao y curanto con una familia chilota.' },
  { id: 'w-trek', region: 'patagonia', title: 'Circuito W en Torres del Paine', days: 5, price: 890000, level: 'Exigente', desc: 'Refugios, comidas y porteo incluidos. Base de las Torres, Valle Francés y Glaciar Grey.' },
  { id: 'grey', region: 'patagonia', title: 'Navegación al Glaciar Grey', days: 1, price: 120000, level: 'Fácil', desc: 'Travesía por el lago Grey hasta la pared del glaciar, desde Puerto Natales.' },
  { id: 'rapanui', region: 'isla', title: 'Rapa Nui esencial', days: 4, price: 480000, level: 'Moderado', desc: 'Rano Raraku, Ahu Tongariki al amanecer, Orongo y un día libre en Anakena.' },
];

const REGION_LABEL = { norte: 'Norte', centro: 'Centro', sur: 'Sur', patagonia: 'Patagonia', isla: 'Isla de Pascua' };
const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });

const list = document.getElementById('tour-list');
const empty = document.getElementById('tour-empty');
const chips = document.querySelectorAll('.chip');
const tourSelect = document.getElementById('contact-tour');

function renderTours(region = 'all') {
  const items = TOURS.filter(t => region === 'all' || t.region === region);
  list.innerHTML = items.map(t => `
    <article class="tour tour-${t.region}">
      <div class="tour-top">
        <span class="tag">${REGION_LABEL[t.region]}</span>
        <span class="level level-${t.level.toLowerCase()}">${t.level}</span>
      </div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <div class="tour-meta">
        <span>${t.days} ${t.days === 1 ? 'día' : 'días'}</span>
        <strong>${clp.format(t.price)}</strong>
      </div>
      <a href="#contacto" class="btn btn-outline" data-book="${t.id}">Reservar</a>
    </article>`).join('');
  empty.hidden = items.length > 0;
}

function setFilter(region) {
  chips.forEach(c => {
    const active = c.dataset.filter === region;
    c.classList.toggle('is-active', active);
    c.setAttribute('aria-selected', active);
  });
  renderTours(region);
}

chips.forEach(c => c.addEventListener('click', () => setFilter(c.dataset.filter)));

// "Reservar" en una tarjeta preselecciona el tour en el formulario.
list.addEventListener('click', e => {
  const btn = e.target.closest('[data-book]');
  if (btn) tourSelect.value = btn.dataset.book;
});

tourSelect.insertAdjacentHTML('beforeend',
  TOURS.map(t => `<option value="${t.id}">${t.title}</option>`).join(''));

// Buscador del hero: filtra la lista y baja a los tours.
const dateInput = document.getElementById('search-date');
dateInput.min = new Date().toISOString().split('T')[0];
document.getElementById('search-form').addEventListener('submit', e => {
  e.preventDefault();
  setFilter(document.getElementById('search-region').value);
  document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
});

// Formulario de contacto (sin backend: valida y muestra confirmación).
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Por favor completa tu nombre y un correo válido.';
    status.className = 'form-status is-error';
    form.reportValidity();
    return;
  }
  const name = form.nombre.value.trim().split(' ')[0];
  status.textContent = `¡Gracias, ${name}! Te responderemos en menos de 24 horas.`;
  status.className = 'form-status is-ok';
  form.reset();
});

// Menú móvil.
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Contadores animados al entrar en pantalla.
const counters = document.querySelectorAll('[data-count]');
const animate = el => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / 1400, 1);
    const val = target * (1 - Math.pow(1 - p, 3));
    el.textContent = decimals ? val.toFixed(decimals).replace('.', ',') : Math.round(val).toLocaleString('es-CL');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
  }), { threshold: 0.6 });
  counters.forEach(c => io.observe(c));
} else {
  counters.forEach(animate);
}

document.getElementById('year').textContent = new Date().getFullYear();
renderTours();
