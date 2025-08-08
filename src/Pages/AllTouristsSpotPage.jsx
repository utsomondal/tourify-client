import { useLoaderData } from "react-router";
import TouristSpotCard from "../Components/TouristSpotCard";

const AllTouristsSpotPage = () => {
  const loadedTouristSpots = useLoaderData();

  if (!loadedTouristSpots || loadedTouristSpots.length === 0) {
    return (
      <div className="text-lm-primary dark:text-dm-primary flex justify-center items-center min-h-[calc(100vh-297px)]">
        No tourist spots found.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold my-8 text-lm-primary dark:text-dm-primary text-center">
        All Tourist Spots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {loadedTouristSpots.map((touristSpot) => (
          <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpotPage;
