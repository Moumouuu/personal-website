import Faq from "@/components/pages/home/FAQ";
import LastCTA from "@/components/pages/home/LastCTA";
import ApplicationService from "@/components/pages/services/ApplicationService";
import { Features } from "@/components/pages/services/Features";
import Header from "@/components/pages/services/Header";
import { TextToAction } from "@/components/pages/services/TextToAction";
import WebsiteService from "@/components/pages/services/WebsiteService";
import { WhyUs } from "@/components/pages/services/WhyUs";
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
        <WhyUs />
        <TextToAction />
        <Features />
        <ApplicationService />
        <Faq />
        <LastCTA />
      </div>
    </div>
  );
}
