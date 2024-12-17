import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const OurPlans = () => {
    const plans = [
        {
            title: "Basic",
            price: 0,
            features: [
                "Store 100 documents (5 MB each)",
                "Save 25 media files (25 MB each)",
                "Help center access",
                "Email support",
            ],
        },
        {
            title: "Premium",
            price: 149,
            frequency: "/month",
            features: [
                "Store unlimited documents",
                "Save unlimited media files",
                "Priority support",
                "24/7 email assistance",
            ],
        },
        {
            title: "Elite",
            price: 249,
            frequency: "/month",
            features: [
                "Store unlimited documents",
                "Save unlimited media files",
                "Priority support",
                "24/7 email assistance",
            ],
        },
    ];

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

                <div className="grid gap-8 mt-6 pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-6 md:px-10 lg:px-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[320px] sm:max-w-[356px] h-auto sm:h-[403px] rounded-[20px] bg-white shadow-lg"
                        >
                            <div className="bg-bg-ourplan rounded-t-3xl h-[60px] text-white py-4 pl-6 text-xl sm:text-2xl font-semibold">
                                {plan.title}
                            </div>
                            <div className="flex mt-6 items-center px-8 gap-2">
                                <Icon icon="fa:rupee" width="30" height="40" />
                                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    {plan.price}
                                    {plan.frequency && (
                                        <span className="text-secondry-gray font-normal text-lg sm:text-xl lg:text-2xl leading-9">
                                            {plan.frequency}
                                        </span>
                                    )}
                                </p>
                            </div>
                            <ul className="list-disc px-8 mt-6 text-sm sm:text-base lg:text-lg font-normal text-secondry-gray">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-black text-white w-28 sm:w-32 lg:w-36 h-9 sm:h-10 lg:h-12 rounded-lg ml-8 mt-8 text-sm sm:text-base lg:text-lg">
                                Get started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPlans;
