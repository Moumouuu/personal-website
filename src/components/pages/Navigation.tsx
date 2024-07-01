"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import Drawer from "../ui/Drawer";

export default function Navigation() {
  const [isDrawerActive, setIsDrawerActive] = useState(false);
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
          <a
            className="block w-full text-text border-b-2 border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
            href="#"
          >
            Accueil
          </a>
          <a
            className="block w-full text-text border-b-2 border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
            href="#"
          >
            Notre histoire
          </a>
          <a
            className="block w-full text-text border-b-2 border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
            href="#"
          >
            Nos services
          </a>
        </Drawer>
      </>
    </div>
  );
}
