import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Services />
        <Project />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
      <ScrollReveal />
    </>
  );
}
