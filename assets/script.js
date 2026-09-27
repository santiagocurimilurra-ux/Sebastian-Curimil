// ---------------------------------------------------------------------------
// Wolf Raven Expeditions · lógica de la página.
// Datos: tours.js (+ tours-en.js, tours-de.js). Textos: i18n.js. Dibujos: scenes.js.
// ---------------------------------------------------------------------------
const REGION_ORDER = ['norte', 'centro', 'sur', 'patagonia', 'isla'];
const ROUTES = { norte: 'norte', centro: 'centro', sur: 'sur', patagonia: 'patagonia', isla: 'rapanui' };
const ROUTE_TO_REGION = Object.fromEntries(REGION_ORDER.map(r => [ROUTES[r], r]));

const TOUR_SCENE = {
  tatio: 'geysers', luna: 'moon', lagunas: 'lagoons', valpo: 'valpo', maipo: 'maipo',
  villarrica: 'volcano', petrohue: 'waterfall', chiloe: 'chiloe', 'w-trek': 'torres', grey: 'glacier',
  rapanui: 'moai', bici: 'sea', 'atacama-lux': 'lodge', 'vino-lux': 'wine', 'lagos-lux': 'lake',
  'patagonia-lux': 'torres', 'rapanui-lux': 'moai', 'chile-grand': 'glacier',
  elqui: 'observatory', lauca: 'lauca', tara: 'tara', santiago: 'city', colchagua: 'wine',
  huilo: 'forest', geometricas: 'springs', cochamo: 'granite', pinguinos: 'penguins', marmol: 'marble',
  austral: 'marble', navarino: 'teeth', terevaka: 'hills', buceo: 'underwater',
  'circ-lagos': 'volcano', 'circ-esencial': 'valpo', 'circ-patagonia': 'torres', 'circ-grand': 'moai',
};
const ZONE_SCENE = { norte: 'lagoons', centro: 'valpo', sur: 'volcano', patagonia: 'torres', isla: 'moai' };

// ---------------------------------------------------------------------------
// Precios
// Los precios de tours.js son la tarifa residente en CLP. En USD o EUR se
// muestra la tarifa internacional = precio CLP × INTL_FACTOR ÷ tipo de cambio.
// ---------------------------------------------------------------------------
const INTL_FACTOR = 2;
const RATES = { USD: 950, EUR: 1080 }; // CLP por unidad, referencial

function payPolicy(x) {
  if (x.premium || x.circuit) return { pct: .5, due: 60 };
  if (x.depositPct) return { pct: x.depositPct, due: 45 };
  if (x.days > 1) return { pct: .3, due: 30 };
  return { pct: 1, due: 0 };
}

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------
const byId = id => TOURS.find(x => x.id === id);
const $ = sel => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const STORE = 'wolf-raven-viaje-v3';
const EXAMPLE = { trip: ['tatio', 'luna', 'w-trek'], people: 2, start: '', example: true };
const DEFAULT_CURRENCY = { es: 'CLP', en: 'USD', de: 'EUR' };

function detectLang() {
  const n = (navigator.language || 'es').slice(0, 2);
  return I18N[n] ? n : 'es';
}
let state = load();

function load() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORE)); } catch (e) { /* sin almacenamiento */ }
  const lang = saved && I18N[saved.lang] ? saved.lang : detectLang();
  const base = { ...EXAMPLE, trip: [...EXAMPLE.trip], lang, currency: DEFAULT_CURRENCY[lang], currencyManual: false };
  if (saved && Array.isArray(saved.trip)) {
    saved.trip = saved.trip.filter(byId);
    return { ...base, ...saved, lang };
  }
  return base;
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignorar */ }
}

// Traducción
const L = () => I18N[state.lang];
function t(key, vars) {
  let s = L()[key] ?? I18N.es[key] ?? key;
  if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  return s;
}
const plural = (n, key) => `${n} ${t(key)[n === 1 ? 0 : 1]}`;
const duration = x => x.nights ? `${plural(x.days, 'u.day')} · ${plural(x.nights, 'u.night')}` : plural(x.days, 'u.day');
const region = r => t('r.' + r);
const level = l => t('lvl.' + l);
// "4.320 m" → "4,320 m" en inglés
const alt = s => state.lang === 'en' ? s.replace(/(\d)\.(\d{3})/g, '$1,$2') : s;

