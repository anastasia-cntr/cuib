"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Avatar from "../Avatar";
import UserMenuModal from "@/app/components/Modals/UserMenuModal"

interface iconAttributes {
  iconSize: number;
}

const iconSize = 15;

const UserMenu = () => {
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

export default UserMenu;