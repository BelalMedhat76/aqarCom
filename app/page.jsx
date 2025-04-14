import HeroSlider from "./components/HeroSlider";
import MostPopular from "./components/MostPopular";
import OurPartner from "./components/OurPartner";
import ProjectCard from "./components/projectCards";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ProjectCard />
      <MostPopular />
      <OurPartner />
    </>
  );
}
