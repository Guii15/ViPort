import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold text-primary">
          Vitorya Silva
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent items-center gap-6 p-6 md:p-0 shadow-md md:shadow-none`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-muted hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5535997024823"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Vamos conversar?
          </a>
        </div>
      </div>
    </nav>
  );
}
