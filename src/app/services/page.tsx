import LastCTA from "@/components/pages/home/LastCTA";
import Header from "@/components/pages/services/Header";
import WebsiteService from "@/components/pages/services/WebsiteService";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  const items: string[] = [
    "Création de site web sur mesure",
    "Développement d'application web",
    "Refonte de site web",
    "Référencement naturel",
  ];
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full">
        <Header />
        <Marquee items={items} />
        <WebsiteService />
        <LastCTA />
      </div>
    </div>
  );
}
