import Faq from "@/components/pages/home/FAQ";
import Features from "@/components/pages/home/Features";
import Header from "@/components/pages/home/Header";
import LastCTA from "@/components/pages/home/LastCTA";
import Projects from "@/components/pages/home/Projects";
import Reviews from "@/components/pages/home/Reviews";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  const items: string[] = [
    "Solution développé sur mesure",
    "Optimisé pour le SEO",
    "Design moderne et épuré",
    "Rapide et performant",
    "Adapté à tous les écrans",
    "Sécurisé et fiable",
  ];
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full">
        <Header />
        <Marquee items={items} />
        <Features />
        <Projects />
        <Reviews />
        <Faq />
        <LastCTA />
      </div>
    </div>
  );
}
