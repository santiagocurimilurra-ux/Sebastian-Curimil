// ---------------------------------------------------------------------------
// Catálogo de tours con itinerario día a día.
// Para agregar un tour, copia uno de estos objetos y cambia sus datos.
// pin: posición [x, y] en el mapa (viewBox 220 × 430).
// ---------------------------------------------------------------------------
const TOURS = [
  {
    id: 'tatio', region: 'norte', title: 'Géiseres del Tatio al amanecer', days: 1, price: 45000,
    level: 'Fácil', maxAlt: '4.320 m', pin: [132, 44], base: 'San Pedro de Atacama',
    desc: 'El campo geotérmico más alto del hemisferio sur, humeando bajo el primer sol.',
    includes: ['Traslado ida y vuelta', 'Desayuno en altura', 'Entrada al Tatio', 'Guía bilingüe'],
    bring: ['Ropa de abrigo en capas (−10 °C al amanecer)', 'Traje de baño y toalla', 'Bloqueador y lentes de sol'],
    itinerary: [{
      title: 'Géiseres, Machuca y Putana', stat: '190 km · 4.320 m',
      items: [
        ['04:30', 'Recogida en tu alojamiento', 'Viaje nocturno por el altiplano; llevamos mantas.'],
        ['06:15', 'Campo geotérmico del Tatio', 'Más de 80 géiseres en su máxima actividad al amanecer.'],
        ['07:30', 'Desayuno caliente junto a las fumarolas', 'Café, té de coca, pan amasado y huevos cocidos en el géiser.'],
        ['08:30', 'Piscina termal natural', 'Baño opcional a 30 °C en medio del altiplano.'],
        ['09:30', 'Pueblo de Machuca', 'Iglesia de adobe y techo de paja; anticucho de llama.'],
        ['10:30', 'Humedal de Putana', 'Flamencos, vicuñas y taguas con el volcán de fondo.'],
        ['12:00', 'Regreso a San Pedro', ''],
      ],
    }],
  },
  {
    id: 'luna', region: 'norte', title: 'Valle de la Luna y astroturismo', days: 1, price: 38000,
    level: 'Fácil', maxAlt: '2.500 m', pin: [127, 64], base: 'San Pedro de Atacama',
    desc: 'Dunas y sal al atardecer, y de noche los cielos más limpios del planeta.',
    includes: ['Traslados', 'Entrada al Valle de la Luna', 'Observación con telescopios', 'Chocolate caliente'],
    bring: ['Agua (mínimo 1,5 l)', 'Chaqueta para la noche', 'Zapatillas cómodas'],
    itinerary: [{
      title: 'Del atardecer a las estrellas', stat: '8 km a pie · 2.500 m',
      items: [
        ['15:30', 'Recogida en San Pedro', ''],
        ['16:00', 'Valle de la Luna', 'Duna Mayor, las Tres Marías y el Anfiteatro.'],
        ['18:00', 'Mirador de Kari', 'Atardecer sobre la Cordillera de la Sal; la tierra se vuelve roja.'],
        ['19:30', 'Cena libre en San Pedro', 'Te recomendamos dónde comer.'],
        ['21:30', 'Tour astronómico', 'Telescopios, Cruz del Sur, Nubes de Magallanes y Saturno si está visible.'],
        ['23:30', 'Regreso al alojamiento', ''],
      ],
    }],
  },
  {
    id: 'valpo', region: 'centro', title: 'Valparaíso patrimonial y viñas', days: 1, price: 52000,
    level: 'Fácil', maxAlt: '350 m', pin: [121, 168], base: 'Santiago',
    desc: 'Cerros de colores, ascensores centenarios y cata en el valle de Casablanca.',
    includes: ['Traslado desde Santiago', 'Cata de 3 vinos', 'Ascensor y entradas', 'Almuerzo'],
    bring: ['Zapatos cómodos (muchas escaleras)', 'Cortavientos', 'Cámara'],
    itinerary: [{
      title: 'Casablanca, Valparaíso y Viña', stat: '260 km · 6 km a pie',
      items: [
        ['08:00', 'Salida desde Santiago', ''],
        ['09:30', 'Viña en el valle de Casablanca', 'Cata de sauvignon blanc y pinot noir de clima frío.'],
        ['11:30', 'Plaza Sotomayor y muelle Prat', 'Inicio del recorrido patrimonial.'],
        ['12:15', 'Ascensor Concepción', 'Subida en el ascensor más antiguo de la ciudad (1883).'],
        ['12:30', 'Cerros Alegre y Concepción', 'Murales, pasajes y miradores sobre la bahía.'],
        ['14:00', 'Almuerzo', 'Pescado del día o chupe de mariscos.'],
        ['15:30', 'La Sebastiana', 'Casa museo de Pablo Neruda.'],
        ['17:00', 'Viña del Mar', 'Reloj de flores y paseo por la costanera.'],
        ['19:00', 'Regreso a Santiago', ''],
      ],
    }],
  },
  {
    id: 'villarrica', region: 'sur', title: 'Ascenso al volcán Villarrica', days: 1, price: 89000,
    level: 'Exigente', maxAlt: '2.847 m', pin: [119, 232], base: 'Pucón',
    desc: 'Crampones, piolet y el cráter de un volcán activo bajo tus pies.',
    includes: ['Equipo técnico completo', 'Guías de montaña certificados', 'Seguro de actividad', 'Traslados'],
    bring: ['Almuerzo y 2 l de agua', 'Guantes y gorro', 'Buena condición física'],
    itinerary: [{
      title: 'Cumbre del Villarrica', stat: '+1.400 m de desnivel',
      items: [
        ['06:00', 'Reunión en la agencia', 'Prueba de equipo: botas, crampones, piolet y casco.'],
        ['07:00', 'Traslado a la base del volcán', 'Centro de ski Pucón, 1.400 m.'],
        ['07:30', 'Telesilla opcional', 'Ahorra 400 m de subida.'],
        ['08:00', 'Inicio del ascenso', 'Técnica de piolet y marcha en nieve con crampones.'],
        ['12:30', 'Cumbre: 2.847 m', 'Vista al cráter activo y a seis volcanes más en días claros.'],
        ['13:30', 'Descenso en trineo', 'Bajada por canales de nieve, la parte favorita de todos.'],
        ['16:00', 'Regreso a Pucón', ''],
      ],
    }],
  },
  {
    id: 'chiloe', region: 'sur', title: 'Chiloé: palafitos e iglesias', days: 3, price: 210000,
    level: 'Moderado', maxAlt: '200 m', pin: [110, 292], base: 'Puerto Montt',
    desc: 'Tres días de islas, madera, lana y curanto con una familia chilota.',
    includes: ['2 noches en palafito', 'Desayunos y 2 almuerzos', 'Ferry y lancha', 'Entrada al Parque Nacional'],
    bring: ['Impermeable (llueve seguido)', 'Botas o zapatillas que se puedan mojar', 'Efectivo para la feria'],
    itinerary: [
      {
        title: 'Cruce del canal y Castro', stat: '190 km',
        items: [
          ['10:00', 'Recogida en Puerto Montt', ''],
          ['11:30', 'Ferry por el canal de Chacao', 'Con suerte, delfines australes y pingüinos.'],
          ['13:00', 'Ancud', 'Fuerte San Antonio y almuerzo libre.'],
          ['16:00', 'Castro', 'Palafitos de Gamboa e iglesia San Francisco.'],
          ['20:00', 'Noche en palafito', 'Sobre el agua, con vista a la marea.'],
        ],
      },
      {
        title: 'Islas del archipiélago', stat: 'Lancha · 2 islas',
        items: [
          ['09:00', 'Feria de Dalcahue', 'Tejidos de lana, cestería y mariscos.'],
          ['10:30', 'Lancha a la isla Quinchao', ''],
          ['11:30', 'Iglesia de Achao', 'La más antigua de Chiloé, construida sin clavos.'],
          ['13:30', 'Curanto al hoyo', 'Con una familia de Curaco de Vélez: mariscos, carne y milcao.'],
          ['17:00', 'Regreso a Castro', ''],
        ],
      },
      {
        title: 'Parque Nacional Chiloé', stat: '9 km a pie',
        items: [
          ['09:00', 'Salida a Cucao', 'Costa del Pacífico.'],
          ['10:00', 'Sendero El Tepual', 'Pasarelas de madera por bosque nativo y dunas.'],
          ['13:00', 'Almuerzo en Cucao', ''],
          ['15:00', 'Regreso a Puerto Montt', 'Llegada aproximada a las 18:30.'],
        ],
      },
    ],
  },
  {
    id: 'w-trek', region: 'patagonia', title: 'Circuito W en Torres del Paine', days: 5, price: 890000,
    level: 'Exigente', maxAlt: '870 m', pin: [86, 386], base: 'Puerto Natales',
    desc: 'Cinco días de glaciares, granito y guanacos. Refugios y comidas incluidos.',
    includes: ['4 noches en refugio', 'Pensión completa', 'Entrada al parque', 'Catamarán Pehoé', 'Guía todo el recorrido'],
    bring: ['Botas de trekking ya usadas', 'Mochila de 30 l', 'Ropa impermeable y cortavientos', 'Bastones'],
    itinerary: [
      {
        title: 'Base de las Torres', stat: '19 km · +900 m',
        items: [
          ['07:00', 'Bus desde Puerto Natales', ''],
          ['09:30', 'Ingreso por Laguna Amarga', 'Primeros guanacos y ñandúes.'],
          ['10:30', 'Subida por el valle Ascencio', ''],
          ['15:00', 'Mirador Base de las Torres', 'Las tres torres de granito sobre la laguna.'],
          ['19:00', 'Cena en refugio Central', ''],
        ],
      },
      {
        title: 'Orilla del lago Nordenskjöld', stat: '12 km',
        items: [
          ['08:30', 'Caminata junto al lago', 'Agua turquesa y vistas a los Cuernos.'],
          ['13:00', 'Almuerzo con vista', ''],
          ['16:00', 'Refugio Los Cuernos', 'Tarde libre en la playa del lago.'],
        ],
      },
      {
        title: 'Valle del Francés', stat: '22 km · +700 m',
        items: [
          ['08:00', 'Campamento Italiano', ''],
          ['11:00', 'Mirador Francés', 'Glaciar colgante; se escuchan los desprendimientos.'],
          ['13:00', 'Mirador Británico (opcional)', 'Anfiteatro de paredes de granito.'],
          ['18:00', 'Refugio Paine Grande', ''],
        ],
      },
      {
        title: 'Glaciar Grey', stat: '22 km ida y vuelta',
        items: [
          ['08:30', 'Subida hacia el lago Grey', 'Témpanos flotando en el lago.'],
          ['12:00', 'Mirador del glaciar', 'Frente de hielo de 30 m de alto.'],
          ['13:00', 'Refugio Grey', 'Kayak entre témpanos opcional (costo extra).'],
          ['17:00', 'Regreso a Paine Grande', ''],
        ],
      },
      {
        title: 'Pehoé y regreso', stat: 'Catamarán + bus',
        items: [
          ['09:30', 'Catamarán por el lago Pehoé', 'Los Cuernos desde el agua.'],
          ['11:00', 'Salto Grande', 'Cascada entre los lagos Nordenskjöld y Pehoé.'],
          ['13:00', 'Bus a Puerto Natales', 'Llegada aproximada a las 15:30.'],
        ],
      },
    ],
  },
  {
    id: 'grey', region: 'patagonia', title: 'Navegación al Glaciar Grey', days: 1, price: 120000,
    level: 'Fácil', maxAlt: '150 m', pin: [96, 368], base: 'Puerto Natales',
    desc: 'Torres del Paine sin trekking: cueva prehistórica y navegación hasta el hielo.',
    includes: ['Traslados', 'Navegación de 3 h', 'Entrada al parque y a la cueva', 'Box lunch'],
    bring: ['Parka y gorro (viento fuerte)', 'Lentes de sol', 'Cámara'],
    itinerary: [{
      title: 'Milodón y glaciar Grey', stat: '300 km · navegación 3 h',
      items: [
        ['07:30', 'Salida desde Puerto Natales', ''],
        ['08:15', 'Cueva del Milodón', 'Donde se hallaron restos de un perezoso gigante prehistórico.'],
        ['10:30', 'Mirador lago Sarmiento', 'Primera vista del macizo Paine.'],
        ['12:30', 'Playa del lago Grey', 'Caminata sobre la morrena hasta el embarcadero.'],
        ['13:00', 'Navegación al glaciar', 'Hasta el frente de hielo; brindis con hielo milenario.'],
        ['16:30', 'Salto Grande', ''],
        ['18:30', 'Regreso a Puerto Natales', ''],
      ],
    }],
  },
  {
    id: 'rapanui', region: 'isla', title: 'Rapa Nui esencial', days: 4, price: 480000,
    level: 'Moderado', maxAlt: '324 m', pin: [34, 190], base: 'Hanga Roa',
    desc: 'Moáis al amanecer, la cantera de Rano Raraku y el cráter de Rano Kau.',
    includes: ['3 noches en Hanga Roa', 'Desayunos', 'Ticket del Parque Nacional', 'Guía rapanui', 'Traslados aeropuerto'],
    bring: ['Bloqueador alto (sol muy fuerte)', 'Traje de baño y snorkel', 'Sombrero'],
    itinerary: [
      {
        title: 'Iorana, Hanga Roa', stat: 'Llegada',
        items: [
          ['13:00', 'Llegada al aeropuerto Mataveri', 'Recepción con collar de flores.'],
          ['16:00', 'Museo Antropológico', 'Historia y escritura rongorongo.'],
          ['19:00', 'Atardecer en Ahu Tahai', 'Moáis a contraluz frente al Pacífico.'],
        ],
      },
      {
        title: 'La ruta de los moáis', stat: '70 km',
        items: [
          ['06:00', 'Amanecer en Ahu Tongariki', 'Quince moáis en fila con el sol detrás.'],
          ['09:30', 'Cantera de Rano Raraku', 'Casi 400 moáis en distintas etapas de tallado.'],
          ['12:30', 'Playa de Anakena', 'Arena blanca, palmeras y el Ahu Nau Nau.'],
          ['16:00', 'Regreso a Hanga Roa', ''],
        ],
      },
      {
        title: 'Rano Kau y Orongo', stat: '6 km a pie',
        items: [
          ['09:00', 'Cráter de Rano Kau', 'Laguna dentro del volcán.'],
          ['10:30', 'Aldea ceremonial de Orongo', 'Petroglifos del culto al Hombre Pájaro.'],
          ['14:00', 'Cueva Ana Kai Tangata', 'Pinturas rupestres junto al mar.'],
          ['16:00', 'Tarde libre', 'Snorkel en la caleta de Hanga Roa.'],
        ],
      },
      {
        title: 'Ahu Akivi y despedida', stat: 'Salida',
        items: [
          ['09:00', 'Puna Pau', 'Cantera de los pukao, los tocados rojos de los moáis.'],
          ['10:30', 'Ahu Akivi', 'Los siete moáis que miran hacia el mar.'],
          ['14:00', 'Traslado al aeropuerto', ''],
        ],
      },
    ],
  },
];

