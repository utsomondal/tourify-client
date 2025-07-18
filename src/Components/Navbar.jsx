import { useEffect, useState } from "react";
import { Link } from "react-router";
import { renderNavItems } from "./RenderNavItems";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header>
      <div className="navbar bg-transparent sticky top-0 backdrop:blur-sm shadow-sm">
        <div className="navbar-start">
          {/* drawer */}
          <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden p-1">
            <RiMenuLine size={24} />
          </label>
          <Logo isDark={isDark} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1 transition-all duration-200">
            {renderNavItems("desktop")}
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <div className="join">
            <span className="login-btn">
              <Link to="/login">Login</Link>
            </span>
            <span className="register-btn">
              <Link to="/register">Register</Link>
            </span>
          </div>
          {/* Theme Controller */}
          <div>
            <label className="toggle text-lm-text-primary dark:text-dm-text-primary">
              <input
                type="checkbox"
                checked={isDark}
                onChange={(e) => {
                  setIsDark(e.target.checked);
                }}
                className="theme-controller"
              />
              <MdOutlineLightMode />
              <MdOutlineDarkMode />
            </label>
          </div>
        </div>
      </div>
      <Drawer isDark={isDark} />
    </header>
  );
};

export default Navbar;
