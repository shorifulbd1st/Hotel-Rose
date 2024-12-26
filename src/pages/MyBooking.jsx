import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
const MyBooking = () => {
    const [bookingRooms, setBookingRooms] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        allBookingRoom()
    }, [user?.email])
    const allBookingRoom = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-BookingRooms/${user?.email}`)
        // console.log(data)
        setBookingRooms(data)
    }
    // console.log('booking rooms', bookingRooms)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const loggedInEmail = user?.email;
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        // console.log(countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod);
        // const email = user.email;
        // const visa = { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };

        // console.log(visa)
        // console.log(_id)
        // fetch(`https://visa-navigator-portal-server-side.vercel.app/addVisa/${_id}`, {
        //     method: "PATCH",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(visa)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setVisa({ ...visa, _id })
        //         if (data.modifiedCount > 0) {
        //             let timerInterval;
        //             Swal.fire({
        //                 title: "Updating Data!",
        //                 html: "Please wait, updating data will complete in <b></b> milliseconds.",
        //                 timer: 3000,
        //                 timerProgressBar: true,
        //                 didOpen: () => {
        //                     Swal.showLoading();
        //                     const timer = Swal.getPopup().querySelector("b");
        //                     timerInterval = setInterval(() => {
        //                         timer.textContent = `${Swal.getTimerLeft()}`;
        //                     }, 100);
        //                 },
        //                 willClose: () => {
        //                     clearInterval(timerInterval);

        //                 }
        //             }).then((result) => {
        //                 if (result.dismiss === Swal.DismissReason.timer) {
        //                     // console.log("Data update process completed successfully!");
        //                 }
        //             });

        //         }

        //     })
        closeModal();
    }

    const handleDelete = (id, id1) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id)
                await axios.post(`${import.meta.env.VITE_API_URL}/booking-delete/${id}`, { id1 })
                allBookingRoom();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className="container px-4 mx-auto my-10">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Rooms</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"> {bookingRooms.length} </span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Room Details </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>
                                                        Room Type</span>
                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Facilities</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Price$</th>

                                            {/* <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Review</th> */}

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            bookingRooms &&
                                            bookingRooms.map((room, idx) =>
                                                <tr key={idx}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-28 h-20 rounded-lg" src={room.image} alt="" />

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {/* <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800"> */}
                                                        {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                            <h2 className="text-sm font-normal text-emerald-500">{room.
                                                                maximumGuests}</h2> */}
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white">{room.roomType}</h2>
                                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{room.roomCharacteristics}</p>
                                                        </div>
                                                        {/* </div> */}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <p><span className="font-medium text-gray-500">Media and Technology</span></p>
                                                        <p><span className="font-medium text-gray-500">Food and Drink</span></p>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"> <strong>${room.price}</strong> </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">

                                                            <button
                                                                className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                                            // className="px-6 py-2 text-sm font-medium text-white transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                                            >

                                                                <span className="mr-2">Review</span>
                                                                <MdRateReview />
                                                            </button>
                                                            <button onClick={openModal}

                                                                className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                                                            >
                                                                <span className="mr-2">Update</span>
                                                                <GrUpdate />
                                                            </button>

                                                            {/* Delete Button */}
                                                            <button onClick={() => handleDelete(room._id, room.roomId)}
                                                                className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                                                            >
                                                                <span className="mr-2">Cancel</span>
                                                                <MdDelete />
                                                            </button>



                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                {/* Button to open modal */}
                {/* <button
                    onClick={openModal}
                    className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Open Modal
                </button> */}

                {/* Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className=" flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="border-2 hover:border-blue-400  duration-300 relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle lg:max-w-xl mx-auto">
                                <h3
                                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white text-center"
                                    id="modal-title"
                                >
                                    Update Visa Page
                                </h3>
                                {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Fill out the form to proceed with your application.
                                </p> */}
                                <form onSubmit={handleUpdate} className="space-y-4 ">
                                    <div>
                                        <label className="block font-medium mb-1">Country Image</label>
                                        <input
                                            type="url"
                                            name="countryImage"
                                            placeholder="Enter image URL"
                                            className="input input-bordered w-full input-error"
                                        // defaultValue={ }

                                        />
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-1">Country Name</label>
                                        <input
                                            type="text"
                                            name="countryName"
                                            placeholder="Enter country name"
                                            className="input input-bordered w-full input-error"
                                        // defaultValue={ }

                                        />
                                    </div>

                                    <div className="md:flex  gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Visa Type</label>
                                            <select
                                                // defaultValue={ }
                                                name="visaType"
                                                className="select select-bordered select-error w-full max-w-full sm:max-w-md"
                                            >
                                                <option disabled >Visa Type</option>
                                                <option value="Tourist visa">Tourist visa</option>
                                                <option value="Student visa">Student visa</option>
                                                <option value="Official visa">Official visa</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Processing Time</label>
                                            <input
                                                type="text"
                                                name="processingTime"
                                                placeholder="e.g., 5-10 business days"
                                                className="input input-bordered w-full input-error"
                                            // defaultValue={ }

                                            />
                                        </div>
                                    </div>

                                    {/* <div>
                                        <label className="block font-medium mb-1">Required Documents</label>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center space-x-2">

                                                <input name="validPassport" defaultChecked={requiredDocuments[0] === "Valid passport"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Valid passport</label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input name="VisaApplicationForm" defaultChecked={requiredDocuments[1] ===
                                                    "Visa application form"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Visa application form</label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input name="photograph" defaultChecked={requiredDocuments[2] === "Recent passport-sized photograph"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Recent passport-sized photograph</label>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div>
                                        <label className="block font-medium mb-1">Description</label>
                                        <textarea
                                            name="description"
                                            placeholder="Enter visa description"
                                            className="textarea textarea-bordered w-full textarea-error"
                                            defaultValue={description}
                                        />
                                    </div> */}

                                    {/* <div className="md:flex gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Age Restriction</label>
                                            <input
                                                type="number"
                                                name="ageRestriction"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={ageRestriction}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Fee</label>
                                            <input
                                                type="number"
                                                name="fee"
                                                placeholder="Enter visa fee"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={fee}
                                            />
                                        </div>
                                    </div> */}

                                    {/* <div className="md:flex gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Validity</label>
                                            <input
                                                type="text"
                                                name="validity"
                                                placeholder="e.g., 6 months"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={validity}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Application Method</label>
                                            <select
                                                name="applicationMethod"
                                                className="select select-bordered w-full"
                                                defaultValue={applicationMethod}

                                            >
                                                <option disabled >Application Method</option>
                                                <option value="online">Online</option>
                                                <option value="in-person">In-person</option>
                                            </select>
                                        </div>
                                    </div> */}

                                    {/* <div>
                                        <button type="submit" className="btn btn-primary w-full text-xl">
                                            Add Visa
                                        </button>
                                    </div> */}
                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            // onClick={closeModal}
                                            className="w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyBooking;
