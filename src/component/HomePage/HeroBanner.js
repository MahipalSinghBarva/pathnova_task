import React from 'react';

const HeroBanner = () => {
    return (
        <div className='banner-container'>
            <div className='flex flex-col justify-center items-center h-full gap-5 sm:gap-8 md:gap-11 text-center px-4 sm:px-12 md:px-24'>
                <h2 className='text-custom-green text-[36px] sm:text-[48px] md:text-[56px] font-semibold leading-[44px] sm:leading-[50px] md:leading-[60px]'>
                    Keep Your <br /> Legacy Safe
                </h2>
                <h5 className='text-custom-green font-normal text-sm sm:text-base md:text-lg'>
                    Confidential document storage for your loved <br /> ones, accessible only when the time is right.
                </h5>
                <button className='bg-[#19725d] text-white py-3 px-6 text-lg hover:bg-[#145e47] transition duration-300 rounded-xl'>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default HeroBanner;
