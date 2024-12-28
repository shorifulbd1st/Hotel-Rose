
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
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
                autoplay={{
                    delay: 3000, // 3 seconds delay between slides
                    disableOnInteraction: false, // Autoplay won't stop on user interaction
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
                modules={[Pagination, Autoplay]} // Include Autoplay here
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