// Contenido del tour en el idioma actual (con respaldo en español)
function tx(tour) {
  const tr = TOURS_TR[state.lang]?.[tour.id];
  if (!tr) return { title: tour.title, desc: tour.desc, includes: tour.includes, bring: tour.bring, day: i => tour.itinerary[i] };
  return {
    title: tr.t, desc: tr.d, includes: tr.inc, bring: tr.br,
    day: i => {
      const [title, stat, items] = tr.days[i];
      return { title, stat, items: tour.itinerary[i].items.map(([time], j) => [time, items[j][0], items[j][1]]) };
    },
  };
}

// Moneda
function money(clp) {
  const cur = state.currency;
  if (cur === 'CLP') return new Intl.NumberFormat(L().locale, { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(clp);
  const v = Math.round(clp * INTL_FACTOR / RATES[cur] / 5) * 5;
  return new Intl.NumberFormat(L().locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(v);
}

const media = x => x.photo
  ? `<img class="scene" src="${x.photo}" alt="${tx(x).title}" loading="lazy">`
  : scene(TOUR_SCENE[x.id]);

// ---------------------------------------------------------------------------
// Estado del viaje
// ---------------------------------------------------------------------------
function update(changes, { keepExample = false } = {}) {
  state = { ...state, ...changes, example: keepExample ? state.example : false };
  save();
  renderAll();
}
const inTrip = id => state.trip.includes(id);
function toggleTrip(id) {
  const title = tx(byId(id)).title;
  if (inTrip(id)) {
    update({ trip: state.trip.filter(x => x !== id) });
    toast(t('toast.rm', { t: title }));
  } else {
    update({ trip: [...state.trip, id] });
    toast(t('toast.add', { t: title }));
    const pill = $('#trip-pill');
    pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
  }
}

// ---------------------------------------------------------------------------
// Textos fijos del HTML
// ---------------------------------------------------------------------------
function applyStatic() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  $('#lang').value = state.lang;
  $('#currency').value = state.currency;
  $('#map-hint').textContent = t('map.hint');
  $('#fx-note').textContent = state.currency === 'CLP' ? t('fx.CLP') : t('fx.intl', { cur: state.currency });
  rot.textContent = t('rot')[w % 5];
}

// ---------------------------------------------------------------------------
// Tarjetas
// ---------------------------------------------------------------------------
function card(x, i) {
  const added = inTrip(x.id);
  const c = tx(x);
  const tag = x.premium ? `<span class="badge">${t('card.badge')}</span>` : x.circuit ? `<span class="badge badge-circ">${t('card.circ')}</span>` : '';
  return `
    <article class="card ${x.premium ? 'premium' : ''} ${x.circuit ? 'circuit' : ''}" data-region="${x.region}" data-id="${x.id}" style="--i:${i}" tabindex="0"
      aria-label="${c.title}, ${duration(x)}, ${t('card.itin')}">
      <div class="card-art">
        <span class="card-days">${plural(x.days, 'u.day')}</span>
        ${tag}
        ${media(x)}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${region(x.region)}</span><span>·</span><span class="lvl">${level(x.level)}</span><span>·</span><span>${alt(x.maxAlt)}</span></div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="card-foot">
          <span class="card-price">${money(x.price)}<small>${x.premium || x.circuit ? t('card.ppd') : t('card.pp')}</small></span>
          <button class="add-btn ${added ? 'is-added' : ''}" data-add="${x.id}"
            aria-label="${added ? t('card.remove') : t('card.add')}" aria-pressed="${added}">${added ? '✓' : '+'}</button>
        </div>
      </div>
    </article>`;
}

document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { e.preventDefault(); toggleTrip(add.dataset.add); return; }
  const c = e.target.closest('.card');
  if (c) openTour(c.dataset.id);
});
document.addEventListener('keydown', e => {
  const c = e.target.closest?.('.card');
  if (c && e.target === c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(c.dataset.id); }
});
document.addEventListener('pointerover', e => {
  const c = e.target.closest?.('.card');
  document.querySelectorAll('.pin').forEach(p => p.classList.toggle('is-hot', !!c && p.dataset.id === c.dataset.id));
});

