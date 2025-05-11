"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
      <nav className="w-full bg-[#E1CC96] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
          <a href="#home" className="hover:text-[#1D3B28]">Home</a>
          <a href="#sewa-mobil" className="hover:text-[#1D3B28]">Sewa Mobil</a>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#1D3B28]"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Paket Tour <IoChevronDownSharp size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 py-2 rounded w-40 z-20">
                <a href="#bali" className="block px-4 py-2 hover:bg-gray-100">Bali</a>
                <a href="#lombok" className="block px-4 py-2 hover:bg-gray-100">Lombok</a>
                <a href="#labuan" className="block px-4 py-2 hover:bg-gray-100">Labuan Bajo</a>
              </div>
            )}
          </div>

          <a href="#tentang" className="hover:text-[#1D3B28]">Tentang</a>
          <a href="#blog" className="text-[#1D3B28] hover:underline">Blog</a>
        </div>

        {/* Button WhatsApp */}
        <div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D3B28] text-white px-4 py-2 rounded flex items-center gap-2 font-bold hover:opacity-90"
          >
            <FaWhatsapp />
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
