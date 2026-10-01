(() => {
  const root = document.documentElement;

  // ---------- Tema claro / oscuro ----------
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => root.dataset.theme || (prefersDark.matches ? "dark" : "light");

  themeToggle?.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  // ---------- Menú móvil ----------
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = menuToggle?.querySelector(".bi");

  const setMenu = (open) => {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menuIcon?.classList.toggle("bi-list", !open);
    menuIcon?.classList.toggle("bi-x-lg", open);
  };

  menuToggle?.addEventListener("click", () => setMenu(!navLinks.classList.contains("is-open")));
  navLinks?.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // ---------- Copiar email ----------
  const copyBtn = document.getElementById("copy-email");
  const emailLink = document.getElementById("contact-email");
  const copyStatus = document.getElementById("copy-status");

  copyBtn?.addEventListener("click", async () => {
    const email = emailLink.getAttribute("href").replace("mailto:", "");
    const icon = copyBtn.querySelector(".bi");
    try {
      await navigator.clipboard.writeText(email);
      icon.classList.replace("bi-copy", "bi-check2");
      copyStatus.textContent = "Email copiado";
    } catch (e) {
      copyStatus.textContent = "No se pudo copiar el email";
    }
    setTimeout(() => {
      icon.classList.replace("bi-check2", "bi-copy");
      copyStatus.textContent = "";
    }, 2000);
  });

  // ---------- Año del pie de página ----------
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Modal para ver capturas en grande ----------
  const lightbox = document.getElementById("lightbox");
  // items: [{ desktop, mobile, title, text }] (desktop y mobile son <img> del carrusel)
  let openLightbox = (items, i) => window.open(items[i].desktop.getAttribute("src"), "_blank");

  if (lightbox && typeof lightbox.showModal === "function") {
    const desktopImg = lightbox.querySelector(".lightbox__img--desktop");
    const mobileImg = lightbox.querySelector(".lightbox__img--mobile");
    const phoneBox = lightbox.querySelector(".lightbox__phone");
    const lightboxTitle = lightbox.querySelector(".lightbox__caption strong");
    const lightboxText = lightbox.querySelector(".lightbox__caption strong + span");
    let items = [];
    let index = 0;
    let onChange = null;

    const show = (i) => {
      index = (i + items.length) % items.length;
      const { desktop, mobile, title, text } = items[index];
      desktopImg.src = desktop.getAttribute("src");
      desktopImg.alt = desktop.alt;
      phoneBox.hidden = !mobile;
      if (mobile) {
        mobileImg.src = mobile.getAttribute("src");
        mobileImg.alt = mobile.alt;
      }
      lightboxTitle.textContent = title;
      lightboxText.textContent = text;
      onChange?.(index);
    };

    openLightbox = (list, i, change) => {
      items = list;
      onChange = change;
      show(i);
      lightbox.showModal();
    };

    lightbox.querySelector("[data-prev]").addEventListener("click", () => show(index - 1));
    lightbox.querySelector("[data-next]").addEventListener("click", () => show(index + 1));
    lightbox.querySelector("[data-close]").addEventListener("click", () => lightbox.close());

    // Tocar fuera de la imagen y de los controles cierra el modal (Esc lo cierra de forma nativa)
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.matches(".lightbox__inner, .lightbox__figure, .lightbox__media")) lightbox.close();
    });

    lightbox.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });

    // Deslizar con el dedo cambia de captura (salvo que la persona esté haciendo zoom)
    let touchX = null;
    lightbox.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.touches.length === 1 ? e.touches[0].clientX : null;
      },
      { passive: true }
    );
    lightbox.addEventListener(
      "touchend",
      (e) => {
        if (touchX === null || (window.visualViewport && window.visualViewport.scale > 1.01)) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );
  }

  // ---------- Carrusel de capturas ----------
  // Puede tener varias pistas (computadora y celular) que se mueven juntas.
  // Los textos salen de data-title y data-text de los slides de la primera pista.
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const tracks = [...carousel.querySelectorAll(".carousel__track")];
    const slides = [...tracks[0].querySelectorAll(".carousel__slide")];
    const count = slides.length;
    const captionBox = carousel.querySelector(".carousel__caption");
    const dotsBox = carousel.querySelector(".carousel__dots");
    const zoom = carousel.querySelector("[data-zoom]");
    const titleOf = (i) => slides[i].dataset.title || "";
    const textOf = (i) => slides[i].dataset.text || "";
    let current = -1;

    // Todos los textos en la misma celda: el bloque toma la altura del más largo y no salta
    const captions = slides.map((_, i) => {
      const item = document.createElement("span");
      item.className = "carousel__caption-item";
      const title = document.createElement("strong");
      title.textContent = titleOf(i);
      item.append(title);
      if (textOf(i)) {
        const text = document.createElement("span");
        text.textContent = textOf(i);
        item.append(text);
      }
      return item;
    });
    captionBox?.replaceChildren(...captions);

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", `Ver captura ${i + 1}: ${titleOf(i)}`);
      dot.addEventListener("click", () => goTo(i));
      dotsBox?.append(dot);
      return dot;
    });

    const update = (i) => {
      if (i === current || i < 0 || i >= count) return;
      current = i;
      dots.forEach((dot, j) => dot.setAttribute("aria-current", String(j === i)));
      captions.forEach((item, j) => item.classList.toggle("is-active", j === i));
    };

    // --- Sincronización entre pistas ---
    // La pista que se mueve es la "líder": las demás copian su posición proporcional
    // en tiempo real (sin snap ni animación propia) hasta que se detiene.
    const progressOf = (track) => (track.clientWidth ? track.scrollLeft / track.clientWidth : 0);
    let leader = null;
    let lockedIndex = null; // destino de los botones: evita que el texto parpadee en los slides intermedios
    let releaseTimer;

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

    tracks.forEach((track) => {
      ["pointerdown", "touchstart", "wheel", "keydown"].forEach((type) =>
        track.addEventListener(type, () => lead(track), { passive: true })
      );

      track.addEventListener(
        "scroll",
        () => {
          if (leader !== track) return;
          clearTimeout(releaseTimer);
          releaseTimer = setTimeout(release, 200);
          const progress = progressOf(track);
          tracks.forEach((other) => {
            if (other !== track) other.scrollLeft = progress * other.clientWidth;
          });
          if (lockedIndex === null) update(Math.round(progress));
        },
        { passive: true }
      );
    });

    // Botones, puntos y modal: se mueve la primera pista visible y las demás la siguen
    const goTo = (index, behavior) => {
      const i = (index + count) % count;
      const track = tracks.find((t) => t.clientWidth) || tracks[0];
      lead(track);
      lockedIndex = i;
      update(i);
      track.scrollTo({ left: i * track.clientWidth, behavior });
    };

    carousel.querySelector("[data-prev]")?.addEventListener("click", () => goTo(current - 1));
    carousel.querySelector("[data-next]")?.addEventListener("click", () => goTo(current + 1));

    // Ver en grande: el modal muestra juntas la captura de compu y la de celular;
    // al navegar en el modal, el carrusel lo acompaña
    const [desktopImgs, mobileImgs = []] = tracks.map((track) => [...track.querySelectorAll(".carousel__slide img")]);
    const zoomItems = slides.map((_, i) => ({
      desktop: desktopImgs[i],
      mobile: mobileImgs[i],
      title: titleOf(i),
      text: textOf(i),
    }));
    const openZoom = (i) => openLightbox(zoomItems, i, (j) => goTo(j, "instant"));

    tracks.forEach((track) =>
      track.querySelectorAll(".carousel__slide img").forEach((img, i) => img.addEventListener("click", () => openZoom(i)))
    );
    zoom?.addEventListener("click", () => openZoom(current));

    update(0);
  });

  if (!("IntersectionObserver" in window)) return;

  // ---------- Botón flotante de WhatsApp ----------
  // Aparece al pasar el inicio y se oculta en Contacto (donde ya está el botón grande).
  const fab = document.getElementById("wa-fab");
  const hero = document.getElementById("inicio");
  const contact = document.getElementById("contacto");

  if (fab && hero && contact) {
    const inView = new Map();
    const fabObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => inView.set(entry.target, entry.isIntersecting));
      fab.classList.toggle("is-visible", !inView.get(hero) && !inView.get(contact));
    });
    fabObserver.observe(hero);
    fabObserver.observe(contact);
  }

  // ---------- Aparición de secciones al hacer scroll ----------
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    root.classList.add("js-reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  }

  // ---------- Resaltar la sección activa en el menú ----------
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
  const linkFor = new Map([...navAnchors].map((a) => [a.getAttribute("href").slice(1), a]));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove("is-active"));
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  linkFor.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
})();
