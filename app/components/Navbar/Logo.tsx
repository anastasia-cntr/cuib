"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="40"
      width="40"
      src="/images/logo.svg"
    />
  );
}
