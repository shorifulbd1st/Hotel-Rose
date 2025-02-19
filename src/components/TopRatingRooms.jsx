import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rooms from '../pages/Rooms';
import Room from '../pages/Room'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../pages/LoadingSpinner';

import { motion } from "motion/react"
import Sort from '../pages/Sort';
const TopRatingRooms = () => {
    // const [sort, setSort] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    // const [rooms1, setRooms] = useState([])
    const [sortBy, setSortBy] = useState(false)
    useEffect(() => {
        setIsOpen(true)
    }, [])


    const { isPending, isError, data: rooms } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/top-room`)
            return res.json();
        }
    })

    if (isPending) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (isError) {
        return <div><p>Error</p></div>
    }

    const handleSort = (val) => {
        // console.log(val)
        setSortBy(!sortBy)
        if (val === 'asc') {
            rooms.sort((a, b) => a.price - b.price);
        }
        else {
            rooms.sort((a, b) => b.price - a.price)
        }

    }
    // console.log(sortBy)
    return (
        <div className='w-11/12 mx-auto mt-3 mb-2'>
            <h1 className="text-3xl capitalize lg:text-4xl my-5 font-extrabold text-center text-[#C70039]">
                Our six top-rated rooms
            </h1>

            <div className='mb-5 flex justify-end'>
                {
                    sortBy === true ? <button onClick={() => handleSort('asc')} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C70039] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <span className="mx-1">Sort By Price</span>
                    </button>
                        :
                        <button onClick={() => handleSort('dsc')} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C70039] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                            <span className="mx-1">Sort By Price</span>
                        </button>
                }


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    rooms.map((room, idx) => <Room key={room._id} room={room}></Room>)
                }
            </div>
            <div className='my-8'>
                <Link
                    to="/rooms"
                    className="px-6 py-3  text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                >
                    See All Rooms
                </Link>
            </div>
            <div className="relative flex justify-center">


                {isOpen && (
                    <div
                        className="fixed inset-0 z-[1020] overflow-y-auto "
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>

                            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:w-full border border-red-500">
                                <div className="flex items-center justify-center mx-auto ">
                                    <img
                                        className="h-full rounded-lg"
                                        src="https://images.pexels.com/photos/18201945/pexels-photo-18201945/free-photo-of-interior-of-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Premium Hotel Room"
                                    />
                                </div>

                                <div className="mt-5 text-center">
                                    <h3
                                        className="text-lg font-medium text-gray-800 dark:text-white"
                                        id="modal-title"
                                    >
                                        Limited-Time Offer!
                                    </h3>

                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Book now and <strong>save up to 20%</strong> on premium rooms.
                                        Enjoy luxurious amenities, free breakfast, and early check-in options with your booking.
                                    </p>

                                    <p className="mt-3 font-medium text-blue-500">
                                        Hurry up!
                                    </p>
                                </div>


                                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 w-full py-2.5 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform border border-gray-200 rounded-md bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 sm:mx-2"
                                    >
                                        Close
                                    </button>

                                    <Link
                                        to={'/rooms'}
                                        className="px-4 w-full text-center py-2.5 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40 sm:mt-0 sm:mx-2"
                                    >
                                        See Details
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>





        </div>
    )
}

export default TopRatingRooms
