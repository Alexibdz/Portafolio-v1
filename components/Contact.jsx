import CopyEmail from "./CopyEmail";
import Icon from "./Icon";
import Socials from "./Socials";
import WhatsAppLink from "./WhatsAppLink";

export default function Contact() {
  return (
    <section className="section section--alt" id="contacto" aria-labelledby="contacto-titulo">
      <div className="container contact reveal">
        <p className="section__eyebrow">04 · Contacto</p>
        <h2 className="section__title" id="contacto-titulo">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="section__lead">Contame qué necesita tu negocio y lo charlamos por WhatsApp.</p>

        <div className="contact__actions">
          <WhatsAppLink className="btn btn--whatsapp btn--lg">
            <Icon name="whatsapp" />
            Escribime por WhatsApp
          </WhatsAppLink>
        </div>

        <CopyEmail />

        <Socials label="Redes" className="socials--center" />
      </div>
    </section>
  );
}
