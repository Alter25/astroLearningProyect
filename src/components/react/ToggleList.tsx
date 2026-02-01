import React, { useState, type ReactNode } from "react";

interface toggleProps {
  title?: string;
  children: ReactNode;
}
interface blockProps {
  title?: string;
  icon?: ReactNode;
}

const Block = ({ title = "empty", icon }: blockProps) => {
  return <div className="border w-full h-8"></div>;
};

export default function ToggleList({ children, title }: toggleProps) {
  const [visible, setIsVisible] = useState(true);

  return visible ? (
    <div className="border">{children}</div>
  ) : (
    <Block title={title} />
  );
}
