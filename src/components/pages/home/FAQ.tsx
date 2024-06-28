import Accordion from "@/components/ui/Accordion";

const Star3 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 434 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M433.6 217.001L430.6 216.401C382.2 206.801 321.9 201.101 259.5 199.401C303.3 153.001 342.6 105.401 370.1 63.8008C328.5 91.3008 280.9 130.601 234.5 174.401C232.7 110.601 226.8 49.2008 216.9 0.300781C207 49.2008 201.1 110.601 199.3 174.401C152.9 130.601 105.3 91.3008 63.7002 63.8008C91.2002 105.401 130.5 153.001 174.3 199.401C110.5 201.201 49.1002 207.101 0.200195 217.001C49.1002 226.901 110.5 232.801 174.3 234.601C131.4 280.001 92.8002 326.601 65.4002 367.601L63.7002 370.201L66.3002 368.501C107.3 341.001 153.9 302.401 199.3 259.601C201.1 322.001 206.7 382.201 216.3 430.701L216.9 433.701L217.5 430.701C227.1 382.301 232.8 322.001 234.5 259.601C279.9 302.501 326.5 341.101 367.5 368.501L370.1 370.201L368.4 367.601C340.9 326.601 302.3 280.001 259.5 234.601C321.9 232.801 382.1 227.201 430.6 217.601L433.6 217.001Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  );
};

export default function Faq() {
  return (
    <div>
      <section className=" dark:bg-darkBg bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl text-white">
          Question fréquemment posées
        </h2>

        <div className="mx-auto flex flex-col w-full justify-center items-center px-5">
          <Accordion
            question="Comment puis-je commencer ?"
            answer="Vous pouvez me contacter par mail, par téléphone ou via les réseaux pour discuter de votre projet. Nous pourrons ensuite convenir d'un rendez-vous pour discuter de votre projet plus en détails."
          />
          <Accordion
            question="Quels sont les tarifs ?"
            answer="Les tarifs varient en fonction de la complexité du projet. Cependant vous pouvez regarder les tarifs affichés sur le site ou bien, je vous invite à me contacter pour discuter de votre projet et obtenir un devis."
          />
          <Accordion
            question="Quels sont les délais ?"
            answer="Les délais de livraison varient en fonction de la complexité du projet. Cependant, je m'engage à vous tenir informé de l'avancée du projet et à respecter les délais convenus. En général un site vitrine prends entre 2 et 4 semaines à être développé."
          />
          <Accordion
            question="Quels sont les moyens de paiement ?"
            answer="Je propose seulement le paiement par virement bancaire."
          />
          <Accordion
            question="Comment faire si le site ne me convient pas ?"
            answer="Je m'engage à vous accompagner tout au long du projet pour que le site vous convienne. Cependant, si le site ne vous convient pas, je m'engage à effectuer des modifications dans la limite concractuelle."
          />
          <Accordion
            question="Faites-vous tout vous-même ? "
            answer="Actuellement, je travaille en solo et je développe tous mes projets sans recourir à des outils no code."
          />
        </div>
      </section>
    </div>
  );
}
