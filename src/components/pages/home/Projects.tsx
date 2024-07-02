import Button from "@/components/ui/Button";
import ImageCard from "@/components/ui/ImageCard";

export default function Projects() {
  const projects = [
    {
      name: "EduFiche",
      description:
        "Une plateforme de génération de fiches de révision pour tous les étudiants en quelques clics. Avec plus de 4000 utilisateurs et 3000 fiches générées.",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
      github: "https://github.com/Moumouuu/edu-fiche",
    },
    {
      name: "FeelWords",
      description:
        "Une application collaborative de partage d'histoire avec un espaces d'écriture boosté par l'IA. Avec des fonctionnalités de partage, de lecture, de commentaires et de tournois pour les plus compétitifs.",
      image: "/images/feelwords.png",
      link: "https://feelwords.fr",
      github: "https://github.com/feelwords/app.feelwords",
    },
    {
      name: "Jalla Mulhouse",
      description:
        "Un site vitrine accompagné d'un espace administrateur, spécialiste du linge de maison depuis 2001.",
      image: "/images/jalla-mulhouse.png",
      link: "https://jalla-mulhouse.fr",
      github: "https://github.com/Moumouuu/jalla-mulhouse",
    },
    {
      name: "Juiher Nature",
      description:
        "Un site vitrine accompagné d'un espace administrateur, spécialisé dans l'élagage et l'abattage d'arbres.",
      image: "/images/juiher-nature.png",
      link: "https://juihernature.fr",
      github: "https://github.com/Moumouuu/juiher-nature",
    },
    {
      name: "BookEazy",
      description:
        "Une application qui permet aux entreprises de gérer leurs rendez-vous, et d'obtenir des statistiques sur leur activité et leurs clients.",
      image: "/images/bookeazy.png",
      link: "https://bookeazy.fr",
      github: "https://github.com/Moumouuu/book-easy",
    },
  ];
  return (
    <section className=" bg-main border-y-2 border-y-darkBorder g py-20 font-base lg:py-[100px]">
      <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl text-white">
        Nos derniers projets
      </h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.name} className="p-5">
            <ImageCard imageUrl={project.image}>
              <div className="mb-2">
                <p className="font-semibold">{project.name}</p>
                <p>{project.description}</p>
              </div>

              <div className="flex items-center w-full justify-around">
                <Button>
                  <a href={project.link} target="_blank">
                    Voir le site
                  </a>
                </Button>
                <Button>
                  <a href={project.github} target="_blank">
                    GitHub
                  </a>
                </Button>
              </div>
            </ImageCard>
          </div>
        ))}
      </div>
    </section>
  );
}
