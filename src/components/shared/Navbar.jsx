import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
// import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import logo from '@/assets/logo.png'
import NavMenu from "./NavMenu";
import NavbarSignBTN from "./NavbarSignBTN";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Navbar = async () => {
 
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const links = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/allBooks" },
    { name: "Profile", href: "/profile" },
  ];

 

  return (
    <div className=" md:bg-white/10 md:backdrop-blur-md shadow-xl z-50 sticky top-0 mx-2">
      <div className="w-full py-2 md:py-3 border-b-2 border-white/30  md:border-none rounded-full md:rounded-2xl  container mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <NavMenu links={links} />
          <Link
            href={"/"}
            className="flex items-center gap-1  md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            <span >
              <Image width={50} height={50} src={logo} alt='mango books'
              className="w-8 h-8 md:w-12 md:h-12 rounded-full "
              />
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
         <NavbarSignBTN user={user}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
