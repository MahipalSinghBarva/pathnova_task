import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-footer-bg px-4 sm:px-12 md:px-24 py-9'>
            <div className='flex flex-col md:flex-row justify-between items-start'>

                <div className='flex flex-wrap gap-5 mb-4 md:mb-0'>
                    <a href='/' className='font-normal text-base leading-5 text-white/60'>About us</a>
                    <a href='/' className='font-normal text-base leading-5 text-white/60'>Privacy policy</a>
                    <a href='/' className='font-normal text-base leading-5 text-white/60'>Terms of use</a>
                    <a href='/' className='font-normal text-base leading-5 text-white/60'>Advertise with us</a>
                </div>

                <div className='flex gap-6 mb-4 md:mb-0'>
                    <Icon icon="raphael:facebook" width="32" height="32" className="text-[rgba(25,114,93,1)]" />
                    <Icon icon="raphael:facebook" width="32" height="32" className="text-[rgba(25,114,93,1)]" />
                    <Icon icon="raphael:facebook" width="32" height="32" className="text-[rgba(25,114,93,1)]" />
                    <Icon icon="raphael:facebook" width="32" height="32" className="text-[rgba(25,114,93,1)]" />
                    <Icon icon="raphael:facebook" width="32" height="32" className="text-[rgba(25,114,93,1)]" />
                </div>


                <div>
                    <p className='font-normal text-base leading-5 text-white/60 text-center md:text-left'>
                        @2022 Last Arzi. All Rights Reserved
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
