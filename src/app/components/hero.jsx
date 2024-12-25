import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-44 px-10 container mx-auto">
      <h1 className="text-5xl text-white font-semibold tracking-wide mb-5">
        I’m Mohamed Dahani
      </h1>
      <p className=" text-white font-medium text-lg tracking-wide max-w-2xl leading-8 mb-10">
        Also known as <span className="underline">BrunoX</span>. A passionate
        web developer with two years of experience in creating and implementing
        innovative web solutions. Skilled in programming, troubleshooting, and
        collaborating with cross-functional teams to achieve the success of
        high-impact projects.
      </p>
      <div className="flex gap-2 items-center">
        <button className="text-white bg-white/25 py-2 px-5 font-bold rounded-full hover:bg-white/50 transition-colors">
          <Link href="">See my work</Link>
        </button>
        <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
          <Link href="">Get in touch</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
