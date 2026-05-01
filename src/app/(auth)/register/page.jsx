"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaBookOpen, FaGoogle } from "react-icons/fa";
import { GiLifeBuoy } from "react-icons/gi";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div class="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl shadow-2xl  bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#7c03d3_0%,transparent_40%)] m-10 p-4 md:p-8 lg:p-12">
      <div className=" gap-2 md:gap-6 lg:gap-8 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-center">
        <div className="p-6 m- max-w-md mx-auto  flex-1  flex-col items-center justify-center">
          {/* welcome text */}
          <div className="flex flex-col items-center justify-center">
            <div class="">
              <p className="text-xl  font-bold  text-white bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-max mx-auto ">
                <span className="inline-flex items-center gap-2">
                  <GiLifeBuoy className="animate-spin" />
                  DIGITAL SANCTUARY
                </span>
              </p>
              <h1 className="text-4xl font-bold mb-6 text-center text-white">
                {" "}
                Join our Library Community
              </h1>
              <p className="text-lg text-white/80 text-center mb-6">
                Architecting the digital sanctuary for modern readers. Immerse
                yourself in a universe of curated knowledge and intellectual
                clarity.
              </p>
            </div>
            {/* book illustration */}
            <div className="hidden md:flex relative w-64 h-72">
              {/* back side shadow of frame book*/}
              <span className="absolute bg-white/10 shadow-2xl w-48 h-48 border p-8 rounded-2xl border-indigo-500 rotate-45 translate-x-10 translate-y-10 shadow-indigo-600/50 blur-[2px]"></span>
              <div className="absolute inset-0 glass-container rotate-12 scale-90 translate-x-10 translate-y-10"></div>

              {/* book cover */}

              <div className="absolute inset-0 glass-container flex items-center justify-center ">
                <span className="flex items-center justify-center text-[80px] border p-8 rounded-2xl border-indigo-500 bg-white/10 shadow-2xl">
                  <FaBookOpen />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 max-w-md mx-auto space-y-2 md:space-y-4 lg:space-y-6 bg-white/10 rounded-lg shadow-md flex-1"
        >
          <div>
            <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
            <p className="text-white/80 text-center">
              Access your personal archive.
            </p>
          </div>
          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              {...register("email", { required: " Email is required" })}
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button
            class="bg-gradient-to-br from-[#4f46e5] to-[#7c03d3] shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)] text-white font-semibold py-3 px-6 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform w-full cursor-pointer  duration-500 "
            type="submit"
          >
            Register
          </button>
          <h1 className="font-bold text-center border-b border-indigo-500">
            Or
          </h1>
          <button class="bg-gradient-to-br from-[#4f46e5] to-[#7c03d3] shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)] text-white font-semibold py-3 px-6 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform w-full cursor-pointer duration-500">
            <span className="flex items-center gap-2">
              <FaGoogle />
              Sign in with Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
