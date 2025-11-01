import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      {/* Top wave / gradient accent (subtle) */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-200 via-pink-100 to-violet-100" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link to="/" className="inline-flex items-baseline gap-1">
              <span className="text-xl font-extrabold tracking-tight">Gift</span>
              <span className="text-xl font-extrabold tracking-tight text-pink-600">Box</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Thoughtful, customizable gift boxes—curated with love. Build your own in minutes
              and make every moment memorable.
            </p>

            {/* Contact */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-pink-600" />
                <a href="mailto:hello@giftbox.pk" className="hover:underline">
                  hello@giftbox.pk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-pink-600" />
                <a href="tel:+923000000000" className="hover:underline">
                  +92 300 0000000
                </a>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-900">Customer Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li><Link to="/contact" className="hover:text-pink-600">Contact Us</Link></li>
              <li><Link to="/support/shipping" className="hover:text-pink-600">Shipping & Delivery</Link></li>
              <li><Link to="/support/returns" className="hover:text-pink-600">Returns & Refunds</Link></li>
              <li><Link to="/support/faq" className="hover:text-pink-600">FAQs</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-900">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li><Link to="/shop" className="hover:text-pink-600">Shop</Link></li>
              <li><Link to="/build" className="hover:text-pink-600">Build Your Gift Box</Link></li>
              <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-900">Follow Us</h4>
            <p className="mt-4 text-sm text-gray-600">
              Join our community for new drops, bundles, and seasonal deals.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer"
                 aria-label="Instagram"
                 className="grid size-10 place-items-center rounded-full border border-gray-200 hover:border-pink-300 hover:bg-pink-50">
                <Instagram className="size-5" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer"
                 aria-label="Facebook"
                 className="grid size-10 place-items-center rounded-full border border-gray-200 hover:border-pink-300 hover:bg-pink-50">
                <Facebook className="size-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"
                 aria-label="Twitter / X"
                 className="grid size-10 place-items-center rounded-full border border-gray-200 hover:border-pink-300 hover:bg-pink-50">
                <Twitter className="size-5" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer"
                 aria-label="YouTube"
                 className="grid size-10 place-items-center rounded-full border border-gray-200 hover:border-pink-300 hover:bg-pink-50">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-200" />

        {/* Bottom note */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-600 sm:flex-row">
          <p>© {year} GiftBox. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/legal/privacy" className="hover:text-pink-600">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-pink-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
