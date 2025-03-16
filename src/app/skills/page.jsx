import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNode, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMui, SiExpress, SiMongodb, SiMysql, SiPhp, SiLaravel, SiTypescript, SiGit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="cursor-pointer text-[#e34f28]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="cursor-pointer text-[#1572b7]" />, label: "CSS3" },
    { icon: <FaJsSquare className="cursor-pointer text-[#f7df1d]" />, label: "JavaScript" },
    { icon: <FaReact className="cursor-pointer text-[#62dafc]" />, label: "React.js" },
    { icon: <RiNextjsFill className="cursor-pointer text-black dark:text-white" />, label: "Next.js" },
    { icon: <FaBootstrap className="cursor-pointer text-[#7211f4]" />, label: "Bootstrap" },
    { icon: <RiTailwindCssFill className="cursor-pointer text-[#37b2ad]" />, label: "Tailwind CSS" },
    { icon: <SiMui className="cursor-pointer text-[#0073e6]" />, label: "Material UI" },
    { icon: <FaNode className="cursor-pointer text-[#339933]" />, label: "Node.js" },
    { icon: <SiExpress className="cursor-pointer text-black dark:text-white" />, label: "Express.js" },
    { icon: <SiMongodb className="cursor-pointer text-[#48a248]" />, label: "MongoDB" },
    { icon: <SiMysql className="cursor-pointer text-[#48789d]" />, label: "MySQL" },
    { icon: <SiPhp className="cursor-pointer text-[#767bb3]" />, label: "PHP" },
    { icon: <SiLaravel className="cursor-pointer text-[#ff2d20]" />, label: "Laravel" },
    { icon: <SiTypescript className="cursor-pointer text-[#007acd]" />, label: "TypeScript" },
    { icon: <TbBrandReactNative className="cursor-pointer text-[#57c4db]" />, label: "React Native" },
    { icon: <SiGit className="cursor-pointer text-[#ef5032]" />, label: "Git" },
  ];

  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="text-5xl font-semibold text-white">My Skills</h1>
      </section>
      <section className="bg-slate-200 dark:bg-zinc-900 py-20 px-6">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 place-items-center">
          {skills.map(({ icon, label }, index) => (
            <div key={index} aria-label={label} className="flex flex-col items-center group">
              <div className="text-7xl md:text-9xl transition-transform group-hover:scale-110">{icon}</div>
              <p className="mt-2 text-lg text-[#384152] dark:text-[#d1d4db]">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Skills;
