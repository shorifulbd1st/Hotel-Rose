
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


function SelectHotelSection({ setRooms }) {
    const [selectPrice, setSelectPrice] = useState("");
    const val = selectPrice.split('-');
    console.log(val[0], val[1])
    useEffect(() => {
        // console.log('selectPrice', selectPrice)
        if (selectPrice === "All visa" || selectPrice === "") {
            fetch(`${import.meta.env.VITE_API_URL}/all-Rooms`)
                .then(res => res.json())
                .then(data => {
                    setRooms(data)
                })


        }
        else {
            fetch(`${import.meta.env.VITE_API_URL}/rooms-by-price?minPrice=${val[0]}&maxPrice=${val[1]}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setRooms(data)
                })
        }

    }, [selectPrice])

    console.log(selectPrice)
    return (
        <div
            className="bg-cover bg-center bg-no-repeat py-4 -mt-4 rounded-xl relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1724271364158-aa8baa615cf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>


            <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-lg max-w-lg mx-auto text-center">
                <h1 className="mb-5 font-bold text-2xl text-gray-800">
                    Easily select any price
                </h1>

                {/* <form onSubmit={handleSubmit}> */}
                {/* <select
                    id="price"
                    name="price"
                    // value={selectPrice}
                    onChange={(e) => setSelectPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="Price Range" disabled>
                        Price Range
                    </option>
                    <option value="40-50">40-50</option>
                    <option value="51-60">51-60</option>
                    <option value="61-70">61-70</option>
                    <option value="71-80">71-80</option>
                    <option value="81-90">81-90</option>
                </select> */}
                <select
                    id="visaType"
                    name="visaType"
                    value={selectPrice}
                    onChange={(e) => setSelectPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="" disabled>
                        Price Range
                    </option>
                    {/* <option value="All visa">All visa</option>
                    <option value="Tourist visa">Tourist visa</option>
                    <option value="Student visa">Student visa</option>
                    <option value="Official visa">Official visa</option> */}
                    <option value="All visa">All visa</option>
                    <option value="40-50">$40-$50</option>
                    <option value="51-60">$51-$60</option>
                    <option value="61-70">$61-$70</option>
                    <option value="71-80">$71-$80</option>
                    <option value="81-90">$81-$90</option>
                </select>
                {/* <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button> */}
                {/* </form> */}

                {/* {selectPrice && (
                    <p className="mt-4 text-gray-700">
                        Selected Visa: <strong>{selectPrice}</strong>
                    </p>
                )} */}
            </div>
        </div >
    );
}

export default SelectHotelSection;