const REGIONS = {
  norte: 'Norte', centro: 'Centro', sur: 'Sur', patagonia: 'Patagonia', isla: 'Rapa Nui',
};
const REGION_ORDER = Object.keys(REGIONS);
const HINTS = {
  all: 'Toca una región del mapa',
  norte: 'Desierto de Atacama · géiseres y salares',
  centro: 'Valparaíso y valles de viñedos',
  sur: 'Volcanes, lagos y el archipiélago de Chiloé',
  patagonia: 'Glaciares y Torres del Paine',
  isla: 'A 3.700 km del continente, en el Pacífico',
};
const RIDGES = {
  norte: 'M0 60 L20 35 L35 48 L55 20 L72 42 L88 30 L100 45 L100 70 L0 70 Z',
  centro: 'M0 55 L25 40 L45 50 L70 30 L100 45 L100 70 L0 70 Z',
  sur: 'M0 70 L0 60 L38 60 L50 12 L62 60 L100 58 L100 70 Z',
  patagonia: 'M0 70 L0 50 L22 38 L32 8 L38 30 L45 5 L52 32 L60 12 L70 45 L100 50 L100 70 Z',
  isla: 'M0 55 L40 42 L70 48 L100 38 L100 70 L0 70 Z',
};

const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const byId = id => TOURS.find(t => t.id === id);
const $ = sel => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------------------
// Estado del viaje (se recuerda en este navegador si es posible).
// ---------------------------------------------------------------------------
const STORE = 'rutas-del-sur-viaje';
const EXAMPLE = { trip: ['tatio', 'luna', 'w-trek'], people: 2, start: '', example: true };
let state = load();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE));
    if (saved && Array.isArray(saved.trip)) {
      saved.trip = saved.trip.filter(byId);
      return { ...EXAMPLE, ...saved };
    }
  } catch (e) { /* sin almacenamiento disponible */ }
  return { ...EXAMPLE, trip: [...EXAMPLE.trip] };
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignorar */ }
}
function update(changes) {
  state = { ...state, ...changes, example: false };
  save();
  renderTrip();
  renderCards();
}
const inTrip = id => state.trip.includes(id);
function toggleTrip(id) {
  const t = byId(id);
  if (inTrip(id)) {
    update({ trip: state.trip.filter(x => x !== id) });
    toast(`Quitado: ${t.title}`);
  } else {
    update({ trip: [...state.trip, id] });
    toast(`Agregado a tu viaje: ${t.title}`);
    const pill = $('#trip-pill');
    pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
  }
}

