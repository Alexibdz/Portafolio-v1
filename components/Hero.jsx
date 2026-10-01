import Icon from "./Icon";
import ProfilePhoto from "./ProfilePhoto";
import Socials from "./Socials";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            Disponible para proyectos freelance
          </p>

          <h1 className="hero__title">
            Hola, soy Alexis Artaza. <span className="hero__role">Desarrollador Web.</span>
          </h1>

          <p className="hero__lead">
            Me enfoco en el frontend: webs y sistemas claros, rápidos y cómodos de usar desde el celular. Hago páginas
            web, tiendas online y sistemas de gestión a medida para negocios.
          </p>

          <p className="hero__location">
            <Icon name="geo-alt-fill" />
            Victoria, Entre Ríos, Argentina
          </p>

          <div className="hero__cta">
            <WhatsAppLink className="btn btn--whatsapp">
              <Icon name="whatsapp" />
              Escribime por WhatsApp
            </WhatsAppLink>
            <a className="btn btn--ghost" href="#proyecto">
              Ver mi trabajo
              <Icon name="arrow-right" />
            </a>
          </div>

          <Socials label="Redes y contacto" withWhatsApp withEmail />
        </div>

        <div className="hero__photo">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
