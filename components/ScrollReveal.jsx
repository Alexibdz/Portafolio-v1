"use client";

import { useEffect } from "react";

// Aparición de las secciones al hacer scroll.
// La clase js-reveal la agrega app/layout.js antes de pintar (si no hay "reducir movimiento"),
// y acá se marca cada .reveal como visible cuando entra en pantalla.
export default function ScrollReveal() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