// ---------------------------------------------------------------------------
// Explorar: filtros, mapa y tarjetas.
// ---------------------------------------------------------------------------
const view = { region: 'all', level: 'all', sort: 'geo' };
const cardsEl = $('#cards');

function filtered() {
  const list = TOURS.filter(t =>
    (view.region === 'all' || t.region === view.region) &&
    (view.level === 'all' || t.level === view.level));
  if (view.sort === 'price') list.sort((a, b) => a.price - b.price);
  if (view.sort === 'days') list.sort((a, b) => a.days - b.days || a.price - b.price);
  return list;
}

function renderCards() {
  const list = filtered();
  cardsEl.innerHTML = list.map((t, i) => `
    <article class="card" data-region="${t.region}" data-id="${t.id}" style="--i:${i}" tabindex="0"
      aria-label="${t.title}, ${t.days} ${t.days === 1 ? 'día' : 'días'}, ver itinerario">
      <div class="card-art">
        <span class="card-days">${t.days} ${t.days === 1 ? 'día' : 'días'}</span>
        <svg viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true"><path d="${RIDGES[t.region]}"/></svg>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${REGIONS[t.region]}</span><span>·</span><span class="lvl">${t.level}</span><span>·</span><span>${t.maxAlt}</span></div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
        <div class="card-foot">
          <span class="card-price">${clp.format(t.price)}<small>por persona</small></span>
          <button class="add-btn ${inTrip(t.id) ? 'is-added' : ''}" data-add="${t.id}"
            aria-label="${inTrip(t.id) ? 'Quitar de' : 'Agregar a'} mi viaje" aria-pressed="${inTrip(t.id)}">${inTrip(t.id) ? '✓' : '+'}</button>
        </div>
      </div>
    </article>`).join('');
  $('#cards-empty').hidden = list.length > 0;
}

