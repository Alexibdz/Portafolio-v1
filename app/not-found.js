import Link from "next/link";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Página no encontrada — Alexis Artaza",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Principal">
          <Logo href="/" />
        </nav>
      </header>

      <main className="not-found">
        <p className="not-found__code">Error 404</p>
        <h1 className="section__title">Esta página no existe</h1>
        <p className="section__lead">Puede que el link esté mal escrito o que la página se haya movido.</p>
        <Link className="btn btn--primary" href="/">
          <Icon name="arrow-left" />
          Volver al inicio
        </Link>
      </main>
    </>
  );
}
