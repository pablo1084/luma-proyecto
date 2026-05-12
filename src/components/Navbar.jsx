import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl text-white md:text-white font-semibold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Luma
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 uppercase tracking-widest text-sm text-white">

          <Link to="/" className="hover:text-[#E8D8BF] transition">
            Inicio
          </Link>

          <Link to="/shop" className="hover:text-[#E8D8BF] transition">
            Tienda
          </Link>

          <Link to="/" className="hover:text-[#E8D8BF] transition">
            Nosotros
          </Link>

          <Link to="/" className="hover:text-[#E8D8BF] transition">
            Contacto
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-white">

          <button className="hover:text-[#E8D8BF] transition">
            <ShoppingBag size={22} />
          </button>

          <button className="md:hidden hover:text-[#E8D8BF] transition">
            <Menu size={24} />
          </button>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;