import React from 'react'
import Slider from '../components/Slider/Slider'
import TopRatingRooms from '../components/TopRatingRooms'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'

const Home = () => {
    return (
        <div >
            {/* <Slider></Slider> */}
            <TopRatingRooms></TopRatingRooms>
            <ReviewSlider></ReviewSlider>
        </div>
    )
}

export default Home
