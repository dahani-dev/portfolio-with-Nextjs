"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Works = () => {
  // get all projects from server backend
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
    <div className="mx-auto">
      <section className="container mx-auto py-20 px-6">
        <h1 className="text-5xl font-semibold text-white">Works</h1>
      </section>
      <section className="bg-[#f1f4f9] dark:bg-[#18181a] py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <h1 className="text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </h1>
                </div>
                <div className="relative w-full aspect-video">
                  <Image
                    alt={item.title}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/uploads/${item.image}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                  />
                </div>
                <div className="bg-[#e1e8f0] dark:bg-[#303032] px-4 py-6">
                  <p className="text-black dark:text-white text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-center items-center p-4">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-8 text-lg font-bold rounded-full hover:from-cyan-500 hover:to-blue-500 transition-all">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
