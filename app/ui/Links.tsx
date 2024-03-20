"use client";

import React from "react";

/*navigation links on large screens*/
const NavLinks = () => {
  const elements = [];
  const content: string[] = ["Închiriază", "Găzduiește", "Explorează"];

  for (let i = 0; i < content.length; i++) {
    elements.push(React.createElement("div", { key: i },
      React.createElement("a",
        { className: "hover:bg-red-100 hover:text-red-500 rounded-full px-3 py-2", href: "" },
        content[i]))
    );
    /*create visual separator for the components*/
    if (i < content.length - 1) {
      elements.push(<div key={`separator-${i}`}>&mdash;</div>);
    }
  }

  return <>{elements}</>;
};

const Links = () => {
  return (
    <div className="hidden md:flex text-[0.875rem] md:text-[1rem] w-full md:w-auto py-2 gap-1 items-center">
      <NavLinks />
    </div>
  );
};

export default Links;
