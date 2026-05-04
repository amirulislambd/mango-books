"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from '@gravity-ui/icons';
import { FaHome } from 'react-icons/fa';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f111a] flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated 404 Text */}
        <h1 className="text-[150px] md:text-[200px] font-black text-white/10 leading-none select-none">
          404
        </h1>
        
        <div className="mt-[-60px] md:mt-[-80px]">
          <div className="relative inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 border border-purple-500/30 rounded-3xl mb-6 shadow-xl shadow-purple-900/20">
            <Image width={100} height={100} src={logo} alt='logo' className='z-10 object-cover h-20 w-20 rounded-full'/>
          <div className='w-16 h-16 blur-2xl absolute bg-amber-100 rounded-full  animate-ping'></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            The book you're looking for might have been moved, deleted, or never existed in our library.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Go Back Button */}
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>

            {/* Back to Home Button */}
            <Link 
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all active:scale-95"
            >
              <FaHome className="w-5 h-5" />
              Return Home
            </Link>
          </div>
        </div>

        {/* Quick Links or Help Text */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm italic">
            Need help? <Link href="/contact" className="text-purple-400 hover:underline">Contact our librarian</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;