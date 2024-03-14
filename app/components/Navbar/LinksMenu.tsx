"use client";

import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchModal from "@/app/components/Modals/SearchModal";

const LinksMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <button className="md:hidden hover:text-red-500 flex items-center justify-center border rounded-full px-3 py-2 
      text-[0.875rem] gap-1 font-bold cursor-pointer hover:shadow-md"
        onClick={toggleOpen}>
        Caută
        <FaSearch />
      </button>
      {isOpen && <SearchModal />}
    </div>
  );
}

export default LinksMenu;