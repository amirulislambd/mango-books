import Image from 'next/image';
import React from 'react';
// import logo from '@/assets/logo.png';
import NavLinks from './NavLinks';
import { FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'All Books', href: '/allBooks' },
        { name: 'Profile', href: '/profile' },
        
    ];

    return (
        <div className='w-full py-4 border-b-2 border-zinc-200'>

        <div className=' flex items-center justify-between max-w-7xl mx-auto px-4'>
            <Link href={'/'} className='flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
            <span className='text-purple-400'><FaBookOpen/></span><h1>Mango Books</h1>
            </Link>
            <ul>
                <NavLinks links={links} />
            </ul>
        </div>
        </div>
    );
};

export default Navbar;