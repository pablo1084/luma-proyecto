import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >

      {/* IMAGE */}
      <div className="overflow-hidden rounded-[30px] bg-[#EFE7DC]">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      {/* INFO */}
      <div className="pt-6">

        <p className="uppercase tracking-[0.2em] text-xs text-[#B68C4A] mb-2">
          {product.category}
        </p>

        <h3
          className="text-2xl mb-3"
          style={{ fontFamily: "Playfair Display" }}
        >
          {product.name}
        </h3>

        <p className="text-lg text-[#5E5E5E]">
          {product.price}
        </p>

      </div>
    </motion.div>
  );
}

export default ProductCard;