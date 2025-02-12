import React from 'react'

import { motion } from "motion/react"
import { easeOut } from 'motion'
const NewService = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className='w-11/12 mx-auto my-10 space-y-4'>


            <h1 className="text-3xl capitalize lg:text-4xl my-5 font-extrabold text-center text-[#C70039]">
                Our new service coming soon
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <img className='h-full rounded-xl' src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/room-single-img-05.jpg" alt="" />
                </div>
                <div>
                    <img className='h-full rounded-xl' src="https://travelforsenses.com/wp-content/uploads/2019/01/calala-island-7.jpg" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-lg'>
                <div>
                    <img className='h-full rounded-xl' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/518334794.jpg?k=9288779918cdaa3f4a41381a603c0647dc81dbcb1dc342224dcac553aeb1ee24&o=&hp=1" alt="" />
                </div>
                <div>
                    <img className='h-full rounded-xl' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514843219.jpg?k=1be7ef7e2bf74bbc9b5480ac523792553b6eb42ce39bd4cf9143068a665019c6&o=&hp=1" alt="" />
                </div>
                <div>
                    <img className='h-full rounded-xl' src="https://pix8.agoda.net/hotelImages/284/2849244/2849244_17092816280056893408.png?ca=13&ce=1&s=1024x" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewService
