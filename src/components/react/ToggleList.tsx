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
      <span className="flex-1 ml-1">{title}</span>
      <button onClick={() => icon?.f(!icon.value)}>
        <span>
          <DropIcon show={icon?.value} />
        </span>
      </button>
    </div>
  );
};

export default function ToggleList({ children, title }: toggleProps) {
  const [visible, setIsVisible] = useState(true);
  const animas = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-full my-1 p-1">
      <TitleBlock title={title} icon={{ value: visible, f: setIsVisible }} />
      {visible && (
        <AnimatePresence>
          <motion.div animate={animas} className="border">
            <div className="px-4 border border-red-100">{children}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
