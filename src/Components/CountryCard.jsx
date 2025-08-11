import { FaArrowRight } from "react-icons/fa";

const CountryCard = ({ country, handleClick }) => {
  const { country_Name, imageURL, description } = country;

  return (
    <div
      onClick={() => handleClick(country_Name)}
      className="cursor-pointer rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800
                 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 relative group"
      title={`Explore ${country_Name}`}
    >
      <img
        src={imageURL}
        alt={country_Name}
        className="w-full aspect-video object-cover"
      />
      <div className="px-4 py-3">
        <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
          {country_Name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
          {description}
        </p>
      </div>
      <div className="px-4 pb-4 flex items-center justify-end space-x-2 text-lm-primary dark:text-dm-primary font-semibold text-sm select-none opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
        <span>Explore</span>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default CountryCard;
