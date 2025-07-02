"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainWorks = () => {
  // data form backend
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/projects`)
      .then((response) => {
        setData(response.data.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="container mx-auto">
      <h1 className="text-black dark:text-white font-semibold text-2xl mb-7">
        Featured work
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-4">
        {data.slice(0, 3).map((item, index) => {
          return (
            <div className="flex items-center gap-5" key={index}>
              <div className="grid h-full w-full overflow-hidden rounded-md bg-slate-200 backdrop-blur-md dark:bg-white/10 shadow-lg">
                <div className="p-4">
                  <h1 className="text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </h1>
                </div>
                <div className="relative h-[300px] w-full">
                  <Image
                    alt={item.title}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/uploads/${item.image}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="bg-[#e1e8f0] dark:bg-[#303032] px-4 py-6">
                  <p className="text-black dark:text-white text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="h-20 bg-slate-300 backdrop-blur-md dark:bg-white/5 flex justify-center items-center">
                  <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-14 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
          <Link href="/works">More projects</Link>
        </button>
      </div>
    </section>
  );
};

export default MainWorks;
