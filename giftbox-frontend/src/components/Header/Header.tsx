"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react"
import logo from '../../../public/logo.png'

interface NavLink {
  name: string
  href: string
  submenu?: string[]
}

export default function Navbar(){
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string): void => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const navLinks: NavLink[] = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#", submenu: ["Premium Gifts", "Corporate Gifts", "Seasonal"] },
    { name: "Shop", href: "#", submenu: ["All Products", "Best Sellers", "New Arrivals"] },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100" 
            : "bg-white border-b border-pink-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-3 group">
                <img 
                  src={logo} 
                  alt="GiftBox Logo" 
                  className="h-8 w-auto object-contain group-hover:scale-105 transition-all duration-300" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => link.submenu && toggleDropdown(link.name)}
                    className="px-4 py-2 font-medium hover:text-pink-600 transition-colors flex items-center gap-1 relative rounded-lg hover:bg-pink-50"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-2 w-52 bg-white border border-pink-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                      {link.submenu.map((item, index) => (
                        <a
                          key={item}
                          href="#"
                          className={`block px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all duration-200 ${
                            index === 0 ? 'rounded-t-xl' : ''
                          } ${
                            index === link.submenu!.length - 1 ? 'rounded-b-xl' : ''
                          }`}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons & Auth */}
            <div className="flex items-center gap-1 md:gap-2">
              {/* Search Icon */}
              <button className="p-2.5 hover:bg-pink-50 rounded-lg transition-all duration-200 group">
                <Search size={20} className="text-gray-600 group-hover:text-pink-600 transition-colors" />
              </button>

              {/* Wishlist Icon with Badge */}
              <button className="p-2.5 hover:bg-pink-50 rounded-lg transition-all duration-200 relative group">
                <Heart size={20} className="text-gray-600 group-hover:text-pink-600 group-hover:fill-pink-100 transition-all" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Cart Icon with Badge */}
              <button className="p-2.5 hover:bg-pink-50 rounded-lg transition-all duration-200 relative group">
                <ShoppingCart size={20} className="text-gray-600 group-hover:text-pink-600 transition-colors" />
                <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-purple-600 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                  3
                </span>
              </button>

              {/* Login/Account */}
              <a
                href="#"
                className="hidden sm:flex items-center gap-2 px-4 py-2 ml-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <User size={18} />
                <span>Login</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 hover:bg-pink-50 rounded-lg transition-all duration-200 ml-1"
              >
                {isOpen ? (
                  <X size={24} className="text-gray-600" />
                ) : (
                  <Menu size={24} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-pink-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-1 pt-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() => link.submenu && toggleDropdown(link.name)}
                      className="w-full text-left px-4 py-3 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 rounded-lg transition-all duration-200 flex items-center justify-between"
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${openDropdown === link.name ? "rotate-180 text-pink-600" : ""}`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {link.submenu && openDropdown === link.name && (
                      <div className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-lg ml-4 mt-1 overflow-hidden animate-in fade-in duration-200">
                        {link.submenu.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2.5 text-gray-600 hover:text-pink-600 hover:bg-white/50 transition-all duration-200"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-md"
                  >
                    <User size={18} />
                    <span>Login / Account</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content Padding */}
      <div className="pt-16"></div>
    </>
  )
}
