import React, {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
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
        <DropIcon show={icon?.value} />
      </button>
    </div>
  );
};

export default function ToggleList({ children, title }: toggleProps) {
  const [visible, setIsVisible] = useState(true);

  return (
    <div className="w-full my-1 p-1">
      {visible ? (
        <div>
          <TitleBlock
            title={title}
            icon={{ value: visible, f: setIsVisible }}
          />
          <div className="px-4">{children}</div>
        </div>
      ) : (
        <TitleBlock title={title} icon={{ value: visible, f: setIsVisible }} />
      )}
    </div>
  );
}
