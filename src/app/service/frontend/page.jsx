/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const FrontEnd = () => {
  const date = new Date();
  const yearsOfExperience = date.getFullYear() - 2022;
  return (
    <article>
      <section className="container mx-auto py-40">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          Front-end dev
        </h1>
      </section>
      <div className="bg-slate-200 dark:bg-zinc-900 py-40 max-md:px-6">
        <div className=" container mx-auto max-w-4xl flex flex-col gap-8">
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            With {yearsOfExperience} years of experience in the field and a
            passion for building high-quality web applications, I'm here to help
            your business succeed online.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            As a frontend developer, I understand the importance of building
            websites that not only look great but also perform well, offer a
            great user experience and are accessible to all users. That's why I
            make sure to apply best practices and use the latest technologies to
            build performant, accessible web applications that rank higher in
            search engine results.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            Whether you're looking to build a new website from scratch, update
            an existing site, or simply need some help with your frontend
            development needs, I'm here to help. With experience leading a team
            of frontend developers in my full-time job and building{" "}
            <Link
              className="text-black dark:text-white text-xl underline font-semibold"
              href="https://github.com/mohamed-dahani"
              target="_blank"
              rel="noopener noreferrer"
            >
              my own projects,
            </Link>
            {" "}I have the skills and expertise to help your business succeed
            online.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            What sets my frontend development services apart is my focus on
            collaboration and communication. I understand that building a
            successful web application requires working closely with clients to
            understand their needs and goals, and I'm committed to providing
            clear, transparent communication throughout the development process.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            So if you're looking for a frontend developer who can help you build
            performant, accessible web applications that rank higher in search
            engine results, look no further. You can see examples of my work{" "}
            <Link
              className="text-black dark:text-white text-xl underline font-semibold"
              href="/works"
              rel="noopener noreferrer"
            >
              here,
            </Link>
            {" "}and I'd be honored to work with you and help your business succeed
            online. Please don't hesitate to{" "}
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

export default FrontEnd;
