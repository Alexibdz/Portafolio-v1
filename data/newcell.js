// ✏️ CAPTURAS DE NEWCELL
// Cada pantalla tiene su captura de computadora (desktop) y su par en el celular (mobile).
// Para agregar una pantalla, sumá un objeto a la lista: el carrusel, los puntos y el modal se arman solos.
// Las imágenes van en public/assets/newcell (1920 px y una copia de 1200 px) y en public/assets/newcell/movil (390 × 844).

export const newcellSlides = [
  {
    title: "Página de inicio",
    text: "La presentación del sistema, con acceso por Google solo para cuentas habilitadas.",
    desktop: {
      name: "01-inicio",
      alt: "Página de inicio de Newcell con el botón para entrar con Google y los módulos del sistema",
    },
    mobile: { alt: "Página de inicio de Newcell en el celular" },
  },
  {
    title: "Panel principal",
    text: "Lo pendiente del día, los equipos más vendidos, los que llevan más tiempo en stock y la actividad reciente.",
    desktop: {
      name: "02-panel",
      alt: "Panel principal de Newcell con pendientes, equipos más vendidos, stock y actividad",
    },
    mobile: { alt: "Panel principal de Newcell en el celular" },
  },
  {
    title: "Caja",
    text: "Saldos en pesos, dólares y USDT, con cada movimiento, su billetera y medio de pago. Las descripciones están ocultas por privacidad.",
    desktop: {
      name: "03-caja",
      alt: "Pantalla de caja de Newcell con saldos por moneda y la lista de movimientos",
    },
    mobile: { alt: "Caja de Newcell en el celular, con el total, el desglose por moneda y los movimientos" },
  },
  {
    title: "Flyers de stock",
    text: "Genera una imagen con los equipos disponibles y sus precios, en distintos estilos, lista para mandar por WhatsApp.",
    desktop: {
      name: "04-flyers",
      alt: "Vista previa de un flyer de iPhones usados generado por Newcell",
    },
    mobile: { alt: "Vista previa de un flyer de stock en el celular" },
  },
  {
    title: "Lista para revendedores",
    text: "El stock disponible con precio en dólares y en pesos, color, estado y batería de cada equipo.",
    desktop: {
      name: "05-revendedores",
      alt: "Lista de stock disponible para revendedores con precios en dólares y pesos",
    },
    mobile: { alt: "Lista de stock para revendedores en el celular" },
  },
  {
    title: "Plan Canje",
    text: "Se carga el equipo que entrega el cliente, se elige el que se lleva y la diferencia se calcula al instante, con el mensaje listo para WhatsApp.",
    desktop: {
      name: "06-plan-canje",
      alt: "Calculadora de Plan Canje con el equipo que entrega el cliente y la diferencia a abonar",
    },
    mobile: { alt: "Plan Canje en el celular con la diferencia a abonar" },
  },
  {
    title: "Comprobante de venta",
    text: "Recibo con garantía, equipo y verificación pre-entrega, listo para descargar en PDF. Los datos del cliente están ocultos.",
    desktop: {
      name: "07-comprobante",
      alt: "Comprobante de venta de un iPhone 16 con garantía y verificación pre-entrega",
    },
    mobile: { alt: "Comprobante de venta en el celular" },
  },
].map((slide) => ({
  ...slide,
  desktop: {
    ...slide.desktop,
    src: `/assets/newcell/${slide.desktop.name}.webp`,
    srcSet: `/assets/newcell/${slide.desktop.name}-1200.webp 1200w, /assets/newcell/${slide.desktop.name}.webp 1920w`,
  },
  mobile: { ...slide.mobile, src: `/assets/newcell/movil/${slide.desktop.name}.webp` },
}));