// ---------------------------------------------------------------------------
// Inicio: mapa, fichas de zona y adelanto premium
// ---------------------------------------------------------------------------
const map = $('#map');
function renderPins() {
  $('#pins').innerHTML = TOURS.filter(x => x.pin).map(x => `
    <g class="pin ${x.premium ? 'pin-premium' : ''}" data-id="${x.id}" data-region="${x.region}" tabindex="0" role="button" aria-label="${tx(x).title}">
      <title>${tx(x).title}</title>
      <circle class="pulse" cx="${x.pin[0]}" cy="${x.pin[1]}" r="5"/>
      <circle cx="${x.pin[0]}" cy="${x.pin[1]}" r="${x.premium ? 3.5 : 4.5}"/>
    </g>`).join('');
}
map.addEventListener('click', e => {
  const pin = e.target.closest('.pin');
  if (pin) { openTour(pin.dataset.id); return; }
  const r = e.target.closest('[data-region]');
  if (r) go(ROUTES[r.dataset.region]);
});
map.addEventListener('pointerover', e => {
  const pin = e.target.closest('.pin');
  const r = e.target.closest('[data-region]');
  map.querySelectorAll('.band').forEach(b => b.classList.toggle('is-active', !!r && b.dataset.region === r.dataset.region));
  $('#map-hint').textContent = pin ? tx(byId(pin.dataset.id)).title : r ? HINTS_TEXT[state.lang][r.dataset.region] : t('map.hint');
});
map.addEventListener('pointerleave', () => {
  map.querySelectorAll('.band').forEach(b => b.classList.remove('is-active'));
  $('#map-hint').textContent = t('map.hint');
});
map.addEventListener('keydown', e => {
  const pin = e.target.closest('.pin');
  if (pin && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(pin.dataset.id); }
});

function renderHome() {
  $('#zone-tiles').innerHTML = REGION_ORDER.map((r, i) => {
    const list = TOURS.filter(x => x.region === r);
    const from = Math.min(...list.map(x => x.price));
    return `<a class="zone-tile" href="#${ROUTES[r]}" data-region="${r}" style="--i:${i}">
      ${scene(ZONE_SCENE[r])}
      <span class="zt-name">${region(r)}</span>
      <strong>${ZONE_TEXT[state.lang][r].title}</strong>
      <span class="zt-meta">${t('z.tile', { tours: plural(list.length, 'u.tour'), price: money(from) })}</span>
      <span class="zt-go" aria-hidden="true">→</span>
    </a>`;
  }).join('');
  $('#premium-teaser').innerHTML = ['patagonia-lux', 'atacama-lux', 'chile-grand'].map(byId).map(card).join('');
}

// ---------------------------------------------------------------------------
// Pestaña de zona
// ---------------------------------------------------------------------------
function renderZone(r) {
  const z = ZONE_TEXT[state.lang][r];
  const regular = TOURS.filter(x => x.region === r && !x.premium);
  const premium = TOURS.filter(x => x.region === r && x.premium);
  const idx = REGION_ORDER.indexOf(r);
  const prev = REGION_ORDER[(idx + 4) % 5], next = REGION_ORDER[(idx + 1) % 5];
  $('#view-zona').innerHTML = `
    <section class="zone-hero" data-region="${r}">
      <div class="hero-art" aria-hidden="true">${scene(ZONE_SCENE[r])}</div>
      <div class="container">
        <p class="eyebrow">${t('z.of', { i: idx + 1 })} · ${region(r)}</p>
        <h1>${z.title}</h1>
        <p class="lead">${z.tagline}</p>
        <dl class="zone-facts">${z.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="zone-block-head">
          <h2>${t('z.exc')}</h2>
          <span class="muted">${t('z.count', { tours: plural(regular.length, 'u.tour'), price: money(Math.min(...regular.map(x => x.price))) })}</span>
        </div>
        <div class="cards">${regular.map(card).join('')}</div>
        ${premium.length ? `
        <div class="zone-block-head premium-head">
          <h2>${t('z.prem')}</h2>
          <span class="muted">${t('z.premP')}</span>
        </div>
        <div class="cards">${premium.map((x, i) => card(x, i + regular.length)).join('')}</div>` : ''}
        <div class="tips">
          <h3>${t('z.tips', { zone: region(r) })}</h3>
          <ul>${z.tips.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
        <nav class="zone-pager">
          <a href="#${ROUTES[prev]}" data-region="${prev}">← ${region(prev)}</a>
          <a href="#${ROUTES[next]}" data-region="${next}">${region(next)} →</a>
        </nav>
      </div>
    </section>`;
}

