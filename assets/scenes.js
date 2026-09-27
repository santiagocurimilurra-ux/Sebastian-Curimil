// ---------------------------------------------------------------------------
// Ilustraciones de cada destino, dibujadas en SVG (sin archivos externos).
// scene('torres') devuelve el SVG como texto. Para usar una foto real en un
// tour, agrega photo: 'assets/img/archivo.jpg' en su ficha de script.js.
// ---------------------------------------------------------------------------
let sceneCount = 0;

function scene(key) {
  const u = 'sc' + (++sceneCount);
  const sky = (a, b) => `<defs><linearGradient id="${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="240" fill="url(#${u})"/>`;
  const stars = n => Array.from({ length: n }, (_, i) => `<circle cx="${(i * 97) % 400}" cy="${(i * 53) % 110}" r="${i % 3 ? .8 : 1.4}" fill="#fff" opacity="${.4 + (i % 5) / 10}"/>`).join('');
  const trees = (y, n, c, h = 26) => Array.from({ length: n }, (_, i) => { const x = i * (400 / n) + (i % 2) * 9; const hh = h + (i % 3) * 7; return `<path d="M${x} ${y} l9 -${hh} l9 ${hh} z" fill="${c}"/>`; }).join('');
  const S = {
    geysers: () => `${sky('#1f2a55', '#f6a878')}
      <circle cx="300" cy="170" r="34" fill="#ffd9a0"/>
      <path d="M0 175 L60 140 L120 160 L190 118 L260 150 L330 125 L400 150 V240 H0Z" fill="#6c4f78"/>
      <path d="M0 190 H400 V240 H0Z" fill="#8a6a57"/>
      ${[[90, 1], [190, 1.4], [290, .9]].map(([x, s]) => `<g opacity=".85" fill="#fff">
        <ellipse cx="${x}" cy="${178 - 20 * s}" rx="${14 * s}" ry="${16 * s}"/><ellipse cx="${x + 8 * s}" cy="${150 - 40 * s}" rx="${20 * s}" ry="${18 * s}" opacity=".8"/>
        <ellipse cx="${x - 6 * s}" cy="${130 - 60 * s}" rx="${26 * s}" ry="${20 * s}" opacity=".55"/></g>
        <ellipse cx="${x}" cy="192" rx="${18 * s}" ry="4" fill="#5d4638"/>`).join('')}`,
    moon: () => `${sky('#141d3d', '#e37b5c')}${stars(28)}
      <path d="M0 170 Q70 120 140 160 T280 150 T400 140 V240 H0Z" fill="#b8683f"/>
      <path d="M0 200 Q90 150 190 190 T400 180 V240 H0Z" fill="#8f4a2e"/>
      <path d="M40 186 Q100 170 150 184 M230 196 Q300 176 360 190" stroke="#f3e9dc" stroke-width="3" fill="none" opacity=".7"/>`,
    lagoons: () => `${sky('#5aa8ea', '#d8ecfb')}
      <path d="M40 170 L130 70 L220 170Z" fill="#7a5d58"/><path d="M110 92 L130 70 L150 92 L140 88 L130 96 L120 88Z" fill="#fff"/>
      <path d="M200 170 L290 90 L380 170Z" fill="#8b6c63"/><path d="M272 106 L290 90 L308 106 L298 102 L290 110 L282 102Z" fill="#fff"/>
      <path d="M0 165 H400 V240 H0Z" fill="#c9a26a"/>
      <ellipse cx="200" cy="198" rx="170" ry="26" fill="#1f6fb2"/>
      ${[150, 175, 240].map(x => `<g fill="#f48aa8"><ellipse cx="${x}" cy="190" rx="7" ry="4"/><path d="M${x + 5} 188 q4 -12 1 -16" stroke="#f48aa8" stroke-width="2" fill="none"/><path d="M${x} 194 v8" stroke="#f48aa8" stroke-width="1.5"/></g>`).join('')}`,
    valpo: () => `${sky('#7cc6e6', '#fde5c4')}
      <path d="M0 200 H400 V240 H0Z" fill="#2c7cad"/>
      <path d="M60 205 Q180 60 400 90 V205Z" fill="#6f8f4e"/>
      ${[['#e94f37', 110, 170], ['#f6c90e', 140, 150], ['#3fa7d6', 175, 128], ['#59cd90', 210, 112], ['#f79d84', 245, 100], ['#ffffff', 280, 96], ['#9b5de5', 315, 94], ['#f6c90e', 350, 92], ['#3fa7d6', 160, 175], ['#f79d84', 200, 150], ['#e94f37', 240, 135], ['#59cd90', 280, 125], ['#ffffff', 320, 120], ['#e94f37', 360, 118]]
        .map(([c, x, y]) => `<rect x="${x}" y="${y}" width="26" height="22" fill="${c}"/><path d="M${x - 2} ${y} l15 -9 l15 9z" fill="#8c3b2e"/><rect x="${x + 8}" y="${y + 8}" width="6" height="8" fill="#23344a" opacity=".6"/>`).join('')}
      <path d="M96 205 L150 150" stroke="#444" stroke-width="2"/><rect x="118" y="172" width="10" height="12" fill="#c0392b"/>`,
    maipo: () => `${sky('#8fd0ff', '#eaf6ff')}
      <path d="M0 150 L70 70 L130 130 L200 50 L270 125 L340 65 L400 120 V240 H0Z" fill="#8a8e9e"/>
      <path d="M58 84 L70 70 L84 86 L72 82Z M186 66 L200 50 L216 68 L202 62Z M328 80 L340 65 L354 82 L341 77Z" fill="#fff"/>
      <ellipse cx="200" cy="178" rx="210" ry="34" fill="#3cc6c1"/><ellipse cx="200" cy="170" rx="150" ry="8" fill="#8ee6e2" opacity=".6"/>
      <path d="M0 210 Q80 190 160 214 T400 205 V240 H0Z" fill="#6b5b4e"/>`,
    volcano: () => `${sky('#9ccff0', '#eef7fc')}
      <ellipse cx="215" cy="42" rx="40" ry="16" fill="#9aa3ad" opacity=".7"/><ellipse cx="240" cy="26" rx="30" ry="12" fill="#b9c0c7" opacity=".6"/>
      <path d="M60 200 L185 62 L215 62 L340 200Z" fill="#5f6570"/>
      <path d="M150 100 L185 62 L215 62 L250 100 L232 94 L218 106 L200 92 L182 106 L168 94Z" fill="#fff"/>
      <path d="M0 190 H400 V240 H0Z" fill="#2f5a3a"/>${trees(196, 22, '#244a2f')}`,
    waterfall: () => `${sky('#a7d3ef', '#f0f7fb')}
      <path d="M120 150 L200 40 L280 150Z" fill="#dbe7f3"/><path d="M160 95 L200 40 L240 95 L222 90 L200 100 L180 90Z" fill="#fff"/>
      <path d="M0 150 H400 V240 H0Z" fill="#2e4c3a"/>${trees(158, 18, '#23402f', 20)}
      <path d="M0 190 Q100 170 200 195 T400 185 V240 H0Z" fill="#17a37a"/>
      <path d="M40 200 q20 -8 40 0 M150 210 q25 -10 50 0 M260 200 q20 -8 40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>
      <path d="M0 225 L60 205 L110 222 L170 208 L240 226 L320 206 L400 222 V240 H0Z" fill="#232323"/>`,
    chiloe: () => `${sky('#a8bccb', '#e8eef3')}
      <path d="M0 130 Q120 100 240 125 T400 115 V170 H0Z" fill="#6e8a7a"/>
      <rect x="300" y="88" width="34" height="46" fill="#f2c14e"/><path d="M296 88 L317 70 L338 88Z" fill="#b23a2a"/><rect x="311" y="46" width="12" height="26" fill="#f2c14e"/><path d="M309 46 L317 30 L325 46Z" fill="#b23a2a"/>
      <path d="M0 170 H400 V240 H0Z" fill="#4c7a8c"/>
      ${[['#e63946', 30], ['#f4a261', 80], ['#2a9d8f', 130], ['#e9c46a', 180], ['#8ecae6', 230]].map(([c, x]) => `<rect x="${x}" y="130" width="42" height="34" fill="${c}"/><path d="M${x - 3} 130 l24 -16 l24 16z" fill="#3d3d3d"/><rect x="${x + 16}" y="142" width="10" height="12" fill="#fff" opacity=".7"/>${[6, 20, 34].map(o => `<path d="M${x + o} 164 v30" stroke="#5b4636" stroke-width="3"/>`).join('')}`).join('')}
      <path d="M0 196 H400" stroke="#6f9aab" stroke-width="2"/>`,
    torres: () => `${sky('#6fa8e0', '#f6d8b6')}
      <path d="M120 170 L150 60 L165 40 L178 70 L190 34 L204 72 L218 44 L232 100 L262 170Z" fill="#5a636f"/>
      <path d="M160 48 L165 40 L170 52Z M186 42 L190 34 L195 46Z M214 52 L218 44 L223 56Z" fill="#fff"/>
      <path d="M0 170 L80 120 L130 160 L270 160 L330 118 L400 150 V190 H0Z" fill="#3e4a55"/>
      <path d="M0 175 H400 V205 H0Z" fill="#3a8fb7"/>
      <path d="M0 200 Q120 186 220 204 T400 196 V240 H0Z" fill="#c9a45c"/>
      <g fill="#8a5a2b"><ellipse cx="320" cy="210" rx="9" ry="5"/><path d="M327 208 l5 -12 l3 1 l-4 12z"/><path d="M314 214 v8 M326 214 v8" stroke="#8a5a2b" stroke-width="2"/></g>`,
    glacier: () => `${sky('#b9d6ee', '#eff7fd')}
      <path d="M0 150 L40 100 L90 120 L130 80 L190 115 L240 90 L300 118 L350 95 L400 110 V160 H0Z" fill="#8ea2b5"/>
      <path d="M0 175 L0 128 L30 122 L50 132 L80 118 L110 130 L150 116 L190 128 L230 114 L270 126 L310 112 L350 124 L400 116 V175Z" fill="#dff3ff"/>
      <path d="M40 130 v40 M90 124 v46 M150 120 v50 M220 118 v52 M290 116 v54 M360 120 v50" stroke="#8ecae6" stroke-width="3"/>
      <path d="M0 175 H400 V240 H0Z" fill="#3b6e8f"/>
      <path d="M70 196 l18 -10 l20 10z M250 205 l14 -8 l16 8z" fill="#e8f7ff"/>
      <path d="M180 212 h50 l-8 10 h-34z" fill="#f5f5f5"/><rect x="195" y="202" width="18" height="10" fill="#e63946"/>`,
    moai: () => `${sky('#f2804a', '#fcd49f')}
      <circle cx="200" cy="165" r="46" fill="#ffe6b0"/>
      <path d="M0 165 H400 V195 H0Z" fill="#2c6e91"/>
      <path d="M0 190 H400 V240 H0Z" fill="#5f7f36"/><rect x="60" y="176" width="280" height="16" fill="#4a3a30"/>
      ${[80, 128, 176, 224, 272].map((x, i) => `<g fill="#35281f"><path d="M${x} 176 v-${46 + (i % 2) * 8} q0 -14 12 -16 h10 q10 2 10 16 v${46 + (i % 2) * 8}z"/><rect x="${x + 22}" y="${138 - (i % 2) * 8}" width="8" height="6"/></g>`).join('')}`,
    sea: () => `${sky('#79d0f5', '#e1f6ff')}
      <path d="M0 110 H400 V240 H0Z" fill="#1aa6c2"/>
      <path d="M0 150 Q100 140 200 152 T400 148" stroke="#7fe0ef" stroke-width="3" fill="none"/>
      <g transform="translate(200 185)"><ellipse rx="34" ry="20" fill="#3d7a4a"/><path d="M-10 -12 l8 8 l8 -8 l8 8 M-18 2 l8 8 l8 -8 l8 8 l8 -8" stroke="#2c5a36" stroke-width="2" fill="none"/>
        <ellipse cx="42" cy="-2" rx="10" ry="7" fill="#6aa96f"/><path d="M-24 -14 l-18 -12 M24 -14 l18 -14 M-24 14 l-16 10 M22 14 l16 10" stroke="#6aa96f" stroke-width="8" stroke-linecap="round"/></g>
      <path d="M0 110 L40 96 L80 108 V110Z" fill="#4a3a30"/><path d="M40 96 v-26 q0 -8 8 -9 h5 q6 1 6 9 v26z" fill="#35281f"/>`,
    wine: () => `${sky('#9fd3ff', '#fff0d4')}
      <path d="M0 110 L80 50 L150 95 L230 40 L320 90 L400 60 V130 H0Z" fill="#8a93a8"/>
      <path d="M68 60 L80 50 L94 62Z M218 50 L230 40 L244 52Z" fill="#fff"/>
      <path d="M0 130 Q200 100 400 130 V240 H0Z" fill="#8cb35a"/>
      ${Array.from({ length: 9 }, (_, i) => `<path d="M${-40 + i * 60} 240 Q${120 + i * 20} 150 ${200 + i * 12} 128" stroke="#4d7a2e" stroke-width="5" fill="none" stroke-dasharray="2 5"/>`).join('')}
      <g transform="translate(300 50)" fill="#23303f"><ellipse rx="16" ry="7"/><path d="M14 -1 h26 v3 h-26z"/><path d="M-24 -10 h48" stroke="#23303f" stroke-width="2"/><path d="M0 -7 v-3"/></g>`,
    lodge: () => `${sky('#232e4e', '#d08f6b')}${stars(14)}
      <path d="M0 150 L90 90 L160 130 L240 70 L320 125 L400 95 V180 H0Z" fill="#553a55"/>
      <path d="M0 180 H400 V240 H0Z" fill="#7a5745"/>
      <rect x="80" y="150" width="240" height="36" fill="#3a2a26"/><path d="M70 150 H330 L320 140 H80Z" fill="#2a1e1b"/>
      ${[95, 135, 175, 215, 255, 290].map(x => `<rect x="${x}" y="158" width="24" height="20" fill="#ffd98a"/>`).join('')}
      <rect x="120" y="198" width="160" height="16" rx="3" fill="#4fb3c8"/><rect x="120" y="198" width="160" height="5" fill="#ffd98a" opacity=".35"/>`,
    lake: () => `${sky('#8fc4e8', '#f4e3cf')}
      <path d="M200 140 L260 60 L320 140Z" fill="#dfe8f2"/><path d="M240 88 L260 60 L280 88 L268 84 L260 92 L252 84Z" fill="#fff"/>
      <path d="M0 140 H400 V160 H0Z" fill="#2e4c3a"/>${trees(148, 20, '#23402f', 16)}
      <path d="M0 158 H400 V240 H0Z" fill="#3f7fa6"/>
      <rect x="60" y="120" width="120" height="30" fill="#6b4a36"/><path d="M52 120 L120 96 L188 120Z" fill="#3a2a22"/>
      ${[72, 102, 132, 158].map(x => `<rect x="${x}" y="128" width="16" height="14" fill="#ffd98a"/>`).join('')}
      <path d="M180 150 h60 v4 h-60z" fill="#7a5a44"/>`,
  };
  const body = (S[key] || S.torres)();
  return `<svg class="scene" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">${body}</svg>`;
}
