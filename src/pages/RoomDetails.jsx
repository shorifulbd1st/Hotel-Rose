import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

import Stars from 'react-stars';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import Review from './Review';

const RoomDetails = () => {
    const room = useLoaderData();

    const { user, notify } = useContext(AuthContext);

    const { _id, rating, booking, image, maximumGuests, roomType, roomCharacteristics, price, description, facilities } = room;
    const { mediaAndTechnology, bedroomFacilities, others, foodAndDrink } = facilities;

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-review/${_id}`)
            // console.log(data)
            setReviews(data)
        }
        allReview()
    }, [])
    // console.log(reviews.length)
    // console.log(reviews)

    const [startDate, setStartDate] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false);
    const loggedInEmail = user?.email;
    const navigate = useNavigate();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            roomId: _id,
            email: user?.email,
            startDate,
            image,
            price,
            maximumGuests,
            roomType,
            roomCharacteristics
        };
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/room-booking/${_id}`, data)
            toast.success("Booking Successfully!!!")
            navigate("/my-booking")

        } catch (err) {
            toast.error(err.message)
        }

        closeModal();
    };
    const location = useLocation()
    const handleBook = e => {
        // console.log('hello handle book')
        if (user?.email) {
            openModal()
        }
        else {
            // console.log('object')
            navigate('/signin', { state: { from: location.pathname } });
        }
    }
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 hover:border-blue-400 transition duration-300">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img
                            className="object-cover w-full h-96 rounded-xl p-2"
                            src={image}
                            alt="Room Image"
                        />
                        <p className='font-semibold text-gray-800 dark:text-white text-2xl p-2'>Room Description:</p>
                        <p className=" text-sm text-gray-600 dark:text-gray-400 p-2"> {description}</p>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Room Type: {roomType}</span>
                            <span className="font-semibold text-gray-800 dark:text-white text-xl">Price: ${price}</span>
                        </div>
                        {/* <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">{roomCharacteristics}</h2> */}


                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800 dark:text-white text-2xl">Facilities:</h3>

                            {/* Media & Technology and Bedroom Facilities (two-column layout) */}
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold">Media & Technology:</h4>
                                    <ul>
                                        {mediaAndTechnology?.map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Bedroom Facilities:</h4>
                                    <ul>
                                        {bedroomFacilities?.map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Others and Food & Drink (two-column layout) */}
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold">Others:</h4>
                                    <ul>
                                        {others?.map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Food & Drink:</h4>
                                    <ul>
                                        {foodAndDrink?.map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 '> <strong>Review:</strong> {rating}
                            {/* <Stars
                                className='cursor-not-allowed'
                                count={5}
                                value={parseInt(rating)}
                                size={24}
                                half={true} // Enables half-stars
                                color2={"#ffd700"}
                            /> */}
                        </div>
                        <div className="mt-6 text-center">

                            {
                                booking === true ? <button disabled

                                    className="cursor-not-allowed px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                                >
                                    This room Unavailable
                                </button> : <button
                                    onClick={handleBook}
                                    className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    Book Now
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* for review */}

            <div>
                {
                    reviews.length > 0 ? reviews.map(review => <Review key={review._id} review={review}></Review>) :
                        <span className="block w-fit capitalize text-xl my-5 py-2  font-medium text-red-500 rounded-lg  transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">No reviews were found for this room.</span>
                }
            </div>

            {/* Modal */}

            <div className="relative flex justify-center my-10 ">

                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="border-2 hover:border-blue-400  duration-300  relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3
                                    className="mb-3 text-center text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                    id="modal-title"
                                >
                                    Booking room
                                </h3>

                                <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg dark:bg-gray-800">
                                    <img
                                        className="object-cover object-center w-full h-56    overflow-hidden rounded-lg"
                                        src={image}
                                        alt={`${roomType} Room`}
                                    />

                                    <div className="py-1">
                                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                            {roomType} - {roomCharacteristics}
                                        </h1>
                                        <div className='flex justify-between p-2'>
                                            <div className=" text-gray-700 dark:text-gray-400">

                                                <p><span className="font-medium text-black">Maximum Guests:</span> {maximumGuests}</p>
                                                <p><span className="font-medium text-black">Room:</span> {booking ? <span className='text-red-600'>Unavailable</span> : <span className=''>Available</span>}</p>
                                                <p><span className="font-medium text-black">Price:</span> ${price}</p>
                                            </div>

                                            <div className="">
                                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Facilities:</h3>
                                                <div>
                                                    <p><span className="font-medium text-gray-500">Media and Technology</span></p>
                                                </div>
                                                <div className="mt-1">
                                                    <p><span className="font-medium text-gray-500">Food and Drink</span></p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-4">

                                    {/* Applied Date */}
                                    <label
                                        htmlFor="appliedDate"
                                        className="block mt-1 text-sm font-semibold text-black"
                                    >
                                        Booking Date
                                    </label>
                                    <DatePicker
                                        className='border p-2 rounded-md'
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />


                                    {/* Buttons */}
                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            // onClick={closeModal}
                                            className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomDetails;
