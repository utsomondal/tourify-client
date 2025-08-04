import TouristSpotCard from "./TouristSpotCard";

const TouristsSpotSection = () => {
  return (
    <div className="my-20">
      <div className="pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-lm-text-primary dark:text-dm-text-primary">
          Explore Breathtaking{" "}
          <span className="text-lm-primary dark:text-dm-primary">
            Tourist Spots
          </span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary/50 text-center mt-2">
          Discover stunning destinations handpicked for travelers like you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <TouristSpotCard /> */}
        {[...Array(6)].map((_, index) => (
          <TouristSpotCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TouristsSpotSection;
