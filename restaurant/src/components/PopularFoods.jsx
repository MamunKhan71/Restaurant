import React from 'react'

const PopularFoods = () => {
    return (
        <div className='bg-[#FBF7F2] py-28 relative'>
            <div className='container mx-auto overflow-hidden'>
                <div className='flex items-start w-full justify-between '>
                    <div className='space-y-4'>
                        <div className='flex gap-2 items-center font-secondary font-bold text-[#BD1F17]'>
                            <span>■</span>
                            <span>Crispy, Every Bite Taste</span>
                        </div>
                        <h1 className='font-bebas font-bold text-[#181818] text-6xl tracking-wide'>POPULAR FOOD ITEMS</h1>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <div className='rounded-full bg-white size-16 flex items-center justify-center text-[#BD1F17] shadow-xl hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M10.9718 18.941C11.2354 18.6773 11.3835 18.3197 11.3835 17.9468C11.3835 17.5739 11.2354 17.2163 10.9718 16.9526L4.01088 9.99161L10.9718 3.03068C11.228 2.76545 11.3697 2.41023 11.3665 2.04152C11.3633 1.6728 11.2154 1.3201 10.9547 1.05937C10.694 0.798637 10.3413 0.650745 9.97254 0.647541C9.60382 0.644337 9.2486 0.786079 8.98338 1.04224L1.02822 8.9974C0.764588 9.26111 0.616488 9.61873 0.616488 9.99161C0.616488 10.3645 0.764588 10.7221 1.02822 10.9858L8.98338 18.941C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.941Z" fill="#0A1425" />
                            </svg>
                        </div>
                        <div className='rounded-full bg-white size-16 flex items-center justify-center text-[#BD1F17] shadow-xl hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922Z" fill="#BD1F17" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-8 mt-16'>
                    <div className='bg-white p-8 space-y-5'>
                        <img className='h-32 mx-auto' src="burger.jpeg" alt="burger" />
                        <hr className='border-2 w-16 mx-auto border-[#BD1F17]' />
                        <div>
                            <h1 className='font-bebas font-bold text-[#0A1425] text-2xl text-center'>vegetables burger</h1>
                            <p className='font-inter text-[#0A1425] text-center'>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 space-y-5'>
                        <img className='h-32 mx-auto' src="pizza.png" alt="burger" />
                        <hr className='border-2 w-16 mx-auto border-[#BD1F17]' />
                        <div>
                            <h1 className='font-bebas font-bold text-[#0A1425] text-2xl text-center'>vegetables burger</h1>
                            <p className='font-inter text-[#0A1425] text-center'>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 space-y-5'>
                        <img className='h-32 mx-auto' src="french.jpeg" alt="burger" />
                        <hr className='border-2 w-16 mx-auto border-[#BD1F17]' />
                        <div>
                            <h1 className='font-bebas font-bold text-[#0A1425] text-2xl text-center'>vegetables burger</h1>
                            <p className='font-inter text-[#0A1425] text-center'>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 space-y-5'>
                        <img className='h-32 mx-auto' src="nuggets.jpeg" alt="burger" />
                        <hr className='border-2 w-16 mx-auto border-[#BD1F17]' />
                        <div>
                            <h1 className='font-bebas font-bold text-[#0A1425] text-2xl text-center'>vegetables burger</h1>
                            <p className='font-inter text-[#0A1425] text-center'>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>
                </div>
                <div className='absolute size-96 -left-64 bottom-32 -rotate-[68deg] '>
                    <img className='overflow-clip' src="sideimage.png" alt="sideImage" />
                </div>
            </div>
        </div>
    )
}

export default PopularFoods