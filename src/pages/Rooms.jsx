import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RoomDetails from './RoomDetails';
import Room from './Room';

const Rooms = () => {
    const data = useLoaderData();
    console.log(data.length)
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    )
}

export default Rooms
