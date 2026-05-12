import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHero from "../components/ShopHero";
import ShopFilters from "../components/ShopFilters";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop() {
  return (
    <div className="bg-[#F5F1EB] min-h-screen">

      <Navbar />

      <ShopHero />

      <section className="pb-20 md:pb-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

          <ShopFilters />

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Shop;