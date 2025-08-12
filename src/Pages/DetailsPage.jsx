import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [touristSpot, setTouristSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://tourify-backend-nine.vercel.app/tourist-spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpot(data);
        setLoading(false);
      })
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-297px)]">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : !touristSpot ? (
        <p className="text-center mt-10 text-lm-primary dark:text-dm-primary">
          Tourist spot not found.
        </p>
      ) : (
        <div className="p-5 bg-white dark:bg-gray-900 rounded-lg my-5">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="md:w-1/2 flex-shrink-0 relative">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md transition absolute z-10 top-1.5 left-1.5 active:scale-95 cursor-pointer btn btn-soft btn-error"
              >
                Back
              </button>
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
                  <span className="font-semibold">Location:</span>{" "}
                  {touristSpot.location}, {touristSpot.countryName}
                </p>
                <p>
                  <span className="font-semibold">Average Cost:</span> $
                  {touristSpot.averageCost}
                </p>
                <p>
                  <span className="font-semibold">Visitors Per Year:</span>{" "}
                  {Number(touristSpot.totalVisitorsPerYear).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Travel Time:</span>{" "}
                  {touristSpot.travelTime}
                </p>
                <p>
                  <span className="font-semibold">Best Season to Visit:</span>{" "}
                  {touristSpot.seasonality}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
