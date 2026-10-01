import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/site";
import Icon from "./Icon";
import WhatsAppLink from "./WhatsAppLink";

const external = { target: "_blank", rel: "noopener noreferrer" };

// Íconos de redes. withWhatsApp y withEmail agregan esos dos (se usan en el inicio).
export default function Socials({ label, className = "", withWhatsApp = false, withEmail = false }) {
  return (
    <ul className={`socials${className ? ` ${className}` : ""}`} aria-label={label}>
      {withWhatsApp && (
        <li>
          <WhatsAppLink aria-label="WhatsApp">
            <Icon name="whatsapp" />
          </WhatsAppLink>
        </li>
      )}
      <li>
        <a href={GITHUB_URL} {...external} aria-label="GitHub">
          <Icon name="github" />
        </a>
      </li>
      <li>
        <a href={LINKEDIN_URL} {...external} aria-label="LinkedIn">
          <Icon name="linkedin" />
        </a>
      </li>
      {withEmail && (
        <li>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <Icon name="envelope" />
          </a>
        </li>
      )}
    </ul>
  );
}
