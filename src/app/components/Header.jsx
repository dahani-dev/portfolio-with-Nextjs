"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // show menu
  const [showMenu, setShowMenu] = useState(false);

  // set the theme
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
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
    <header className="flex justify-between items-center py-3 px-10 text-white backdrop-blur-3xl sticky top-0">
      {/* Logo inshallah */}
      <div />
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
        <Link className="cursor-pointer" href="/contact">
          Tags
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <button className="bg-blue-400 px-10 py-2 rounded-full  font-semibold hover:bg-blue-300 transition-colors max-md:hidden">
          <Link href="/contact">Contact</Link>
        </button>
        <button
          className="md:hidden max-md: flex justify-center items-center w-10 h-10 bg-blue-400 rounded-full"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <CgMenu />
        </button>
        <button
          onClick={() => {
            // send value to ls
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );

            // get value from ls
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-400 hover:bg-blue-300 transition-colors"
        >
          {theme === "dark" ? (
            <MdOutlineDarkMode className="text-lg"></MdOutlineDarkMode>
          ) : (
            <MdOutlineLightMode className="text-lg"></MdOutlineLightMode>
          )}
        </button>
      </div>

      {/* the menu on the small  screen */}

      {showMenu && (
        <div className="fixed bg-[#282830e6] inset-0 z-50 backdrop-blur-sm">
          <div className="w-4/5 mt-8 mx-auto bg-secondary rounded-2xl py-4 px-8 animate-popup">
            <div className="text-right py-2">
              <button
                className="icon-close text-[25px] hover:rotate-180 hover:text-red-500"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <div className="flex flex-col divide-y divide-border">
              <Link
                className="py-4"
                href="hero"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About
              </Link>
              <Link
                className="py-4"
                href="skills"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Skills
              </Link>
              <Link
                className="py-4"
                to="works"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Works
              </Link>
              <Link
                className="py-4"
                href="contact"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <span className="icon-envelope text-base"></span>Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
