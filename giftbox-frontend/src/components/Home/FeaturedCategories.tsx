import { Link } from "react-router-dom";

type Category = {
  label: string;
  emoji: string;
  slug: string; // used in URL
};

const categories: Category[] = [
  { label: "Stuff Toys",    emoji: "🧸", slug: "stuff-toys" },
  { label: "Chocolates",    emoji: "🍫", slug: "chocolates" },
  { label: "Accessories",   emoji: "🎁", slug: "accessories" },
  { label: "Jewelry",       emoji: "💍", slug: "jewelry" },
  { label: "Makeup",        emoji: "💄", slug: "makeup" },
  { label: "Bottles",       emoji: "🧃", slug: "bottles" },
  { label: "Lights & Décor",emoji: "✨", slug: "lights-decor" },
];

export default function FeaturedCategories() {
  return (
    <section aria-labelledby="featured-categories" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="featured-categories" className="text-2xl font-bold tracking-tight">
              Featured Categories
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Shop by what you’re gifting—tap a category to explore.
            </p>
          </div>
          {/* Optional: “View all” link */}
          <Link
            to="/shop"
            className="hidden sm:inline-flex text-sm font-semibold text-pink-600 hover:text-pink-700"
          >
            View all →
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ label, emoji, slug }: Category) {
  const href = `/shop?category=${encodeURIComponent(slug)}`;

  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
      aria-label={`Shop ${label}`}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-70 blur-2xl transition
                   bg-gradient-to-tr from-pink-100 via-pink-50 to-transparent group-hover:opacity-90"
      />
      <div className="flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-xl border border-gray-200 bg-gray-50 text-xl">
          <span aria-hidden="true">{emoji}</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{label}</h3>
          <p className="text-xs text-gray-500">Explore {label}</p>
        </div>
      </div>

      <div className="mt-4 text-right">
        <span className="text-xs font-semibold text-pink-600 group-hover:underline">
          Shop now →
        </span>
      </div>
    </Link>
  );
}
