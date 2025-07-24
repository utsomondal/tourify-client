import { CiLocationOn } from "react-icons/ci";
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
    { name: "Spain square, Seville, Spain", image: "/images/spain.jpg" },
    { name: "Amsterdam, Netherlands", image: "/images/netherland.jpg" },
    { name: "Zermatt, Switzerland", image: "/images/switzerland.jpg" },
  ];

  return (
    <div>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-[600px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white text-black px-5 py-2 rounded-full shadow-md flex items-center gap-2">
                <CiLocationOn className="text-black text-lg" />
                <h2 className="text-sm font-semibold">{slide.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
