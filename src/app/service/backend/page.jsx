/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const BackEnd = () => {
  const date = new Date();
  const yearsOfExperience = date.getFullYear() - 2022;
  return (
    <article>
      <section className="container mx-auto py-40">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          Back-end dev
        </h1>
      </section>
      <div className="bg-slate-200 dark:bg-zinc-900 py-40 max-md:px-6">
        <div className="container mx-auto max-w-4xl flex flex-col gap-8">
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            With {yearsOfExperience} years of experience in the field and a
            passion for building reliable, scalable back-end systems, I'm here to
            help your business run smoothly behind the scenes.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            As a back-end developer, I focus on developing robust APIs, managing
            databases, ensuring security, and optimizing server performance. My
            goal is to build systems that not only work efficiently but also scale
            with your business. I prioritize using the latest technologies and
            best practices to ensure high-quality, maintainable back-end solutions.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            Whether you're looking to build a new back-end infrastructure from
            scratch, optimize an existing system, or integrate third-party APIs,
            I’m here to help. With hands-on experience in designing and building
            complex back-end systems in my full-time role and through my personal
            projects, I have the technical expertise to support your online
            business.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            What sets my back-end development services apart is my attention to
            detail and problem-solving approach. I believe in building systems that
            are not only efficient and secure but also scalable and easy to maintain.
            I work closely with clients to understand their specific business needs,
            ensuring that the back-end solution perfectly aligns with their goals.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            If you're looking for a back-end developer who can help you build
            secure, high-performance systems that scale with your business, I would
            love to collaborate with you. You can see examples of my work{" "}
            <Link
              className="text-black dark:text-white text-xl underline font-semibold"
              href="/works"
              rel="noopener noreferrer"
            >
              here,
            </Link>
            {" "}and I'd be honored to help your business grow. Please feel free to{" "}
            <Link
              className="text-black dark:text-white text-xl underline font-semibold"
              href="/contact"
              rel="noopener noreferrer"
            >
              reach out
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
};

export default BackEnd;
