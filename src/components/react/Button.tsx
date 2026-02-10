import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  clas?: string;
}

export default function Button({ children, onClick, clas = "" }: Props) {
  return (
    <button className={`${clas}`} onClick={onClick}>
      {children}
    </button>
  );
}
