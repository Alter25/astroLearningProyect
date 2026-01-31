import React, { type ReactNode } from "react";
import { useStoreBar } from "../../store/store";

interface BtnProps {
  children: ReactNode | ReactNode[];
}
export default function ButtonBar({ children }: BtnProps) {
  const { show, toggle } = useStoreBar();
  const handleToggle = () => {
    toggle();
  };
  return <button onClick={handleToggle}>{children}</button>;
}
