# Sebastian-Curimil

Sitio web de turismo **Rutas del Sur · Excursiones en Chile**.

Sitio estático (HTML, CSS y JavaScript sin dependencias):

- `index.html`: estructura y contenido (destinos, nosotros, opiniones, contacto).
- `assets/styles.css`: estilos, adaptable a móvil y con modo oscuro automático.
- `assets/script.js`: catálogo de tours (lista `TOURS`), filtros, buscador y formulario.

## Verlo en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Personalizar

- **Tours y precios**: edita la lista `TOURS` al inicio de `assets/script.js`.
- **Colores**: variables CSS en `:root` dentro de `assets/styles.css`.
- **Formulario de contacto**: ahora solo valida y muestra un mensaje. Para recibir las consultas,
  conéctalo a un servicio como Formspree o Netlify Forms (añade `action` y `method="POST"` al `<form>`
  y quita el `preventDefault` en `script.js`).

## Publicar

Se puede publicar gratis con GitHub Pages: *Settings → Pages → Deploy from a branch* y elegir la rama.
