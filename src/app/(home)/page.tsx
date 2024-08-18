import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecipesSection from "@/components/RecipesSection";
import SpecialistSection from "@/components/SpecialistSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const user = true;

  return (
    <main className="min-h-screen ">
    {user ? <Dashboard /> : <HeroSection />}
    <RecipesSection/>
    <Testimonial/>
    <SpecialistSection/>
    <Footer/>
    </main>
  );
}
