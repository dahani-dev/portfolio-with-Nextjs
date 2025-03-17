"use client";

const Form = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-6 md:gap-10 max-w-lg w-full md:min-w-[550px] backdrop-blur-md dark:bg-white/15 bg-black/10 py-8 px-6 sm:px-10 rounded-2xl shadow-xl absolute md:-top-48 right-0 max-xl:relative max-xl:top-auto mx-auto mt-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="text-black dark:text-white font-semibold"
        >
          Your full name
        </label>
        <input
          type="text"
          id="fullName"
          required
          className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-black dark:text-white font-semibold"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          required
          className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-black dark:text-white font-semibold"
        >
          Your message
        </label>
        <textarea
          id="message"
          required
          className="rounded-md px-3 py-2 outline-none h-32 bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-gradient-to-tl from-lime-400 to-green-600 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors w-full md:w-auto"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
