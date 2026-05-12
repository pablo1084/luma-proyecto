const filters = [
  "Todos",
  "Living",
  "Office",
  "Decoration",
  "Interior",
];

function ShopFilters() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 md:mb-16">

      {filters.map((filter, index) => (
        <button
          key={index}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border text-xs sm:text-sm uppercase tracking-widest transition duration-300 whitespace-nowrap ${
            index === 0
              ? "bg-[#B68C4A] text-white border-[#B68C4A]"
              : "border-[#D7C8B4] text-[#5E5E5E] hover:bg-[#B68C4A] hover:text-white hover:border-[#B68C4A]"
          }`}
        >
          {filter}
        </button>
      ))}

    </div>
  );
}

export default ShopFilters;