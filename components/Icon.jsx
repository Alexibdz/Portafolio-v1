// Ícono de Bootstrap Icons. Buscá el nombre en https://icons.getbootstrap.com/
// Ejemplo: <Icon name="whatsapp" /> equivale a <i class="bi bi-whatsapp">
export default function Icon({ name, className = "" }) {
  return <i className={`bi bi-${name}${className ? ` ${className}` : ""}`} aria-hidden="true" />;
}
