import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rooms from '../pages/Rooms';
import Room from '../pages/Room'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../pages/LoadingSpinner';
const TopRatingRooms = () => {
    // const [rooms, setRooms] = useState([]);
    // useEffect(() => {
    //     const topRooms = async () => {
    //         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/top-room`)
    //         // console.log(data)
    //         setRooms(data)
    //     }
    //     topRooms()
    // }, [])
    // console.log(rooms)
    const [isOpen, setIsOpen] = useState(false);

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


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        if there is a button in form, it will close the modal
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog> */}


            <div className="relative flex justify-center">
                {/* <button
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Open Modal
                </button> */}

                {isOpen && (
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto "
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

                                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-red-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 bg-red-500 text-white  "
                                    >
                                        Close
                                    </button>

                                    <Link to={'/rooms'} className="px-4 sm:mx-2 text-center w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-500  focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40">
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
