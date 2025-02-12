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
    const [sort, setSort] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [rooms1, setRooms] = useState([])
    useEffect(() => {
        setIsOpen(true)
    }, [])

    useEffect(() => {
        const fetchAllRooms = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tpp-room?sort=${sort}`)
            setRooms(data);
        }
        fetchAllRooms()
    }, [sort])

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


    console.log(rooms, rooms.length)
    console.log(rooms1, rooms1.length)
    // console.log(filter)
    // console.log(search)
    console.log(sort)
    // const handleReset = () => {
    //     // setFilter('')
    //     // setSearch('')
    //     setSort('')
    // }

    return (
        <div className='w-11/12 mx-auto mt-3 mb-2'>
            <h1 className="text-3xl capitalize lg:text-4xl my-5 font-extrabold text-center text-[#C70039]">
                Our six top-rated rooms
            </h1>
            <div className='my-5'>
                <div>
                    <select
                        name='category'
                        id='category'
                        className='border p-4 rounded-md px-3'
                        onChange={e => setSort(e.target.value)}
                        value={sort}
                    >
                        <option value=''>Sort By Price</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>
                {/* <button onClick={handleReset} className='btn'>Reset</button> */}
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
