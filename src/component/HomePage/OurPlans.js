import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const OurPlans = () => {
    return (
        <div className='bg-background-color h-auto mt-28 px-6 sm:px-24 '>
            <div className="pt-11">
                <div>
                    <h1 className='font-semibold text-3xl sm:text-5xl leading-[60px]'>Our Plans</h1>
                    <p className='font-normal text-lg sm:text-xl leading-6 text-secondry-gray'>
                        Discover our customizable options designed to fit every budget, ensuring you can secure your important documents without compromise
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-24'>
                    <p className='text-secondry-gray font-normal text-base leading-4'>Save 20% extra on annual plan</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-900"></div>
                    </label>
                </div>

                <div className='flex gap-10 flex-wrap mt-6 justify-center pb-10 '>

                    <div className='w-full sm:w-[356px] h-auto sm:h-[403px] rounded-[20px] bg-white'>
                        <div className='bg-bg-ourplan rounded-t-3xl h-[60px] text-white py-5 pl-6 text-xl font-semibold'>Basic</div>
                        <div className='flex mt-6 items-center pl-10 gap-1'>
                            <Icon icon="fa:rupee" width="30" height="40" className="color: #000" />
                            <p className='text-6xl'>0</p>
                        </div>
                        <ul className='list-disc px-14 mt-6 text-base font-normal text-secondry-gray'>
                            <li>Store 100 document (5 MB each)</li>
                            <li>Save 25 media files (25 MB each)</li>
                            <li>Help center access</li>
                            <li>Email support</li>
                        </ul>
                        <button className='bg-black text-white w-32 h-10 rounded-lg ml-7 mt-10'>Get started</button>
                    </div>


                    <div className='w-full sm:w-[356px] h-auto sm:h-[403px] rounded-[20px] bg-white'>
                        <div className='bg-bg-ourplan rounded-t-3xl h-[60px] text-white py-5 pl-6 text-xl font-semibold'>Premium</div>
                        <div className='flex mt-6 items-center pl-10 gap-1'>
                            <Icon icon="fa:rupee" width="30" height="40" className="color: #000" />
                            <p className='text-6xl'>149 <span className='text-secondry-gray font-normal text-3xl leading-9'>/month</span></p>
                        </div>
                        <ul className='list-disc px-14 mt-6 text-base font-normal text-secondry-gray'>
                            <li>Store 100 document (5 MB each)</li>
                            <li>Save 25 media files (25 MB each)</li>
                            <li>Help center access</li>
                            <li>Email support</li>
                        </ul>
                        <button className='bg-black text-white w-32 h-10 rounded-lg ml-7 mt-10'>Get started</button>
                    </div>


                    <div className='w-full sm:w-[356px] h-auto sm:h-[403px] rounded-[20px] bg-white'>
                        <div className='bg-bg-ourplan rounded-t-3xl h-[60px] text-white py-5 pl-6 text-xl font-semibold'>Elite</div>
                        <div className='flex mt-6 items-center pl-10 gap-1'>
                            <Icon icon="fa:rupee" width="30" height="40" className="color: #000" />
                            <p className='text-6xl'>149 <span className='text-secondry-gray font-normal text-3xl leading-9'>/month</span></p>
                        </div>
                        <ul className='list-disc px-14 mt-6 text-base font-normal text-secondry-gray'>
                            <li>Store 100 document (5 MB each)</li>
                            <li>Save 25 media files (25 MB each)</li>
                            <li>Help center access</li>
                            <li>Email support</li>
                        </ul>
                        <button className='bg-black text-white w-32 h-10 rounded-lg ml-7 mt-10'>Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPlans;
