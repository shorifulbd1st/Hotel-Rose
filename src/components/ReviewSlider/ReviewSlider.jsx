
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import Review from '../../pages/Review';
const ReviewSlider = () => {
    const [ratingRooms, setRatingRooms] = useState([])
    useEffect(() => {
        const allRatingRoom = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-ratingRoom`)
            // console.log(data)
            setRatingRooms(data)
        }
        allRatingRoom()
    }, [])
    console.log(ratingRooms)

    return (
        <div className='my-10 w-11/12 mx-auto  py-8'>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {/* <SwiperSlide><img src="https://images.pexels.com/photos/18201945/pexels-photo-18201945/free-photo-of-interior-of-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/18201945/pexels-photo-18201945/free-photo-of-interior-of-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/18201945/pexels-photo-18201945/free-photo-of-interior-of-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide> */}


                {
                    ratingRooms && ratingRooms.map((review, idx) => <SwiperSlide className='h-full' key={idx}>
                        <Review review={review}></Review>
                    </SwiperSlide>)

                }

            </Swiper>
        </div>
    );
}

export default ReviewSlider



