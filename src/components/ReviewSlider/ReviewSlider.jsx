
// import React, { useEffect, useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';
// import { Pagination } from 'swiper/modules';
// import axios from 'axios';
// import Review from '../../pages/Review';
// const ReviewSlider = () => {
//     const [ratingRooms, setRatingRooms] = useState([])
//     useEffect(() => {
//         const allRatingRoom = async () => {
//             const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-ratingRoom`)
//             // console.log(data)
//             setRatingRooms(data)
//         }
//         allRatingRoom()
//     }, [])
//     console.log(ratingRooms)

//     return (
//         <div className='my-10 w-11/12 mx-auto  py-8'>
//             <Swiper
//                 slidesPerView={2}
//                 spaceBetween={10}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >

//                 {
//                     ratingRooms && ratingRooms.map((review, idx) => <SwiperSlide className='grid grid-cols-1 lg:grid-cols-2' key={idx}>
//                         <Review review={review}></Review>
//                     </SwiperSlide>)

//                 }

//             </Swiper>
//         </div>
//     );
// }

// export default ReviewSlider



import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import Review from '../../pages/Review';

const ReviewSlider = () => {
    const [ratingRooms, setRatingRooms] = useState([]);

    useEffect(() => {
        const allRatingRoom = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-ratingRoom`);
            setRatingRooms(data);
        };
        allRatingRoom();
    }, []);

    return (
        <div className="my-10 w-11/12 mx-auto py-8 ">
            <Swiper
                slidesPerView={1} // Default for mobile
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // Small screens
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // Medium screens
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // Large screens
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {ratingRooms &&
                    ratingRooms.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <Review review={review} />
                        </SwiperSlide>
                    ))}

            </Swiper>
        </div>
    );
};

export default ReviewSlider;
