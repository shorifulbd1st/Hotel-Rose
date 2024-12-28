import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import RoomDetails from './RoomDetails';
import Room from './Room';
import SelectHotelSection from './SelectHotelSection';
import { Helmet } from "react-helmet";
const Rooms = () => {
    const data = useLoaderData();
    console.log(data.length)
    const [rooms, setRooms] = useState(data);
    return (
        <div className='w-11/12 mx-auto my-5'>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='mb-5'>
                <SelectHotelSection setRooms={setRooms}></SelectHotelSection>
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
