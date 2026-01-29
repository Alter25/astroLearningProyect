import { useState } from "react";
import type { ReactNode } from "react";
import type { Link } from "../../types/types";
import { isAborted } from "astro:schema";

interface Props {
  title: string;
  links?: Link[];
}

function VisibleButton({
  children,
  f,
}: {
  children: ReactNode;
  f?: () => void;
}) {
  return (
    <div className="h-full">
      <button
        className="text-2xl text-emerald-500 h-full hover:cursor-pointer border"
        onClick={f}
      >
        {children}
      </button>
    </div>
  );
}

export default function Sidebar({ title, links }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const onClick = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  const visibleText = () => {
    return isVisible ? "<" : ">";
  };

  return (
    <aside className="w-fit h-full border">
      {isVisible ? (
        <div className="h-full w-50 flex justify-end">
          <nav className="mx-auto mt-4">
            <ul>
              {links &&
                links.map((link) => {
                  return (
                    <li>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <VisibleButton f={() => setIsVisible(!isVisible)}>
            {visibleText()}
          </VisibleButton>
        </div>
      ) : (
        <VisibleButton f={() => setIsVisible(!isVisible)}>
          {visibleText()}
        </VisibleButton>
      )}
    </aside>
  );
}
