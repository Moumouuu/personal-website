import Image from "next/image";

export function Features() {
  return (
    <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 md:m-8 lg:m-12">
      <div className="bg-main border-border shadow-dark border-2 p-4 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Un design de toutes pièces pour votre site web !
        </h2>
        <p>
          Je crée <span className="font-semibold">un design sur mesure</span>{" "}
          pour votre site web. Chaque élément est pensé pour{" "}
          <span className="font-semibold">mettre en valeur votre contenu</span>{" "}
          et offrir une expérience utilisateur optimale. Fort de plusieurs
          années d&apos;expérience, je vous propose un service de qualité pour
          la création de votre site web.
        </p>
      </div>
      <div className="bg-main border-border shadow-dark border-2 p-4 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Des outils de nouvelle génération
        </h2>
        <p>
          Grâce à des outils de dernière génération, je vous propose des sites
          web modernes, performants et bien référencés.
        </p>
      </div>
      <div className="bg-main border-border shadow-dark border-2 p-4 md:p-10 md:col-span-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Un développeur professionnel
        </h2>
        <div className="flex flex-col lg:flex-row">
          <p className="md:flex-1">
            Ici{" "}
            <span className="font-semibold">
              pas d&apos;outils no-code ou de templates
            </span>{" "}
            tout est fait <span className="font-semibold"> sur mesure</span>{" "}
            pour répondre à vos besoins. Chaque site est{" "}
            <span className="font-semibold">unique et personnalisé</span>.
            <br /> <br />
            Avec Pluviaux, vous avez la garantie d&apos;avoir un site web
            <span className="font-semibold"> performant</span> , qui répond à
            des{" "}
            <span className="font-semibold"> normes d&apos;accéssibilité</span>,
            qui respecte les
            <span className="font-semibold"> standards du web</span> et qui est
            optimisé pour le
            <span className="font-semibold"> référencement naturel</span>.
          </p>
          <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
            <Image
              src="/images/lighthouse.png"
              width={400}
              height={200}
              className="object-contain border-2 border-border shadow-dark box-border"
              alt="lighthouse performance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
