"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import meImg from "../../../public/me.png";
import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  // show menu
  const [showMenu, setShowMenu] = useState(false);

  // set the theme
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentMode = localStorage.getItem("currentMode") ?? "dark";
    setTheme(currentMode);
  }, []);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <header className="px-6 py-1 text-white bg-black/20 backdrop-blur-md sticky top-0 z-[999]">
      <div className="container mx-auto flex justify-between items-center gap-5">
        {/* Logo inshallah */}
        <Link href={"/"}>
          <Image
            src={meImg}
            alt="Mohamed Dahani"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <nav className="flex gap-10 py-2.5 px-7 max-md:hidden">
          <Link className="cursor-pointer" href="/about">
            About
          </Link>
          <Link className="cursor-pointer" href="/skills">
            Skills
          </Link>
          <Link className="cursor-pointer" href="/works">
            Works
          </Link>
          <Link className="cursor-pointer" href="/tags">
            Tags
          </Link>
        </nav>
        <div className="flex items-center gap-10">
          <button className="primary-button hover:bg-white/50 transition-colors max-md:hidden">
            <Link href="/contact">Contact</Link>
          </button>
          <button
            className="md:hidden max-md: flex justify-center items-center w-10 h-10 bg-blue-400 rounded-full"
            aria-label="Menu"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <CgMenu />
          </button>
          <button
            onClick={() => {
              // send value to ls
              const newTheme = theme === "dark" ? "light" : "dark";
              localStorage.setItem("currentMode", newTheme);
              setTheme(newTheme);
            }}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-white/25 hover:bg-white/50 transition-colors"
            aria-label="Theme"
          >
            {theme === "light" ? (
              <MdOutlineDarkMode className="text-lg"></MdOutlineDarkMode>
            ) : (
              <MdOutlineLightMode className="text-lg"></MdOutlineLightMode>
            )}
          </button>
        </div>

        {/* the menu on the small  screen */}

        {showMenu && (
          <div className="fixed text-black dark:text-white bg-[#282830e6] inset-0 z-50 backdrop-blur-sm">
            <div className="w-4/5 mx-auto bg-[#ffffff] dark:bg-[#18181b] rounded-2xl py-4 px-8 animate-popup">
              <div className="text-right py-2">
                <button
                  className="text-[25px] hover:rotate-180 hover:text-red-500 transition-transform duration-300"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <IoClose className="text-[25px] hover:rotate-180 hover:text-red-500" />
                </button>
              </div>
              <div className="flex flex-col divide-y divide-[#cacaca84] dark:divide-[#3f3f4666]">
                <Link
                  href="/about"
                  className="py-4"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  About
                </Link>
                <Link
                  href="/skills"
                  className="py-4"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Skills
                </Link>
                <Link
                  href="/works"
                  className="py-4"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Works
                </Link>
                <Link
                  href="/tags"
                  className="py-4"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Tags
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
