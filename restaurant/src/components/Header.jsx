import React from 'react'
import Button from './ui/Button'

const Header = () => {
    return (
        <div className=" w-full bg-[url('https://res.cloudinary.com/dfwmhlhyo/image/upload/v1730825041/header-bg_smy9g5.png')] overflow-hidden bg-cover pt-12 md:pt-24 h-full md:h-screen">
            <div className='container mx-auto py-8 text-white relative p-7 md:p-0'>
                <div className='flex flex-col lg:flex-row items-center md:mt-96 gap-12'>
                    <div className='space-y-4 lg:space-y-9 md:absolute'>
                        <div>
                            <h1 className='font-bebas font-bold text-[48px] md:text-[120px] max-w-5xl leading-0 md:leading-[130px] pt-5 md:bg-custom-gradient tracking-wide md:tracking-widest relative z-20'>Taste the authentic
                                Saudi cuisine</h1>
                            <p className='md:max-w-lg text-xl'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                        </div>
                        <div className='pt-4 md:pt-0'>
                            <Button title={'Explore Menu'} />
                        </div>
                    </div>
                    <div className='md:absolute right-0'>
                        <img className='w-full md:w-[700px] h-[310.898px] md:h-[649px] object-cover right-0' src="header-img.jpeg" alt="header-image" />
                        <div className='absolute bottom-10 md:bottom-0 shadow-2xl flex items-center justify-center z-20 right-10 md:-right-16 bg-primary h-16 md:h-32 w-16 md:w-32 rounded-full'>
                            <div className='h-12 md:h-28 w-12 md:w-28 border-dashed border-2 flex items-center justify-center text-center border-[#0A1425] rounded-full'>
                                <h1 className='font-bebas font-bold text-[12.6px] md:text-4xl text-[#0A1425]'>Today
                                    Offer</h1>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -top-[360px] -right-[28px] z-30'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <path d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header