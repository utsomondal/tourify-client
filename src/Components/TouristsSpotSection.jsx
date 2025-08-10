import { useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { useEffect } from "react";

const TouristsSpotSection = () => {
  const [touristSpot, setTouristSpot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-tourist-spots/top")
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, []);

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
        {touristSpot.map((touristSpot) => (
          <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default TouristsSpotSection;
