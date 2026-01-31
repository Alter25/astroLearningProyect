import { useState } from "react";
import type { ReactNode } from "react";
import type { Link } from "../../types/types";
import { useStoreBar } from "../../store/store";
interface Props {
  title: string;
  links?: Link[];
}

export default function Sidebar({ title, links }: Props) {
  const { show, toggle } = useStoreBar();
  return show ? (
    <aside className="w-fit h-full bg-purple-950 border">
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
      </div>
    </aside>
  ) : (
    <></>
  );
}
