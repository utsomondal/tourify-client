import { useNavigate } from "react-router";

const TouristSpotCard = ({ touristSpot }) => {
  const {
    _id,
    imageURL,
    touristsSpotName,
    averageCost,
    totalVisitorsPerYear,
    travelTime,
    seasonality,
  } = touristSpot;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/tourist-spot/${_id}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900">
      {/* Background Image */}
      <img
        src={imageURL}
        alt={touristsSpotName}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />

      {/* Text Content */}
      <div className="absolute bottom-5 left-5 right-5 z-20 text-white space-y-2">
        <h2 className="text-xl font-semibold leading-tight">{touristsSpotName}</h2>

        <p className="text-sm">
          <span className="font-semibold">Average Cost:</span> ${averageCost}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Visitors Per Year:</span>{" "}
          {Number(totalVisitorsPerYear).toLocaleString()}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Travel Time:</span> {travelTime}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Seasonality:</span> {seasonality}
        </p>

        <div className="mt-3 flex justify-end">
          <button
            onClick={handleViewDetails}
            className="px-5 py-2 text-sm font-medium border border-white/50 text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
