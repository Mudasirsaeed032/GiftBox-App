import { Link } from "react-router-dom";
import { Box, Gift, PlusCircle, Sparkles, Wand2 } from "lucide-react";

export default function BuilderTeaser() {
  return (
    <section aria-labelledby="builder-teaser" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left: Text + Steps */}
            <div>
              <h2 id="builder-teaser" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Customize Your Own Gift Box in <span className="text-pink-600">3 Minutes</span>!
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Pick a box, add adorable stuff toys and sweet treats, finish with lights and décor—done.
              </p>

              {/* Steps */}
              <ol className="mt-6 space-y-3">
                <Step
                  icon={<Box className="size-5" />}
                  title="Choose Packaging"
                  desc="Acrylic box, bag, or classic cardboard."
                />
                <Step
                  icon={<PlusCircle className="size-5" />}
                  title="Add Toys & Treats"
                  desc="Stuff toys, chocolates, cookies, and more."
                />
                <Step
                  icon={<Gift className="size-5" />}
                  title="Add Accessories"
                  desc="Wallets, purses, watches—make it personal."
                />
                <Step
                  icon={<Sparkles className="size-5" />}
                  title="Decorate"
                  desc="Fairy lights ✨, ribbons 🎀, greeting card 💌."
                />
              </ol>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  to="/build"
                  className="inline-flex items-center gap-2 rounded-xl bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Wand2 className="size-4" />
                  <span>Start Building →</span>
                </Link>
              </div>
            </div>

            {/* Right: Visual card (placeholder preview) */}
            <div className="order-first lg:order-last">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-pink-50 via-white to-violet-50 p-5 sm:p-6">
                {/* Placeholder “preview” grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <PreviewTile label="Packaging" />
                  <PreviewTile label="Toy" />
                  <PreviewTile label="Treats" />
                  <PreviewTile label="Accessory" />
                  <PreviewTile label="Jewelry" />
                  <PreviewTile label="Décor" />
                </div>

                {/* Floating total pill (mock) */}
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-semibold shadow-sm">
                  Total: PKR ——
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Preview is illustrative. Your live selection updates on the builder page.
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
      <div className="mt-0.5 grid size-9 place-items-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </li>
  );
}

function PreviewTile({ label }: { label: string }) {
  return (
    <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-2/3 w-full bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="h-1/3 w-full px-2 py-2">
        <p className="truncate text-[11px] font-medium text-gray-800">{label}</p>
        <p className="text-[10px] text-gray-500">PKR —</p>
      </div>
    </div>
  );
}
