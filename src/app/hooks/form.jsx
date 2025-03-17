"use client";

const Form = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-10 min-w-[550px] backdrop-blur-md dark:bg-white/15 bg-black/10 py-9 px-10 rounded-2xl shadow-xl absolute -top-48 right-0"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="fullName" className="text-black dark:text-white font-semi-bold">
          Your full name
        </label>
        <input
          type="text"
          id="fullName"
          className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-black dark:text-white font-semi-bold">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-black dark:text-white font-semi-bold">
          Your message
        </label>
        <textarea
          name=""
          id="message"
          className="rounded-md px-3 py-2 outline-none h-32 bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-gradient-to-tl from-lime-400 to-green-600 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
