import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './ui/Button';
import ProgressBar from 'react-customizable-progressbar';
const Features = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='flex gap-20 items-start justify-between w-full container mx-auto'>
                <div className='flex-1 relative '>
                    <img src="header-2.jpeg" alt="header-2" />
                    <div className='absolute top-6 left-6 bg-white rounded-xl p-6'>
                        <div className='flex gap-2 items-center'>
                            <ProgressBar
                                radius={45}
                                progress={85}
                                fillColor="#ffffff"
                                initialAnimation
                                strokeWidth={4}
                                strokeColor="#febf00"
                                trackStrokeWidth={6}
                                pointerRadius={7}
                                pointerStrokeWidth={4}
                                pointerStrokeColor="#febf00"
                            >
                                <div className="indicator font-bold">
                                    <div>
                                        <p className='font-bold font-sans text-2xl'>50+</p>
                                    </div>
                                </div>
                            </ProgressBar>
                            <h1 className='font-semibold text-[#181818] font-sans text-base'>Market <br />
                                Experiences</h1>
                        </div>
                    </div>
                </div>
                <div className='flex-1 '>
                    <Tabs>
                        <TabList className="flex space-x-4 border-b border-[#B52B1D] text-[#333] font-medium">
                            <Tab
                                className="px-4 py-2 cursor-pointer transition-colors duration-200 focus:outline-none"
                                selectedClassName="bg-[#B52B1D] text-white border-b border-[#B52B1D]">
                                About
                            </Tab>
                            <Tab
                                className="px-4 py-2 cursor-pointer transition-colors duration-200 focus:outline-none"
                                selectedClassName="bg-[#B52B1D] text-white border-b border-[#B52B1D]">
                                Experience
                            </Tab>
                            <Tab
                                className="px-4 py-2 cursor-pointer transition-colors duration-200 focus:outline-none"
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
            <div className='absolute size-96 -right-72 bottom-20 -rotate-45 '>
                <img src="sideimage.png" alt="sideImage" />
            </div>
            <div className='container mx-auto py-20'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='size-20 flex items-center justify-center shadow-lg rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M34.13 9.46181L22.4684 3.13015C21.755 2.73681 20.905 2.50348 20 2.50348C19.0984 2.50348 18.25 2.73348 17.5117 3.14015L17.5384 3.12681L5.86836 9.46515C4.36002 10.2901 3.35169 11.8585 3.33502 13.6635V26.3351C3.35169 28.1435 4.36336 29.7135 5.84669 30.5251L5.87169 30.5385L17.5334 36.8685C18.2217 37.2468 19.0417 37.4735 19.9134 37.4835H19.9167C19.9467 37.4851 19.9717 37.5001 20.0017 37.5001C20.0317 37.5001 20.0534 37.4851 20.0817 37.4835C20.955 37.4751 21.775 37.2485 22.49 36.8568L22.4634 36.8701L34.1367 30.5318C35.6434 29.7068 36.65 28.1401 36.6684 26.3368V13.6618C36.65 11.8535 35.64 10.2835 34.1567 9.47348L34.1317 9.46015L34.13 9.46181ZM19.135 6.05348C19.385 5.91515 19.6834 5.83515 20 5.83515C20.32 5.83515 20.62 5.91681 20.88 6.06181L20.87 6.05681L31.15 11.6385L27.1317 13.9635L16.1884 7.65181L19.135 6.05348ZM20 18.0901L8.84836 11.6385L12.7534 9.51848L23.8034 15.8901L20 18.0901ZM7.46836 27.6135C6.99836 27.3668 6.68169 26.8885 6.66669 26.3351V14.2285L18.3334 20.9785V33.5118L7.46836 27.6135ZM32.5384 27.6085L21.6684 33.5101V20.9768L33.335 14.2268V26.3301C33.3217 26.8835 33.0067 27.3618 32.5467 27.6035L32.5384 27.6068V27.6085Z" fill="#BD1F17" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='font-bebas font-bold text-3xl text-[#0A1425]'>FAST DELIVERY</h1>
                            <p className='font-inter text-[#0A1425]'>Within 30 minutes</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='size-20 flex items-center justify-center shadow-lg rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M11.0033 29.5034C11.1583 29.7368 11.3167 29.9751 11.4783 30.2234C11.8333 30.8618 12.505 31.2851 13.275 31.2851C13.4083 31.2851 13.5383 31.2718 13.665 31.2484L13.6517 31.2501C14.5917 31.1301 15.545 31.0118 16.4867 30.9184C16.7217 31.0634 16.9517 31.2134 17.1817 31.3634L17.34 31.4668C16.8922 32.8445 16.4489 34.2201 16.01 35.5934L13.6783 33.7284L13.5233 33.6501C13.1917 33.4784 12.7983 33.3784 12.3833 33.3784C12.285 33.3784 12.1883 33.3834 12.0933 33.3951L12.105 33.3934L9.70999 33.5301L11.0033 29.5034ZM10.315 26.1968L7.38999 35.3068C7.46555 35.3112 7.54055 35.3134 7.61499 35.3134C7.68944 35.3134 7.76444 35.3112 7.83999 35.3068L12.2533 35.0568C12.2917 35.0501 12.335 35.0468 12.38 35.0468C12.5233 35.0468 12.6567 35.0818 12.7767 35.1418L12.7717 35.1401L16.7667 38.3318H17V37.9634C17.735 35.6568 18.4717 33.3668 19.2233 31.0584C19.3067 30.8084 19.2567 30.6901 19.0233 30.5568C18.3883 30.1718 17.7867 29.7534 17.1517 29.3701C16.9967 29.2851 16.81 29.2351 16.6133 29.2351L16.55 29.2368C15.4967 29.3368 14.4267 29.4701 13.3733 29.6051C13.3433 29.6134 13.31 29.6184 13.2733 29.6184C13.1167 29.6184 12.9817 29.5251 12.9217 29.3918L12.92 29.3901C12.3183 28.4534 11.75 27.6684 11.2483 26.7818C11.0533 26.4518 10.71 26.2284 10.315 26.1968ZM29.0617 29.4851L30.3583 33.5318L27.9433 33.4018C27.81 33.3734 27.6567 33.3568 27.5 33.3568C27.2217 33.3568 26.955 33.4084 26.71 33.5034L26.725 33.4984L26.4733 33.5934L24.055 35.5601C24.0117 35.419 23.9672 35.2773 23.9217 35.1351L23.6383 34.2451C23.345 33.3218 23.05 32.3934 22.75 31.4701C23.0333 31.2918 23.3233 31.1034 23.625 30.9034L26.4217 31.2518C26.5333 31.2734 26.6633 31.2868 26.795 31.2868C27.5733 31.2868 28.25 30.8534 28.5967 30.2151L28.6017 30.2051C28.7517 29.9618 28.9033 29.7234 29.0583 29.4851H29.0617ZM29.7567 26.1968C29.3583 26.2334 29.02 26.4568 28.8233 26.7768L28.82 26.7818C28.235 27.7184 27.6833 28.5201 27.1483 29.3901C27.0867 29.5268 26.9533 29.6201 26.7967 29.6201C26.7617 29.6201 26.7267 29.6151 26.695 29.6068H26.6983L23.605 29.2218C23.56 29.2134 23.5067 29.2101 23.4533 29.2101C23.2333 29.2101 23.03 29.2834 22.8667 29.4068L22.8683 29.4051C22.2667 29.8068 21.665 30.1901 21.0467 30.5584C20.9967 30.5768 20.955 30.6051 20.92 30.6401C20.8567 30.7034 20.8183 30.7918 20.8183 30.8884C20.8183 30.9518 20.835 31.0118 20.865 31.0618L20.8633 31.0601C21.365 32.5818 21.85 34.1201 22.335 35.6401C22.62 36.5434 22.8867 37.4451 23.1533 38.3318H23.2867L27.3167 35.0568C27.3717 35.0351 27.435 35.0234 27.5 35.0234C27.565 35.0234 27.63 35.0351 27.6867 35.0584L27.6833 35.0568L32.6817 35.3234L29.7567 26.1968ZM17.0517 26.9818L14.41 27.3001C14.3783 27.3101 14.34 27.3151 14.3017 27.3151C14.1383 27.3151 13.9983 27.2134 13.9433 27.0684L13.9417 27.0651C13.5067 26.3468 13.0717 25.6268 12.6217 24.9251C12.4883 24.7384 12.3067 24.5934 12.095 24.5101L12.0867 24.5068C11.3017 24.2051 10.415 23.9384 9.67999 23.6718C9.62499 23.6634 9.57499 23.6434 9.52999 23.6168L9.53166 23.6184C9.42333 23.5501 9.35166 23.4301 9.35166 23.2934C9.35166 23.2618 9.35499 23.2318 9.36166 23.2034V23.2068C9.30999 22.2068 9.20999 21.2818 9.05833 20.3718L9.07833 20.5151C9.03833 20.3784 8.96999 20.2601 8.87833 20.1634C8.25999 19.5284 7.62499 18.9101 6.98999 18.2918C6.89166 18.2251 6.82666 18.1134 6.82666 17.9868C6.82666 17.9218 6.84333 17.8584 6.87499 17.8051L6.87333 17.8068C7.17333 16.9868 7.47499 16.1351 7.75999 15.3501C7.78333 15.2668 7.79666 15.1718 7.79666 15.0751C7.79666 14.9784 7.78333 14.8818 7.75833 14.7918L7.75999 14.7984C7.47499 13.9801 7.17499 13.1268 6.87333 12.3401C6.84666 12.2868 6.82999 12.2251 6.82999 12.1584C6.82999 12.0284 6.89166 11.9118 6.98833 11.8384L8.81166 10.1151C8.97833 9.9601 9.08666 9.74177 9.09499 9.49843C9.09499 8.6451 9.27833 7.8251 9.36333 6.92177C9.36333 6.9201 9.36333 6.91843 9.36333 6.91677C9.36333 6.7501 9.48499 6.61177 9.64499 6.58677C10.48 6.30177 11.3183 6.0351 12.1217 5.73343C12.3133 5.6451 12.4717 5.51343 12.5883 5.35177L12.59 5.34843C13.0583 4.6301 13.51 3.9101 13.945 3.1751C14.0133 3.02177 14.1667 2.91677 14.3417 2.91677C14.3733 2.91677 14.4033 2.9201 14.4317 2.92677H14.4283C15.265 3.04343 16.1 3.1601 16.9533 3.22677C17.0083 3.23843 17.0717 3.24343 17.1383 3.24343C17.2967 3.24343 17.445 3.20677 17.5783 3.1401L17.5733 3.14343C18.325 2.70843 19.045 2.2401 19.7633 1.7551C19.825 1.7001 19.9067 1.6651 19.9967 1.6651C20.0867 1.6651 20.1683 1.69843 20.2317 1.7551C20.9833 2.2401 21.72 2.7251 22.4717 3.17677C22.5983 3.25343 22.7517 3.29843 22.915 3.29843C22.9467 3.29843 22.98 3.29677 23.01 3.29343H23.0067C23.8767 3.2101 24.6783 3.09343 25.615 2.9751C25.6383 2.9701 25.6667 2.96677 25.6933 2.96677C25.845 2.96677 25.975 3.05843 26.0317 3.1901L26.0333 3.19177C26.485 3.94343 26.9367 4.69677 27.42 5.43177C27.5233 5.5801 27.665 5.6951 27.8317 5.76343L27.8383 5.7651C28.6583 6.06677 29.51 6.3501 30.3133 6.61843C30.4933 6.64343 30.6317 6.79677 30.6317 6.98343C30.6317 6.9901 30.6317 6.99677 30.6317 7.0051C30.7205 7.90732 30.8205 8.80843 30.9317 9.71177C30.965 9.86343 31.0417 9.9951 31.1483 10.0968C31.7667 10.7318 32.4017 11.3501 33.0367 11.9684C33.1233 12.0301 33.1783 12.1284 33.1783 12.2418C33.1783 12.3018 33.1633 12.3568 33.135 12.4051L33.1367 12.4034C32.8367 13.2234 32.535 14.0751 32.25 14.8618C32.2217 14.9518 32.2067 15.0551 32.2067 15.1634C32.2067 15.2718 32.2233 15.3751 32.2517 15.4718L32.25 15.4651C32.5167 16.2834 32.8183 17.1368 33.12 17.9051C33.1517 17.9584 33.1717 18.0234 33.1717 18.0918C33.1717 18.2134 33.1117 18.3218 33.0217 18.3884C32.3867 18.9901 31.7833 19.5918 31.1817 20.2101C31.045 20.3584 30.95 20.5468 30.915 20.7551L30.9133 20.7618C30.7967 21.6318 30.7133 22.4334 30.63 23.3701C30.6233 23.5501 30.4883 23.6968 30.315 23.7218C29.495 24.0068 28.6417 24.2734 27.8383 24.5734C27.6683 24.6484 27.5283 24.7634 27.4217 24.9051L27.42 24.9084C26.9517 25.6434 26.4833 26.3968 26.05 27.1484C25.9817 27.2784 25.8483 27.3651 25.695 27.3651C25.655 27.3651 25.6167 27.3584 25.58 27.3484H25.5833C24.7367 27.2262 23.8839 27.1262 23.025 27.0484C23.0083 27.0468 22.99 27.0468 22.9717 27.0468C22.77 27.0468 22.58 27.1034 22.4183 27.2001L22.4233 27.1968C21.6883 27.6318 20.9683 28.0984 20.25 28.5834C20.185 28.6368 20.1 28.6701 20.0083 28.6701C19.9167 28.6701 19.8317 28.6368 19.765 28.5834L17.5583 27.1651C17.4283 27.1034 17.2683 27.0418 17.1033 26.9901L17.0733 26.9818H17.0517ZM10.7 15.0968C10.7 15.1018 10.7 15.1068 10.7 15.1134C10.7 20.2468 14.8617 24.4084 19.995 24.4084C25.1283 24.4084 29.29 20.2468 29.29 15.1134C29.29 9.9801 25.1283 5.81843 19.995 5.81843C16.1533 5.81843 12.855 8.1501 11.44 11.4751L11.4167 11.5351C10.9667 12.5868 10.7033 13.8101 10.7017 15.0934V15.0951L10.7 15.0968ZM20.0117 7.9751V9.64177C23.03 9.64677 25.475 12.0951 25.475 15.1134C25.475 18.1351 23.025 20.5851 20.0033 20.5851C20 20.5851 19.9967 20.5851 19.995 20.5851C16.9767 20.5801 14.5317 18.1318 14.5317 15.1134C14.5317 12.1068 16.9583 9.6651 19.96 9.64177H19.9617L20.0117 7.9751ZM20.0117 7.9751H19.945C16.0317 7.99343 12.8667 11.1701 12.8667 15.0868C12.8667 19.0134 16.05 22.1984 19.9783 22.1984C23.9067 22.1984 27.09 19.0151 27.09 15.0868C27.09 11.1718 23.925 7.9951 20.0133 7.9751H20.0117Z" fill="#BD1F17" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='font-bebas font-bold text-3xl text-[#0A1425]'>FAST DELIVERY</h1>
                            <p className='font-inter text-[#0A1425]'>Within 30 minutes</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='size-20 flex items-center justify-center shadow-lg rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M34.36 10.0368L30.4717 4.70344C29.8583 3.8701 28.8817 3.33344 27.7783 3.33344H12.2233C11.12 3.33344 10.1433 3.86844 9.53666 4.69344L9.53 4.70344L5.64166 10.0368C5.24166 10.5801 5.00166 11.2618 5.00166 12.0001V30.6668C5.00166 30.6751 5.00166 30.6868 5.00166 30.6968C5.00166 33.9784 7.65 36.6418 10.925 36.6668H29.075C32.3533 36.6418 35.0017 33.9784 35.0017 30.6968C35.0017 30.6868 35.0017 30.6751 35.0017 30.6651V12.0001C35.0017 11.2618 34.7617 10.5801 34.355 10.0268L34.3617 10.0368H34.36ZM12.2217 6.66677H27.7767L30.2067 10.0001H9.79L12.2217 6.66677ZM31.6667 30.6668C31.6667 30.6768 31.6667 30.6901 31.6667 30.7034C31.6667 32.1434 30.51 33.3118 29.0767 33.3334H10.9267C9.49 33.3118 8.33333 32.1434 8.33333 30.7034C8.33333 30.6901 8.33333 30.6784 8.33333 30.6651V13.3334H31.6667V30.6668ZM12.5 17.0834C12.5 16.1634 13.2467 15.4168 14.1667 15.4168C15.0867 15.4168 15.8333 16.1634 15.8333 17.0834C15.8333 19.3851 17.6983 21.2501 20 21.2501C22.3017 21.2501 24.1667 19.3851 24.1667 17.0834C24.1667 16.1634 24.9133 15.4168 25.8333 15.4168C26.7533 15.4168 27.5 16.1634 27.5 17.0834C27.5 21.2251 24.1417 24.5834 20 24.5834C15.8583 24.5834 12.5 21.2251 12.5 17.0834Z" fill="#BD1F17" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='font-bebas font-bold text-3xl text-[#0A1425]'>FAST DELIVERY</h1>
                            <p className='font-inter text-[#0A1425]'>Within 30 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features