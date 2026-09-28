# Sebastian-Curimil

Sitio web de turismo de **Wolf Raven Expeditions** (Chile).

Sitio estático (HTML, CSS y JavaScript sin dependencias) en español, inglés y alemán:

- `index.html`: estructura con pestañas (Inicio, una por zona, Circuitos, Premium, Mi viaje) y contacto.
- `assets/tours.js`: las 36 rutas con su itinerario día a día (texto en español).
- `assets/tours-en.js`, `assets/tours-de.js`: el mismo contenido en inglés y alemán.
- `assets/i18n.js`: textos de la interfaz y de cada zona en los tres idiomas.
- `assets/scenes.js`: ilustraciones SVG de cada destino (se usan mientras no haya fotos).
- `assets/script.js`: navegación, mapa, precios (residente e internacional), armador de viaje y formulario.
- `assets/styles.css`: estilos, adaptable a móvil y con modo claro y oscuro.
- `marketing/campana-europa-eeuu.md`: plan de campaña para EE.UU. y Europa.

## Verlo en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Personalizar

- **Tours, precios e itinerarios**: edita `TOURS` en `assets/tours.js`. Cada tour tiene `itinerary`,
  un día por elemento, con sus horarios `[hora, actividad, detalle]`. Si cambias días o actividades,
  actualiza también `tours-en.js` y `tours-de.js` (mismo orden). `circuit: true` lo muestra en Circuitos.
- **Tours premium**: los que tienen `premium: true` aparecen en la pestaña Premium y en su zona.
  El precio es por persona en habitación doble.
- **Fotos reales**: guarda la imagen en `assets/img/` y agrega `photo: 'assets/img/archivo.jpg'` al tour.
- **Política de pago**: función `payPolicy` en `assets/script.js` (día: 100%, varios días: 30%,
  Circuito W: 50%, premium y circuitos: 50%; plazo del saldo en días antes del viaje).
- **Tarifa internacional**: `INTL_FACTOR` (hoy 2) y `RATES` (CLP por USD y EUR) en `assets/script.js`.
  CLP muestra la tarifa residente; USD y EUR muestran la internacional.
- **Colores**: variables CSS en `:root` dentro de `assets/styles.css`.
- **Formulario de contacto**: ahora solo valida y muestra un mensaje. Para recibir las consultas,
  conéctalo a un servicio como Formspree o Netlify Forms (añade `action` y `method="POST"` al `<form>`
  y quita el `preventDefault` en `script.js`).
- **Mi viaje**: se guarda en el navegador de cada visitante; al solicitarlo, el resumen se copia al formulario.

## Publicar

Se puede publicar gratis con GitHub Pages: *Settings → Pages → Deploy from a branch* y elegir la rama.
