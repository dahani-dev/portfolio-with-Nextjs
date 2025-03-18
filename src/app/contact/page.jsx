import ContactForm from "../hooks/contactForm";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <article>
      <section className="container mx-auto py-32 px-6">
        <h1 className="mr-4 text-5xl font-semibold text-white max-md:pl-6">
          Get in touch with me
        </h1>
      </section>
      <section className="bg-slate-200 dark:bg-zinc-900 py-20 px-6">
        <div className="container mx-auto relative">
          <div>
            <h1 className="leading-9 text-black dark:text-[#d1d4db] text-4xl font-semibold mb-12">
              Let's Talk
            </h1>
            <p className="text-xl leading-9 text-black dark:text-[#d1d4db] max-w-[600px]">
              Feel free to reach out to connect, collaborate, or inquire about
              potential projects, partnerships, or speaking engagements. Reach
              out to discuss your ideas, requirements, or simply to say hello.
              Start a conversation and explore the possibilities of working
              together.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </article>
  );
};

export default Contact;
