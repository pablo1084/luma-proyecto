import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
const isHome = location.pathname === "/";

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
    setMobileOpen(false);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [mobileOpen]);

  const textColor = scrolled ? "text-[#2B2B2B]" : "text-white";
  const hoverColor = scrolled ? "hover:text-[#B68C4A]" : "hover:text-[#E8D8BF]";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className={`text-3xl font-semibold transition ${textColor}`}
          style={{ fontFamily: "Playfair Display" }}
        >
          Luma
        </Link>

        {/* MENU */}
        <div className={`hidden md:flex items-center gap-10 uppercase tracking-widest text-sm ${textColor}`}>

  <Link to="/">
    Inicio
  </Link>

  <Link to="/shop">
    Tienda
  </Link>

  <Link to="/">
    Nosotros
  </Link>

  <Link to="/">
    Contacto
  </Link>

</div>

        {/* RIGHT */}
        <div className={`flex items-center gap-5 ${textColor}`}>

          <button className={`${hoverColor} transition relative`}>
  <ShoppingBag size={22} />

  {isHome && (
    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#B68C4A] rounded-full flex items-center justify-center">
      <span className="text-white text-[10px] leading-none">
        2
      </span>
    </span>
  )}
</button>

          <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className={`md:hidden transition ${textColor}`}
>
  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
</button>

        </div>
      </div>
      <AnimatePresence>
  {mobileOpen && (
    <motion.div
  initial={{ opacity: 0, y: -20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -10, scale: 0.98 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="md:hidden absolute top-24 left-0 w-full bg-white/95 backdrop-blur-md shadow-md"
>
      <div className="flex flex-col items-center gap-6 py-10 text-[#2B2B2B] uppercase tracking-widest text-sm">

  {[
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/shop" },
  { label: "Nosotros", to: "/" },
  { label: "Contacto", to: "/" },
].map((item, i) => (
  <motion.div
    key={item.label}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.05 }}
  >
    <Link
      to={item.to}
      onClick={() => setMobileOpen(false)}
    >
      {item.label}
    </Link>
  </motion.div>
))}

</div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;