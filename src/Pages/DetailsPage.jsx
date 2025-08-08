import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [touristSpot, setTouristSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/tourist-spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpot(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!touristSpot) return <p className="text-center mt-10">Tourist spot not found.</p>;

  return (
    <div className=" p-6 bg-white dark:bg-gray-900 rounded-lg my-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
         Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src={touristSpot.imageURL}
            alt={touristSpot.touristsSpotName}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-start text-gray-900 dark:text-gray-100">
          <h1 className="text-4xl font-extrabold mb-4">
            {touristSpot.touristsSpotName}
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {touristSpot.shortDescription}
          </p>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <span className="font-semibold">Location:</span> {touristSpot.location},{" "}
              {touristSpot.countryName}
            </p>
            <p>
              <span className="font-semibold">Average Cost:</span> ${touristSpot.averageCost}
            </p>
            <p>
              <span className="font-semibold">Visitors Per Year:</span>{" "}
              {Number(touristSpot.totalVisitorsPerYear).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Travel Time:</span> {touristSpot.travelTime}
            </p>
            <p>
              <span className="font-semibold">Best Season to Visit:</span> {touristSpot.seasonality}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DetailsPage;
