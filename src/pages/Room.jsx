import React from 'react';
import { Link } from 'react-router-dom';

const SingleRoom = ({ room }) => {
    const {
        _id,
        image,
        maximumGuests,
        roomType,
        roomCharacteristics,
        booking,
        description,
        facilities,
        price
    } = room;

    return (
        <div data-aos="fade-up" data-aos-duration="500" className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
                className="object-cover object-center w-full h-56"
                src={image}
                alt={`${roomType} Room`}
            />

            <div className="px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {roomType} - {roomCharacteristics}
                </h1>

                <div className="mt-2 text-gray-700 dark:text-gray-400">
                    <p><span className="font-medium">Maximum Guests:</span> {maximumGuests}</p>
                    <p><span className="font-medium">Room:</span> {booking ? <span className='text-red-600'>Unavailable</span> : <span className=''>Available</span>}</p>
                    <p><span className="font-medium">Price:</span> ${price}</p>
                    {/* <p><span className="font-medium">Room Description:</span> {description}</p> */}
                </div>

                <div className="mt-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Facilities:</h3>
                    <div>
                        <p><span className="font-medium text-gray-500">Media and Technology</span></p>
                        {/* <ul className="list-disc ml-4 text-sm text-gray-600 dark:text-gray-400">
                            {facilities.mediaAndTechnology.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                    </div>

                    {/* <div className="mt-2">
                        <p><span className="font-medium">Bedroom Facilities</span></p>
                        <ul className="list-disc ml-4 text-sm text-gray-600 dark:text-gray-400">
                            {facilities.bedroomFacilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div> */}

                    {/* <div className="mt-2">
                        <p><span className="font-medium">Others:</span></p>
                        <ul className="list-disc ml-4 text-sm text-gray-600 dark:text-gray-400">
                            {facilities.others.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div> */}

                    <div className="mt-1">
                        <p><span className="font-medium text-gray-500">Food and Drink</span></p>
                        {/* <ul className="list-disc ml-4 text-sm text-gray-600 dark:text-gray-400">
                            {facilities.foodAndDrink.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>

            <div className="px-6 py-4">
                <Link
                    to={`/room-details/${_id}`}
                    className="w-full block px-6 py-2 text-center font-medium text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Room Details
                </Link>
            </div>
        </div>
    );
};

export default SingleRoom;
