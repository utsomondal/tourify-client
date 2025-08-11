import { useNavigate } from "react-router";
import { FaUsers, FaDollarSign, FaClock } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

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
    <div className="relative rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:rotate-[0.5deg] bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
      {/* Image */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={imageURL}
          alt={touristsSpotName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className=" absolute bottom-4 left-4 right-4 rounded-xl p-4 border shadow-lg backdrop-blur-md bg-white/80 text-gray-900 border-gray-300 dark:bg-black/30 dark:text-white dark:border-white/20">
        {/* Title */}
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <LuMapPin className="text-gray-700 dark:text-white/70" />{" "}
          {touristsSpotName}
        </h2>
        <p className="text-xs mt-0.5 text-gray-600 dark:text-white/60">
          {seasonality}
        </p>

        {/* Info Row */}
        <div className="mt-3 flex justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-700 dark:text-white/80">
            <FaDollarSign /> ${averageCost}
          </div>
          <div className="flex items-center gap-1 text-gray-700 dark:text-white/80">
            <FaUsers /> {Number(totalVisitorsPerYear).toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-gray-700 dark:text-white/80">
            <FaClock /> {travelTime}
          </div>
        </div>

        {/* Button */}
        <div className="mt-3 text-right">
          <button
            onClick={handleViewDetails}
            className="
        px-4 py-1.5 text-sm font-medium rounded-full border border-gray-700 text-gray-900 hover:bg-gray-200 hover:text-gray-900 dark:border-white/40 dark:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
