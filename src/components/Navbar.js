"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0); // Menu yang sedang aktif

  const toggleMenu = (menu) => {
    // Tutup menu yang sama atau buka menu baru
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <>
      <div
        className="flex justify-around items-center p-7
       bg-[#170038]">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
            width={458}
            height={636}
          />
        </div>
        <div className="flex gap-10 font-semibold text-white">
          <Link href="/"> Home</Link>
          <Link href="/about"> About</Link>
          <Link href="/contact"> Contact</Link>
        </div>
        <div className="flex gap-10 font-semibold text-white">
          <Link
            href="/"
            className="text-white border border-slate-500 rounded-lg px-4 py-2 ">
            Anu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