function renderCollections() {
  $('#premium-art').innerHTML = scene('lodge');
  $('#circuits-art').innerHTML = scene('torres');
  const premium = TOURS.filter(x => x.premium).sort((a, b) =>
    (a.region === 'multi') - (b.region === 'multi') || REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region));
  $('#premium-cards').innerHTML = premium.map(card).join('');
  $('#circuit-cards').innerHTML = TOURS.filter(x => x.circuit).sort((a, b) => a.days - b.days).map(card).join('');
}

// ---------------------------------------------------------------------------
// Navegación por pestañas (usa el #ancla de la URL)
// ---------------------------------------------------------------------------
let route = 'inicio';
function go(r) {
  if (location.hash === '#' + r) router(); else location.hash = r;
}
function router() {
  const hash = location.hash.slice(1) || 'inicio';
  let view, scrollTarget = null;
  if (ROUTE_TO_REGION[hash]) { view = 'zona'; route = hash; }
  else if (['inicio', 'premium', 'circuitos', 'viaje'].includes(hash)) { view = hash; route = hash; }
  else {
    const el = document.getElementById(hash);
    if (!el) { view = 'inicio'; route = 'inicio'; }
    else {
      const owner = el.closest('.view');
      if (owner) { view = owner.dataset.view; route = view; }
      scrollTarget = el;
    }
  }
  if (view) {
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.dataset.view !== view; });
    if (view === 'zona') renderZone(ROUTE_TO_REGION[route]);
  }
  document.querySelectorAll('.tab').forEach(tab => {
    const active = tab.dataset.route === route;
    tab.classList.toggle('is-active', active);
    if (active) { tab.setAttribute('aria-current', 'page'); tab.scrollIntoView({ block: 'nearest', inline: 'center' }); }
    else tab.removeAttribute('aria-current');
  });
  if (scrollTarget) scrollTarget.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  else if (view) window.scrollTo({ top: 0 });
}
window.addEventListener('hashchange', router);

// ---------------------------------------------------------------------------
// Diálogo con el itinerario
// ---------------------------------------------------------------------------
const dlg = $('#tour-dialog');
let dlgState = { id: null, day: 0, people: 2 };

