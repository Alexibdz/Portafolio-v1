import Icon from "./Icon";

const technologies = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Turso", "Git", "GitHub", "Vercel"];

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

export default function About() {
  return (
    <section className="section" id="sobre-mi" aria-labelledby="sobre-mi-titulo">
      <div className="container about">
        <div className="reveal">
          <p className="section__eyebrow">03 · Sobre mí</p>
          <h2 className="section__title" id="sobre-mi-titulo">
            Un poco sobre mí
          </h2>
          <div className="prose prose--lg">
            <p>
              Soy Alexis, desarrollador web de Victoria, Entre Ríos. Me enfoco en el frontend: la parte de la web que ves y
              usás, y que tiene que ser clara, rápida y cómoda en cualquier pantalla.
            </p>
            <p>
              Estudio la Tecnicatura en Análisis y Desarrollo de Software en el Instituto Gaspar Benavento y lo combino con
              aprendizaje autodidacta, usando la inteligencia artificial como herramienta para avanzar más rápido y
              entregar mejor.
            </p>
            <p>
              Con <strong>Solo Codin</strong> trabajo de forma freelance con negocios que necesitan una web o un sistema
              hecho a su medida.
            </p>
          </div>

          <div className="stack">
            <h3>Tecnologías</h3>
            <ul className="tags tags--neutral">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal">
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
