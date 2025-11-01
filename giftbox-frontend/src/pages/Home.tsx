import Hero from "../components/Home/Hero";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import BuilderTeaser from "../components/Home/BuilderTeaser";
import Testimonials from "../components/Home/Testimonials";
import Newsletter from "../components/Home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories/>
      <BuilderTeaser />
      <Testimonials />
      <Newsletter />
    </>
  );
}
