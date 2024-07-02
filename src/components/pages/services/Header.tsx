"use client";
import ButtonEstimate from "@/components/ButtonEstimate";
import { motion } from "framer-motion";
import { Star2, Star3 } from "../home/Features";

export default function Header() {
  return (
    <header className="relative bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] text-white">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] flex flex-col items-center text-center lg:py-[150px]">
        <motion.h1
          className="text-3xl font-heading md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos services de développement web à Mulhouse
        </motion.h1>
        <motion.p
          className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Développement de sites web sur mesure, application web complète <br />{" "}
          pour les entreprises et les particuliers à Mulhouse.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ButtonEstimate />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-10 left-8 lg:bottom-20 lg:left-32 w-20 h-20 "
      >
        <Star3 />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute top-10 right-10 lg:top-20 lg:right-32 w-20 h-20 "
      >
        <Star2 />
      </motion.div>
    </header>
  );
}
