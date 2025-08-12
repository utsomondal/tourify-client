import { Link } from "react-router";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    { name: "Paris, France", image: "/images/france.jpg" },
    { name: "London, England", image: "/images/england.jpg" },
    { name: "Rome, Italy", image: "/images/italy.jpg" },
    { name: "Seville, Spain", image: "/images/spain.jpg" },
    { name: "Amsterdam, Netherlands", image: "/images/netherland.jpg" },
    { name: "Zermatt, Switzerland", image: "/images/switzerland.jpg" },
  ];

  return (
    <div className="w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] relative">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-transparent z-10" />

              {/* Hero Content */}
              <div className="absolute z-20 text-white max-w-[90%] space-y-3 px-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:left-24 sm:-translate-x-0 sm:text-left sm:max-w-md md:max-w-lg">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                  Top Destination
                </p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
                  Discover <br className="hidden sm:block" />
                  <span className="whitespace-nowrap">{slide.name}</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-200 whitespace-nowrap">
                  Explore the culture, beauty, and{" "}
                  <br className="block sm:hidden" />
                  lifestyle of this breathtaking city.
                </p>
                <Link
                  to="/all-tourists-spot"
                  className="inline-block mt-2 bg-white text-black px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
