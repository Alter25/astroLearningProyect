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
    <div className="w-full h-8 flex justify-evenly">
      <button
        className="flex w-full justify-evenly"
        onClick={() => icon?.f((prev) => !prev)}
      >
        <span className="flex-1 ml-1">{title}</span>
        <span>
          <DropIcon show={icon?.value} />
        </span>
      </button>
    </div>
  );
};

const animasVariants = {
  hidden: {
    // opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.1,
      ease: "easeInOut",
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
            variants={animasVariants}
            initial="hidden"
            animate="visible"
            className="border"
          >
            <div className="px-4 border border-red-100">{children}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
