"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${scrolled ? "text-black" : "text-black"}`}>
          TravelNesia
        </h1>
        <nav>
         <a
  href="#paket"
  className={`hover:underline text-sm ${
    scrolled ? "text-blue-600" : "text-black"
  }`}
>
  Paket
</a>
        </nav>
      </div>
    </header>
  );
}