function openTour(id, day = 0) {
  dlgState = { id, day, people: state.people };
  renderDialog();
  if (!dlg.open) dlg.showModal();
}
function payLine(x, total) {
  const { pct, due } = payPolicy(x);
  return pct >= 1 ? t('pay.full') : t('pay.dep', { amount: money(total * pct), pct: pct * 100, due });
}
function renderDialog() {
  if (!dlgState.id) return;
  const x = byId(dlgState.id);
  const c = tx(x);
  const d = c.day(dlgState.day);
  dlg.dataset.region = x.region;
  dlg.classList.toggle('premium', !!x.premium);
  dlg.innerHTML = `
    <button class="dlg-close" data-close aria-label="${t('d.close')}">✕</button>
    <div class="dlg-art" aria-hidden="true">${media(x)}</div>
    <div class="dlg-head">
      <span class="dlg-tag">${x.premium ? t('card.badge') + ' · ' : x.circuit ? t('card.circ') + ' · ' : ''}${region(x.region)} · ${t('d.from')} ${x.base}</span>
      <h2 id="dlg-title">${c.title}</h2>
      <p>${c.desc}</p>
      <dl class="facts">
        <div><dt>${t('d.dur')}</dt><dd>${duration(x)}</dd></div>
        <div><dt>${t('d.level')}</dt><dd>${level(x.level)}</dd></div>
        <div><dt>${t('d.alt')}</dt><dd>${alt(x.maxAlt)}</dd></div>
        <div><dt>${x.premium || x.circuit ? t('d.ppd') : t('d.pp')}</dt><dd>${money(x.price)}</dd></div>
      </dl>
    </div>
    <div class="dlg-body">
      ${x.days > 1 ? `<div class="day-tabs" role="tablist" aria-label="${t('d.days')}">
        ${x.itinerary.map((_, i) => `<button class="day-tab ${i === dlgState.day ? 'is-active' : ''}" role="tab"
          aria-selected="${i === dlgState.day}" data-day="${i}"><small>${t('d.day')} ${i + 1}</small>${c.day(i).title}</button>`).join('')}
      </div>` : ''}
      <div class="day-title">
        <h3>${x.days > 1 ? `${t('d.day')} ${dlgState.day + 1}: ` : ''}${d.title}</h3>
        <span class="day-stat">${d.stat}</span>
      </div>
      <ol class="timeline">
        ${d.items.map(([time, what, note], i) => `
          <li style="--i:${i}"><time>${time}</time><div><strong>${what}</strong>${note ? `<span>${note}</span>` : ''}</div></li>`).join('')}
      </ol>
      <div class="lists">
        <div><h4>${x.premium ? t('d.inclAll') : t('d.incl')}</h4><ul>${c.includes.map(v => `<li>${v}</li>`).join('')}</ul></div>
        <div><h4>${t('d.bring')}</h4><ul>${c.bring.map(v => `<li>${v}</li>`).join('')}</ul></div>
      </div>
    </div>
    <div class="dlg-foot">
      <span class="stepper">
        <button type="button" data-people="-1" aria-label="${t('d.minus')}">−</button>
        <output>${dlgState.people}</output>
        <button type="button" data-people="1" aria-label="${t('d.plus')}">+</button>
      </span>
      <span class="dlg-total">${money(x.price * dlgState.people)}<small>${plural(dlgState.people, 'u.trav')} · ${payLine(x, x.price * dlgState.people)}</small></span>
      <button class="btn" data-toggle>${inTrip(x.id) ? t('d.in') : t('d.add')}</button>
    </div>`;
}
dlg.addEventListener('click', e => {
  e.stopPropagation();
  if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
  const tab = e.target.closest('[data-day]');
  if (tab) { dlgState.day = +tab.dataset.day; renderDialog(); dlg.querySelector('.day-tab.is-active')?.focus(); return; }
  const p = e.target.closest('[data-people]');
  if (p) { dlgState.people = Math.min(20, Math.max(1, dlgState.people + +p.dataset.people)); renderDialog(); return; }
  if (e.target.closest('[data-toggle]')) {
    state.people = dlgState.people;
    toggleTrip(dlgState.id);
  }
});
dlg.addEventListener('keydown', e => {
  const x = byId(dlgState.id);
  if (!x || x.days < 2 || !e.target.closest('.day-tab')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    dlgState.day = (dlgState.day + (e.key === 'ArrowRight' ? 1 : -1) + x.days) % x.days;
    renderDialog();
    dlg.querySelector('.day-tab.is-active')?.focus();
  }
});
dlg.addEventListener('close', () => { dlgState.id = null; });

