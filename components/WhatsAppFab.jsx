"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import WhatsAppLink from "./WhatsAppLink";

// Botón flotante de WhatsApp: aparece al pasar el inicio y se oculta en Contacto
// (donde ya está el botón grande).
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contact = document.getElementById("contacto");
    if (!hero || !contact || !("IntersectionObserver" in window)) return;

    const inView = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => inView.set(entry.target, entry.isIntersecting));
      setVisible(!inView.get(hero) && !inView.get(contact));
    });
    observer.observe(hero);
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <WhatsAppLink className={`wa-fab${visible ? " is-visible" : ""}`} aria-label="Escribime por WhatsApp">
      <Icon name="whatsapp" />
    </WhatsAppLink>
  );
}
