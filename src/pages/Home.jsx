import React from 'react'
import Slider from '../components/Slider/Slider'
import TopRatingRooms from '../components/TopRatingRooms'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import ExtraPart1 from './ExtraPart1'
import Map from '../components/Map'
import MapComponent from '../components/MapComponent'
import NewService from '../components/NewService'


const Home = () => {
    return (
        <div >
            <div className='overflow-hidden mx-auto'>
                <Slider></Slider>
            </div>
            <TopRatingRooms></TopRatingRooms>
            <ReviewSlider></ReviewSlider>
            <ExtraPart1></ExtraPart1>
            {/* <Map></Map> */}
            <NewService></NewService>
            {/* <MapComponent></MapComponent> */}

        </div>
    )
}

export default Home
