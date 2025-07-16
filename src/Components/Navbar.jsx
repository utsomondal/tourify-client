import { useEffect, useState } from "react";
import { Link } from "react-router";
import { renderNavItems } from "./RenderNavItems";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Logo from "./Logo";

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
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {renderNavItems("mobile")}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
    </header>
  );
};

export default Navbar;
