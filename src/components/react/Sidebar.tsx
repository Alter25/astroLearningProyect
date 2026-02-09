import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { toggleLink } from "../../types/types";
import ToggleList from "./ToggleList";
import { useStoreBar } from "../../store/store";
interface Props {
  title: string;
  links?: toggleLink[];
}

export default function Sidebar({ title = "sideBar", links }: Props) {
  const { show, toggle } = useStoreBar();
  const variants = {
    hidden: { x: -260, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {},
    },
    exit: { x: -260, opacity: 0 },
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          key={"sidebar"}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "tween", duration: 0.25 }}
          className="min-w-60 flex flex-col items-center py-2 px-3 bg-accent-600 border-2 rounded-2xl border-accent-900"
        >
          <div className="w-full flex justify-center">
            <h1>{title}</h1>
          </div>
          <nav className="w-full my-4 border-red-600 p-1">
            <ul className="w-inherit">
              {links &&
                links.map((link, index) => {
                  return (
                    <li key={index} className="w-inherit">
                      <ToggleList title={link.name}>
                        <a href={link.href}>{link.text}</a>
                      </ToggleList>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
