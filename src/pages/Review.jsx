import React from 'react'
import Stars from 'react-stars';
import { format } from "date-fns"
const Review = ({ review }) => {
    console.log(review)
    const { name, date, rating, comment } = review;
    return (
        <div>
            <div className="  border border-blue-400 p-4 bg-white rounded-lg dark:bg-gray-800">
                <div className="mt-0">
                    <div className='flex items-center gap-5'>
                        <p
                            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 "
                        >
                            {name}
                        </p>
                        <p>
                            <strong> {format(new Date(date), 'P')}</strong>
                        </p>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {comment}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className='flex items-center gap-3 '>

                        {/* <ReactStars
                            count={5}
                            value={parseInt(rating)}
                            size={24}
                            half={true} // Enables half-stars
                            edit={false} // User can’t edit the stars
                            activeColor="#ffd700"
                        /> */}
                        <div className='flex items-center gap-3 '>Raging:  <Stars
                            count={5}
                            value={parseInt(rating)}
                            size={24}
                            half={true} // Enables half-stars
                            color2={"#ffd700"}
                        /> </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review
