import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Works from "./mainWorks";
import { FaInstagram } from "react-icons/fa6";

const main = () => {
  return (
    <main className=" bg-[#f1f4f9] dark:bg-[#18181B] px-8 pb-14">
      <div className="container mx-auto w-full flex justify-between gap-8 max-lg:flex-wrap relative top-[-100px]">
        <div className="backdrop-blur-md dark:bg-white/15 bg-black/10 py-9 px-10 rounded-2xl min-w-[60%] shadow-xl">
          <h1 className="text-white font-semibold text-2xl mb-7">Services</h1>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <div
              classNamaria-label="Front-end service"
              e="flex-grow flex justify-between items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B] "
            >
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                  Front-end dev
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="/service/frontend">Discover more</Link>
                </button>
              </div>
              FaDatabase FaDatabase
              <Link
                href="/service/frontend"
                aria-label="Front-end service"
                className="flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
              >
                <FaCode />
              </Link>
            </div>
            <div className="flex-grow flex justify-between items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B] ">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                  Back-end dev
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="/service/backend">Discover more</Link>
                </button>
              </div>

              <Link
                href="/service/backend"
                aria-label="Bront-end service"
                className="flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
              >
                <FaDatabase />
              </Link>
            </div>
            <div className="flex-grow flex justify-between items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B] ">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                  Mobile development
                </h1>
                <button classNameFront-end="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="/service/mobile">Discover more</Link>
                </button>
              </div>
              <Link
                href="/service/mobile"
                aria-label="Mobile service"
                className="flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
              >
                <CiMobile3 />
              </Link>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md dark:bg-white/15 bg-black/10  py-9 px-10 rounded-2xl">
          <h1 className="text-white font-semibold text-2xl mb-7">
            Follow me on
          </h1>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <div className="flex-grow flex justify-between items-center  gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white flex items-center">
                  <IoLogoGithub />
                  <span className="mx-2">/</span>mohamed-dahani
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="">Follow me</Link>
                </button>
              </div>

              <div>
                <Link
                  href=""
                  aria-label="My github account"
                  className=" flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
                >
                  <IoLogoGithub />
                </Link>
              </div>
            </div>
            <div className="flex-grow flex justify-between items-center  gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white flex items-center">
                  <FaLinkedin />
                  <span className="mx-2">/</span>mohamed-dahani
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="">Follow me</Link>
                </button>
              </div>

              <div>
                <Link
                  href=""
                  aria-label="My linkedin account"
                  className=" flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="flex-grow flex justify-between items-center  gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white flex items-center">
                  <FaXTwitter />
                  <span className="mx-2">/</span>mohamed-dahani
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="">Follow me</Link>
                </button>
              </div>

              <div>
                <Link
                  href=""
                  aria-label="My x twitter account"
                  className=" flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
            <div className="flex-grow flex justify-between items-center  gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
              <div>
                <h1 className="text-black font-semibold text-lg mb-6 dark:text-white flex items-center">
                  <FaInstagram />
                  <span className="mx-2">/</span>mohamed-dahani
                </h1>
                <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  <Link href="">Follow me</Link>
                </button>
              </div>

              <div>
                <Link
                  href=""
                  aria-label="My instagram account"
                  className=" flex justify-center items-center text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Works />
    </main>
  );
};

export default main;
