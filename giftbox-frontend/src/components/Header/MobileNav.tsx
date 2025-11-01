import React from "react";
import { NavLink } from "react-router-dom";

type Props = { open: boolean; onClose: () => void };

export default function MobileNav({ open, onClose }: Props) {
  if (!open) return null;

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/build", label: "Build Your Gift Box" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="lg:hidden border-t border-gray-200 bg-white">
      <nav className="px-4 py-2 space-y-1">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            onClick={onClose}
            className={({ isActive }) =>
              `block w-full px-3 py-2 rounded-md text-base ${
                isActive
                  ? "text-pink-600 bg-pink-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
