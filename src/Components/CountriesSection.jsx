import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useNavigate } from "react-router";

const CountriesSection = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://tourify-backend-nine.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  const handleClick = (country_Name) => {
    navigate("/spot-by-country", { state: { countryName: country_Name } });
  };

  return (
    <div className="my-10 sm:my-20">
      <div className="pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-lm-text-primary dark:text-dm-text-primary">
          Explore Amazing{" "}
          <span className="text-lm-primary dark:text-dm-primary">
            Countries
          </span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary/50 text-center mt-2 max-w-xl mx-auto">
          Browse through a curated list of countries, each offering unique
          cultural experiences and breathtaking tourist attractions.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : countries.length === 0 ? (
        <p className="text-center text-lm-text-secondary dark:text-dm-text-secondary">
          No countries found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {countries.map((country) => (
            <CountryCard
              key={country._id}
              country={country}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountriesSection;
