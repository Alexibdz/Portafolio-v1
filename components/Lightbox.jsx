"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";

// Modal para ver las capturas en grande: muestra juntas la captura de compu y la de celular.
// slides: [{ title, text, desktop: { src, alt }, mobile: { src, alt } }]
export default function Lightbox({ slides, index, open, onClose, onNavigate }) {
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  const slide = index === null ? null : slides[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const prev = () => onNavigate(index - 1);
  const next = () => onNavigate(index + 1);

  return (
    <dialog
      className="lightbox"
      ref={dialogRef}
      aria-label="Captura ampliada"
      // Esc lo cierra de forma nativa: este evento avisa para actualizar el estado
      onClose={onClose}
      // Tocar fuera de la imagen y de los controles cierra el modal
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.matches(".lightbox__inner, .lightbox__figure, .lightbox__media")) {
          onClose();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      // Deslizar con el dedo cambia de captura (salvo que la persona esté haciendo zoom)
      onTouchStart={(e) => {
        touchX.current = e.touches.length === 1 ? e.touches[0].clientX : null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null || (window.visualViewport && window.visualViewport.scale > 1.01)) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
      }}
    >
      <div className="lightbox__inner">
        <button className="lightbox__close" type="button" aria-label="Cerrar" onClick={onClose}>
          <Icon name="x-lg" />
        </button>
        <figure className="lightbox__figure">
          <div className="lightbox__media">
            {/* Las imágenes se cargan recién la primera vez que se abre el modal */}
            {slide && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element -- captura en tamaño completo, ya optimizada en WebP */}
                <img className="lightbox__img lightbox__img--desktop" src={slide.desktop.src} alt={slide.desktop.alt} />
                <div className="lightbox__phone" hidden={!slide.mobile}>
                  {slide.mobile && (
                    // eslint-disable-next-line @next/next/no-img-element -- captura ya optimizada en WebP
                    <img className="lightbox__img lightbox__img--mobile" src={slide.mobile.src} alt={slide.mobile.alt} />
                  )}
                </div>
              </>
            )}
          </div>
          <figcaption className="lightbox__bar">
            <button className="lightbox__nav" type="button" aria-label="Captura anterior" onClick={prev}>
              <Icon name="chevron-left" />
            </button>
            <span className="lightbox__caption">
              <strong>{slide?.title}</strong>
              <span>{slide?.text}</span>
              <small className="lightbox__hint">Girá el teléfono para verla más grande</small>
            </span>
            <button className="lightbox__nav" type="button" aria-label="Captura siguiente" onClick={next}>
              <Icon name="chevron-right" />
            </button>
          </figcaption>
        </figure>
      </div>
    </dialog>
  );
}
