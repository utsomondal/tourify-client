import { useLocation } from "react-router";
import TouristSpotCard from "../Components/TouristSpotCard";

const SpotByCountryPage = () => {
  const location = useLocation();
  const { spots } = location.state || { spots: [] };
  const country = spots.length > 0 ? spots[0].countryName : "Unknown Country";

  return (
    <>
      <h1 className="text-3xl font-bold my-8 text-lm-primary dark:text-dm-primary text-center">
        Tourist Spots in {country}
      </h1>

      {spots.length === 0 ? (
        <p>No spots found for this country.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          {spots.map((spot) => (
            <TouristSpotCard key={spot._id} touristSpot={spot} />
          ))}
        </div>
      )}
    </>
  );
};

export default SpotByCountryPage;
