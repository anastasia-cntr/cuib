"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Avatar from "../Avatar";
import UserMenuModal from "./NavbarModals/UserMenuModal";

interface iconAttributes {
  iconSize: number;
}

const iconSize = 15;

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="hover:shadow-md flex flex-row items-center px-3 py-1 gap-2 border rounded-full"
        onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={iconSize} />
        <Avatar />
      </button>
      {isOpen && <UserMenuModal />}
    </div>
  );
}
