import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata = {
  title: "Alexis Artaza — Desarrollador Web | Solo Coding",
  description:
    "Desarrollador web freelance en Victoria, Entre Ríos. Páginas web, tiendas online y sistemas de gestión a medida para negocios.",
  authors: [{ name: "Alexis Artaza" }],
  icons: { icon: { url: "/assets/favicon.svg", type: "image/svg+xml" } },

  // Vista previa al compartir el link (WhatsApp, LinkedIn, etc.).
  // En Vercel, Next.js completa solo el dominio de producción en og:url y og:image.
  // Si usás un dominio propio, agregá: metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Solo Coding",
    title: "Alexis Artaza — Desarrollador Web",
    description: "Páginas web, tiendas online y sistemas de gestión a medida para tu negocio.",
    url: "/",
    images: [{ url: "/assets/og.jpg", width: 1200, height: 630, alt: "Solo Coding" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c10" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
  ],
};

// Se ejecuta antes de pintar la página: aplica el tema guardado (evita un parpadeo)
// y prepara las animaciones de aparición al hacer scroll.
const beforePaint = `
  (function () {
    var root = document.documentElement;
    root.classList.add("js");
    try {
      var savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
    } catch (e) {}
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("js-reveal");
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: beforePaint }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
