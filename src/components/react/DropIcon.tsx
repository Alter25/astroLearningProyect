import React from "react";

export default function DropIcon({ show }: { show?: boolean }) {
  return (
    <img
      className="w-fit"
      src={show ? "/public/Icons/dropUp.svg" : "/public/Icons/dropDown.svg"}
      alt=""
    />
  );
}
