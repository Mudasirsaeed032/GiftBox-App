import { Link } from "react-router-dom"
import { ChevronRight, Sparkles } from "lucide-react"

const categories = [
  {
    label: "Stuffed Toys",
    slug: "stuff-toys",
    image: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Chocolates",
    slug: "chocolates",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop",
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500 to-indigo-500",
  },
  {
    label: "Jewelry",
    slug: "jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    color: "from-pink-500 to-purple-500",
  },
  {
    label: "Makeup",
    slug: "makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-500 to-pink-500",
  },
  {
    label: "Bottles",
    slug: "bottles",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Lights & Décor",
    slug: "lights-decor",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    color: "from-pink-500 to-orange-500",
  },
]

export default function FeaturedCategories() {
  return (
    <section aria-labelledby="featured-categories" className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Shop by Category
            </span>
          </div>
          <h2 id="featured-categories" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated gift categories designed for every occasion and recipient.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 lg:gap-5 mb-10">
          {categories.map((c) => (
            <CategoryCard
              key={c.slug}
              label={c.label}
              image={c.image}
              slug={c.slug}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 transition-all duration-300"
          >
            View All Collections <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  label: string
  image: string
  slug: string
}

function CategoryCard({ label, image, slug }: CategoryCardProps) {
  const href = `/shop?category=${encodeURIComponent(slug)}`

  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      aria-label={`Shop ${label}`}
    >
      {/* Category Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          {/* Category name */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg">
            {label}
          </h3>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white transition-all duration-300">
            <span>Shop now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}
