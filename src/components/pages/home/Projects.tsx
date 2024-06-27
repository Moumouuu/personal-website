import Button from "@/components/ui/Button";
import ImageCard from "@/components/ui/ImageCard";

export default function Projects() {
  const projects = [
    {
      name: "EduFiche",
      description:
        "This project is a platform for students to share generate in 1 click a sheet to revise their lessons.",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
    {
      name: "EduFiche",
      description: "This is project 1",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
    {
      name: "EduFiche",
      description: "This is project 1",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
    {
      name: "EduFiche",
      description: "This is project 1",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
    {
      name: "EduFiche",
      description: "This is project 1",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
    {
      name: "EduFiche",
      description: "This is project 1",
      image: "/images/opengraph-edufiche.png",
      link: "https://edu-fiche.fr",
    },
  ];
  return (
    <section className=" bg-main border-y-2 border-y-darkBorder g py-20 font-base lg:py-[100px]">
      <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl text-white">
        Recent projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.name} className="p-5">
            <ImageCard imageUrl={project.image}>
              <div className="mb-2">
                <p className="font-semibold">{project.name}</p>
                <p>{project.description}</p>
              </div>

              <Button>
                <a href={project.link} target="_blank">
                  Visit
                </a>
              </Button>
            </ImageCard>
          </div>
        ))}
      </div>
    </section>
  );
}
