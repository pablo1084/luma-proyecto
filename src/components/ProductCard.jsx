import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
  whileHover={{ y: -6 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
>
      {/* LINK WRAPS WHOLE CARD */}
      <Link to={`/product/${product.id}`}>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[30px] bg-[#EFE7DC]">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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

      </Link>
    </motion.div>
  );
}

export default ProductCard;