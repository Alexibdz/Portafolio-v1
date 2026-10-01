import Card from "./Card";
import Icon from "./Icon";
import NewcellShowcase from "./NewcellShowcase";

const technologies = ["Next.js", "React", "Turso", "PWA", "Bootstrap Icons"];

const modules = [
  { icon: "receipt", title: "Ventas", text: "Equipos y artículos con recibo, reservas con seña, compra de usados y Plan Canje." },
  { icon: "phone", title: "Stock", text: "Equipos Apple y Android con IMEI y costo, productos, artículos y listas de precios." },
  { icon: "tools", title: "Taller", text: "Cada reparación de la entrada a la entrega, presupuestos y lista mayorista compartible por link." },
  { icon: "wallet2", title: "Economía", text: "La caja de cada billetera en pesos, dólares y USDT, con cobros e historial de movimientos." },
  { icon: "box-seam", title: "Pedidos", text: "Lo que encargan los clientes: por pedir, en camino y en el local, hasta que se entrega." },
  { icon: "people", title: "Clientes", text: "Un solo directorio, vinculado a cada venta, reserva y reparación." },
  { icon: "currency-dollar", title: "Cotizaciones", text: "Cuánto se paga cada iPhone usado, a mano en el momento de tomarlo." },
  { icon: "megaphone", title: "Toolkit", text: "Flyers y mensajes de stock armados con lo que hay en el local, listos para mandar." },
];

const technicalDetails = [
  { title: "Next.js y React", text: ", desplegado en Vercel." },
  { title: "Base de datos en Turso", text: " (SQLite en la nube)." },
  { title: "PWA:", text: " se instala como app en la computadora o el celular." },
  { title: "Multimoneda:", text: " pesos, dólares y USDT." },
  { title: "Acceso protegido:", text: " solo para cuentas habilitadas." },
];

export default function Project() {
  return (
    <section className="section section--alt" id="proyecto" aria-labelledby="proyecto-titulo">
      <div className="container">
        <header className="section__header reveal">
          <p className="section__eyebrow">02 · Proyecto destacado</p>
          <h2 className="section__title" id="proyecto-titulo">
            Newcell
          </h2>
          <p className="project__subtitle">Sistema de gestión para un local de celulares</p>
          <p className="badge-live">
            <span className="status__dot" aria-hidden="true" />
            En uso todos los días
          </p>
          <p className="section__lead">
            Un sistema hecho a medida para Newcell, un local de celulares de Rosario: stock de equipos, ventas, taller,
            caja y pedidos en un solo lugar, desde el mostrador o desde el teléfono.
          </p>

          <ul className="tags" aria-label="Tecnologías usadas">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project__links">
            <a className="btn btn--primary" href="https://newcellrosario.vercel.app" target="_blank" rel="noopener noreferrer">
              Ver la página de Newcell
              <Icon name="box-arrow-up-right" />
            </a>
          </div>
          <p className="project__note">El sistema es de uso interno del local: el link lleva a su página de presentación.</p>
        </header>

        <NewcellShowcase />

        <div className="cards">
          <Card icon="exclamation-triangle" title="El problema">
            El local llevaba el stock, las ventas y la caja en planillas de Excel. Con equipos identificados por IMEI, caja
            en varias monedas y reparaciones en curso, las planillas se quedaban cortas.
          </Card>
          <Card icon="lightbulb" title="La solución">
            Un panel a medida que reúne todo el local en un solo lugar. Se instala como una app y se usa desde la
            computadora del mostrador o desde el celular.
          </Card>
          <Card icon="person-workspace" title="Mi rol">
            Lo diseñé y programé solo, de punta a punta, para un cliente real. Hoy el local lo usa todos los días para
            trabajar.
          </Card>
        </div>

        <div className="modules reveal">
          <h3 className="subhead">Todo lo que resuelve</h3>
          <ul className="modules__grid">
            {modules.map(({ icon, title, text }) => (
              <li key={title}>
                <Icon name={icon} />
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="split">
          <div className="prose reveal">
            <h3 className="subhead">Desafíos y aprendizajes</h3>
            <p>
              El mayor desafío fue el diseño del frontend: lograr que un sistema con tantos módulos se sienta simple. Lo
              usan personas detrás del mostrador, con clientes esperando, así que cada pantalla tenía que ser clara, rápida
              y cómoda tanto en la computadora como en el celular.
            </p>
            <p>
              Aprendí a diseñar pensando en quien usa el sistema todos los días, y a llevar un proyecto real desde la idea
              hasta producción.
            </p>
          </div>
          <div className="reveal">
            <h3 className="subhead">Detalles técnicos</h3>
            <ul className="checklist">
              {technicalDetails.map(({ title, text }) => (
                <li key={title}>
                  <Icon name="check2-circle" />
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
