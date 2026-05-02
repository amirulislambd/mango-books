"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NavbarSignBTN = ({ user }) => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar className="w-8 h-8">
              <Avatar.Image alt="Online User" src={user?.image} />
              <Avatar.Fallback>
                {user?.name.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
          </div>
         <Link href={'/login'}>
         <Button
            onClick={handleSignOut}
            size="sm"
            className=" bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Logout
          </Button>
         </Link>
        </div>
      ) : (
       <Link href={'/login'}>    
       <Button
        size="sm"
        className=" bg-gradient-to-r from-blue-500 to-purple-500"
      >
        LogIn
      </Button></Link>
      )}
    </div>
  );
};

export default NavbarSignBTN;
