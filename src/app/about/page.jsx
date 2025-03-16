import Image from "next/image";
import meImg from "../../../public/me/me.jpg";
import Link from "next/link";

const About = () => {
  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="text-5xl font-semibold text-white text-center md:text-left">
          About me
        </h1>
      </section>
      <section className="bg-slate-200 dark:bg-zinc-900 py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[600px] flex justify-center">
            <Image
              src={meImg}
              alt="Mohamed Dahani"
              className="rounded-lg"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              decoding="async"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-8 text-center md:text-left">
            <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
              I’m Mohamed Dahani, also known as BrunoX, a full-stack developer
              and mobile developer from Morocco.
            </p>
            <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
              Available for work as a full stack and mobile developer!
            </p>
            <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
              When I’m not coding, I would be watching series, playing video
              games, or watching anime. Lately started hitting the gym to build
              some strength, burn calories, and I’m enjoying it so far.
            </p>
            <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
              You can reach out to me via email:{" "}
              <Link
                href="mailto:mohamed.dahani.dev@gmail.com?subject=Subject%20Here&body=Hello%20Mohamed%20Dahani,%20I%20would%20like%20to%20connect.%20"
                className="text-[#3b82f6] underline"
              >
                mohamed.dahani.dev@gmail.com
              </Link>{" "}
              or follow me on:{" "}
              <Link href="#" className="text-[#3b82f6] underline">
                X (Twitter)
              </Link>
            </p>
            <button className="self-center md:self-start text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
              <Link
                href="/resume/mohamed_dahani_dev_[en].pdf"
                target="_blank"
                download="mohamed_dahani_dev_resume"
                className="inline-block"
              >
                My Resume
              </Link>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
export default About;
