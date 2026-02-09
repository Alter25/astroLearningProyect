import React, {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropIcon from "./DropIcon";

interface toggleProps {
  title?: string;
  children: ReactNode;
}
interface blockProps {
  title?: string;
  icon?: { value: boolean; f: Dispatch<SetStateAction<boolean>> };
}

const TitleBlock = ({ title = "empty", icon }: blockProps) => {
  return (
    <div className="w-full h-8 flex ">
      <button
        className="flex w-full hover:cursor-pointer"
        onClick={() => icon?.f((prev) => !prev)}
      >
        <span className="flex-1 text-start ml-2 ">{title}</span>
        <span className="">
          <DropIcon show={icon?.value} />
        </span>
      </button>
    </div>
  );
};

const variantsContainer = {
  hidden: {
    // opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

export default function ToggleList({ children, title }: toggleProps) {
  const [visible, setIsVisible] = useState(false);

  return (
    <div className="w-full my-1 p-1">
      <TitleBlock title={title} icon={{ value: visible, f: setIsVisible }} />
      {visible && (
        <AnimatePresence>
          <motion.div
            variants={variantsContainer}
            initial="hidden"
            animate="visible"
            className=""
          >
            <div className="px-4">{children}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
