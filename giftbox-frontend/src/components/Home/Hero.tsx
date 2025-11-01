"use client"

import { useState, useEffect } from "react"
import { Sparkles, ShoppingBag } from "lucide-react"

const Hero = ({
  imageUrl = "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2400&auto=format&fit=crop",
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Happy unboxing moments and beautiful gift stops"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                fontFamily: 'Playfair Display, serif',
              }}
            >
              Turn Every Moment
              <span className="block mt-2 bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300 bg-clip-text text-transparent">
                Into a Memory
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl font-light transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                textShadow: "0 2px 15px rgba(0,0,0,0.5)",
              }}
            >
              Create personalized gift stops filled with love, care, and premium products that make every occasion unforgettable.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group px-5 py-2.5 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white text-base font-medium rounded-lg hover:from-pink-600 hover:via-pink-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Build Your Own Gift Stop</span>
              </button>

              <button className="group px-5 py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 text-base font-medium rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200">
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Shop Gifts</span>
              </button>
            </div>

            {/* Additional Info */}
            <div
              className={`mt-12 flex items-center gap-8 text-white/90 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium">Free Shipping on Orders $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-sm font-medium">Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}

export default Hero
