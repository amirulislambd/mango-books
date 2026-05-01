import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b1326]">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 blur-[100px] rounded-full animate-pulse"></div>

            <div className="relative flex flex-col items-center">

                <div className="relative w-24 h-24 mb-8">

                    <div className="absolute inset-0 border-4 border-indigo-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                    

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center animate-bounce">
                            <FaBookOpen />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-xl font-semibold text-white/90 tracking-[0.2em] uppercase font-inter mb-2">
                        mango books
                    </h2>
                    <div className="flex gap-1 justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-[bounce_1s_infinite_100ms]"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-[bounce_1s_infinite_200ms]"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-[bounce_1s_infinite_300ms]"></span>
                    </div>
                </div>
            </div>

    
            <p className="absolute bottom-10 text-white/30 text-xs uppercase tracking-widest font-medium">
                Preparing your digital sanctuary
            </p>
        </div>
    );
};

export default Loading;
