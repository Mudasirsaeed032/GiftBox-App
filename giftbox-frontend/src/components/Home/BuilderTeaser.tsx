import { Link } from "react-router-dom";
import { Box, Gift, PlusCircle, Sparkles, Wand2 } from "lucide-react";

const previewItems = [
  {
  label: "Gift Stop",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Teddy Bear",
    image: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Chocolates",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Perfume",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Fairy Lights",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=400&auto=format&fit=crop",
  },
];

export default function BuilderTeaser() {
  return (
    <section aria-labelledby="builder-teaser" className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-pink-100 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text + Steps */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Gift Stop Builder
                </span>
              </div>
              
              <h2 id="builder-teaser" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Create Your Perfect Gift Stop in{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  3 Easy Steps
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Pick a box, add adorable stuff toys and sweet treats, finish with lights and décor—done! No design skills needed.
              </p>

              {/* Steps */}
              <ol className="mt-8 space-y-4">
                <Step
                  icon={<Box className="size-5" />}
                  title="Choose Your Packaging"
                  desc="Acrylic box, gift bag, or classic cardboard—pick your style."
                />
                <Step
                  icon={<PlusCircle className="size-5" />}
                  title="Add Items You Love"
                  desc="Stuff toys, chocolates, cookies, makeup, and more."
                />
                <Step
                  icon={<Sparkles className="size-5" />}
                  title="Personalize & Decorate"
                  desc="Add fairy lights, ribbons, greeting cards, and custom messages."
                />
              </ol>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/build"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-base font-medium text-white shadow-md hover:from-pink-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Wand2 className="size-5" />
                  <span>Start Building Now</span>
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pink-200 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
                >
                  <Gift className="size-5" />
                  <span>Browse Ready Boxes</span>
                </Link>
              </div>
            </div>

            {/* Right: Visual card (placeholder preview) */}
            <div className="order-first lg:order-last">
              <div className="relative">
                {/* Preview grid with real images */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {previewItems.map((item) => (
                    <PreviewTile key={item.label} label={item.label} image={item.image} />
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
                  Live Preview
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                💡 See your box update in real-time as you build
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600">
        {icon}
      </div>
      <div>
        <p className="text-base font-bold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600 mt-0.5">{desc}</p>
      </div>
    </li>
  );
}

function PreviewTile({ label, image }: { label: string; image: string }) {
  return (
    <div className="group aspect-square overflow-hidden rounded-2xl border-2 border-pink-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-2/3 w-full overflow-hidden">
        <img 
          src={image} 
          alt={label}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="h-1/3 w-full px-2 py-2 flex flex-col justify-center">
        <p className="truncate text-xs font-semibold text-gray-800">{label}</p>
      </div>
    </div>
  );
}
