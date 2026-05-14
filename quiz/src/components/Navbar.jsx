export default function Navbar() {
  return (
    <header className="w-full bg-[#0a0a0a] border-b border-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex flex-col">
          <span className="text-[#c9a84c] tracking-[0.4em] uppercase text-xl font-light">
            Bisutería
          </span>

          <div className="w-8 h-[1px] bg-[#c9a84c] mt-2"></div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            "Inicio",
            "Colecciones",
            "Anillos",
            "Collares",
            "Aretes",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="group relative text-[11px] uppercase tracking-[0.2em] text-[#777] hover:text-[#c9a84c] transition-all duration-300"
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* BUTTON */}
        <button className="border border-[#c9a84c] px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-500">
          Comprar
        </button>
      </div>
    </header>
  );
}
