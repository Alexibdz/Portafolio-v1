"use client";

import { useEffect, useRef, useState } from "react";
import { newcellSlides as slides } from "@/data/newcell";
import Icon from "./Icon";
import Lightbox from "./Lightbox";

const count = slides.length;
const desktopSizes = "(min-width: 1120px) 830px, (min-width: 900px) 75vw, 100vw";

// Carrusel de capturas con dos pistas (computadora y celular) que se mueven juntas.
// Cada captura de computadora tiene su par en el celular, en el mismo orden (data/newcell.js).
export default function NewcellShowcase() {
  const desktopTrack = useRef(null);
  const mobileTrack = useRef(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const goToRef = useRef(() => {});
  const [zoom, setZoom] = useState({ index: null, open: false });

  // --- Sincronización entre pistas ---
  // La pista que se mueve es la "líder": las demás copian su posición proporcional
  // en tiempo real (sin snap ni animación propia) hasta que se detiene.
  useEffect(() => {
    const tracks = [desktopTrack.current, mobileTrack.current].filter(Boolean);
    const progressOf = (track) => (track.clientWidth ? track.scrollLeft / track.clientWidth : 0);
    let leader = null;
    let lockedIndex = null; // destino de los botones: evita que el texto parpadee en los slides intermedios
    let releaseTimer;

    const update = (i) => {
      if (i === currentRef.current || i < 0 || i >= count) return;
      currentRef.current = i;
      setCurrent(i);
    };

    const release = () => {
      if (!leader) return;
      const i = Math.round(progressOf(leader));
      tracks.forEach((track) => {
        if (track === leader) return;
        track.scrollLeft = i * track.clientWidth;
        track.style.scrollSnapType = "";
        track.style.scrollBehavior = "";
      });
      leader = null;
      lockedIndex = null;
      update(i);
    };

    const lead = (track) => {
      if (leader !== track) {
        release();
        leader = track;
        tracks.forEach((other) => {
          if (other === track) return;
          other.style.scrollSnapType = "none";
          other.style.scrollBehavior = "auto";
        });
      }
      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(release, 200);
    };

    const listeners = [];
    const listen = (track, type, handler) => {
      track.addEventListener(type, handler, { passive: true });
      listeners.push(() => track.removeEventListener(type, handler));
    };

    tracks.forEach((track) => {
      ["pointerdown", "touchstart", "wheel", "keydown"].forEach((type) => listen(track, type, () => lead(track)));

      listen(track, "scroll", () => {
        if (leader !== track) return;
        clearTimeout(releaseTimer);
        releaseTimer = setTimeout(release, 200);
        const progress = progressOf(track);
        tracks.forEach((other) => {
          if (other !== track) other.scrollLeft = progress * other.clientWidth;
        });
        if (lockedIndex === null) update(Math.round(progress));
      });
    });

    // Botones, puntos y modal: se mueve la primera pista visible y las demás la siguen
    goToRef.current = (index, behavior) => {
      const i = (index + count) % count;
      const track = tracks.find((t) => t.clientWidth) || tracks[0];
      lead(track);
      lockedIndex = i;
      update(i);
      track.scrollTo({ left: i * track.clientWidth, behavior });
    };

    return () => {
      listeners.forEach((remove) => remove());
      clearTimeout(releaseTimer);
    };
  }, []);

  const goTo = (index, behavior) => goToRef.current(index, behavior);

  // Ver en grande: al navegar en el modal, el carrusel lo acompaña
  const openZoom = (i) => {
    const canShowModal = typeof HTMLDialogElement === "function" && "showModal" in HTMLDialogElement.prototype;
    if (!canShowModal) {
      window.open(slides[i].desktop.src, "_blank");
      return;
    }
    setZoom({ index: i, open: true });
    goTo(i, "instant");
  };

  const navigateZoom = (i) => {
    const index = (i + count) % count;
    setZoom({ index, open: true });
    goTo(index, "instant");
  };

  return (
    <div className="showcase carousel reveal">
      <figure className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser__url">newcellrosario.vercel.app</span>
        </div>
        <div
          className="carousel__track"
          ref={desktopTrack}
          tabIndex={0}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Capturas de Newcell en la computadora"
        >
          {slides.map(({ title, desktop }, i) => (
            <div
              className="carousel__slide"
              key={desktop.src}
              role="group"
              aria-roledescription="captura"
              aria-label={`${i + 1} de ${count}: ${title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- capturas ya optimizadas en WebP (1200 y 1920 px) */}
              <img
                src={desktop.src}
                srcSet={desktop.srcSet}
                sizes={desktopSizes}
                alt={desktop.alt}
                width={1920}
                height={948}
                loading={i === 0 ? undefined : "lazy"}
                decoding="async"
                onClick={() => openZoom(i)}
              />
            </div>
          ))}
        </div>
      </figure>

      <figure className="phone">
        <div className="phone__frame">
          <div
            className="carousel__track"
            ref={mobileTrack}
            tabIndex={0}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Capturas de Newcell en el celular"
          >
            {slides.map(({ title, mobile }, i) => (
              <div
                className="carousel__slide"
                key={mobile.src}
                role="group"
                aria-roledescription="captura"
                aria-label={`${i + 1} de ${count}: ${title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- capturas ya optimizadas en WebP (390 × 844) */}
                <img
                  src={mobile.src}
                  alt={mobile.alt}
                  width={390}
                  height={844}
                  loading={i === 0 ? undefined : "lazy"}
                  decoding="async"
                  onClick={() => openZoom(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </figure>

      <div className="carousel__footer">
        {/* Todos los textos en la misma celda: el bloque toma la altura del más largo y no salta */}
        <p className="carousel__caption" aria-live="polite">
          {slides.map(({ title, text }, i) => (
            <span className={`carousel__caption-item${i === current ? " is-active" : ""}`} key={title}>
              <strong>{title}</strong>
              {text && <span>{text}</span>}
            </span>
          ))}
        </p>
        <div className="carousel__controls">
          <button className="carousel__btn" type="button" aria-label="Captura anterior" onClick={() => goTo(currentRef.current - 1)}>
            <Icon name="chevron-left" />
          </button>
          <div className="carousel__dots">
            {slides.map(({ title }, i) => (
              <button
                className="carousel__dot"
                type="button"
                key={title}
                aria-label={`Ver captura ${i + 1}: ${title}`}
                aria-current={i === current}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="carousel__btn" type="button" aria-label="Captura siguiente" onClick={() => goTo(currentRef.current + 1)}>
            <Icon name="chevron-right" />
          </button>
          <button className="carousel__btn" type="button" aria-label="Ver captura en grande" onClick={() => openZoom(currentRef.current)}>
            <Icon name="arrows-angle-expand" />
          </button>
        </div>
      </div>

      <Lightbox
        slides={slides}
        index={zoom.index}
        open={zoom.open}
        onClose={() => setZoom((z) => ({ ...z, open: false }))}
        onNavigate={navigateZoom}
      />
    </div>
  );
}
