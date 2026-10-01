import Icon from "./Icon";

export default function Card({ icon, title, children }) {
  return (
    <article className="card reveal">
      <span className="card__icon" aria-hidden="true">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
