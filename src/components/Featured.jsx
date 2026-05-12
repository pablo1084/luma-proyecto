import products from "../data/products";
import ProductCard from "./ProductCard";

function Featured() {
  return (
    <section className="py-32 bg-[#F5F1EB]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#B68C4A] mb-5">
              Colección destacada
            </p>

            <h2
              className="text-4xl md:text-6xl text-[#2B2B2B]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Diseño pensado
              <br />
              para cada espacio
            </h2>
          </div>

          <button className="mt-8 md:mt-0 border border-[#B68C4A] text-[#B68C4A] px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-[#B68C4A] hover:text-white transition duration-300">
            Ver todo
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default Featured;