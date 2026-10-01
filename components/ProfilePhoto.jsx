"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

// ✏️ FOTO: guardá tu foto cuadrada (1:1) como public/assets/foto.jpg y aparece sola.
// Mientras no exista, se muestra el marcador de posición.
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo-frame">
      <div className="photo-frame__placeholder" aria-hidden="true">
        <Icon name="person-fill" />
        <span>Tu foto · 1:1</span>
        <code>public/assets/foto.jpg</code>
      </div>
      {!failed && (
        <Image
          className="photo-frame__img"
          src="/assets/foto.jpg"
          alt="Foto de Alexis Artaza"
          width={800}
          height={800}
          sizes="(min-width: 900px) 420px, 220px"
          loading="eager"
          fetchPriority="high"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
