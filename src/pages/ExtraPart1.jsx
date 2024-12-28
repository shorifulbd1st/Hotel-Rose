import React from 'react'

import Lottie from "lottie-react";
import office from "../assets/office.json";
import waiting from "../assets/waiting.json"
import room from '../assets/rooms.json'
const ExtraPart1 = () => {
    return (
        <div className='w-11/12 mx-auto'>
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
