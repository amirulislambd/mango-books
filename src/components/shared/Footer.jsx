import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import logo from '@/assets/logo.png'
import { MdAlternateEmail, MdOutlineShare } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-indigo-950 px-2 md:mx-10">
        <div className="hidden lg:flex flex-col text-center py-10 container mx-auto px-4 space-y-3 md:space-y-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold"> Infinite Stories Await</h1>
        <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
          Mango Book provides a seamless, premium interface for the modern reader to explore the world's greatest literature.
        </p>
        </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 container mx-auto px-4">
      <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-start ">
          <Link
            href={"/"}
            className="flex items-center gap-2  md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            <span >
              <Image width={50} height={50} src={logo} alt='mango books'
              className="w-8 h-8 md:w-14 md:h-14 rounded-full "
              />
            </span>
            <h1>Mango Books</h1>
          </Link>

          <p className="text-sm ">
          Elevating the borrowing experience for the modern era. Knowledge
          accessible with a single click.
        </p>
        </div>
        
      <div className="hidden md:flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-2">Library</h2>
        <ul>
          <li>
            <Link href="/allBooks" className="hover:underline"> All Books</Link>
          </li>
            <li>
            <Link href="/profile" className="hover:underline"> Research Papers</Link>
            </li>
            <li>
            <Link href="#" className="hover:underline"> Digital Archives</Link>
            </li>
            <li>
            <Link href="#" className="hover:underline">Audiobooks</Link>
            </li>
          
        </ul>       
      </div>

      <div className="hidden md:flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-2">Company</h2>
        <ul>
          <li>
            <Link href="#" className="hover:underline"> About Us</Link>      
            </li>
            <li>
            <Link href="#" className="hover:underline"> Contact</Link>
            </li>
            <li>
            <Link href="#" className="hover:underline"> Careers</Link>
            </li>
            <li>
            <Link href="#" className="hover:underline"> Blog</Link>
            </li>
        </ul>
      </div>
      <div className="hidden lg:flex flex-col gap-4 max-w-[300px]">
        <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
        <p>Subscribe to our newsletter for updates and offers.</p>
        <form className="mt-4 flex items-center">
          <input  type="email"    placeholder="Enter your email"    className=" px-2 py-1 outline-none rounded-l-md border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"  />
          <Button size="sm" type="submit" className="p-3 p bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-full hover:bg-gradient-to-l"><span className="hover:-rotate-45 transition-transform duration-300">
          <AiOutlineSend />
            </span> </Button>
        </form>
      </div>
      </div>
      <div className="border-t border-gray-600 md:mt-8"></div>
      <p className="text-center text-gray-400 py-2 md:py-4">
        &copy; 2026 Mango Books. All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
