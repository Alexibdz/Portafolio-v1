import Card from "./Card";
import Icon from "./Icon";
import ImanagementShowcase from "./ImanagementShowcase";

const technologies = ["Next.js", "React", "PostgreSQL", "Supabase", "Mercado Pago", "PWA"];

const modules = [
  { icon: "receipt", title: "Ventas", text: "Equipos y artículos con recibo y garantía, reservas con seña, compra de usados, Plan Canje y cuotas." },
  { icon: "phone", title: "Stock", text: "Equipos Apple y Android con IMEI, batería y costo, productos, artículos y listas de precios." },
  { icon: "tools", title: "Taller", text: "Cada reparación de la entrada a la entrega, presupuestos y lista mayorista compartible por link." },
  { icon: "wallet2", title: "Economía", text: "La caja de cada billetera en pesos, dólares y USDT, con lo que hay a cobrar, a pagar y el historial." },
  { icon: "box-seam", title: "Pedidos", text: "Lo que encargan los clientes: por pedir, en camino y en el local, hasta que se entrega." },
  { icon: "people", title: "Clientes", text: "Un solo directorio, vinculado a cada venta, reserva y reparación." },
  { icon: "currency-dollar", title: "Precio de toma", text: "Cuánto pagar cada iPhone usado según su batería, a mano en el momento de tomarlo." },
  { icon: "megaphone", title: "Toolkit", text: "Flyers y mensajes de stock con el logo y el nombre de cada local, listos para mandar." },
];

const technicalDetails = [
  { title: "Next.js y React", text: ", desplegado en Vercel." },
  { title: "PostgreSQL en Supabase:", text: " una sola base para todos los locales, y cada consulta filtrada por negocio." },
  { title: "Suscripción mensual", text: " con prueba gratis y pago por Mercado Pago." },
  { title: "Ingreso con Google", text: " y roles para el dueño, los vendedores y los revendedores." },
  { title: "PWA:", text: " se instala como app en la computadora o el celular." },
  { title: "Multimoneda:", text: " pesos, dólares y USDT." },
];

export default function Project() {
  return (
    <section className="section section--alt" id="proyecto" aria-labelledby="proyecto-titulo">
      <div className="container">
        <header className="section__header reveal">
          <p className="section__eyebrow">02 · Proyecto destacado</p>
          <h2 className="section__title" id="proyecto-titulo">
            iManagement
          </h2>
          <p className="project__subtitle">El panel de gestión para locales de celulares</p>
          <p className="badge-live">
            <span className="status__dot" aria-hidden="true" />
            En venta y en uso todos los días
          </p>
          <p className="section__lead">
            Mi primer producto comercializado: stock de equipos, ventas, taller, caja y pedidos en un solo lugar, desde el
            mostrador o desde el teléfono. Nació como un sistema a medida para Newcell, un local de celulares de Rosario, y hoy
            es un producto que usan Newcell y otros locales con una suscripción mensual.
          </p>

          <ul className="tags" aria-label="Tecnologías usadas">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project__links">
            <a className="btn btn--primary" href="https://imanagement.app" target="_blank" rel="noopener noreferrer">
              Conocé iManagement
              <Icon name="box-arrow-up-right" />
            </a>
          </div>
          <p className="project__note">
            Las capturas son de un local de ejemplo: los clientes, equipos y montos son inventados.
          </p>
        </header>

        <ImanagementShowcase />

        <div className="cards">
          <Card icon="exclamation-triangle" title="El problema">
            Los locales de celulares llevan el stock, las ventas y la caja en planillas de Excel. Con equipos identificados
            por IMEI, caja en varias monedas y reparaciones en curso, las planillas se quedan cortas.
          </Card>
          <Card icon="lightbulb" title="La solución">
            Un panel que reúne todo el local en un solo lugar. Cada negocio se da de alta solo, lo prueba gratis y lo usa
            con su nombre y su logo en los flyers, los recibos y los mensajes.
          </Card>
          <Card icon="person-workspace" title="Mi rol">
            Lo diseñé y programé solo, de punta a punta. Empezó con un cliente real, Newcell, y hoy también me ocupo de
            venderlo, dar de alta a cada local y darles soporte.
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
              El primer desafío fue el diseño: lograr que un sistema con tantos módulos se sienta simple. Lo usan personas
              detrás del mostrador, con clientes esperando, así que cada pantalla tenía que ser clara, rápida y cómoda
              tanto en la computadora como en el celular.
            </p>
            <p>
              El segundo fue pasar de un sistema para un solo local a un producto para muchos: migrar los datos de Newcell a
              una base compartida sin perder nada, separar la información de cada negocio y sumar el alta, la prueba gratis
              y el cobro de la suscripción.
            </p>
            <p>
              Aprendí a diseñar pensando en quien usa el sistema todos los días, y a llevar un proyecto desde la idea hasta
              tener clientes que pagan por él.
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
