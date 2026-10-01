import { WHATSAPP_URL } from "@/data/site";

// Link a WhatsApp con el mensaje ya escrito. Se abre en otra pestaña.
export default function WhatsAppLink({ children, ...props }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
