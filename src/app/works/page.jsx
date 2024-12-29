import Image from "next/image";
import Link from "next/link";
import data from "../../db/data";

const Works = () => {
  return (
    <div className="mx-auto">
      <section className="container mx-auto py-40">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">Works</h1>
      </section>
      <section className="bg-[#f1f4f9] dark:bg-[#18181a] py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-3 lg:gap-x-8 max-sm:px-6">
            {data.map((item, index) => {
              return (
                <div className="flex items-center gap-5" key={index}>
                  <div className="grid h-full w-full overflow-hidden rounded-md bg-slate-200 backdrop-blur-md dark:bg-white/10 shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative h-[300px] w-full">
                      <Image
                        alt="Heron Finance"
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
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
                        <Link href={item.link} target="_blank">
                          Visit
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
