import React from 'react';
import { Icon } from "@iconify/react";
import currency from "../../assets/currency.png";

const Features = () => {
    return (
        <div className='mt-28 px-8 sm:px-16 lg:px-28'>
            <div>
                <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl leading-[44px] sm:leading-[50px] md:leading-[60px]'>
                    Comprehensive <span className='text-[rgba(25,114,93,1)]'>Features</span> <br />
                    to Secure Every Document
                </h1>
                <p className='text-gray-600 text-lg sm:text-xl mt-8'>
                    With our range of powerful tools, we ensure the safety of all your <br />
                    important files—from personal memories to vital financial records—giving you total peace of mind.
                </p>
                <a className='text-[rgba(25,114,93,1)] flex items-center gap-2 mt-8 sm:mt-11 text-lg sm:text-xl cursor-pointer'>
                    <Icon icon="gg:add" width="20" height="20" className="text-[rgba(25,114,93,1)]" />
                    Add your first document
                </a>
            </div>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='feature-card bg-background-color shadow-lg w-full h-[185px] rounded-[20px] flex gap-8 px-8 py-6 items-center'>
                    <div>
                        <h2 className='text-[rgba(25,114,93,1)] text-xl sm:text-2xl font-semibold'>Assets</h2>
                        <p className='mt-3 text-gray-600 text-sm sm:text-base leading-6'>
                            Bank Holdings, Fixed Deposit, <br />
                            RD, Insurance, Properties
                        </p>
                    </div>
                    <div>
                        <img src={currency} className='w-32 h-32 object-cover' alt='currency' />
                    </div>
                </div>
                <div className='feature-card bg-background-color shadow-lg w-full h-[185px] rounded-[20px] flex gap-8 px-8 py-6 items-center'>
                    <div>
                        <h2 className='text-[rgba(25,114,93,1)] text-xl sm:text-2xl font-semibold'>Assets</h2>
                        <p className='mt-3 text-gray-600 text-sm sm:text-base leading-6'>
                            Bank Holdings, Fixed Deposit, <br />
                            RD, Insurance, Properties
                        </p>
                    </div>
                    <div>
                        <img src={currency} className='w-32 h-32 object-cover' alt='currency' />
                    </div>
                </div>
                <div className='feature-card bg-background-color shadow-lg w-full h-[185px] rounded-[20px] flex gap-8 px-8 py-6 items-center'>
                    <div>
                        <h2 className='text-[rgba(25,114,93,1)] text-xl sm:text-2xl font-semibold'>Assets</h2>
                        <p className='mt-3 text-gray-600 text-sm sm:text-base leading-6'>
                            Bank Holdings, Fixed Deposit, <br />
                            RD, Insurance, Properties
                        </p>
                    </div>
                    <div>
                        <img src={currency} className='w-32 h-32 object-cover' alt='currency' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
