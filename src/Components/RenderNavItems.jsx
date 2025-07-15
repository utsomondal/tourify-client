import { NavLink } from "react-router";
import { navItems } from "../Constants/NavItems";
import { getNavLinks } from "../Utils/NavLinkClass";

export const renderNavItems = (variant = 'desktop') => {
  return navItems.map(({ name, path }) => (
    <li key={path} className={variant === "mobile" ? "text-sm" : "text-base"}>
      <NavLink to={path} className={getNavLinks}>
        {name}
      </NavLink>
    </li>
  ))
}