"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .required("Name is required.")
      .min(3, "Name is too short."),
    email: Yup.string().email("Invalid email.").required("Email is required."),
    message: Yup.string()
      .trim()
      .required("Message is required.")
      .min(10, "Message is too short."),
  });

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit form handler
  const submitForm = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        toast.success("Message sent successfully!");
      } else {
        toast.error(result.message || "Failed to send message");
        console.error("Server error:", result);
      }
    } catch (error) {
      toast.error("Network error - please try again later");
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-6 md:gap-10 max-w-[490px] w-full md:min-w-[400px] backdrop-blur-md dark:bg-white/15 bg-black/10 py-8 px-6 sm:px-10 rounded-2xl shadow-xl absolute md:-top-48 right-0 max-xl:relative max-xl:top-auto mx-auto mt-10"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-black dark:text-white font-semibold">
            Your full name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-black dark:text-white font-semibold">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john-doe@email.com"
            {...register("email")}
            className="rounded-md px-3 py-2 outline-none bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-black dark:text-white font-semibold">
            Your message
          </label>
          <textarea
            id="message"
            placeholder="Your message goes here"
            {...register("message")}
            className="rounded-md px-3 py-2 outline-none h-32 bg-slate-200 dark:bg-zinc-900 text-black dark:text-[#d1d4db] w-full"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="text-white bg-gradient-to-tl from-lime-400 to-green-600 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors w-full md:w-auto"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
