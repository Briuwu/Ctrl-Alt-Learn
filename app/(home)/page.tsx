import { Navbar } from "./components/navbar";
import { CTABannerSection } from "./components/cta-banner";
import { HeroSection } from "./components/hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-12">
        <HeroSection />
        <CTABannerSection />
      </main>
    </>
  );
};
export default Home;
