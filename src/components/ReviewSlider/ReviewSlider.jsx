
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import Review from '../../pages/Review';

import { motion } from "motion/react"

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
        <div data-aos="fade-up" data-aos-duration="1500" className="w-11/12 mx-auto pt-2 pb-8">

            <h1 className="text-3xl capitalize lg:text-4xl mb-5 font-extrabold text-center text-[#C70039] drop-shadow-lg">
                Our user review
            </h1>
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
