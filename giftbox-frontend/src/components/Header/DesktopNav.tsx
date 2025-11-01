import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors";
const linkActive = "text-pink-600";
const linkIdle = "text-gray-700 hover:text-gray-900 hover:bg-gray-100";

export default function DesktopNav() {
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/build", label: "Build Your Gift Box" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
