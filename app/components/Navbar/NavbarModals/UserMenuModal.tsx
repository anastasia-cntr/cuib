"use client";

import React from "react";

/*menu options component with regular font weight*/
const MenuOptions = () => {
  const elements = [];
  const content: string[] = ["Conectează-te", "Blog"];

  for (let i = 0; i < content.length; i++) {
    elements.push(React.createElement("div", { key: i, className: "py-3" },
      React.createElement("a", { href: "" }, content[i])
    ));
  }

  return <>{elements}</>;
};

const UserMenuModal = () => {
  return (
    <div className="flex flex-col border rounded-xl absolute right-6 shadow-lg text-[0.825rem] px-10 py-10 mt-3">
      <div className="py-3">
        <a className="font-bold" href="">
          Înscrie-te
        </a>
      </div>
      <MenuOptions />
      <div className="border-t-2 py-3 border-gray-200 font-bold">
        <a href="">Asistență</a>
      </div>
    </div>
  );
}

export default UserMenuModal;
