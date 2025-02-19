import React from 'react';
import { Link } from 'react-router-dom';
import Stars from 'react-stars';
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
        price,
        rating
    } = room;
    return (
        <Link data-aos="fade-up" data-aos-duration="1500" to={`/room-details/${_id}`} title='view details' className='hover:scale-[1.05] transition-all duration-1000 ease-in-out '  >

            <div className="w-full max-w-lg pb-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:border border-blue-400">
                <img
                    className="object-cover object-center w-full h-56"
                    src={image}
                    alt={`${roomType} Room`}
                />

                <div className="px-6 py-4">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        {roomType} - {roomCharacteristics}
                    </h1>

                    <div>
                        <div className='flex justify-between'>
                            <div className="mt-2 text-gray-700 dark:text-gray-400">
                                <p><span className="font-medium"><strong>Maximum Guests:</strong></span> {maximumGuests}</p>
                                <p><span className="font-medium"> <strong>Room:</strong> </span> {booking ? <span className='text-red-600 font-semibold'>Unavailable</span> : <span className=''>Available</span>}</p>
                                <p><span className="font-medium"><strong>Price:</strong></span> ${price}</p>
                            </div>
                            <div className="mt-1">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Facilities:</h3>
                                <div>
                                    <p><span className="font-medium text-gray-500">Media and Technology</span></p>
                                </div>
                                <div className="mt-1">
                                    <p><span className="font-medium text-gray-500">Food and Drink</span></p>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center gap-3 '><strong>Review:</strong> {rating}
                            {/* <Stars
                                className='cursor-not-allowed'
                                count={5}
                                value={parseInt(rating)}
                                size={24}
                                half={true} // Enables half-stars
                                color2={"#ffd700"}
                            /> */}
                        </div>
                    </div>



                </div>
                <div className='flex justify-center'>
                    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C70039] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-center">
                        See More
                    </button>
                </div>
            </div>
        </Link >
    );
};

export default SingleRoom;
