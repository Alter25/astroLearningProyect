import React from "react";

export default function DropIcon({ show }: { show?: boolean }) {
  return (
    <img
      src={show ? "/public/Icons/dropUp.svg" : "/public/Icons/dropDown.svg"}
      alt=""
    />
  );
}
