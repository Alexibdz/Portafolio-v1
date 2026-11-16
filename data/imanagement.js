// ✏️ CAPTURAS DE iMANAGEMENT
// Cada pantalla tiene su captura de computadora (desktop) y su par en el celular (mobile).
// Para agregar una pantalla, sumá un objeto a la lista: el carrusel, los puntos y el modal se arman solos.
// Las imágenes van en public/assets/imanagement (1920 px y una copia de 1200 px) y en
// public/assets/imanagement/movil (780 × 1688: el doble de 390 × 844, para que se vea nítido).
// Las capturas son de un negocio de ejemplo con datos inventados, nunca de un cliente real.

export const imanagementSlides = [
  {
    title: "Página de inicio",
    text: "Lo que ve un local antes de entrar: qué hace cada módulo, cuánto sale y el botón para probarlo gratis con su cuenta de Google.",
    desktop: {
      name: "01-inicio",
      alt: "Página de inicio de iManagement con el botón para entrar con Google y una vista del panel",
    },
    mobile: { alt: "Página de inicio de iManagement en el celular" },
  },
  {
    title: "Panel principal",
    text: "Lo vendido en el mes, el valor del stock, los equipos más vendidos, los que llevan más tiempo sin venderse, lo pendiente y la actividad del día.",
    desktop: {
      name: "02-panel",
      alt: "Panel principal de iManagement con ventas del mes, stock, pendientes y actividad",
    },
    mobile: { alt: "Panel principal de iManagement en el celular" },
  },
  {
    title: "Caja",
    text: "Saldos en pesos, dólares y USDT, cada movimiento con su billetera y medio de pago, y lo que hay a cobrar y a pagar.",
    desktop: {
      name: "03-caja",
      alt: "Caja de iManagement con los movimientos del día y los saldos por moneda",
    },
    mobile: { alt: "Caja de iManagement en el celular, con el total y el desglose por moneda" },
  },
  {
    title: "Stock",
    text: "Cada equipo con su IMEI, color, almacenamiento, batería, costo y precio, con la ganancia promedio y el equipo más viejo a la vista.",
    desktop: {
      name: "04-stock",
      alt: "Stock de iPhones usados con precio, modelo, color, almacenamiento, batería y fecha de ingreso",
    },
    mobile: { alt: "Stock de iPhones en el celular" },
  },
  {
    title: "Flyers de stock",
    text: "Arma las imágenes con los equipos disponibles y sus precios, con el logo de cada local y en distintos estilos, listas para WhatsApp e historias.",
    desktop: {
      name: "05-flyers",
      alt: "Editor de flyers con la vista previa de un flyer de iPhones usados",
    },
    mobile: { alt: "Vista previa de un flyer de stock en el celular" },
  },
  {
    title: "Plan Canje",
    text: "Se carga el equipo que entrega el cliente, sugiere cuánto pagarlo según la batería, se elige el que se lleva y la diferencia sale al instante.",
    desktop: {
      name: "06-plan-canje",
      alt: "Plan Canje con un iPhone 13 Pro entregado, un iPhone 16 Pro Max elegido del stock y la diferencia a abonar",
    },
    mobile: { alt: "Plan Canje en el celular con la diferencia a abonar" },
  },
  {
    title: "Taller",
    text: "Cada reparación de la entrada a la entrega: en el taller, realizada y lista para entregar, con el cliente, el trabajo y el presupuesto.",
    desktop: {
      name: "07-taller",
      alt: "Tablero del taller con reparaciones en taller, realizadas y listas para entregar",
    },
    mobile: { alt: "Reparaciones del taller en el celular" },
  },
  {
    title: "Comprobante de venta",
    text: "El recibo sale solo al vender: cliente, equipo con su IMEI, accesorios, forma de pago, garantía y verificación pre-entrega, listo para descargar en PDF.",
    desktop: {
      name: "08-comprobante",
      alt: "Comprobante de venta de un iPhone 16 Pro con garantía de 90 días, forma de pago y verificación pre-entrega",
    },
    mobile: { alt: "Comprobante de venta en el celular" },
  },
].map((slide) => ({
  ...slide,
  desktop: {
    ...slide.desktop,
    src: `/assets/imanagement/${slide.desktop.name}.webp`,
    srcSet: `/assets/imanagement/${slide.desktop.name}-1200.webp 1200w, /assets/imanagement/${slide.desktop.name}.webp 1920w`,
  },
  mobile: { ...slide.mobile, src: `/assets/imanagement/movil/${slide.desktop.name}.webp` },
}));