cardsEl.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { e.stopPropagation(); toggleTrip(add.dataset.add); return; }
  const card = e.target.closest('.card');
  if (card) openTour(card.dataset.id);
});
cardsEl.addEventListener('keydown', e => {
  const card = e.target.closest('.card');
  if (card && e.target === card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(card.dataset.id); }
});
// Pasar sobre una tarjeta hace latir su punto en el mapa.
cardsEl.addEventListener('pointerover', e => hot(e.target.closest('.card')?.dataset.id));
cardsEl.addEventListener('pointerleave', () => hot(null));

function hot(id) {
  document.querySelectorAll('.pin').forEach(p => p.classList.toggle('is-hot', p.dataset.id === id));
  document.querySelectorAll('.card').forEach(c => c.classList.toggle('is-hot', c.dataset.id === id));
}

function setRegion(region) {
  view.region = region;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.filter === region));
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.filter === region));
  const map = $('#map');
  map.dataset.active = region;
  map.querySelectorAll('.band').forEach(b => b.classList.toggle('is-active', b.dataset.region === region));
  map.querySelectorAll('.map-labels text').forEach(b => b.classList.toggle('is-active', b.dataset.region === region));
  $('#map-hint').textContent = HINTS[region];
  renderCards();
}

document.querySelectorAll('.chip').forEach(c => {
  if (c.dataset.filter !== 'all') c.style.setProperty('--rc', `var(--${c.dataset.filter})`);
  c.addEventListener('click', () => setRegion(c.dataset.filter));
});
$('#level-filter').addEventListener('change', e => { view.level = e.target.value; renderCards(); });
$('#sort').addEventListener('change', e => { view.sort = e.target.value; renderCards(); });

