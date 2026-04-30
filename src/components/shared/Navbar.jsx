import Image from "next/image";
import React from "react";
// import logo from '@/assets/logo.png';
import NavLinks from "./NavLinks";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@heroui/react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/allBooks" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div  className="w-full py-2 md:py-4 border-b-2 border-white/10 rounded-full md:rounded-2xl  container mx-auto px-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg">
      <div className="flex gap-2 items-center">
        <NavMenu links={links} />
        <Link
          href={"/"}
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          <span className="text-purple-400">
            <FaBookOpen />
          </span>
          <h1>Mango Books</h1>
        </Link>
      </div>
      <div>
        <ul>
          <NavLinks links={links} />
        </ul>
      </div>
      <div className=" flex items-center justify-between md:flex-row-reverse gap-0">
        <Button
          size="sm"
          className=" bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
