"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  RiMenuFold2Fill,
  RiMenuUnfold2Line,
} from "react-icons/ri";



const NavLinks = ({ links }) => {
 

  const pathName=usePathname();

 

  return (
   
    <div className="flex items-center justify-between  w-full">
      <div className="space-x-4 hidden md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={` px-2 py-1 text-lg text-center text-white rounded-md  transition-all duration-300 hover:scale-105 font-medium text-gray-700 ${pathName === link.href && 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}
          >
           {link.name}
          </Link>
        ))}
      </div>
      
     
    </div>
  );
};

export default NavLinks;
