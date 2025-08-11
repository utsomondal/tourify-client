import { useEffect } from "react";
import CountryCard from "./CountryCard";
import { useState } from "react";
import { useNavigate } from "react-router";

const CountriesSection = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleClick = (country_Name) => {
    fetch("http://localhost:3000/spots-by-country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country_Name }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/spot-by-country", { state: { spots: data } });
      });
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {countries.map((country) => (
          <CountryCard
            key={country._id}
            country={country}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;
