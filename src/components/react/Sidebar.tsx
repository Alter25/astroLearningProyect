import { useState } from "react";

interface Link {
  href: string;
  text: string;
}

interface Props {
  title: string;
  links?: Link[];
}

export default function Sidebar({ title, links }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <aside className={`w-[${isVisible ? "20" : "0"}px]`}>
      <div className="h-full flex items-center gap-0">
        <h2></h2>
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
        <div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="hover:cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>
    </aside>
  );
}
