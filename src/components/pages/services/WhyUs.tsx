export function WhyUs() {
  return (
    <div className="flex flex-col m-6 md:12 text-white">
      <h2 className="text-xl md:text-4xl font-semibold text-center my-10">
        Pourquoi nous ?{" "}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center text-black">
        <div className="flex flex-col bg-main shadow-dark border-2 border-border p-6 m-2">
          <h2 className="text-xl font-semibold mb-3">
            Vos données sécurisées et protégées
          </h2>
          <p>
            J&apos;ai mes propres serveurs pour héberger vos données. Nous ne
            les partageons pas avec des tiers.
          </p>
        </div>

        <div className="flex flex-col shadow-dark border-2 border-border p-6 m-2 text-white">
          <h2 className="text-xl font-semibold mb-3">Un vrai développeur</h2>
          <p>
            Je propose un service de développement de A à Z. Tout est
            entièrement customisable selon vos besoins et vos envies.
          </p>
        </div>

        <div className="flex flex-col bg-main shadow-dark border-2 border-border p-6 m-2">
          <h2 className="text-xl font-semibold mb-3">
            Services de qualité à prix compétitifs
          </h2>
          <p>
            Je propose des prix compétitifs pour lancer mon activité. Profitez
            en tant que cela est encore possible !
          </p>
        </div>
      </div>
    </div>
  );
}
