"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

const links = [
  { id: "servicios", label: "Servicios" },
  { id: "proyecto", label: "Proyecto" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

// Cambia entre tema claro y oscuro. Qué ícono se ve lo decide el CSS según data-theme.
function toggleTheme() {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.dataset.theme || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // Esc cierra el menú móvil
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Resalta en el menú la sección que está en pantalla
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) setActiveId(id);
          else setActiveId((active) => (active === id ? null : active));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Principal">
        <Logo href="#inicio" />

        <ul
          className={`nav__links${menuOpen ? " is-open" : ""}`}
          id="nav-links"
          onClick={(e) => {
            if (e.target.closest("a")) setMenuOpen(false);
          }}
        >
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeId === id ? "is-active" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button className="icon-btn" type="button" aria-label="Cambiar entre tema claro y oscuro" onClick={toggleTheme}>
            <Icon name="sun" className="icon-sun" />
            <Icon name="moon-stars" className="icon-moon" />
          </button>
          <WhatsAppLink className="btn btn--whatsapp btn--sm nav__cta">
            <Icon name="whatsapp" />
            Escribime
          </WhatsAppLink>
          <button
            className="icon-btn nav__menu-btn"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x-lg" : "list"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
