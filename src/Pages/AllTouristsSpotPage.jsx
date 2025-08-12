import TouristSpotCard from "../Components/TouristSpotCard";
import { useEffect, useState } from "react";

const AllTouristsSpotPage = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://tourify-backend-nine.vercel.app/all-tourist-spots")
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
        setLoading(false);
      });
  }, []);

  const sortedSpots = [...touristSpots].sort((a, b) => {
    const costA = parseFloat(a.averageCost) || 0;
    const costB = parseFloat(b.averageCost) || 0;
    if (sortOrder === "asc") {
      return costA - costB;
    }
    if (sortOrder === "desc") {
      return costB - costA;
    }
    return 0;
  });

  return (
    <main className="px-3">
      <header className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-6 gap-4">
        <h1 className="text-3xl font-extrabold text-lm-primary dark:text-dm-primary text-center sm:text-left">
          All Tourist Spots
        </h1>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select w-full sm:w-[150px] focus:outline-none border border-gray-300 rounded-md px-3 py-2 dark:bg-dm-surface dark:border-dm-border dark:text-dm-text-primary"
          aria-label="Sort tourist spots by cost"
        >
          <option value="" disabled>
            Sort by cost
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </header>

      {loading ? (
        <section className="flex justify-center items-center min-h-[calc(100vh-250px)]">
          <span
            className="loading loading-dots loading-xl"
            aria-label="Loading"
          ></span>
        </section>
      ) : sortedSpots.length === 0 ? (
        <section className="text-center text-lm-primary dark:text-dm-primary min-h-[calc(100vh-250px)] flex justify-center items-center">
          No tourist spots found.
        </section>
      ) : (
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10"
          aria-live="polite"
        >
          {sortedSpots.map((touristSpot) => (
            <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />
          ))}
        </section>
      )}
    </main>
  );
};

export default AllTouristsSpotPage;
