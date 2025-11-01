import { TestimonialsColumn } from "../ui/testimonials-columns-1";
import type { Testimonial } from "../ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text:
      "Gifting used to be stressful. Now I pick a box, add chocolates and a plush, and it just looks perfect!",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    name: "Ayesha R.",
    role: "Teacher",
  },
  {
    text:
      "The customization is so fun. The lights & décor made it feel premium without the premium price.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Hassan K.",
    role: "Engineer",
  },
  {
    text:
      "Ordered a last-minute birthday box—arrived fast and looked exactly like the preview.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    name: "Sana M.",
    role: "Student",
  },
  {
    text:
      "Love the variety! Stuff toys, cookies, a cute bottle, and a ribbon—my sister loved it.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Bilal A.",
    role: "Product Manager",
  },
  {
    text:
      "The site is easy to navigate and the quality impressed me. Will order again for Eid gifts.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Zainab H.",
    role: "Designer",
  },
  {
    text:
      "Adding a greeting card with a personal message sealed the deal. 10/10 experience.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    name: "Omar S.",
    role: "Consultant",
  },
  {
    text:
      "Loved the build-your-box flow—feels curated and thoughtful without any hassle.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Aleena T.",
    role: "Marketing",
  },
  {
    text:
      "From packaging to décor, everything looked premium. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Fahad I.",
    role: "Founder",
  },
  {
    text:
      "Box builder + quick checkout = smooth gifting. My go-to for celebrations.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    name: "Areeba K.",
    role: "Analyst",
  },
];

// Split into 3 columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our customers say
          </h2>
          <p className="text-center mt-5 opacity-75">
            Real stories from people who built their perfect gift stop.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