// Mapa
const map = $('#map');
map.addEventListener('click', e => {
  const pin = e.target.closest('.pin');
  if (pin) { openTour(pin.dataset.id); return; }
  const r = e.target.closest('[data-region]');
  if (r) setRegion(view.region === r.dataset.region ? 'all' : r.dataset.region);
});
$('#pins').innerHTML = TOURS.map(t => `
  <g class="pin" data-id="${t.id}" data-region="${t.region}" tabindex="0" role="button" aria-label="${t.title}">
    <title>${t.title}</title>
    <circle class="pulse" cx="${t.pin[0]}" cy="${t.pin[1]}" r="5"/>
    <circle cx="${t.pin[0]}" cy="${t.pin[1]}" r="5"/>
  </g>`).join('');
map.addEventListener('pointerover', e => {
  const pin = e.target.closest('.pin');
  hot(pin ? pin.dataset.id : null);
  if (pin) $('#map-hint').textContent = byId(pin.dataset.id).title;
});
map.addEventListener('pointerleave', () => { hot(null); $('#map-hint').textContent = HINTS[view.region]; });
map.addEventListener('keydown', e => {
  const pin = e.target.closest('.pin');
  if (pin && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(pin.dataset.id); }
});

document.querySelectorAll('.region-jump').forEach(b => b.addEventListener('click', () => {
  setRegion(b.dataset.region);
  $('#explorar').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}));

