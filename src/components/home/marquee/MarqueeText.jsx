import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
    const marqueeTexts = [
        "📢 New Arrivals: The Midnight Library is now available for borrowing!",
        "✨ Special Discount on Premium Memberships - Join Today!",
        "📚 New Tech Books: Master Next.js and Tailwind CSS with our latest collection.",
        "🔥 Most Borrowed: 'The Art of Science' - Get your copy before it's gone!",
        "🚀 Update: Now you can update your profile and track your reading history.",
        "📖 Explore over 12+ premium titles in Story, Tech, and Science categories."
      ];
    return (
        <div className='bg-gradient-to-r via-indigo-200  from-blue-800 to-purple-800 my-5 md:my-10 py-3 px-2'>
        <Marquee
        // behavior = 'scroll'
        // direction='left'
        pauseOnHover={true}
        >
           <div className='flex gap-8 uppercase  font-bold text-lg md:text-xl lg:text-2xl'>
           {
                marqueeTexts.map((marquee,i)=> <span key={i}>{marquee}</span> )
            }
           </div>
        </Marquee>
        </div>
    );
};

export default MarqueeText;