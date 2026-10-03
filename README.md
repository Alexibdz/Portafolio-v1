# Portafolio — Alexis Artaza · Solo Coding

Sitio hecho con **Next.js** (App Router) y **React**, listo para publicar en Vercel.
Íconos: [Bootstrap Icons](https://icons.getbootstrap.com/) (paquete de npm, sin CDN).
Fuentes: Inter, Space Grotesk y JetBrains Mono, cargadas con `next/font` (se sirven desde el mismo sitio).

## Estructura

```
portafolio/
├── app/
│   ├── layout.js            ← <head>: título, descripción, vista previa para WhatsApp, fuentes y tema
│   ├── page.js              ← la página: arma las secciones en orden
│   ├── not-found.js         ← página de "no encontrado" (404)
│   └── globals.css          ← estilos (colores y fuentes en :root)
├── components/
│   ├── Header.jsx           ← menú, tema claro/oscuro, menú móvil, sección activa
│   ├── Hero.jsx             ← inicio (con ProfilePhoto.jsx)
│   ├── Services.jsx         ← 01 · Servicios
│   ├── Project.jsx          ← 02 · Proyecto destacado (Newcell)
│   ├── NewcellShowcase.jsx  ← carrusel de capturas (compu + celular sincronizados)
│   ├── Lightbox.jsx         ← modal para ver las capturas en grande
│   ├── About.jsx            ← 03 · Sobre mí
│   ├── Contact.jsx          ← 04 · Contacto (con CopyEmail.jsx)
│   ├── Footer.jsx
│   ├── WhatsAppFab.jsx      ← botón flotante de WhatsApp
│   ├── ScrollReveal.jsx     ← animación de aparición al hacer scroll
│   └── …                    ← piezas chicas: Icon, Card, Logo, Socials, WhatsAppLink, CurrentYear
├── data/
│   ├── site.js              ← WhatsApp, email, GitHub y LinkedIn
│   └── newcell.js           ← títulos, textos e imágenes del carrusel
├── public/assets/
│   ├── favicon.svg
│   ├── foto.jpg             ← tu foto 1:1
│   └── newcell/             ← capturas de Newcell en la compu (WebP, 1920 y 1200 px)
│       └── movil/           ← las mismas pantallas en el celular (WebP, 390 × 844)
├── next.config.mjs          ← encabezados de seguridad
└── vercel.json              ← le indica a Vercel que es un proyecto Next.js
```

Los textos de cada sección están en su componente (`components/`). Las listas (servicios, módulos, tecnologías, etc.) son arrays al principio de cada archivo: para agregar o sacar un ítem, editá el array.

## Tu foto

Guardá tu foto cuadrada (1:1, 800 × 800 px o más) como **`public/assets/foto.jpg`** y aparece sola.
El marco la recorta solo. Si no es cuadrada, podés elegir qué parte se ve cambiando `object-position: center 25%;` en `.photo-frame__img` (`app/globals.css`).
Next.js la optimiza sola (la convierte a un formato más liviano y del tamaño justo para cada pantalla).

## Carrusel de Newcell

Las pantallas están en **`data/newcell.js`**: cada una tiene su título, su texto, la captura de computadora y su par en el celular.
El carrusel tiene dos pistas que se mueven juntas: la de la computadora (dentro de `.browser`) y la del celular (dentro de `.phone`).

Para agregar una pantalla, sumá un objeto a la lista y guardá las imágenes con el mismo nombre:

- `public/assets/newcell/NOMBRE.webp` (1920 px) y `public/assets/newcell/NOMBRE-1200.webp` (1200 px)
- `public/assets/newcell/movil/NOMBRE.webp` (390 × 844)

Los puntos, los textos, los `aria-label` ("N de 7") y el modal se arman solos.
Al tocar una captura (o el botón ⤢) se abre en grande en un modal.

Las capturas publicadas tienen datos censurados (descripciones de movimientos y datos del cliente).
**No subas las capturas originales a la carpeta `public/`**: todo lo que está ahí se publica.

## Íconos

Se usan con el componente `<Icon name="NOMBRE" />` (equivale a `<i class="bi bi-NOMBRE">`). Buscá el nombre en [icons.getbootstrap.com](https://icons.getbootstrap.com/).

## WhatsApp

Todos los botones usan el número y el mensaje de **`data/site.js`**. Si los cambiás ahí, se actualizan en todos lados.

## Ver el sitio en tu computadora

Necesitás [Node.js](https://nodejs.org/) 20.9 o más nuevo.

```bash
npm install      # la primera vez
npm run dev      # servidor de desarrollo con recarga automática
```

y entrá a <http://localhost:3000>.

Para probar la versión de producción: `npm run build` y después `npm start`.
Para revisar el código: `npm run lint`.

## Publicar en Vercel

### Si el proyecto ya estaba en Vercel

No hace falta tocar nada: `vercel.json` le indica a Vercel que es un proyecto Next.js, así que en el próximo `git push` a `main` instala las dependencias, hace el build y publica.
(Si en algún momento sacás `vercel.json`, cambiá **Settings → Build and Deployment → Framework Preset** a **Next.js**.)

### Proyecto nuevo

1. Subí el repositorio a GitHub.
2. Entrá a [vercel.com/new](https://vercel.com/new) e importá el repositorio. Vercel detecta Next.js solo.
3. Hacé clic en **Deploy**.

Cada `git push` a `main` vuelve a publicar el sitio solo.

### Vista previa al compartir el link (WhatsApp, LinkedIn, etc.)

Está configurada en `metadata` dentro de `app/layout.js` (título, descripción y tu foto).
En Vercel, Next.js completa solo el dominio de producción en `og:url` y `og:image`.
Si conectás un dominio propio, agregá `metadataBase: new URL("https://tu-dominio.com"),` dentro de `metadata`.
