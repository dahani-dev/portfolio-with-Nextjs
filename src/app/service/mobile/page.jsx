/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Mobile = () => {
  const date = new Date();
  const yearsOfExperience = date.getFullYear() - 2023;
  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          Mobile development
        </h1>
      </section>
      <div className="bg-slate-200 dark:bg-zinc-900 py-40 max-md:px-6">
        <div className="container mx-auto max-w-4xl flex flex-col gap-8">
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            With {yearsOfExperience} years of experience in the field and a
            passion for building high-quality mobile applications, I'm here to
            help your business reach users on both iOS and Android platforms using
            React Native.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            As a React Native mobile developer, I focus on creating cross-platform
            mobile apps that deliver a native-like experience while being cost-effective
            and efficient. I ensure that the apps I build are performant, user-friendly,
            and designed with the best practices to offer seamless experiences for
            your users.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            Whether you're looking to build a new mobile app from scratch, enhance
            an existing one, or need help integrating back-end services, I'm here
            to help. With hands-on experience developing mobile apps for both iOS
            and Android platforms using React Native, I can help bring your ideas
            to life with a high-quality mobile solution.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            What sets my mobile development services apart is my focus on performance,
            cross-platform consistency, and user experience. I collaborate closely with
            clients to ensure their vision is brought to life while optimizing for
            mobile performance and ensuring a smooth experience across devices.
          </p>
          <p className="text-xl leading-9 text-[#384152] dark:text-[#d1d4db]">
            If you're looking for a React Native developer who can help you create
            powerful, cross-platform mobile apps with native performance, I would
            love to collaborate with you. You can see examples of my work{" "}
            <Link
              className="text-black dark:text-white text-xl underline font-semibold"
              href="https://github.com/mohamed-dahani"
              target="_blank"
              rel="noopener noreferrer"
            >
              here,
            </Link>
            {" "}and I’d be honored to help your business expand its mobile presence.
            Please feel free to{" "}
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

export default Mobile;
