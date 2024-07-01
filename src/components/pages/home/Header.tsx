import Button from "@/components/ui/Button";
import { Star2, Star3 } from "./Features";

export default function Header() {
  return (
    <header className="relative bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] text-white">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] flex flex-col items-center text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          Votre agence web à Mulhouse
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          Développement de sites web sur mesure, optimisés pour le SEO et
          adaptés à tous les écrans pour les entreprises et les particuliers à
          Mulhouse.
        </p>
        <Button className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl">
          Demander un devis
        </Button>
      </div>
      <div className="absolute bottom-20 left-32 w-20 h-20 ">
        <Star3 />
      </div>
      <div className="absolute top-20 right-32 w-20 h-20 ">
        <Star2 />
      </div>
    </header>
  );
}
