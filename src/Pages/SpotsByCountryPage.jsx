import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TouristSpotCard from "../Components/TouristSpotCard";

const SpotByCountryPage = () => {
  const location = useLocation();
  const countryName = location.state?.countryName || "Unknown Country";

  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tourify-backend-nine.vercel.app/spots-by-country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country_Name: countryName }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      })
  }, [countryName]);

  return (
    <>
      <h1 className="text-3xl font-bold my-8 text-lm-primary dark:text-dm-primary text-center">
        Tourist Spots in {countryName}
      </h1>

      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-297px)]">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : spots.length === 0 ? (
        <p className="text-center text-lm-primary dark:text-dm-primary">
          No spots found for this country.
        </p>
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
