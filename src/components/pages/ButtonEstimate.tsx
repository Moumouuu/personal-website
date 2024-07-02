"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import Modal from "../ui/Modal";

export default function ButtonEstimate() {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div id="modal">
      <Button
        onClick={() => {
          setIsModalActive(true);
        }}
        className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
      >
        Simulateur de devis
      </Button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <ModalContent />
      </Modal>
    </div>
  );
}
function ModalContent() {
  const defaultPrice = 500;
  const pricePerPage = 90;
  const numberOfMonths = 12;

  const defaultNumberOfPages = 3;
  const maxNumberOfPages = 20;

  const [price, setPrice] = useState(defaultPrice);
  const [numberOfPages, setNumberOfPages] = useState(defaultNumberOfPages);
  const [annualSubscription, setAnnualSubscription] = useState(0);

  // Gérer le changement du nombre de pages
  const handleNumberOfPagesChange = (newNumberOfPages: number) => {
    setNumberOfPages(newNumberOfPages);
  };

  // Méthode pour gérer le changement de prix total
  const handlePriceChange = (checked: boolean, additionalPrice: number) => {
    if (checked) {
      setPrice((prevPrice) => prevPrice + additionalPrice);
    } else {
      setPrice((prevPrice) => prevPrice - additionalPrice);
    }
  };

  // Méthode pour gérer le changement d'abonnement annuel
  const handleSubscriptionChange = (
    checked: boolean,
    subscriptionChange: number
  ) => {
    if (checked) {
      setAnnualSubscription((prev) => prev + subscriptionChange);
    } else {
      setAnnualSubscription((prev) => prev - subscriptionChange);
    }
  };

  // Recalculer le prix total en fonction du nombre de pages et de l'abonnement annuel
  useEffect(() => {
    const pagesPriceDifference =
      (numberOfPages - defaultNumberOfPages) * pricePerPage;
    setPrice(defaultPrice + pagesPriceDifference + annualSubscription);
  }, [numberOfPages, annualSubscription]);

  return (
    <div>
      <h1 className="text-xl md:text-2xl text-center font-semibold">
        Simulateur de devis
      </h1>
      <p className="my-2 text-center text-sm">
        Choisissez les options qui vous intéressent pour obtenir une estimation
        de prix. Si vous avez des questions, n&apos;hésitez pas à me contacter.
      </p>

      <div className="flex flex-col text-left">
        <div className="my-2">
          <p className="text-lg font-semibold">Prix total : {price}</p>
          <p className="text-lg font-semibold">
            À payer chaque année : {annualSubscription}
          </p>
        </div>

        <div className="my-2 flex flex-col">
          <label htmlFor="numberOfPages">
            Nombre de pages : {numberOfPages}
          </label>
          <input
            type="range"
            min={defaultNumberOfPages}
            max={maxNumberOfPages}
            value={numberOfPages}
            onChange={(e) =>
              handleNumberOfPagesChange(parseInt(e.target.value))
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <Checkbox
            item="Création du design sur mesure"
            onChange={(checked) =>
              handlePriceChange(checked, 50 * numberOfPages)
            }
          />
          <Checkbox
            item="Remplissage du site (copywriting)"
            onChange={(checked) =>
              handlePriceChange(checked, 20 * numberOfPages)
            }
          />
          <Checkbox
            item="Espace Membre"
            onChange={(checked) => handlePriceChange(checked, 150)}
          />
          <Checkbox
            item="Espace Administrateur"
            onChange={(checked) => handlePriceChange(checked, 200)}
          />
          <Checkbox
            item="Analyse du flux du site"
            onChange={(checked) => {
              handlePriceChange(checked, 10 * numberOfMonths);
              handleSubscriptionChange(checked, 10 * numberOfMonths);
            }}
          />
          <Checkbox
            item="Formulaire de contact"
            onChange={(checked) => {
              handlePriceChange(checked, 10 * numberOfMonths);
              handleSubscriptionChange(checked, 10 * numberOfMonths);
            }}
          />
          <Checkbox
            item="Nom de domaine"
            onChange={(checked) => {
              handlePriceChange(checked, 12);
              handleSubscriptionChange(checked, 12);
            }}
          />
          <Checkbox
            item="Hébergement du site"
            onChange={(checked) => {
              handlePriceChange(checked, 20 * numberOfMonths);
              handleSubscriptionChange(checked, 20 * numberOfMonths);
            }}
          />
        </div>
      </div>
    </div>
  );
}
