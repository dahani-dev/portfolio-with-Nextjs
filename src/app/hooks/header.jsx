"use client";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import meImg from "../../../public/me/me_circle.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("currentMode") ?? "dark";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Update theme dynamically
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="px-6 py-3 text-white bg-black/20 backdrop-blur-md sticky top-0 z-[999]">
      <div className="container mx-auto flex justify-between items-center gap-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src={meImg}
            alt="Mohamed Dahani"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex gap-8 text-lg">
          {["About", "Skills", "Works", "Tags"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-white/25 px-6 py-2 rounded-full font-semibold hover:bg-white/50 transition">
            <Link href="/contact">Contact</Link>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex justify-center items-center w-10 h-10 bg-blue-500 rounded-full"
            aria-label="Open Menu"
            onClick={() => setShowMenu(true)}
          >
            <CgMenu size={22} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-white/25 hover:bg-white/50 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <MdOutlineDarkMode size={22} />
            ) : (
              <MdOutlineLightMode size={22} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-lg z-50">
            <div className="w-4/5 max-w-sm bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl py-6 px-8 shadow-lg">
              <div className="flex justify-end">
                <button
                  className="text-2xl hover:text-red-500 transition"
                  onClick={() => setShowMenu(false)}
                  aria-label="Close Menu"
                >
                  <IoClose />
                </button>
              </div>
              <nav className="flex flex-col divide-y divide-gray-300 dark:divide-gray-600 mt-4">
                {["About", "Skills", "Works", "Tags"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="py-4 text-center block"
                    onClick={() => setShowMenu(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
