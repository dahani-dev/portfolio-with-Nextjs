import Image from "next/image";
import tags from "../../db/tags";

const Tags = () => {
  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          Tags
        </h1>
      </section>
      <section className="bg-slate-200 dark:bg-zinc-900 py-20 max-md:px-6">
        <div className="container mx-auto px-6 relative -top-40 grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-6">
          {tags.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all duration-500 hover:bg-black/10 hover:backdrop-blur-sm dark:hover:bg-white/10"
              >
                <Image
                  className="rounded-2xl relative h-[400px] w-full overflow-hidden object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <h1 className="pt-6 text-xl font-semibold text-black dark:text-white">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Tags;
