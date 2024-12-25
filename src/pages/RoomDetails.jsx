import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const RoomDetails = () => {
    const room = useLoaderData();
    const { user, notify } = useContext(AuthContext);
    console.log(room)
    const { _id, booking, image, maximumGuests, roomType, roomCharacteristics, price, description, facilities } = room;
    const { mediaAndTechnology, bedroomFacilities, others, foodAndDrink } = facilities;

    const currentDate = new Date().toISOString().split("T")[0];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const loggedInEmail = user?.email;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();

        const data = {
            email: loggedInEmail,
            firstName,
            lastName,
            currentDate,
            room
        };

        fetch('https://visa-navigator-portal-server-side.vercel.app/applyVisa', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify('success', 'Your visa application has been successful.!')
                }
            });

        closeModal();
    };

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

                        <div className="mt-6 text-center">

                            {
                                booking === true ? <button disabled

                                    className="cursor-not-allowed px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    This room Unavailable
                                </button> : <button
                                    onClick={openModal}
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
            <div className=''>

            </div>

            {/* Modal */}
            {/* <div className="relative flex justify-center my-10">
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="border-2 hover:border-blue-400 duration-300 relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3
                                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                    id="modal-title"
                                >
                                    Book Room
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Fill out the form to proceed with your booking.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-4">
                                    

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
                                            className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}
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
                                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                    id="modal-title"
                                >
                                    Booking room
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Fill out the form to proceed with your application.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-4">
                                    {/* Email */}
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        // name='email'
                                        id="email"
                                        value={loggedInEmail}
                                        readOnly
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                    />

                                    {/* First Name */}
                                    <label
                                        htmlFor="firstName"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name='firstName'
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                                        required
                                    />

                                    {/* Last Name */}
                                    <label
                                        htmlFor="lastName"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name='lastName'
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                                        required
                                    />

                                    {/* Applied Date */}
                                    <label
                                        htmlFor="appliedDate"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Applied Date
                                    </label>
                                    <input
                                        type="date"
                                        id="appliedDate"
                                        // name='appliedDate'
                                        value={currentDate}
                                        // readOnly
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                    />

                                    {/* Fee */}
                                    <label
                                        htmlFor="fee"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Price (Room price)
                                    </label>
                                    <input
                                        type="number"
                                        id="fee"
                                        // name='fee'
                                        value={price}
                                        readOnly
                                        placeholder="Enter visa fee"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
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
