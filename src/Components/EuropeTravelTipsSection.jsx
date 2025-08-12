import {
  FaSuitcase,
  FaWallet,
  FaGlobeAmericas,
  FaFileAlt,
  FaUtensils,
  FaBus,
  FaUsers,
  FaTicketAlt,
  FaSun,
  FaShieldAlt,
} from "react-icons/fa";

const travelTips = [
  {
    icon: "FaSuitcase",
    title: "Pack Versatile",
    description:
      "Choose clothing that can be mixed and matched to suit various weather conditions and occasions.",
  },
  {
    icon: "FaWallet",
    title: "Financial Readiness",
    description:
      "Carry a portable charger and a universal power adapter to keep your devices ready on the go.",
  },
  {
    icon: "FaGlobeAmericas",
    title: "Speak the Basics",
    description:
      "Learning a few common phrases in the local language can greatly enhance your travel experience and interactions.",
  },
  {
    icon: "FaFileAlt",
    title: "Document Safety",
    description:
      "Keep both digital and physical copies of your passport, visa, and tickets in a secure place.",
  },
  {
    icon: "FaUtensils",
    title: "Explore Local Cuisine",
    description:
      "Be adventurous and try local dishes, but always be mindful of food safety standards and your dietary needs.",
  },
  {
    icon: "FaBus",
    title: "Navigate Like a Local",
    description:
      "Use public transport apps to navigate cities, which is often more efficient and a great way to see the area.",
  },
  {
    icon: "FaUsers",
    title: "Respect Culture",
    description:
      "Educate yourself on and respect the local customs, traditions, and etiquette to show appreciation for your hosts.",
  },
  {
    icon: "FaSun",
    title: "Stay Healthy",
    description:
      "Remember to stay hydrated and take breaks to rest, especially during long days of sightseeing.",
  },
  {
    icon: "FaShieldAlt",
    title: "Get Insured",
    description:
      "Purchase comprehensive travel insurance before your trip to protect against unexpected events and emergencies.",
  },
];

const iconMap = {
  FaSuitcase: FaSuitcase,
  FaWallet: FaWallet,
  FaGlobeAmericas: FaGlobeAmericas,
  FaFileAlt: FaFileAlt,
  FaUtensils: FaUtensils,
  FaBus: FaBus,
  FaUsers: FaUsers,
  FaTicketAlt: FaTicketAlt,
  FaSun: FaSun,
  FaShieldAlt: FaShieldAlt,
};

const TravelTipsSection = () => {
  return (
    <div className="my-10 sm:my-20">
      {/* Section Header */}
      <div className="pb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lm-text-primary dark:text-dm-text-primary">
          Essential{" "}
          <span className="text-lm-primary dark:text-dm-primary">
            Travel Tips
          </span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2 max-w-2xl mx-auto">
          Prepare smart, travel safe, and enjoy every moment of your journey
          with these tips.
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {travelTips.map((tip, index) => {
          const IconComponent = iconMap[tip.icon];
          return (
            <div
              key={index}
              className="bg-lm-surface dark:bg-dm-surface rounded-xl p-6 shadow-lg border border-lm-border dark:border-dm-border transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lm-primary/10 dark:bg-dm-primary/15 text-lm-primary dark:text-dm-primary group-hover:bg-lm-primary group-hover:text-white dark:group-hover:bg-dm-primary dark:group-hover:text-white transition-all duration-300">
                  {IconComponent && <IconComponent size={24} />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-lm-text-primary dark:text-dm-text-primary">
                  {tip.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg text-lm-text-secondary dark:text-dm-text-secondary leading-relaxed">
                {tip.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelTipsSection;
