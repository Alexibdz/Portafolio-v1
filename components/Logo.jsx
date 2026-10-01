import Link from "next/link";
import Icon from "./Icon";

export default function Logo({ href }) {
  return (
    <Link className="nav__logo" href={href} aria-label="Solo Codin, ir al inicio">
      <span className="nav__mark" aria-hidden="true">
        <Icon name="code-slash" />
      </span>
      Solo Codin
    </Link>
  );
}
