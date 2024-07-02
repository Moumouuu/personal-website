import ButtonContact from "@/components/ButtonContact";
import Image from "next/image";

export default function WebsiteService() {
  return (
    <div className="border-2 border-border bg-main shadow-dark p-12 m-12 flex items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Création de site web</h1>
        <p className="text-lg">
          Nous développons un site internet moderne, performant, bien référencé
          sur les moteurs de recherche et à l&apos;image de votre entreprise.
        </p>
        <div className="mt-4">
          <ButtonContact />
        </div>
      </div>

      <Image
        src="/images/website-service.svg"
        width={400}
        height={400}
        alt="service de création de site web"
      />
    </div>
  );
}
