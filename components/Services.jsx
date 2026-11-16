import Card from "./Card";
import Icon from "./Icon";

const services = [
  {
    icon: "window-sidebar",
    title: "Páginas web y landing pages",
    text: "Tu negocio presentado de forma clara y profesional, con un botón directo a WhatsApp para que te escriban.",
  },
  {
    icon: "grid-1x2",
    title: "Sistemas de gestión a medida",
    text: "Stock, ventas, caja, pedidos o turnos en un solo lugar, adaptado a cómo funciona tu negocio. Como iManagement.",
  },
  {
    icon: "file-earmark-spreadsheet",
    title: "De Excel a web y celular",
    text: "Tus planillas pasadas a un sistema que se usa desde la compu o el teléfono, con tus datos migrados y sin fórmulas que se rompan.",
  },
];

const perks = [
  { icon: "chat-dots", title: "Trato directo", text: "Hablás directamente con quien programa tu proyecto, sin intermediarios." },
  { icon: "sliders", title: "A medida de tu negocio", text: "Nada de plantillas genéricas: se adapta a cómo trabajás vos." },
  { icon: "phone", title: "Pensado para el celular", text: "Se ve y se usa cómodo desde el teléfono, que es donde están tus clientes." },
  {
    icon: "life-preserver",
    title: "Soporte después de entregar",
    text: "Te acompaño con ajustes y mejoras una vez que está funcionando.",
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

        <div className="why reveal">
          <h3 className="subhead">Por qué trabajar conmigo</h3>
          <ul className="perks">
            {perks.map(({ icon, title, text }) => (
              <li key={title}>
                <span className="card__icon" aria-hidden="true">
                  <Icon name={icon} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
