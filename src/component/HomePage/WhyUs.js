import { Icon } from '@iconify/react';
import React from 'react';

const WhyUs = () => {
    return (
        <div className='mt-[102px] px-6 sm:px-24'>
            <div>
                <h1 className='text-4xl sm:text-5xl font-semibold leading-[60px]'>Why Us?</h1>
                <p className='text-secondary-gray font-normal text-lg sm:text-xl mt-6'>
                    With our commitment to confidentiality and advanced technology, we provide a secure haven for your documents,
                    ensuring that your legacy is protected and your loved ones are taken care of.
                </p>
            </div>
            <div className='mt-24 flex gap-8 max-[860px]:flex-wrap'>

                <div className='w-full sm:w-[439px] h-[409px] flex flex-col justify-between '>
                    <div className='w-full h-[230px] rounded-3xl bg-background-color flex justify-center items-center'>
                        <Icon icon="dashicons:privacy" width="111" height="132" className="text-[rgba(255,107,53,1)]" />
                    </div>
                    <div className='mt-7'>
                        <h2 className='font-medium text-xl leading-7'>Lorem Ipsum</h2>
                        <p className='font-normal text-lg leading-6 mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Cing elit,
                            sed do eiusmod tempor incididunt ut.
                        </p>
                    </div>
                </div>


                <div className='w-full sm:w-[439px] h-[409px] flex flex-col justify-between '>
                    <div className='w-full h-[230px] rounded-3xl bg-background-color flex justify-center items-center'>
                        <Icon icon="dashicons:privacy" width="111" height="132" className="text-[rgba(255,107,53,1)]" />
                    </div>
                    <div className='mt-7'>
                        <h2 className='font-medium text-xl leading-7'>Lorem Ipsum</h2>
                        <p className='font-normal text-lg leading-6 mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Cing elit,
                            sed do eiusmod tempor incididunt ut.
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-[439px] h-[409px] flex flex-col justify-between'>
                    <div className='w-full h-[230px] rounded-3xl bg-background-color flex justify-center items-center'>
                        <Icon icon="dashicons:privacy" width="111" height="132" className="text-[rgba(255,107,53,1)]" />
                    </div>
                    <div className='mt-7'>
                        <h2 className='font-medium text-xl leading-7'>Lorem Ipsum</h2>
                        <p className='font-normal text-lg leading-6 mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Cing elit,
                            sed do eiusmod tempor incididunt ut.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
