'use client'
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const UserShowcase = () => {

    const users = [
        { id: 1, name: "Amirul Islam", role: "Premium Reader", joined: "Jan 2026", color: "from-purple-500 to-indigo-600" },
        { id: 2, name: "Sarah Taylor", role: "Book Enthusiast", joined: "Feb 2026", color: "from-blue-500 to-cyan-500" },
        { id: 3, name: "Rakib Hasan", role: "Tech Reviewer", joined: "Mar 2026", color: "from-pink-500 to-rose-500" },
        { id: 4, name: "Nora Adams", role: "Academic Scholar", joined: "Apr 2026", color: "from-emerald-500 to-teal-500" },
        { id: 5, name: "Alex Johnson", role: "Fiction Lover", joined: "May 2026", color: "from-orange-500 to-amber-500" },
      ];

    return (
        <section className='my-5 md:my-10 '>
            <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col text-center items-center justify-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Growing Community</h2>
            <p className="text-gray-400">Meet the readers who make MangoBooks special.</p>
          </div>
          <div className="hidden md:block">
             <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium">
               {users.length * 10}+ Registered Users
             </span>
          </div>
        </div>
        </div>


<div className='shadow-md py-2'>
    <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={25}
    slidesPerView={1}
    loop={true}
    speed={5000}
    autoplay={{
        delay:0,
        disableOnInteraction:false,
        pauseOnMouseEnter: true,
    }}
    freeMode={true}
    pagination={{clickable:true}}
    breakpoints={{
        640:{slidesPerView:2},
        1024:{slidesPerView:3},
        1280:{slidesPerView:4},
    }}
    className="pb-14"
    >
{users.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="bg-[#161b22] border border-white/5 p-6 rounded-3xl hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image / Initial */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${user.color} flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {user.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-white font-bold text-lg mb-1">{user.name}</h3>
                  <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    {user.role}
                  </p>
                  
                  <div className="w-full pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-gray-500 text-[11px]">Joined {user.joined}</span>
                    <button className="text-[11px] text-white bg-white/5 px-3 py-1 rounded-lg hover:bg-purple-600 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
</div>

        </section>
    );
};

export default UserShowcase;