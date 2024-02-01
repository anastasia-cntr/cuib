"use client";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

interface iconAttributes {
  iconSize: number;
}

const iconSize = 15;

export default function Socials() {
  return (
    <div className="sm:flex hidden flex-row gap-2 border rounded-full px-2 py-3">
      <div>
        <a href="">
          <FaInstagram size={iconSize} />
        </a>
      </div>
      <div>
        <a href="">
          <FaFacebook size={iconSize} />
        </a>
      </div>
      <div>
        <a href="">
          <FaTiktok size={iconSize} />
        </a>
      </div>
    </div>
  );
}