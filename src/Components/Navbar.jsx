import { useEffect, useState } from "react";
import { renderNavItems } from "./RenderNavItems";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { useAuth } from "../Utils/useAuth";
import Logo from "./Logo";
import Drawer from "./Drawer";
import JoinButton from "./JoinButton";
import UserCard from "./UserCard";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, loading } = useAuth();

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
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost lg:hidden p-1"
            data-tooltip-id="tooltip-menu"
            data-tooltip-content="Open menu"
          >
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
          {loading ? (
            <span className="loading loading-ring loading-xl text-lm-primary dark:text-dm-primary"></span>
          ) : user ? (
            <UserCard />
          ) : (
            <JoinButton />
          )}

          {/* Theme Controller */}
          <div
            className="pl-2"
            data-tooltip-id="tooltip-theme-toggle"
            data-tooltip-content="Toggle light/dark mode"
          >
            <label className="toggle text-lm-text-primary dark:text-dm-text-primary">
              <input
                data-fake-filler-ignore="true"
                type="checkbox"
                checked={isDark}
                onChange={(e) => {
                  if (e.isTrusted) {
                    setIsDark(e.target.checked);
                  }
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

      {/* Tooltips */}
      <Tooltip id="tooltip-menu" place="bottom" type="dark" effect="solid" />
      <Tooltip
        id="tooltip-theme-toggle"
        place="bottom"
        type="dark"
        effect="solid"
      />
    </header>
  );
};

export default Navbar;