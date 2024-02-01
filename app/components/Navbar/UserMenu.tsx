"use client";

import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Avatar from "../Avatar";
import UserMenuModal from "./Modals/UserMenuModal";

interface iconAttributes {
  iconSize: number;
}

const iconSize = 15;

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <button
        className="hover:shadow-md flex flex-row items-center px-3 py-1 gap-2 border rounded-full"
        onClick={toggleOpen}
      >
        <FiMenu size={iconSize} />
        <Avatar />
      </button>
      {isOpen && <UserMenuModal />}
    </div>
  );
}
