const technologies = ["HTML", "CSS", "JavaScript", "React", "Next.js", "PostgreSQL", "Supabase", "Git", "GitHub", "Vercel"];

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
              Con <strong>Solo Coding</strong> trabajo de forma freelance con negocios que necesitan una web o un sistema
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

      </div>
    </section>
  );
}
