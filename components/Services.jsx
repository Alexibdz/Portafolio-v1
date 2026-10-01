import Card from "./Card";

const services = [
  {
    icon: "window-sidebar",
    title: "Páginas web y landing pages",
    text: "Tu negocio presentado de forma clara y profesional, con un botón directo a WhatsApp para que te escriban.",
  },
  {
    icon: "grid-1x2",
    title: "Sistemas de gestión a medida",
    text: "Stock, ventas, caja, pedidos o turnos en un solo lugar, adaptado a cómo funciona tu negocio. Como Newcell.",
  },
  {
    icon: "bag-check",
    title: "Tiendas online",
    text: "Un catálogo con tus productos y pedidos que te llegan directo, para vender también fuera del horario del local.",
  },
];

export default function Services() {
  return (
    <section className="section" id="servicios" aria-labelledby="servicios-titulo">
      <div className="container">
        <header className="section__header reveal">
          <p className="section__eyebrow">01 · Servicios</p>
          <h2 className="section__title" id="servicios-titulo">
            Qué puedo hacer por tu negocio
          </h2>
          <p className="section__lead">
            Soluciones a medida, pensadas para cómo trabajás vos y para que tus clientes las usen sin vueltas.
          </p>
        </header>

        <div className="cards">
          {services.map(({ icon, title, text }) => (
            <Card key={title} icon={icon} title={title}>
              {text}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
