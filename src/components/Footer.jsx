import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#2B2B2B] text-white pt-28 pb-10">

            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/10">

                    {/* BRAND */}
                    <div>

                        <h2
                            className="text-4xl mb-6"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Luma
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Diseño premium para hogares y oficinas modernas.
                            Creamos espacios funcionales, cálidos y elegantes.
                        </p>

                    </div>

                    {/* LINKS */}
                    <div>

                        <h3 className="uppercase tracking-[0.2em] text-sm mb-6 text-[#E8D8BF]">
                            Navegación
                        </h3>

                        <ul className="space-y-4 text-gray-400">

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

                        <h3 className="uppercase tracking-[0.2em] text-sm mb-6 text-[#E8D8BF]">
                            Contacto
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                hola@luma.com
                            </li>

                            <li>
                                +54 9 383 XXX XXXX
                            </li>

                            <li>
                                Catamarca, Argentina
                            </li>

                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>

                        <h3 className="uppercase tracking-[0.2em] text-sm mb-6 text-[#E8D8BF]">
                            Redes
                        </h3>

                        <div className="flex items-center gap-5">

                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                                <FaInstagram size={20} />

                            </button>
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                                <FaFacebookF size={20} />

                            </button>

                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B68C4A] transition">

                                <FaLinkedinIn size={20} />

                            </button>

                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-500">

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