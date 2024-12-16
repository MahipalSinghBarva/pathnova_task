import React from 'react'
import HeroBanner from './HomePage/HeroBanner'
import Features from './HomePage/Features'
import Nominee from './HomePage/Nominee'
import WhyUs from './HomePage/WhyUs.js'
import OurPlans from './HomePage/OurPlans.js'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Features />
            <Nominee />
            <WhyUs />
            <OurPlans />
        </div>
    )
}

export default Home
