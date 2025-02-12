import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const ContactUs = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center bg-no-repeat py-8 -mt-4  relative"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/2992314/pexels-photo-2992314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
            >


                <div className="w-11/12 relative z-10 bg-black bg-opacity-50 px-2 py-5 rounded-lg lg:max-w-2xl mx-auto text-center">
                    <h1 className="my-3 font-bold text-3xl text-white  underline underline-offset-4 decoration-[#C70039]">
                        Contact Us
                    </h1>

                    <p className="text-white text-lg">
                        Reach out to Hotel Rose for bookings, inquiries, or support. Our team is always ready to assist you with excellence.
                    </p>
                </div>
            </div >
            <section className='w-11/12 mx-auto my-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-3'>
                    <div>
                        <h1 className='  underline underline-offset-4 decoration-[#C70039] text-4xl my-3'>Contact </h1>
                        <p className='my-3'>

                            Have questions or need assistance with your booking? Hotel Rose's dedicated support team is here to help. Whether it’s reservations, special requests, or general inquiries, we ensure a seamless experience. Reach out via phone, email, or our website, and we’ll respond promptly. Your comfort is our priority!</p>
                        <p className='flex items-center gap-1'><strong><MdLocationOn /></strong>Dhaka, Bangladesh</p>
                        <p className='flex my-3 items-center gap-1'><strong><FaPhoneAlt /></strong>+012301200012</p>
                        <p className='flex items-center gap-1'><strong><MdOutlineEmail /></strong>hotelrose@gmail.com</p>
                    </div>
                    <div>
                        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white"></h2>

                            <form>
                                <div className="">
                                    <div className='lg:flex gap-3 space-y-2'>
                                        <div className='w-full lg:w-1/2'>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                                            <input id="username" placeholder='Enter Your Full Name' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className='w-full lg:w-1/2 '>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                            <input id="emailAddress" placeholder='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Subject</label>
                                        <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className='w-full'>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Message</label>
                                        <textarea id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 bg-[#C70039]">Send</button>
                                </div>
                            </form>
                        </section>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs

