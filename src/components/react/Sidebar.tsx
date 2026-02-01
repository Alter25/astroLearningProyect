import { useState } from "react";
import type { Link } from "../../types/types";
import ToggleList from "./ToggleList";
import { useStoreBar } from "../../store/store";
interface Props {
  title: string;
  links?: Link[];
}

export default function Sidebar({ title = "sideBar", links }: Props) {
  const { show, toggle } = useStoreBar();
  return show ? (
    <aside className="min-w-60 flex flex-col items-center py-2 border">
      <div className="w-full flex justify-center">
        <h1>{title}</h1>
      </div>
      <nav className="my-4 border-red-600 p-1">
        <ul>
          {links &&
            links.map((link, index) => {
              return (
                <li key={index} className="flex justify-center">
                  <ToggleList>
                    <a href={link.href}>{link.text}</a>
                  </ToggleList>
                </li>
              );
            })}
        </ul>
      </nav>
    </aside>
  ) : (
    <></>
  );
}
