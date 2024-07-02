"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Drawer from "./ui/Drawer";

interface Link {
  href: string;
  text: string;
  image: string;
}

export default function Navigation() {
  const links = [
    { href: "/", text: "Accueil", image: "/images/accueil.jpeg" },
    { href: "/services", text: "Services", image: "/images/services.webp" },
    { href: "/story", text: "Notre histoire", image: "/images/story.webp" },
    { href: "/portfolio", text: "Portfolio", image: "/images/portfolio.webp" },
  ];
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]);
  const [previousImage, setPreviousImage] = useState(activeLink.image);

  const handleMouseEnter = (link: Link) => {
    setPreviousImage(activeLink.image);
    setActiveLink(link);
    console.log("Mouse enter", link);
  };

  useEffect(() => {
    // Client-side-only code
    // if user press escape key, close the drawer
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsDrawerActive(false);
      }
    });
  });

  return (
    <div id="drawer">
      <>
        <Button
          className="fixed top-5 left-5 z-10"
          onClick={() => {
            setIsDrawerActive(true);
          }}
        >
          <Menu size={24} />
        </Button>
        <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
          <div className="flex justify-between">
            <div className="z-10 flex flex-col w-full h-screen justify-center p-12">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="w-full uppercase text-white px-5 py-4 text-3xl font-bold "
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link)}
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="absolute w-full h-screen">
              <img
                src={previousImage}
                alt="Previous"
                className="w-full h-screen grayscale object-cover object-center absolute"
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLink.image}
                  src={activeLink.image}
                  alt="Pluviaux"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-screen grayscale object-cover object-center absolute"
                />
              </AnimatePresence>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
}
