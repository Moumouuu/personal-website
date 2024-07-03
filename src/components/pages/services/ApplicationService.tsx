import ButtonContact from "@/components/ButtonContact";
import Image from "next/image";

export default function ApplicationService() {
  return (
    <div className=" border-2 border-border shadow-dark p-8 md:px-8 md:py-0 m-6 md:m-12 flex flex-col md:flex-row items-center text-white">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Application sur mesure
        </h1>
        <p className="text-lg">
          Chez Pluviaux il est également possible de développer des applications
          plus complexes, sur mesure, pour répondre à des besoins spécifiques.
          <br /> <br />
          Tel que des applications de gestion, des applications de réservation,
          des applications de statistiques etc.
        </p>
        <div className="mt-4">
          <ButtonContact />
        </div>
      </div>

      <Image
        src="/images/application-service.webp"
        width={600}
        height={400}
        alt="service de création de site web"
      />
    </div>
  );
}
