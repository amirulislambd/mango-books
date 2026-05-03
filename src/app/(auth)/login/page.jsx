"use client";
import WelcomeText from "@/components/shared/auth/WelcomeText";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (info) => {
    const { email, password } = info;

    try {
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: "/",
        redirect: "/",
      });

      if (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
        });
      }

      if (data) {
        toast.success("Successfully Logged In!", {
          position: "top-center",
          autoClose: 1500,
        });
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const signWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL:callbackUrl,
      newUserCallbackURl: callbackUrl
    });
  };

  return (
    <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl shadow-2xl  bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#7c03d3_0%,transparent_40%)] md:m-10 p-4 md:p-8 lg:p-12">
      <div className=" grid grid-cols-1 lg:grid-cols-2  md:gap-8 items-center justify-center">
        <div className="p-6 m-   flex-1  flex-col items-center justify-center">
          <WelcomeText />
        </div>
        {/* form */}
        <div className="p-6 max-w-md mx-auto space-y-2 md:space-y-4 lg:space-y-6 bg-white/10 rounded-lg shadow-md w-full">
        <div>
              <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
              <p className="text-white/80 text-center">
                Access your personal archive.
              </p>
            </div>
          <form className="space-y-2 md:space-y-4 " onSubmit={handleSubmit(onSubmit)}>
           
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
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <button
              className="bg-gradient-to-br from-[#4f46e5] to-[#7c03d3] shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)] text-white font-semibold py-3 px-6 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform w-full cursor-pointer  duration-500 "
              type="submit"
            >
              Login
            </button>
            <h1 className="font-bold text-center border-b border-indigo-500">
              Or
            </h1>
          </form>
            <button
              onClick={signWithGoogle}
              className="bg-gradient-to-br from-[#4f46e5] to-[#7c03d3] shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)] text-white font-semibold py-3 px-6 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform w-full cursor-pointer duration-500"
            >
              <span className="flex gap-2 items-center justify-center">
                <FaGoogle />
                Sign in with Google
              </span>
            </button>
          <div className="mt-6 text-xs md:text-sm text-center">
            <span className="text-gray-500">New to MangoBooks?</span>
            <Link
              href="/register"
              className="ml-2 text-orange-500 hover:text-orange-700 font-bold transition-colors"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
