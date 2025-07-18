import { Link } from "react-router";
import { MdTravelExplore } from "react-icons/md";

const Logo = ({ isDark }) => {
  return (
    <div>
      <Link
        title="Go to Homepage"
        to="/"
        className="text-2xl sm:text-3xl font-bold text-lm-text-primary dark:text-dm-text-primary flex items-center select-none tracking-wider"
      >
        <span className="-mr-1">T</span>
        <MdTravelExplore
          className={`inline align-middle text-[23px] mx-0.5 ${
            isDark ? "text-dm-primary" : "text-lm-primary"
          }`}
          aria-hidden="true"
        />
        <span>urify</span>
      </Link>
    </div>
  );
};

export default Logo;
