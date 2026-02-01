import React, { useState, type ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

const Block = ({ title }: { title?: string }) => {
  return <div className="border w-full h-8"></div>;
};

export default function ({ children, title }: Props) {
  const [visible, setIsVisible] = useState(false);

  return visible ? (
    <div className="border">{children}</div>
  ) : (
    <Block title={title} />
  );
}
