"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/data/site";
import Icon from "./Icon";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setStatus("Email copiado");
    } catch (e) {
      setStatus("No se pudo copiar el email");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopied(false);
      setStatus("");
    }, 2000);
  };

  return (
    <div className="contact__email">
      <span>O por email:</span>
      <span className="contact__email-group">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <button className="icon-btn icon-btn--sm" type="button" aria-label="Copiar email" onClick={copy}>
          <Icon name={copied ? "check2" : "copy"} />
        </button>
      </span>
      <span className="visually-hidden" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
