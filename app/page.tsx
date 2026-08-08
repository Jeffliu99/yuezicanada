import HomeHero from "@/components/home/HomeHero";
import PopularTopics from "@/components/home/PopularTopics";
import CanadaGuide from "@/components/home/CanadaGuide";
import GTAResources from "@/components/home/GTAResources";
import JiahuaCTA from "@/components/home/JiahuaCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PopularTopics />
      <CanadaGuide />
      <GTAResources />
      <JiahuaCTA />
    </>
  );
}