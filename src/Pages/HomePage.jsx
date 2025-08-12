import Banner from "../Components/Banner";
import CountriesSection from "../Components/CountriesSection";
import EuropeTravelTipsSection from "../Components/EuropeTravelTipsSection";
import TestimonialSection from "../Components/TestimonialSection";
import TouristsSpotSection from "../Components/TouristsSpotSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <TouristsSpotSection />
      <CountriesSection />
      <EuropeTravelTipsSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
