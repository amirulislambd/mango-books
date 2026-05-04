import ProfileModal from "@/components/profile/ProfileModal";
import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";
import { FaCalendarAlt, FaEnvelope, FaUserCircle } from "react-icons/fa";

export const metadata = {
    title: "User Profile | MangoBooks",
    description: "Manage your account, track your reading history, and update your personal information on MangoBooks.",
  };

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const joinDate = new Date(user?.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10 md:py-20 cu">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl shadow-2xl animate-ping"></div>

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl shadow-2xl animate-ping"></div>

        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl shadow-2xl animate-ping"></div>

        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-ping"></div>

        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Avatar Section */}
          <div className="relative group">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-20"></div>

            <div className="relative border-4 border-white/10 bg-zinc-900 p-2 rounded-full shadow-2xl">
              <Avatar className="w-24 h-24 md:w-40 md:h-40 text-3xl font-bold">
                <Avatar.Image
                  alt="User Profile"
                  src={user?.image}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <Avatar.Fallback className="bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
                  {user?.name?.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </div>
          </div>

          <div className="text-center space-y-4 w-full">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                {user?.name}
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-300 font-medium uppercase tracking-widest text-lg">
                <FaUserCircle /> Verified Member
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 px-6 rounded-2xl transition-all hover:bg-white/10">
                <FaEnvelope className="text-purple-400" />
                <span className="text-gray-300 font-medium">{user?.email}</span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 px-6 rounded-2xl transition-all hover:bg-white/10">
                <FaCalendarAlt className="text-blue-400" />
                <span className="text-gray-400">Joined: {joinDate}</span>
              </div>
            </div>
          </div>

          <div className="w-full pt-4 text-center">
            <ProfileModal user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
