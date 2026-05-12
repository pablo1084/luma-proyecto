function ShopHero() {
  return (
    <section className="pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 bg-[#EFE7DC]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#B68C4A] mb-4 sm:mb-6">
          Colección
        </p>

        <h1
          className="text-3xl sm:text-5xl md:text-7xl text-[#2B2B2B] leading-tight mb-6 sm:mb-8"
          style={{ fontFamily: "Playfair Display" }}
        >
          Muebles para
          <br />
          espacios modernos
        </h1>

        <p className="text-sm sm:text-lg text-[#5E5E5E] max-w-2xl leading-relaxed">
          Descubrí piezas premium diseñadas para combinar
          funcionalidad, estética y confort.
        </p>

      </div>
    </section>
  );
}

export default ShopHero;