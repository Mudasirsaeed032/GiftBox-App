import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingCart, UserRound } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useCart } from "../../app/providers/CartProvider";
import { useWishlist } from "../../app/providers/WishlistProvider";
import Badge from "../ui/Badge";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Link to="/" className="font-extrabold tracking-tight text-lg sm:text-xl">
            Gift<span className="text-pink-600">Box</span>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <DesktopNav />

        {/* Right: Icons */}
        <div className="flex items-center gap-3">
          <NavLink to="/shop" aria-label="Search" className="p-2 rounded-md hover:bg-gray-100">
            <Search className="size-5" />
          </NavLink>

          <div className="relative">
            <NavLink to="/shop" aria-label="Wishlist" className="p-2 rounded-md hover:bg-gray-100">
              <Heart className="size-5" />
            </NavLink>
            <Badge value={wishlistCount} />
          </div>

          <div className="relative">
            <NavLink to="/shop" aria-label="Cart" className="p-2 rounded-md hover:bg-gray-100">
              <ShoppingCart className="size-5" />
            </NavLink>
            <Badge value={cartCount} />
          </div>

          <NavLink
            to="/auth"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50"
          >
            <UserRound className="size-4" />
            <span className="hidden sm:inline">Login / Account</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
