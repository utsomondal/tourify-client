const TouristSpotCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl">
      {/* Background Image */}
      <img
        src="/images/switzerland.jpg"
        alt="Eiffel Tower, France"
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10" />

      {/* Text Content */}
      <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-20 text-white space-y-1">
        <div>
          <h2 className="text-xl font-semibold leading-tight">Eiffel Tower</h2>
          <p className="text-sm text-gray-300">Paris, France</p>
        </div>

        <div className="mt-2 flex justify-end">
          <button className="px-5 py-2 text-sm font-medium border border-white/50 text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
