import React from 'react'
import Slider from '../components/Slider/Slider'
import TopRatingRooms from '../components/TopRatingRooms'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div >
            {/* <Slider></Slider> */}
            <TopRatingRooms></TopRatingRooms>
            <ReviewSlider></ReviewSlider>
            <Footer></Footer>
        </div>
    )
}

export default Home
