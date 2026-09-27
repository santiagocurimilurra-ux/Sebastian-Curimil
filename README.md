# Sebastian-Curimil

Sitio web de turismo **Rutas del Sur · Excursiones en Chile**.

Sitio estático (HTML, CSS y JavaScript sin dependencias):

- `index.html`: estructura y contenido (portada, mapa, tours, mi viaje, contacto).
- `assets/styles.css`: estilos, adaptable a móvil y con modo claro y oscuro.
- `assets/script.js`: catálogo de tours con su itinerario día a día (lista `TOURS`), mapa interactivo,
  armador de viaje y formulario.

## Verlo en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Personalizar

- **Tours, precios e itinerarios**: edita la lista `TOURS` al inicio de `assets/script.js`. Cada tour
  tiene `itinerary`, un día por elemento, con sus horarios `[hora, actividad, detalle]`.
- **Colores**: variables CSS en `:root` dentro de `assets/styles.css`.
- **Formulario de contacto**: ahora solo valida y muestra un mensaje. Para recibir las consultas,
  conéctalo a un servicio como Formspree o Netlify Forms (añade `action` y `method="POST"` al `<form>`
  y quita el `preventDefault` en `script.js`).
- **Mi viaje**: se guarda en el navegador de cada visitante; al solicitarlo, el resumen se copia al formulario.

## Publicar

Se puede publicar gratis con GitHub Pages: *Settings → Pages → Deploy from a branch* y elegir la rama.
