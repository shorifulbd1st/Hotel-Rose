import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import RoomDetails from './RoomDetails';
import Room from './Room';
import SelectHotelSection from './SelectHotelSection';
import { Helmet } from "react-helmet";
const Rooms = () => {
    const data = useLoaderData();

    const [sortBy, setSortBy] = useState(false)
    // console.log(data.length)
    const [rooms, setRooms] = useState(data);
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
    return (
        <div className='w-11/12 mx-auto my-5'>
            <Helmet>
                <title>All Rooms</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='mb-5'>
                <SelectHotelSection setRooms={setRooms}></SelectHotelSection>
            </div>

            <div className='mb-5 flex justify-end'>
                {
                    sortBy === true ? <button onClick={() => handleSort('asc')} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C70039] rounded-lg  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <span className="mx-1">Sort By Price</span>
                    </button>
                        :
                        <button onClick={() => handleSort('dsc')} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-[#C70039] rounded-lg  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                            <span className="mx-1">Sort By Price</span>
                        </button>
                }


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    )
}

export default Rooms