// ---------------------------------------------------------------------------
// Diálogo con el itinerario de un tour.
// ---------------------------------------------------------------------------
const dlg = $('#tour-dialog');
let dlgState = { id: null, day: 0, people: 2 };

function openTour(id) {
  dlgState = { id, day: 0, people: state.people };
  renderDialog();
  if (!dlg.open) dlg.showModal();
}

function renderDialog() {
  const t = byId(dlgState.id);
  const d = t.itinerary[dlgState.day];
  dlg.style.setProperty('--rc', `var(--${t.region})`);
  dlg.innerHTML = `
    <div class="dlg-head">
      <button class="dlg-close" data-close aria-label="Cerrar">✕</button>
      <span class="dlg-tag">${REGIONS[t.region]} · desde ${t.base}</span>
      <h2 id="dlg-title">${t.title}</h2>
      <p>${t.desc}</p>
      <dl class="facts">
        <div><dt>Duración</dt><dd>${t.days} ${t.days === 1 ? 'día' : 'días'}</dd></div>
        <div><dt>Nivel</dt><dd>${t.level}</dd></div>
        <div><dt>Altura máx.</dt><dd>${t.maxAlt}</dd></div>
        <div><dt>Por persona</dt><dd>${clp.format(t.price)}</dd></div>
      </dl>
    </div>
    <div class="dlg-body">
      ${t.days > 1 ? `<div class="day-tabs" role="tablist" aria-label="Días del itinerario">
        ${t.itinerary.map((x, i) => `<button class="day-tab ${i === dlgState.day ? 'is-active' : ''}" role="tab"
          aria-selected="${i === dlgState.day}" data-day="${i}"><small>Día ${i + 1}</small>${x.title}</button>`).join('')}
      </div>` : ''}
      <div class="day-title">
        <h3>${t.days > 1 ? `Día ${dlgState.day + 1}: ` : ''}${d.title}</h3>
        <span class="day-stat">${d.stat}</span>
      </div>
      <ol class="timeline">
        ${d.items.map(([time, what, note], i) => `
          <li style="--i:${i}"><time>${time}</time><div><strong>${what}</strong>${note ? `<span>${note}</span>` : ''}</div></li>`).join('')}
      </ol>
      <div class="lists">
        <div><h4>Incluye</h4><ul>${t.includes.map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div><h4>Qué llevar</h4><ul>${t.bring.map(x => `<li>${x}</li>`).join('')}</ul></div>
      </div>
    </div>
    <div class="dlg-foot">
      <span class="stepper" aria-label="Viajeros">
        <button type="button" data-people="-1" aria-label="Quitar viajero">−</button>
        <output>${dlgState.people}</output>
        <button type="button" data-people="1" aria-label="Agregar viajero">+</button>
      </span>
      <span class="dlg-total">${clp.format(t.price * dlgState.people)}<small>${dlgState.people} ${dlgState.people === 1 ? 'viajero' : 'viajeros'}</small></span>
      <button class="btn" data-toggle>${inTrip(t.id) ? '✓ En tu viaje · quitar' : '+ Agregar a mi viaje'}</button>
    </div>`;
}

