import React from 'react'
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonials = () => {
    return (
        <div className='relative overflow-hidden p-7 md:p-0'>
            <div className='container mx-auto space-y-16'>
                <div className='flex flex-col md:flex-row items-start w-full justify-between'>
                    <div className='space-y-4'>
                        <div className='flex gap-2 items-center font-secondary font-bold text-[#BD1F17]'>
                            <span>■</span>
                            <span>Crispy, Every Bite Taste</span>
                        </div>
                        <h1 className='font-bebas font-bold text-[#181818] text-4xl md:text-6xl tracking-wide uppercase'>What Some of my Customers Say</h1>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 md:grid-cols-6 h-auto w-full'>
                    <Swiper
                        className='col-span-2 h-full w-full order-1 md:order-none'
                        modules={[Virtual, Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 5000, 
                            disableOnInteraction: false,
                        }}
                        loop={true} 
                        spaceBetween={30}
                        slidesPerView={1}
                    >
                        {testimonials.map((slideContent, index) => (
                            <SwiperSlide key={index} virtualIndex={index} className='h-full w-full'>
                                <div className="bg-[#FEBF00] p-16  h-full w-full col-span-2 flex flex-col justify-between ">
                                    <span className="text-2xl font-bold absolute top-12 left-10">
                                        <img src="quotes.svg" alt="quotes" />
                                    </span>
                                    <p className="max-w-96 font-secondary text-[#0A1425] leading-9 text-xl text-left">
                                        {slideContent.quote}
                                    </p>
                                    <div className="flex flex-col justify-between">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[#0A1425] font-bold font-bebas text-lg">{slideContent.name}</p>
                                                <p className="text-[#333] font-secondary text-sm">{slideContent.location}</p>
                                            </div>
                                            <div className="rounded-full flex flex-col items-center w-10 h-10">
                                                <img
                                                    className="rounded-full w-full h-full object-contain"
                                                    src={slideContent.profilePic}
                                                    alt={`${slideContent.name} profile`}
                                                />
                                                <hr className="border-[#BD1F17] border-2 w-full mt-2" />
                                            </div>
                                        </div>
                                        <hr className="border border-[#BD1F17] mt-2" />
                                    </div>
                                    <div className="absolute bottom-10 left-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="78" viewBox="0 0 40 78" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z"
                                                fill="#243054"
                                            />
                                            <path d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z" fill="#243054" />
                                            <path d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z" fill="#243054" />
                                            <path d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z" fill="#243054" />
                                            <path d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z" fill="#243054" />
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='relative col-span-4'>
                        <img src="testimonial.png" alt="testimonial-food" />
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M25.2196 0.0168457C11.542 0.0168457 0.454163 11.1957 0.454163 24.9856C0.454163 38.7754 11.542 49.9543 25.2196 49.9543C38.8971 49.9543 49.985 38.7754 49.985 24.9856C49.9705 11.2019 38.8911 0.0315803 25.2196 0.0168457ZM35.6493 25.7811C35.4778 26.1279 35.1991 26.409 34.8551 26.5818V26.5907L20.7034 33.7247C19.8295 34.1649 18.7671 33.8076 18.3303 32.9265C18.2061 32.676 18.1422 32.3995 18.1437 32.1195V17.8517C18.1433 16.8667 18.9349 16.0679 19.9119 16.0673C20.1867 16.0672 20.4577 16.1316 20.7034 16.2554L34.8551 23.3894C35.7295 23.8287 36.0851 24.8996 35.6493 25.7811Z" fill="#FFC900" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:absolute top-0 -left-40 rotate-[-87.125deg]'>
                <img src="tomato.png" className='size-80' alt="tomato-img" />
            </div>
            <div className='hidden md:absolute bottom-20 -right-32 rotate-[34.695deg]'>
                <img src="veg.png" className='size-80' alt="tomato-img" />
            </div>
        </div>
    )
}

export default Testimonials

const testimonials = [
    {
        "quote": "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
        "name": "Khalid Al Dawsry",
        "location": "Jeddah, Saudi",
        "profilePic": "profile.png"
    },
    {
        "quote": "The ambiance and food were top-notch! The staff was attentive, and the chicken biryani was amazing. Highly recommended.",
        "name": "Sarah Ahmed",
        "location": "Dubai, UAE",
        "profilePic": "profile.png"
    },
    {
        "quote": "An authentic taste that brings back memories! The lamb was tender and full of flavor. I’ll definitely visit again.",
        "name": "Omar Farooq",
        "location": "Cairo, Egypt",
        "profilePic": "profile.png"
    },
    {
        "quote": "The best dining experience I've had recently. Everything was seasoned perfectly, and the service was quick and friendly.",
        "name": "Leila Khan",
        "location": "Riyadh, Saudi",
        "profilePic": "profile.png"
    },
    {
        "quote": "An unforgettable experience! The spices in the dishes were incredible. Will return with friends soon.",
        "name": "Hassan Ibrahim",
        "location": "Doha, Qatar",
        "profilePic": "profile.png"
    }
];
