# Portafolio — Alexis Artaza · Solo Codin

Sitio estático (HTML + CSS + JavaScript, sin frameworks ni base de datos) listo para publicar en Vercel.
Íconos: [Bootstrap Icons](https://icons.getbootstrap.com/) por CDN.

## Estructura

```
portafolio/
├── index.html               ← todo el contenido de la página
├── 404.html                 ← página de "no encontrado"
├── css/styles.css           ← estilos (colores y fuentes en :root)
├── js/main.js               ← tema claro/oscuro, menú móvil, copiar email, botón de WhatsApp, animaciones
├── assets/
│   ├── favicon.svg
│   ├── newcell/             ← capturas de Newcell en la compu (WebP, 1920 y 1200 px)
│   │   └── movil/           ← las mismas pantallas en el celular (WebP, 390 × 844)
│   └── foto.jpg             ← (agregala vos) tu foto 1:1
└── vercel.json
```

## Tu foto

Guardá tu foto cuadrada (1:1, 800 × 800 px o más) como **`assets/foto.jpg`** y aparece sola.
El marco la recorta solo. Si no es cuadrada, podés elegir qué parte se ve cambiando `object-position: center 25%;` en `.photo-frame__img` (`css/styles.css`).
Comprimila en [squoosh.app](https://squoosh.app) para que pese menos de 200 KB: la mayoría de las visitas llegan desde el celular.

## Carrusel de Newcell

El carrusel tiene dos pistas que se mueven juntas: la de la computadora (dentro de `.browser`) y la del celular (dentro de `.phone`).
Cada captura de compu tiene su par en el celular, **en la misma posición**. El título y el texto de abajo salen de `data-title` y `data-text` de los slides de la pista de computadora.

Para agregar una pantalla, sumá un `.carousel__slide` en las dos pistas (en el mismo lugar) y actualizá los `aria-label` ("N de 7").
Al tocar una captura (o el botón ⤢) se abre en grande en un modal.

Las capturas publicadas tienen datos censurados (descripciones de movimientos y datos del cliente).
**No subas las capturas originales a la carpeta del proyecto**: todo lo que está en esta carpeta se publica.

## Íconos

Se usan con `<i class="bi bi-NOMBRE"></i>`. Buscá el nombre en [icons.getbootstrap.com](https://icons.getbootstrap.com/).

## WhatsApp

Todos los botones apuntan a `https://wa.me/5493436617446` con un mensaje ya escrito.
Si cambiás el número o el mensaje, buscá `wa.me/` en `index.html` y reemplazá en todos los lugares.

## Ver el sitio en tu computadora

Abrí `index.html` en el navegador, o levantá un servidor local:

```bash
npx serve .
```

y entrá a <http://localhost:3000>.

## Publicar en Vercel

### Opción A: con GitHub (recomendada)

1. Creá un repositorio en GitHub y subí esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Primer commit del portafolio"
   git branch -M main
   git remote add origin https://github.com/Alexibdz/portafolio.git
   git push -u origin main
   ```
2. Entrá a [vercel.com/new](https://vercel.com/new) e importá el repositorio.
3. En **Framework Preset** dejá **Other**. No hace falta comando de build ni carpeta de salida.
4. Hacé clic en **Deploy**.

Cada `git push` a `main` vuelve a publicar el sitio solo.

### Opción B: desde la terminal

```bash
npx vercel          # primera vez: iniciás sesión y se crea el proyecto (vista previa)
npx vercel --prod   # publica en producción
```

### Después de publicar (importante para WhatsApp)

Cuando tengas tu URL (por ejemplo `https://solocodin.vercel.app`), descomentá las líneas `og:url` y `og:image` en el `<head>` de `index.html` y poné tu dominio. Así, cuando mandes el link por WhatsApp, se va a ver la vista previa con tu foto, tu nombre y la descripción.
