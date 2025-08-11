import Banner from "../Components/Banner";
import CountriesSection from "../Components/CountriesSection";
import TouristsSpotSection from "../Components/TouristsSpotSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TouristsSpotSection />
      <CountriesSection />
    </div>
  );
};

export default HomePage;
