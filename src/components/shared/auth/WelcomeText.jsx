"use client";

import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";
import { GiLifeBuoy } from "react-icons/gi";

const WelcomeText = () => {
  const path = usePathname();

  return (
    <>
      <div className="p-6 m-   flex-1  flex-col items-center justify-center">
        {/* welcome text */}
        <div className="flex flex-col items-center justify-center">
          {
            path === '/register' &&
          <div class=" flex-1 space-y-4 mx-">
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
          }
         {path ==='/login' && <div>
  <p className="text-xl font-bold text-white bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-max mx-auto ">
  <span className="inline-flex items-center gap-2">
    <GiLifeBuoy className="animate-spin" />
    WELCOME BACK
  </span>
</p>
<h1 className="text-4xl font-bold mb-6 text-center text-white">
  Continue Your Reading Journey
</h1>
<p className="text-lg text-white/80 text-center mb-6">
  Enter your sanctuary of wisdom. Access your curated collection and 
  reconnect with the world of intellectual clarity.
</p>
  </div>}
          {/* book illustration */}
          <div className="hidden lg:flex relative w-64 h-72">
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
    </>
  );
};

export default WelcomeText;
