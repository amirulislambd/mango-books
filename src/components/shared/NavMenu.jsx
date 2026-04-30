"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuFold2Fill, RiMenuUnfold2Line } from "react-icons/ri";

const NavMenu = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden cursor-pointer p-2 rounded text-2xl font-semibold">
      {!isMenuOpen ? (
          <RiMenuFold2Fill onClick={handleMenuClick} />
    ) : (
          <RiMenuUnfold2Line onClick={handleMenuClick} />
      )}

      <div
        className={` md:hidden flex flex-col gap-2 absolute  p-5 rounded-lg bg-white/10 backdrop-blur-md shadow-sl  border-2 border-zinc-500  top-14 transition-all duration-300 ease-in-out origin-top-left  ${isMenuOpen ? "scale-100 opacity-100 translate-y-0 translate-0" : "opacity-0 translate-x-4 scale-0"}`}
      >
        {links.map((link) => (
          <Link
            onClick={onCloseMenu}
            key={link.name}
            href={link.href}
            className={` text-lg text-center w-full px-3 text-white rounded-md hover:bg-zinc-100/30 font-medium text-gray-700 ${pathName === link.href && "bg-gradient-to-r from-blue-500 to-purple-500 text-white"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
