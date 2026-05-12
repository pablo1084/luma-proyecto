import {
  Sofa,
  PencilRuler,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Sofa,
    title: "Muebles Premium",
    description:
      "Diseños exclusivos fabricados con materiales nobles y terminaciones de alta calidad.",
  },

  {
    icon: PencilRuler,
    title: "Diseño a Medida",
    description:
      "Creamos soluciones personalizadas adaptadas a cada espacio y necesidad.",
  },

  {
    icon: Truck,
    title: "Envíos Seguros",
    description:
      "Entrega profesional y cuidada para garantizar una experiencia premium.",
  },

  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description:
      "Cada pieza es desarrollada bajo estrictos estándares de diseño y durabilidad.",
  },
];

function Services() {
  return (
    <section className="py-32 bg-[#F5F1EB]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <p className="uppercase tracking-[0.3em] text-sm text-[#B68C4A] mb-6">
            Servicios
          </p>

          <h2
            className="text-4xl md:text-6xl text-[#2B2B2B] leading-tight mb-8"
            style={{ fontFamily: "Playfair Display" }}
          >
            Diseño, funcionalidad
            <br />
            y excelencia
          </h2>

          <p className="text-lg text-[#5E5E5E] leading-relaxed">
            Combinamos estética contemporánea, fabricación premium
            y atención personalizada para crear espacios únicos.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-[30px] p-10 hover:-translate-y-2 transition duration-300 shadow-sm"
              >

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-[#EFE7DC] flex items-center justify-center mb-8">

                  <Icon
                    size={28}
                    className="text-[#B68C4A]"
                  />

                </div>

                {/* TITLE */}
                <h3
                  className="text-2xl text-[#2B2B2B] mb-5"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#5E5E5E] leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;