import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white pt-20 md:pt-28 pb-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 pb-16 md:pb-20 border-b border-white/10">

          {/* BRAND */}
          <div>

            <h2
              className="text-3xl sm:text-4xl mb-4 sm:mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Luma
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Diseño premium para hogares y oficinas modernas.
              Creamos espacios funcionales, cálidos y elegantes.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="uppercase tracking-[0.2em] text-xs sm:text-sm mb-5 sm:mb-6 text-[#E8D8BF]">
              Navegación
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">

              <li className="hover:text-white transition cursor-pointer">
                Inicio
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Tienda
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Nosotros
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contacto
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="uppercase tracking-[0.2em] text-xs sm:text-sm mb-5 sm:mb-6 text-[#E8D8BF]">
              Contacto
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">

              <li>hola@luma.com</li>
              <li>+54 9 383 XXX XXXX</li>
              <li>Catamarca, Argentina</li>

            </ul>
          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="uppercase tracking-[0.2em] text-xs sm:text-sm mb-5 sm:mb-6 text-[#E8D8BF]">
              Redes
            </h3>

            <div className="flex items-center gap-4 sm:gap-5">

              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                <FaInstagram size={18} />

              </button>

              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                <FaFacebookF size={18} />

              </button>

              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                <FaLinkedinIn size={18} />

              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 text-center md:text-left">

          <p>
            © 2026 Luma Studio. Todos los derechos reservados.
          </p>

          <p>
            Diseño & Desarrollo Web Premium
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;