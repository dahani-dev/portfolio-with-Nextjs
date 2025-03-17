"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNode,
  FaJsSquare,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiGit,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Import Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css"; // Swiper core styles

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-[#e34f28]" /> },
    { icon: <FaCss3Alt className="text-[#1572b7]" /> },
    { icon: <FaJsSquare className="text-[#f7df1d]" /> },
    { icon: <FaReact className="text-[#62dafc]" /> },
    { icon: <RiNextjsFill className="text-black dark:text-white" /> },
    { icon: <FaBootstrap className="text-[#7211f4]" /> },
    { icon: <RiTailwindCssFill className="text-[#37b2ad]" /> },
    { icon: <SiMui className="text-[#0073e6]" /> },
    { icon: <FaNode className="text-[#339933]" /> },
    { icon: <SiExpress className="text-black dark:text-white" /> },
    { icon: <SiMongodb className="text-[#48a248]" /> },
    { icon: <SiMysql className="text-[#48789d]" /> },
    { icon: <SiPhp className="text-[#767bb3]" /> },
    { icon: <SiLaravel className="text-[#ff2d20]" /> },
    { icon: <SiTypescript className="text-[#007acd]" /> },
    { icon: <SiC className="text-[#00599C]" /> },
    { icon: <SiCplusplus className="text-[#004482]" /> },
    { icon: <TbBrandReactNative className="text-[#57c4db]" /> },
    { icon: <SiGit className="text-[#ef5032]" /> },
  ];

  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="text-5xl font-semibold text-white">My Skills</h1>
      </section>

      <section className="bg-slate-200 dark:bg-zinc-900 py-20 px-6 flex gap-28 flex-col">
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          spaceBetween={30}
          loop={true}
          speed={6000} // Adjust speed for smooth scrolling
          slidesPerView={3} // Default slides per view (mobile)
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // Ensures continuous autoplay
          }}
          breakpoints={{
            640: { slidesPerView: 4 }, // On small screens
            768: { slidesPerView: 5 }, // On tablets
            1024: { slidesPerView: 6 }, // On desktops
          }}
          className="container mx-auto"
        >
          {skills.map(({ icon }, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="text-7xl md:text-9xl">{icon}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          spaceBetween={30}
          dir="rtl"
          loop={true}
          speed={6000} // Adjust speed for smooth scrolling
          slidesPerView={3} // Default slides per view (mobile)
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // Ensures continuous autoplay
          }}
          breakpoints={{
            640: { slidesPerView: 4 }, // On small screens
            768: { slidesPerView: 5 }, // On tablets
            1024: { slidesPerView: 6 }, // On desktops
          }}
          className="container mx-auto"
        >
          {skills.reverse().map(({ icon }, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="text-7xl md:text-9xl">{icon}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
};

export default Skills;
