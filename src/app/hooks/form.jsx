/*
"use client";

const Form = () => {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 w-72 mb-20 max-md:grid-cols-1 max-md:w-full"
    >
      <label className="text-subtitle flex items-center" htmlFor="email">
        Email Address :
      </label>
      <input
        className="text-title text-lg bg-[#3f3f4626] border-2 border-[#3f3f46] py-1.5 px-4 outline-none rounded-md transition duration-500 w-[22rem] focus:border-mainColor max-md:w-full"
        required
        type="email"
        id="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className="text-subtitle flex items-center" htmlFor="message">
        Your Message :
      </label>
      <textarea
        className="text-title text-lg bg-[#3f3f4626] border-2 border-[#3f3f46] py-2 px-4 outline-none rounded-md transition duration-500 w-[22rem] min-h-36 resize-y focus:border-mainColor max-md:w-full"
        required
        id="message"
        name="message"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div />
      <button
        className="border-2 border-[#3f3f46] rounded-md py-2 text-title hover:bg-mainColor hover:text-white max-md:py-2.5"
        type="submit"
        disabled={state.submitting}
      >
        Send
      </button>
    </form>
  );
};

export default Form;
*/