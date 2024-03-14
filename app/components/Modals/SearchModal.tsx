"use client";

import React from "react";

const MenuOptions = () => {
  const elements = [];
  const content: string[] = ["Închiriază", "Găzduiește", "Explorează"];

  for (let i = 0; i < content.length; i++) {
    elements.push(
      React.createElement("a", { className: "hover:text-red-500", href: "" }, content[i])
    );
  }

  return <>{elements}</>;
};

const SearchModal = () => {
  return (
    <div className="md:hidden flex flex-col border rounded-xl absolute shadow-lg text-[0.825rem] font-bold gap-7 px-10 py-10 mt-3">
      <MenuOptions />
    </div>
  );
}

export default SearchModal;