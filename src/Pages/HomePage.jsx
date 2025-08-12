import Banner from "../Components/Banner";
import CountriesSection from "../Components/CountriesSection";
import EuropeTravelTipsSection from "../Components/EuropeTravelTipsSection";
import TestimonialSection from "../Components/TestimonialSection";
import TouristsSpotSection from "../Components/TouristsSpotSection";

import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  return (
    <>
      <Fade triggerOnce>
        <Banner />
      </Fade>

      <Fade triggerOnce delay={100}>
        <TouristsSpotSection />
      </Fade>

      <Fade triggerOnce delay={200}>
        <CountriesSection />
      </Fade>

      <Fade triggerOnce delay={300}>
        <EuropeTravelTipsSection />
      </Fade>

      <Fade triggerOnce delay={400}>
        <TestimonialSection />
      </Fade>
    </>
  );
};

export default HomePage;
