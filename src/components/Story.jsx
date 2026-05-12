import { motion } from "framer-motion";
import storyImage from "../assets/story.jpg";

function Story() {
  return (
    <section className="bg-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <img
              src={storyImage}
              alt="Interior Design"
              className="w-full h-[700px] object-cover rounded-[40px]"
            />

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#B68C4A] mb-6">
              Nuestra filosofía
            </p>

            <h2
              className="text-4xl md:text-6xl leading-tight text-[#2B2B2B] mb-10"
              style={{ fontFamily: "Playfair Display" }}
            >
              Creamos ambientes
              <br />
              que inspiran
              <br />
              bienestar
            </h2>

            <p className="text-lg leading-relaxed text-[#5E5E5E] mb-8">
              Diseñamos muebles y espacios pensados para combinar
              funcionalidad, estética y confort en cada detalle.
            </p>

            <p className="text-lg leading-relaxed text-[#5E5E5E] mb-12">
              Nuestra propuesta fusiona diseño contemporáneo,
              materiales nobles y fabricación premium para hogares
              y oficinas modernas.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8">

              <div>
                <h3
                  className="text-4xl text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  12+
                </h3>

                <p className="text-sm uppercase tracking-widest text-[#777]">
                  Años
                </p>
              </div>

              <div>
                <h3
                  className="text-4xl text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  500+
                </h3>

                <p className="text-sm uppercase tracking-widest text-[#777]">
                  Proyectos
                </p>
              </div>

              <div>
                <h3
                  className="text-4xl text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  100%
                </h3>

                <p className="text-sm uppercase tracking-widest text-[#777]">
                  Premium
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;