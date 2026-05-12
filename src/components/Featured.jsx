import products from "../data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

function Featured() {
  return (
    <section className="py-20 md:py-32 bg-[#F5F1EB]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20"
>

          <div>

            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#B68C4A] mb-4 sm:mb-5">
              Colección destacada
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-6xl text-[#2B2B2B] leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Diseño pensado
              <br />
              para cada espacio
            </h2>

          </div>

          <button className="mt-6 md:mt-0 border border-[#B68C4A] text-[#B68C4A] px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-widest text-xs sm:text-sm hover:bg-[#B68C4A] hover:text-white transition duration-300">
            Ver todo
          </button>

        </motion.div>

        {/* GRID */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Featured;