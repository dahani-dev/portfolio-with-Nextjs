import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNode,
} from "react-icons/fa6";

import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

import {
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiGit,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";

const Skills = () => {
  return (
    <article>
      <section className="container mx-auto py-40">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          My Skills
        </h1>
      </section>
      <section className="bg-slate-200 dark:bg-zinc-900 py-20 max-md:px-6">
        <div className="container mx-auto flex items-center justify-between gap-y-40 gap-10 flex-wrap max-sm:justify-center">
          <FaHtml5 className="text-9xl text-[#e34f28]" />
          <FaCss3Alt className="text-9xl text-[#1572b7]" />
          <FaJsSquare className="text-9xl text-[#f7df1d]" />
          <FaReact className="text-9xl text-[#62dafc]" />
          <RiNextjsFill className="text-9xl text-black dark:text-white" />
          <FaBootstrap className="text-9xl text-[#7211f4]" />
          <RiTailwindCssFill className="text-9xl text-[#37b2ad]" />
          <SiMui className="text-9xl text-[#0073e6]" />
          <FaNode className="text-9xl text-[#339933]" />
          <SiExpress className="text-9xl text-black dark:text-white" />
          <SiMongodb className="text-9xl text-[#48a248]" />
          <SiMysql className="text-9xl text-[#48789d]" />
          <SiPhp className="text-9xl text-[#767bb3]" />
          <SiLaravel className="text-9xl text-[#ff2d20]" />
          <SiTypescript className="text-9xl text-[#007acd]" />
          <TbBrandReactNative className="text-9xl text-[#57c4db]" />
          <SiGit className="text-9xl text-[#ef5032]" />
        </div>
      </section>
    </article>
  );
};

export default Skills;
