import { useState } from "react";
import type { Link } from "../../types/types";

interface Props {
  title: string;
  links?: Link[];
}

export default function Sidebar({ title, links }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const onClick = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  return (
    <aside className={`${isVisible ? "w-50" : "w-fit"} h-full border`}>
      <div className="h-full flex items-center gap-0">
        <nav>
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
        <div className="h-full">
          <button onClick={onClick} className="hover:cursor-pointer h-full">
            &gt;
          </button>
        </div>
      </div>
    </aside>
  );
}
