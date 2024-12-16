import React from 'react';
import logo from "../assets/logo_arzi.png";

const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center px-4 md:px-[100px] py-4 bg-white fixed w-full backdrop-blur-md  navbar h-14">

            <div className="flex items-center gap-5">
                <img src={logo} alt="logo" className="h-8 w-auto" />
                <h1 className="text-xl md:text-2xl font-bold text-custom-green">Last Arzi</h1>
            </div>

            <div className="flex gap-8 md:gap-20 items-center mt-4 md:mt-0">
                <p className="text-sm md:text-base cursor-pointer">Home</p>
                <p className="text-sm md:text-base cursor-pointer">Pricing</p>
                <p className="border border-custom-green py-1 px-2 text-custom-green text-sm md:text-base cursor-pointer rounded-lg font-medium">
                    Sign up
                </p>
            </div>
        </div>
    );
};

export default Navbar;
