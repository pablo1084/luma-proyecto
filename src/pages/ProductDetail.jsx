import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-gray-500">
      <div>
        <h2 className="text-xl mb-2">Producto no encontrado</h2>
        <p>Volvé a la tienda para seguir explorando</p>
      </div>
    </div>
  );
}

  return (
    <div className="bg-[#F5F1EB] min-h-screen">

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12"
      >

        {/* IMAGE */}
        <div className="rounded-[30px] overflow-hidden bg-[#EFE7DC]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[380px] sm:h-[450px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center md:min-h-[500px]">

          <p className="uppercase tracking-[0.2em] text-xs text-[#B68C4A] mb-4">
            {product.category}
          </p>

          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            {product.name}
          </h1>

          <p className="text-2xl text-[#5E5E5E] mb-6">
            {product.price}
          </p>

          <p className="text-[#6B6B6B] mb-10 leading-relaxed">
            Elegant and modern design piece crafted for contemporary interiors.
            Perfect balance between functionality and aesthetics.
          </p>

          {/* CTA BUTTON */}
          <button className="bg-black text-white py-4 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
  Add to Cart
</button>

        </div>

      </motion.div>

      <Footer />

    </div>
  );
}

export default ProductDetail;