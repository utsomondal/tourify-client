import { useEffect, useState } from "react";
import { renderNavItems } from "./RenderNavItems";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";
import Drawer from "./Drawer";
import JoinButton from "./JoinButton";
import { useAuth } from "../Utils/useAuth";
import UserCard from "./UserCard";

const Navbar = () => {
  const { user } = useAuth();

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-lm-background/50 dark:bg-dm-background/50 border-b border-b-lm-border dark:border-b-dm-border container mx-auto">
      <div className="navbar">
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
          {user ? <UserCard /> : <JoinButton />}

          {/* Theme Controller */}
          <div className="pl-2">
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
