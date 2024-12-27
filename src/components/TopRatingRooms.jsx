import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rooms from '../pages/Rooms';
import Room from '../pages/Room'
import { Link } from 'react-router-dom';

const TopRatingRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const topRooms = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/top-room`)
            // console.log(data)
            setRooms(data)
        }
        topRooms()
    }, [])
    console.log(rooms)
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
        </div>
    )
}

export default TopRatingRooms
