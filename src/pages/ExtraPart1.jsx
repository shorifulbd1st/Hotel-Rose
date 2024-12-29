import React from 'react'

import Lottie from "lottie-react";
import office from "../assets/office.json";
import waiting from "../assets/waiting.json"
import room from '../assets/rooms.json'
import { motion } from "motion/react"
import { easeOut } from 'motion'
const ExtraPart1 = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-3xl capitalize lg:text-4xl my-5 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg">
                Our service teams
            </h1>


            <div className="bg-base-200 ">
                <div className="md:flex justify-between">
                    <div className="text-center lg:text-left h-64">
                        <Lottie className='h-full' animationData={room} loop={true} />
                    </div>
                    <div className="text-center lg:text-left h-64">
                        <Lottie className='h-full' animationData={waiting} loop={true} />
                    </div>
                    <div className="card w-full max-w-sm shrink-0">
                        <Lottie animationData={office} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraPart1