// ---------------------------------------------------------------------------
// Mi viaje
// ---------------------------------------------------------------------------
function buildDays() {
  const rows = [];
  let prev = null;
  state.trip.map(byId).forEach(x => {
    if (prev && prev.region !== x.region && prev.region !== 'multi' && x.region !== 'multi') rows.push({ transfer: true, from: prev, to: x });
    x.itinerary.forEach((_, i) => rows.push({ tour: x, i }));
    prev = x;
  });
  return rows;
}
function totals() {
  const tours = state.trip.map(byId);
  const total = tours.reduce((s, x) => s + x.price, 0) * state.people;
  const now = tours.reduce((s, x) => s + x.price * payPolicy(x).pct, 0) * state.people;
  const due = Math.max(0, ...tours.filter(x => payPolicy(x).pct < 1).map(x => payPolicy(x).due));
  return { tours, total, now, due };
}
function renderTrip() {
  const { tours, total, now, due } = totals();
  const rows = buildDays();
  const loc = L().locale;
  const fmtDay = new Intl.DateTimeFormat(loc, { weekday: 'short' });
  const fmtNum = new Intl.DateTimeFormat(loc, { day: 'numeric' });
  const fmtMon = new Intl.DateTimeFormat(loc, { month: 'short' });

  $('#trip-count').textContent = tours.length;
  $('#people').textContent = state.people;
  $('#trip-start').value = state.start || '';
  $('#example-note').hidden = !state.example || tours.length === 0;
  $('#trip-empty').hidden = tours.length > 0;
  $('#sum-days').textContent = rows.length;
  $('#sum-tours').textContent = tours.length;
  $('#sum-price').textContent = money(total);
  $('#request-trip').disabled = tours.length === 0;
  $('#pay-plan').innerHTML = tours.length ? `
    <div><span>${t('trip.now')}</span><strong>${money(now)}</strong></div>
    <div><span>${t('trip.balance')}</span><strong>${money(total - now)}</strong>${total - now > 0 ? `<small>${t('trip.until', { n: due })}</small>` : ''}</div>` : '';

  $('#trip-list').innerHTML = tours.map((x, i) => `
    <li class="trip-item" data-region="${x.region}">
      <div><b>${x.premium ? '✦ ' : ''}${tx(x).title}</b><small>${duration(x)} · ${money(x.price * state.people)}</small></div>
      <div class="ctrls">
        <button data-move="-1" data-idx="${i}" ${i === 0 ? 'disabled' : ''} aria-label="${t('trip.up')}">↑</button>
        <button data-move="1" data-idx="${i}" ${i === tours.length - 1 ? 'disabled' : ''} aria-label="${t('trip.down')}">↓</button>
        <button data-remove="${x.id}" aria-label="${t('trip.remove')}">✕</button>
      </div>
    </li>`).join('');

  const start = state.start ? new Date(state.start + 'T12:00:00') : null;
  const timeline = $('#trip-timeline');
  if (!rows.length) { timeline.innerHTML = `<div class="empty-state">${t('trip.timelineEmpty')}</div>`; return; }
  timeline.innerHTML = rows.map((r, n) => {
    const date = start ? new Date(start.getTime() + n * 864e5) : null;
    const when = date ? `${fmtDay.format(date)}<b>${fmtNum.format(date)}</b>${fmtMon.format(date)}` : `${t('trip.day')}<b>${n + 1}</b>`;
    if (r.transfer) {
      return `<div class="tday transfer" data-region="${r.to.region}" style="--i:${n}">
        <div class="tday-date">${when}</div>
        <div><span class="tour-name">${t('trip.transfer')}</span><h4>${r.from.base} → ${r.to.base}</h4><p>${t('trip.transferP')}</p></div></div>`;
    }
    const c = tx(r.tour), d = c.day(r.i);
    const first = d.items[0], last = d.items[d.items.length - 1];
    return `<div class="tday ${r.tour.premium ? 'premium' : ''}" data-region="${r.tour.region}" style="--i:${n}">
      <div class="tday-date">${when}</div>
      <div><span class="tour-name">${r.tour.premium ? '✦ ' : ''}${c.title}${r.tour.days > 1 ? ` · ${t('trip.dayOf', { i: r.i + 1, n: r.tour.days })}` : ''}</span>
      <h4>${d.title}</h4>
      <p>${first[0]} ${first[1]}${last !== first ? ` → ${last[0]} ${last[1]}` : ''} · ${d.stat}</p>
      <button class="link" data-open="${r.tour.id}" data-day="${r.i}">${t('trip.full')}</button></div></div>`;
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
  if (b) openTour(b.dataset.open, +b.dataset.day);
});
const today = new Date();
$('#trip-start').min = new Date(today.getTime() - today.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
$('#trip-start').addEventListener('change', e => update({ start: e.target.value }));
$('#people-minus').addEventListener('click', () => update({ people: Math.max(1, state.people - 1) }));
$('#people-plus').addEventListener('click', () => update({ people: Math.min(20, state.people + 1) }));
$('#clear-trip').addEventListener('click', () => { update({ trip: [] }); toast(t('toast.clear')); });

$('#request-trip').addEventListener('click', () => {
  const { tours, total, now } = totals();
  const start = state.start ? new Date(state.start + 'T12:00:00').toLocaleDateString(L().locale) : t('trip.msgTbd');
  const lines = tours.map(x => `• ${x.premium ? '[Premium] ' : ''}${tx(x).title} (${duration(x)})`);
  $('#c-msg').value =
    `${t('trip.msg')}\n${lines.join('\n')}\n\n` +
    `${t('trip.msgStart')}: ${start} · ${plural(buildDays().length, 'u.day')} · ${plural(state.people, 'u.trav')}\n` +
    `${t('trip.msgTotal')}: ${money(total)} · ${t('trip.msgDeposit')}: ${money(now)}`;
  $('#contacto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  setTimeout(() => $('#c-name').focus({ preventScroll: true }), 500);
});

// ---------------------------------------------------------------------------
// Idioma y moneda
// ---------------------------------------------------------------------------
$('#lang').addEventListener('change', e => {
  const lang = e.target.value;
  update({ lang, currency: state.currencyManual ? state.currency : DEFAULT_CURRENCY[lang] }, { keepExample: true });
});
$('#currency').addEventListener('change', e => update({ currency: e.target.value, currencyManual: true }, { keepExample: true }));

function renderAll() {
  applyStatic();
  renderPins();
  renderHome();
  renderCollections();
  renderTrip();
  if (ROUTE_TO_REGION[route]) renderZone(ROUTE_TO_REGION[route]);
  renderDialog();
}

// ---------------------------------------------------------------------------
// Contacto (sin servidor: valida y confirma en pantalla)
// ---------------------------------------------------------------------------
const form = $('#contact-form');
const status = $('#form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = t('f.err');
    status.className = 'form-status is-error';
    form.reportValidity();
    return;
  }
  status.textContent = t('f.ok', { name: form.nombre.value.trim().split(' ')[0] });
  status.className = 'form-status is-ok';
  form.reset();
});

// ---------------------------------------------------------------------------
// Portada: palabra rotativa, estrellas y paralaje
// ---------------------------------------------------------------------------
const ROT_REGIONS = ['norte', 'centro', 'sur', 'patagonia', 'isla'];
const rot = $('#rotator');
let w = 0;
rot.style.setProperty('--rot', `var(--${ROT_REGIONS[0]})`);
if (!reduceMotion) {
  setInterval(() => {
    if (rot.offsetParent === null) return;
    w = (w + 1) % 5;
    rot.textContent = t('rot')[w];
    rot.style.setProperty('--rot', `var(--${ROT_REGIONS[w]})`);
    rot.classList.remove('swap'); void rot.offsetWidth; rot.classList.add('swap');
  }, 2600);
}

const hero = $('#hero');
const canvas = $('#stars');
function drawStars() {
  const { width, height } = hero.getBoundingClientRect();
  if (!width) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
window.addEventListener('resize', drawStars);
window.addEventListener('hashchange', drawStars);

document.querySelectorAll('.layer').forEach(l => l.style.setProperty('--d', l.dataset.depth));
if (!reduceMotion) {
  let px = 0, py = 0, cx = 0, cy = 0, raf = null;
  const tick = () => {
    cx += (px - cx) * .08; cy += (py - cy) * .08;
    hero.style.setProperty('--px', cx.toFixed(3));
    hero.style.setProperty('--py', cy.toFixed(3));
    raf = Math.abs(px - cx) + Math.abs(py - cy) > .001 ? requestAnimationFrame(tick) : null;
  };
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    px = (e.clientX - r.left) / r.width - .5;
    py = (e.clientY - r.top) / r.height - .5;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  window.addEventListener('scroll', () => {
    hero.style.setProperty('--sy', Math.min(window.scrollY, 900).toFixed(0));
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
router();
renderAll();
drawStars();
