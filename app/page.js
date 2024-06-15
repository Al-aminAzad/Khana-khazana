import Recipes from "@/components/RecipiesSection/Recipes";
import HeroSection from "@/components/HeroSection";
import RecipesMenu from "@/components/RecipesMenu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipesMenu />
          <Recipes />
        </div>
      </section>
    </>
  );
}
