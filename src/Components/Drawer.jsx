import { RiCloseFill } from "react-icons/ri";
import { renderNavItems } from "./RenderNavItems";
import { useLocation } from "react-router";
import { useEffect } from "react";
const Drawer = ({ isDark }) => {
  const routeLocation = useLocation();

  useEffect(() => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  }, [routeLocation]);

  return (
    <>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          className={`min-h-full w-[250px] p-4 ${
            isDark ? "bg-dm-background" : "bg-lm-background"
          }`}
        >
          <label
            htmlFor="my-drawer"
            className="cursor-pointer flex justify-end"
          >
            <RiCloseFill size={24} className="text-red-600" />
          </label>
          <ul className="flex flex-col gap-4">{renderNavItems("mobile")}</ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
