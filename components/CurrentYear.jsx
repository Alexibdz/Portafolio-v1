"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const buildYear = new Date().getFullYear();

// Muestra el año actual: se calcula en el navegador, así no queda viejo aunque el sitio se haya publicado el año anterior
export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => buildYear);
  return <span>{year}</span>;
}