dlg.addEventListener('click', e => {
  if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
  const tab = e.target.closest('[data-day]');
  if (tab) { dlgState.day = +tab.dataset.day; renderDialog(); dlg.querySelector('.day-tab.is-active')?.focus(); return; }
  const p = e.target.closest('[data-people]');
  if (p) { dlgState.people = Math.min(20, Math.max(1, dlgState.people + +p.dataset.people)); renderDialog(); return; }
  if (e.target.closest('[data-toggle]')) {
    if (state.people !== dlgState.people) state.people = dlgState.people;
    toggleTrip(dlgState.id);
    renderDialog();
  }
});
dlg.addEventListener('keydown', e => {
  const t = byId(dlgState.id);
  if (!t || t.days < 2 || !e.target.closest('.day-tab')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    dlgState.day = (dlgState.day + (e.key === 'ArrowRight' ? 1 : -1) + t.days) % t.days;
    renderDialog();
    dlg.querySelector('.day-tab.is-active')?.focus();
  }
});

// ---------------------------------------------------------------------------
// Mi viaje: lista, resumen e itinerario combinado.
// ---------------------------------------------------------------------------
const fmtDay = new Intl.DateTimeFormat('es-CL', { weekday: 'short' });
const fmtNum = new Intl.DateTimeFormat('es-CL', { day: 'numeric' });
const fmtMon = new Intl.DateTimeFormat('es-CL', { month: 'short' });

function buildDays() {
  const rows = [];
  let prev = null;
  state.trip.map(byId).forEach(t => {
    if (prev && prev.region !== t.region) {
      rows.push({ transfer: true, from: prev, to: t });
    }
    t.itinerary.forEach((d, i) => rows.push({ tour: t, d, i }));
    prev = t;
  });
  return rows;
}

function renderTrip() {
  const tours = state.trip.map(byId);
  const rows = buildDays();
  const total = tours.reduce((s, t) => s + t.price, 0) * state.people;

  $('#trip-count').textContent = tours.length;
  $('#people').textContent = state.people;
  $('#trip-start').value = state.start || '';
  $('#example-note').hidden = !state.example || tours.length === 0;
  $('#trip-empty').hidden = tours.length > 0;
  $('#sum-days').textContent = rows.length;
  $('#sum-tours').textContent = tours.length;
  $('#sum-price').textContent = clp.format(total);
  $('#request-trip').disabled = tours.length === 0;

  $('#trip-list').innerHTML = tours.map((t, i) => `
    <li class="trip-item" data-region="${t.region}">
      <div><b>${t.title}</b><small>${t.days} ${t.days === 1 ? 'día' : 'días'} · ${clp.format(t.price * state.people)}</small></div>
      <div class="ctrls">
        <button data-move="-1" data-idx="${i}" ${i === 0 ? 'disabled' : ''} aria-label="Subir">↑</button>
        <button data-move="1" data-idx="${i}" ${i === tours.length - 1 ? 'disabled' : ''} aria-label="Bajar">↓</button>
        <button data-remove="${t.id}" aria-label="Quitar ${t.title}">✕</button>
      </div>
    </li>`).join('');

  const start = state.start ? new Date(state.start + 'T12:00:00') : null;
  const timeline = $('#trip-timeline');
  if (!rows.length) {
    timeline.innerHTML = `<div class="empty-state">Aquí aparecerá tu itinerario día por día.<br>Agrega tours desde <a href="#explorar">Explorar</a>.</div>`;
    return;
  }
  timeline.innerHTML = rows.map((r, n) => {
    const date = start ? new Date(start.getTime() + n * 864e5) : null;
    const when = date
      ? `${fmtDay.format(date)}<b>${fmtNum.format(date)}</b>${fmtMon.format(date)}`
      : `Día<b>${n + 1}</b>`;
    if (r.transfer) {
      return `<div class="tday transfer" data-region="${r.to.region}" style="--i:${n}">
        <div class="tday-date">${when}</div>
        <div><span class="tour-name">Traslado</span><h4>${r.from.base} → ${r.to.base}</h4>
        <p>Día de viaje entre regiones. Te ayudamos a coordinar vuelos o buses.</p></div></div>`;
    }
    const first = r.d.items[0], last = r.d.items[r.d.items.length - 1];
    return `<div class="tday" data-region="${r.tour.region}" style="--i:${n}">
      <div class="tday-date">${when}</div>
      <div><span class="tour-name">${r.tour.title}${r.tour.days > 1 ? ` · día ${r.i + 1}/${r.tour.days}` : ''}</span>
      <h4>${r.d.title}</h4>
      <p>${first[0]} ${first[1]} → ${last[0]} ${last[1]} · ${r.d.stat}</p>
      <button class="link" data-open="${r.tour.id}" data-day="${r.i}">Ver horario completo</button></div></div>`;
  }).join('');
}

