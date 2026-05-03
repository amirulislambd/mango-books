"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react"

const NavbarSignBTN = ({ user }) => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex  items-center  ">
          <div className="relative flex flex-row-reverse  items-center md:border-l-2 md:border-t-2 md:border-b-2 border-indigo-500  rounded-lg rounded-r-none  p-1 gap-1">
            <Avatar className="w-8 h-8">
              <Avatar.Image alt="Online User" src={user?.image} />
              <Avatar.Fallback>
                {user?.name.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <p className="text-xs hidden md:flex border-y py-[1px]">{user?.name.toUpperCase()}</p>
          </div>
         <a href={'/login'} className="rounded-lg rounded-l-none px-2 py-1 md:py-[10px] bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer">
         <button
            onClick={handleSignOut}
            size="lg"
            className=" rounded-lg rounded-r- bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer"
          >
            Logout
          </button>
         </a>
        </div>
      ) : (
       <Link className="rounded-lg px-2 py-1 md:py-2 bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer" href={'/login'}>    
      
        LogIn
      </Link>
      )}
    </div>
  );
};

export default NavbarSignBTN;
