# Sebastian-Curimil

Sitio web de turismo de **Wolf Raven Expeditions** (Chile).

Sitio estático (HTML, CSS y JavaScript sin dependencias):

- `index.html`: estructura con pestañas (Inicio, una por zona, Premium, Mi viaje) y contacto.
- `assets/scenes.js`: ilustraciones SVG de cada destino (se usan mientras no haya fotos).
- `assets/styles.css`: estilos, adaptable a móvil y con modo claro y oscuro.
- `assets/script.js`: zonas (`ZONES`), catálogo de tours y viajes premium con su itinerario día a día
  (`TOURS`), navegación por pestañas, mapa, selector CLP/USD, armador de viaje y formulario.

## Verlo en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Personalizar

- **Tours, precios e itinerarios**: edita la lista `TOURS` al inicio de `assets/script.js`. Cada tour
  tiene `itinerary`, un día por elemento, con sus horarios `[hora, actividad, detalle]`.
- **Tours premium**: los que tienen `premium: true` aparecen en la pestaña Premium y en su zona.
  El precio es por persona en habitación doble.
- **Fotos reales**: guarda la imagen en `assets/img/` y agrega `photo: 'assets/img/archivo.jpg'` al tour.
- **Política de pago**: función `payPolicy` en `assets/script.js` (día: 100%, varios días: 30%,
  premium y Circuito W: 50%; plazo del saldo en días antes del viaje).
- **Tipo de cambio**: `USD_RATE` en `assets/script.js` (CLP por dólar, referencial).
- **Colores**: variables CSS en `:root` dentro de `assets/styles.css`.
- **Formulario de contacto**: ahora solo valida y muestra un mensaje. Para recibir las consultas,
  conéctalo a un servicio como Formspree o Netlify Forms (añade `action` y `method="POST"` al `<form>`
  y quita el `preventDefault` en `script.js`).
- **Mi viaje**: se guarda en el navegador de cada visitante; al solicitarlo, el resumen se copia al formulario.

## Publicar

Se puede publicar gratis con GitHub Pages: *Settings → Pages → Deploy from a branch* y elegir la rama.