$('#trip-list').addEventListener('click', e => {
  const rm = e.target.closest('[data-remove]');
  if (rm) { toggleTrip(rm.dataset.remove); return; }
  const mv = e.target.closest('[data-move]');
  if (mv) {
    const i = +mv.dataset.idx, j = i + +mv.dataset.move;
    const trip = [...state.trip];
    [trip[i], trip[j]] = [trip[j], trip[i]];
    update({ trip });
  }
});
$('#trip-timeline').addEventListener('click', e => {
  const b = e.target.closest('[data-open]');
  if (b) { openTour(b.dataset.open); dlgState.day = +b.dataset.day; renderDialog(); }
});
const today = new Date();
$('#trip-start').min = new Date(today.getTime() - today.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
$('#trip-start').addEventListener('change', e => update({ start: e.target.value }));
$('#people-minus').addEventListener('click', () => update({ people: Math.max(1, state.people - 1) }));
$('#people-plus').addEventListener('click', () => update({ people: Math.min(20, state.people + 1) }));
$('#clear-trip').addEventListener('click', () => { update({ trip: [] }); toast('Viaje vaciado'); });

$('#request-trip').addEventListener('click', () => {
  const rows = buildDays();
  const start = state.start ? new Date(state.start + 'T12:00:00').toLocaleDateString('es-CL') : 'por definir';
  const lines = state.trip.map(byId).map(t => `• ${t.title} (${t.days} ${t.days === 1 ? 'día' : 'días'})`);
  $('#c-msg').value =
    `Hola, quiero solicitar este viaje:\n${lines.join('\n')}\n\n` +
    `Inicio: ${start} · ${rows.length} días · ${state.people} viajeros\n` +
    `Total estimado: ${$('#sum-price').textContent}`;
  $('#contacto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  setTimeout(() => $('#c-name').focus({ preventScroll: true }), 500);
});

// ---------------------------------------------------------------------------
// Contacto (sin servidor: valida y confirma en pantalla).
// ---------------------------------------------------------------------------
const form = $('#contact-form');
const status = $('#form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Escribe tu nombre y un correo válido para poder responderte.';
    status.className = 'form-status is-error';
    form.reportValidity();
    return;
  }
  const name = form.nombre.value.trim().split(' ')[0];
  status.textContent = `¡Gracias, ${name}! Recibimos tu consulta y te responderemos en menos de 24 horas.`;
  status.className = 'form-status is-ok';
  form.reset();
});

// ---------------------------------------------------------------------------
// Portada: palabra rotativa, estrellas y paralaje.
// ---------------------------------------------------------------------------
const WORDS = [
  ['entre géiseres', 'norte'], ['entre cerros de colores', 'centro'], ['entre volcanes', 'sur'],
  ['entre glaciares', 'patagonia'], ['entre moáis', 'isla'],
];
const rot = $('#rotator');
let w = 0;
rot.style.setProperty('--rot', `var(--${WORDS[0][1]})`);
if (!reduceMotion) {
  setInterval(() => {
    w = (w + 1) % WORDS.length;
    rot.textContent = WORDS[w][0];
    rot.style.setProperty('--rot', `var(--${WORDS[w][1]})`);
    rot.classList.remove('swap'); void rot.offsetWidth; rot.classList.add('swap');
  }, 2600);
}

const hero = $('#hero');
const canvas = $('#stars');
function drawStars() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const { width, height } = hero.getBoundingClientRect();
  canvas.width = width * dpr; canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < width * height / 2600; i++) {
    const r = rnd() * 1.3 + .2;
    ctx.globalAlpha = rnd() * .7 + .2;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(rnd() * width, rnd() * height * .75, r, 0, Math.PI * 2); ctx.fill();
  }
}
drawStars();
window.addEventListener('resize', drawStars);

document.querySelectorAll('.layer').forEach(l => l.style.setProperty('--d', l.dataset.depth));
if (!reduceMotion) {
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  const tick = () => {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    hero.style.setProperty('--px', cx.toFixed(3));
    hero.style.setProperty('--py', cy.toFixed(3));
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .001 ? requestAnimationFrame(tick) : null;
  };
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - .5;
    ty = (e.clientY - r.top) / r.height - .5;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY, 900);
    hero.style.setProperty('--sy', y.toFixed(0));
  }, { passive: true });
}

// ---------------------------------------------------------------------------
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

$('#year').textContent = new Date().getFullYear();
setRegion('all');
renderTrip();
