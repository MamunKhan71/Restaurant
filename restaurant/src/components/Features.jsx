import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './ui/Button';
import ProgressBar from 'react-customizable-progressbar';
const Features = () => {
    return (
        <div className='flex gap-20 items-start justify-between w-full'>
            <div className='flex-1 relative'>
                <img src="header-2.jpeg" alt="header-2" />
                <div className='absolute top-10 left-10 bg-white rounded-xl p-6'>
                    <h1 className='font-semibold text-[#181818]'>Market
                        Experiences</h1>
                    <ProgressBar
                        radius={100}
                        progress={85}
                        fillColor="#ffffff"
                        initialAnimation
                        strokeWidth={10}
                        strokeColor="#febf00"
                        trackStrokeWidth={13}
                        pointerRadius={12}
                        pointerStrokeWidth={10}
                        pointerStrokeColor="#febf00"
                    >
                        <div className="indicator font-bold">
                            <div>
                                <p className='font-black'>50+</p>
                            </div>
                        </div>
                    </ProgressBar>
                </div>
            </div>
            <div className='flex-1'>
                <Tabs>
                    <TabList className="flex space-x-4 border-b border-[#B52B1D] text-[#333] font-medium">
                        <Tab
                            className="px-4 py-2 cursor-pointer transition-colors duration-200"
                            selectedClassName="bg-[#B52B1D] text-white border-b border-[#B52B1D]">
                            About
                        </Tab>
                        <Tab
                            className="px-4 py-2 cursor-pointer transition-colors duration-200"
                            selectedClassName="bg-[#B52B1D] text-white border-b border-[#B52B1D]">
                            Experience
                        </Tab>
                        <Tab
                            className="px-4 py-2 cursor-pointer transition-colors duration-200"
                            selectedClassName="bg-[#B52B1D] text-white border-b border-[#B52B1D]">
                            Contact
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='mt-8 space-y-5'>
                            <h1 className='font-bebas font-bold text-6xl leading-[62px] tracking-wider'>Exceptional culinary experience and delicious food</h1>
                            <p className='text-normal text-base font-normal font-secondary leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                            <div className='flex gap-8 items-center'>
                                <Button title={'About More'} />
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.17 22.0351C19.1 22.0351 19.021 22.0311 18.942 22.0241C15.833 21.6771 13.025 20.6301 10.601 19.0441L10.674 19.0891C8.35401 17.5941 6.43801 15.6761 4.98901 13.4301L4.94401 13.3561C3.40201 11.0021 2.35601 8.19008 2.02201 5.16408L2.01401 5.07908C2.00601 4.99908 2.00101 4.90508 2.00101 4.81108C2.00101 3.34808 3.11901 2.14708 4.54701 2.01308L4.55801 2.01208C4.64101 2.00408 4.72501 2.00008 4.80901 2.00008H7.55201C8.97901 2.00408 10.156 3.07208 10.33 4.45208L10.331 4.46608C10.472 5.34808 10.678 6.13008 10.95 6.88008L10.921 6.78908L10.952 6.88708C11.036 7.14108 11.084 7.43408 11.084 7.73908C11.084 8.50908 10.774 9.20708 10.271 9.71408L9.67101 10.3131C10.726 11.9321 12.068 13.2731 13.635 14.2971L13.687 14.3291L14.282 13.7341C14.791 13.2301 15.491 12.9191 16.264 12.9191C16.617 12.9191 16.954 12.9841 17.265 13.1021L17.246 13.0961C17.918 13.3561 18.703 13.5591 19.517 13.6711L19.573 13.6771C20.951 13.8721 22 15.0451 22 16.4621C22 16.4811 22 16.5001 21.999 16.5191V16.5161V19.2201C21.999 19.2221 21.999 19.2241 21.999 19.2251C21.999 20.7731 20.748 22.0291 19.201 22.0371L19.17 22.0351ZM7.54201 4.00008H4.80901C4.56101 4.00608 4.34101 4.11708 4.19001 4.29008L4.18901 4.29108C4.07201 4.43008 4.00101 4.61108 4.00101 4.80808C4.00101 4.83408 4.00201 4.86008 4.00501 4.88608V4.88308C4.31301 7.66208 5.24801 10.1731 6.66601 12.3401L6.62601 12.2751C7.96301 14.3521 9.67801 16.0681 11.688 17.3661L11.754 17.4061C13.853 18.7841 16.36 19.7211 19.059 20.0271L19.137 20.0341C19.149 20.0351 19.163 20.0351 19.178 20.0351C19.629 20.0351 19.996 19.6721 20.002 19.2221V16.4781C20.002 16.4721 20.002 16.4651 20.002 16.4581C20.002 16.0511 19.701 15.7141 19.31 15.6571L19.306 15.6561C18.276 15.5161 17.346 15.2751 16.463 14.9381L16.55 14.9671C16.465 14.9331 16.366 14.9141 16.263 14.9141C16.043 14.9141 15.843 15.0031 15.698 15.1471L14.55 16.2951C14.369 16.4761 14.119 16.5881 13.843 16.5881C13.661 16.5881 13.491 16.5401 13.344 16.4551L13.349 16.4581C10.914 15.0561 8.94601 13.0881 7.58401 10.7281L7.54401 10.6531C7.46201 10.5111 7.41301 10.3401 7.41301 10.1591C7.41301 9.88308 7.52501 9.63307 7.70601 9.45208L8.85501 8.30308C8.99801 8.15708 9.08601 7.95808 9.08601 7.73708C9.08601 7.64908 9.07201 7.56508 9.04601 7.48608L9.04801 7.49208L9.01801 7.39708C8.73801 6.63308 8.50501 5.72808 8.36001 4.79408L8.34901 4.71108C8.29701 4.30808 7.95701 4.00008 7.54401 4.00008H7.54201ZM17.85 10.7181C17.366 10.7171 16.963 10.3731 16.871 9.91608L16.87 9.91008C16.59 8.49308 15.491 7.39408 14.097 7.11808L14.075 7.11408C13.611 7.02108 13.266 6.61708 13.266 6.13208C13.266 5.58008 13.714 5.13208 14.266 5.13208C14.334 5.13208 14.4 5.13908 14.463 5.15108L14.457 5.15008C16.675 5.58808 18.395 7.30808 18.827 9.49108L18.833 9.52608C18.845 9.58407 18.851 9.65007 18.851 9.71708C18.851 10.2691 18.403 10.7171 17.851 10.7171L17.85 10.7181ZM21.481 10.7081C20.968 10.7071 20.546 10.3211 20.488 9.82408V9.81908C20.117 6.48308 17.492 3.86108 14.187 3.49708L14.155 3.49408C13.652 3.43608 13.265 3.01308 13.265 2.49908C13.265 2.46108 13.267 2.42308 13.271 2.38608V2.39108C13.335 1.88808 13.76 1.50208 14.276 1.50208C14.311 1.50208 14.346 1.50408 14.38 1.50708H14.376C18.644 1.97608 22.002 5.33108 22.473 9.55708L22.477 9.59807C22.481 9.63107 22.483 9.67008 22.483 9.70907C22.483 10.2221 22.097 10.6451 21.599 10.7031H21.594C21.561 10.7071 21.524 10.7091 21.486 10.7091C21.485 10.7091 21.483 10.7091 21.482 10.7091L21.481 10.7081Z" fill="#BD1F17" />
                                    </svg>
                                    <p className='font-bold text-[#0A1425]'>+88 3426 739 485</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="p-4">Experience</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="p-4">Contact</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Features