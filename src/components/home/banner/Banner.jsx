'use client'
import { Swiper, SwiperSlide } from 'swiper/react';


import screen1 from '@/assets/screen1.png'
import screen2 from '@/assets/screen2.png'
import screen3 from '@/assets/screen3.png'
import screen4 from '@/assets/screen4.png'
import screen5 from '@/assets/screen5.png'
import screen6 from '@/assets/screen6.png'
import screen7 from '@/assets/screen7.png'
import screen8 from '@/assets/screen8.png'
import screen9 from '@/assets/screen9.png'
import screen10 from '@/assets/screen10.png'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {

    
    const slides = [
        { 
            id: 1, 
            img: screen1, 
            topTitle: "Find Your Next Read", 
            mainTitle: "Discover a curated collection of academic excellence and modern literature. Your intellectual journey begins here.",
            btn1: "Browse Now",
            btn2: "View Collections"
        },
        { 
            id: 2, 
            img: screen2, 
            topTitle: "Explore New Worlds", 
            mainTitle: "Unlock the secrets of history and science through our premium collection of rare and modern books.",
            btn1: "Shop Now",
            btn2: "Explore All"
        },
        { 
            id: 3, 
            img: screen3, 
            topTitle: "Your Library, Anywhere", 
            mainTitle: "Access thousands of digital archives and storytelling masterpieces from the comfort of your home.",
            btn1: "Get Started",
            btn2: "Learn More"
        },
        { 
            id: 4, 
            img: screen4, 
            topTitle: "Premium Book Collection", 
            mainTitle: "A vast selection of international bestsellers and academic journals curated just for you.",
            btn1: "Discover",
            btn2: "Membership"
        },
        { 
            id: 5, 
            img: screen5, 
            topTitle: "Tech & Science Hub", 
            mainTitle: "Stay ahead in the digital age with our extensive library of technology and innovation guides.",
            btn1: "Learn More",
            btn2: "Resources"
        },
        { 
            id: 6, 
            img: screen6, 
            topTitle: "Storytelling at its Best", 
            mainTitle: "Immerse yourself in captivating narratives and cultural masterpieces from around the globe.",
            btn1: "Read Stories",
            btn2: "Collections"
        },
        { 
            id: 7, 
            img: screen7, 
            topTitle: "Modern Design Guides", 
            mainTitle: "Master the art of design and architecture with our professional resources and visual guides.",
            btn1: "Start Designing",
            btn2: "Portfolio"
        },
        { 
            id: 8, 
            img: screen8, 
            topTitle: "Digital Architecture", 
            mainTitle: "Explore the frontiers of digital spaces and modern urban design principles.",
            btn1: "Explore",
            btn2: "Gallery"
        },
        { 
            id: 9, 
            img: screen9, 
            topTitle: "The Future of Reading", 
            mainTitle: "Experience the next generation of intellectual growth in our private digital archives.",
            btn1: "Join Now",
            btn2: "Features"
        },
        { 
            id: 10, 
            img: screen10, 
            topTitle: "Join Mango Books Today", 
            mainTitle: "Become a part of our global community of readers and scholars today. Your journey starts now.",
            btn1: "Sign Up",
            btn2: "Contact Us"
        },
    ];
    
    return (
        <div className='my-5 md:my-10'>
            <Swiper
            modules={[Autoplay,Pagination,EffectFade]}
            effect='Fade'
            autoplay={{delay:4000, disableOnInteraction:false}}
            pagination={{clickable:true}}
            loop={true}
            >

            {
                slides.map((slide)=>(
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
                        <Image 
                                src={slide.img} 
                                alt={slide.topTitle} 
                                fill 
                                className="object-cover -z-10 rounded-lg"
                                priority
                            />     
                            <div className='absolute inset-0 bg-black/50 z-10'></div>   
                        <div className='absolute text-center text-white px-4 md:px-8 lg:px-16'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>{slide.topTitle}</h3>
                            <h2 className='text-xl md:text-3xl lg:text-4xl font-bold mt-2'>{slide.mainTitle}</h2>
                            <div className='mt-4 flex gap-4  items-center justify-center'> 
                                <button className='bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded'>
                                    {slide.btn1}
                                </button>
                                <button className='bg-gradient-to-r from-gray-500 to-gray-600 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded'>
                                    {slide.btn2}
                                </button>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    );
};

export default Banner;