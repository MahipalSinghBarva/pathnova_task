import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Nominee = () => {
    return (
        <div className="bg-background-color mt-40 h-[754px] max-[1100px]:h-full ">
            <div className="px-6 sm:px-12 md:px-24 py-24 flex gap-12 flex-col lg:flex-row">
                <div className="relative w-full lg:w-[50%]">
                    <div className="mt-10">
                        <div className="bg-[#80CCBA3D] rounded-tr-[12px] rounded-tl-[12px] w-full h-6"></div>
                        <div className="nominee-card bg-white w-full h-[276px] rounded-xl flex justify-between px-6 sm:px-8 lg:px-10">
                            <div className="flex mt-5 gap-2">
                                <div className="bg-background-card rounded-[100px] w-7 h-7"></div>
                                <div className="flex flex-col">
                                    <div className="bg-background-card w-[151px] h-3"></div>
                                    <div className="bg-background-card w-[102px] h-2 mt-1"></div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="text-custom-green text-sm font-medium">Add nominee +</button>
                                <div className="flex flex-col mt-5">
                                    <div className="bg-background-card w-[162px] h-3"></div>
                                    <div className="bg-background-card w-[102px] h-2 mt-1"></div>
                                </div>
                                <div className="mt-7">
                                    <div className="bg-background-card w-[98px] h-3 mt-1"></div>
                                    <div className="bg-background-card w-[98px] h-3 mt-1"></div>
                                    <div className="bg-background-card w-[98px] h-3 mt-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nominee-card bg-white w-[220px] h-[265px] rounded-xl flex justify-between px-6 sm:px-8 lg:px-10 absolute top-36 left-6">
                        <div className="flex mt-5 gap-2 flex-col">
                            <p className="text-custom-green text-sm font-medium">Select Nominee</p>
                            <div className="flex flex-col mt-5">
                                <div className="bg-background-card w-[151px] h-3"></div>
                                <div className="bg-background-card w-[102px] h-2 mt-1"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[50%] max-[1100px]:mt-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[60px]">
                        Easily Assign a <span className="text-custom-green">Nominee</span>
                    </h1>
                    <p className="text-lg sm:text-xl leading-6 font-normal text-secondry-gray mt-8 sm:mt-10">
                        With a simple process, you can securely designate a nominee who will receive your important documents at the right time, ensuring your wishes are carried out effortlessly.
                    </p>
                    <div className="w-[181px] h-10 rounded-lg bg-green-800 text-white mt-8 sm:mt-10 flex items-center gap-3 px-5 justify-center">
                        <button>Add Nominee</button>
                        <Icon icon="material-symbols-light:line-end-arrow" width="24" height="24" />
                    </div>
                </div>
            </div>

            <div className="px-6 sm:px-12 md:px-24 pb-8 flex flex-wrap gap-12 max-[650px]:pl-28 lg:flex-1 justify-start lg:justify-end min-[1260px]:pl-96 ">
                {Array(3).fill("").map((_, index) => (
                    <div key={index} className="flex flex-col gap-6 w-full sm:w-[224px] md:flex-1 lg:w-auto">
                        <Icon
                            icon="raphael:settingsalt"
                            width="76"
                            height="76"
                            className="text-[rgba(32,117,109,0.25)]"
                        />
                        <h2 className="text-lg font-medium leading-5">Go to a feature</h2>
                        <p className="text-secondry-gray text-lg leading-5 w-[224px]">
                            Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Nominee;
