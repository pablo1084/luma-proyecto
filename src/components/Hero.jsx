import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src={heroImage}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            {/* SMALL TEXT */}
            <p className="uppercase tracking-[0.3em] text-sm md:text-base text-[#E8D8BF] mb-6">
              Mueblería de Diseño Premium
            </p>

            {/* TITLE */}
            <h1
              className="text-5xl md:text-7xl leading-tight text-white mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              Diseñamos muebles
              <br />
              que transforman
              <br />
              espacios
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10">
              Fabricación a medida, diseño moderno y calidad premium
              para hogares y oficinas contemporáneas.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              <button className="bg-[#B68C4A] hover:opacity-90 transition duration-300 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest">
                Ver catálogo
              </button>

              <button className="border border-white/70 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                Solicitar presupuesto
              </button>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;