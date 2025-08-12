import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Travel Blogger",
    text: "The travel tips and guides here made my trip so much smoother and enjoyable. Highly recommended for all explorers!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Lee",
    role: "Adventure Enthusiast",
    text: "Thanks to this platform, I discovered amazing hidden gems and local spots that I never knew existed.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sofia Martinez",
    role: "Photographer",
    text: "The carefully curated destinations inspired me to capture some of my best travel shots yet.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Backpacker",
    text: "Practical advice and budget tips that helped me plan an unforgettable adventure without breaking the bank.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Aisha Hassan",
    role: "Digital Nomad",
    text: "The recommendations made working remotely from beautiful places effortless and enjoyable.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="pb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lm-text-primary dark:text-dm-text-primary">
          What{" "}
          <span className="text-lm-primary dark:text-dm-primary">
            Travelers Say
          </span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2 max-w-2xl mx-auto">
          Hear from adventurers who’ve explored the world with our tips and
          guides.
        </p>
      </div>

      {/* marquee */}
      <div className="py-16 bg-lm-background dark:bg-dm-background overflow-hidden px-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-lm-surface dark:bg-dm-surface rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-lm-border dark:border-dm-border transition-transform hover:scale-[1.02] min-h-[320px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-lm-primary dark:border-dm-primary"
                />
                <p className="text-lm-text dark:text-dm-text italic mt-4 flex-grow">
                  "{t.text}"
                </p>
                <h4 className="mt-4 font-semibold text-lm-primary dark:text-dm-primary">
                  {t.name}
                </h4>
                <span className="text-sm text-lm-accent dark:text-dm-accent">
                  {t.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
