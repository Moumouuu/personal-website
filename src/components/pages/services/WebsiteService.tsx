import ButtonContact from "@/components/ButtonContact";
import Image from "next/image";

export default function WebsiteService() {
  return (
    <div className="border-2 border-border bg-main shadow-dark p-8 md:px-8 md:py-0 m-6 md:m-12 flex flex-col md:flex-row items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">Création de site web</h1>
        <p className="text-lg">
          Nous développons un site internet moderne, performant, bien référencé
          sur les moteurs de recherche et à l&apos;image de votre entreprise.
        </p>
        <div className="mt-4">
          <ButtonContact />
        </div>
      </div>

      <Image
        src="/images/website-service.png"
        width={600}
        height={400}
        alt="service de création de site web"
      />
    </div>
  );
}
