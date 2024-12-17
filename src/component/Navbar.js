import React, { useState } from 'react';
import logo from "../assets/logo_arzi.png";
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed w-full bg-white backdrop-blur-md navbar h-14 px-4 md:px-[100px] py-4 flex justify-between items-center z-50">

            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8 w-auto" />
                <h1 className="text-xl md:text-2xl font-bold text-custom-green">Last Arzi</h1>
            </div>


            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <Icon icon={menuOpen ? "eva:close-fill" : "heroicons-outline:menu-alt-3"} className="text-3xl" />
                </button>
            </div>


            <div className={`absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex-col md:flex-row items-center gap-14 md:gap-14 p-5 md:p-0 ${menuOpen ? "flex" : "hidden"} md:flex`}>
                <p className="text-sm md:text-base cursor-pointer">Home</p>
                <p className="text-sm md:text-base cursor-pointer">Pricing</p>
                <p className="border border-custom-green  items-center flex justify-center w-[84px] h-[34px] text-custom-green text-sm md:text-base cursor-pointer rounded-lg font-medium ">
                    Sign up
                </p>
            </div>
        </div>
    );
};

export default Navbar;
