export default function Footer() {

const currentYear = new Date().getFullYear();

return (
  <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e]">
    {/* Sección principal del footer */}
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Columna 1: Logo y descripción */}
        <div>
          {/* Logo / Nombre de la marca */}
          <div className="mb-6">
            <h3 className="text-xl tracking-[0.4em] uppercase text-[#c9a84c] font-light">
              Bisutería
            </h3>
            <div className="h-px w-8 bg-[#c9a84c] mt-2" />
          </div>
          <p className="text-[#5a5a5a] text-sm leading-relaxed tracking-wide">
            Piezas únicas hechas a mano con amor y dedicación. Cada joya cuenta
            una historia diferente.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-8">
            <SocialLink
              href="#"
              label="Instagram"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              }
            />
            <SocialLink
              href="#"
              label="WhatsApp"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              }
            />
            <SocialLink
              href="#"
              label="Facebook"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              }
            />
            <SocialLink
              href="#"
              label="TikTok"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Columna 2: Navegación / Links */}
        <div>
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">
            Navegación
          </p>
          <ul className="space-y-3">
            {[
              { label: "Inicio", href: "#" },
              { label: "Colecciones", href: "#colecciones" },
              { label: "Anillos", href: "#anillos" },
              { label: "Collares", href: "#collares" },
              { label: "Aretes", href: "#aretes" },
              { label: "Personalizados", href: "#personalizados" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#5a5a5a] text-sm tracking-wide hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-2 group"
                >
                  {/* Línea que aparece al hover */}
                  <span className="w-0 h-px bg-[#c9a84c] group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">
            Contacto
          </p>
          <ul className="space-y-4">
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              }
              text="+57 300 000 0000"
            />
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              text="hola@bisuteria.co"
            />
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              text="Colombia — Envíos a todo el país"
            />
          </ul>

          {/* Banner de confianza */}
          <div className="mt-8 border border-[#1e1e1e] p-4">
            <p className="text-[#5a5a5a] text-xs tracking-wide leading-relaxed">
              ✨ Materiales de calidad garantizada.
              <br />
              📦 Envíos seguros en todo Colombia.
              <br />
              🔁 Cambios y devoluciones en 15 días.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Línea separadora con degradado */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </div>

    {/* Barra inferior: copyright */}
    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-[#3a3a3a] text-xs tracking-wider">
        © {currentYear} Bisutería Artesanal — Todos los derechos reservados
      </p>
      <div className="flex gap-6">
        {["Privacidad", "Términos", "Cookies"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#3a3a3a] text-xs tracking-wide hover:text-[#c9a84c] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
}

// Componente reutilizable para íconos de redes sociales
function SocialLink({ href, label, icon }) {
return (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 border border-[#2a2a2a] text-[#5a5a5a] flex items-center justify-center
      hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
  >
    {icon}
  </a>
);
}

// Componente para ítems de contacto
function ContactItem({ icon, text }) {
return (
  <li className="flex items-start gap-3 text-[#5a5a5a] text-sm tracking-wide">
    <span className="mt-0.5 text-[#c9a84c]">{icon}</span>
    <span>{text}</span>
  </li>
);

}