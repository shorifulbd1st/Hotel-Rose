// import React, { useContext, useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Tooltip } from 'react-tooltip';
// import { GiCommercialAirplane } from "react-icons/gi";
// import { Typewriter } from 'react-simple-typewriter'
// import { AuthContext } from '../providers/AuthProvider';


// const Navbar = () => {
//     // const [theme, setTheme] = useState(
//     //     localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
//     // )

//     // useEffect(() => {
//     //     localStorage.setItem('theme', theme)
//     //     const localTheme = localStorage.getItem('theme')
//     //     document.querySelector('html').setAttribute('data-theme', localTheme)
//     // }, [theme])

//     const [isOpen, setIsOpen] = useState(false);
//     const { user, handleLogout } = useContext(AuthContext)

//     return (
//         <div className='sticky top-0 z-[900] '>
//             <nav className="relative bg-white shadow dark:bg-gray-800 ">
//                 <div className="w-11/12 py-4 mx-auto">
//                     <div className="lg:flex justify-between">
//                         <div className="flex items-center justify-between">
//                             <div className='relative flex justify-center items-center'>
//                                 <img className='w-12' src="https://i.ibb.co.com/6whQTLm/hotel-Rose.png" alt="" />
//                                 <h1 className='text-center flex'>
//                                     <span className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg"> Hotel Rose
//                                         {/* <Typewriter
//                                             words={['Hotel Rose']}
//                                             loop={Infinity}
//                                             cursor
//                                             // cursorStyle='_'
//                                             typeSpeed={70}
//                                             deleteSpeed={50}
//                                             delaySpeed={1000}
//                                         // onLoopDone={handleDone}
//                                         // onType={handleType}
//                                         ></Typewriter> */}
//                                     </span>
//                                     {/* <span className='text-xl'><GiCommercialAirplane /></span> */}
//                                 </h1>
//                                 {/* <div className='absolute top-0 left-56 -ml-2'></div> */}

//                             </div>

//                             <div className="flex lg:hidden">
//                                 <button
//                                     onClick={() => setIsOpen(!isOpen)}
//                                     type="button"
//                                     className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//                                     aria-label="toggle menu"
//                                 >
//                                     {isOpen ? (
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-8 h-8"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     ) : (
//                                         // <svg
//                                         //     xmlns="http://www.w3.org/2000/svg"
//                                         //     className="w-6 h-6"
//                                         //     fill="none"
//                                         //     viewBox="0 0 24 24"
//                                         //     stroke="currentColor"
//                                         //     strokeWidth="2"
//                                         // >
//                                         //     <path
//                                         //         strokeLinecap="round"
//                                         //         strokeLinejoin="round"
//                                         //         d="M4 8h16M4 16h16"
//                                         //     />
//                                         // </svg>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-8 h-8"
//                                             fill="none"
//                                             viewBox="0 0 30 30"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
//                                             />
//                                         </svg>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                         <div
//                             className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-700 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
//                                 ? 'translate-x-0 opacity-100'
//                                 : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
//                                 }`}
//                         >
//                             <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg">
//                                 <NavLink to={'/'}
//                                     className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                                 >
//                                     Home
//                                 </NavLink>
//                                 <NavLink to={'/rooms'}
//                                     className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                                 >
//                                     Rooms
//                                 </NavLink>

//                                 <NavLink to={'/my-booking'}
//                                     className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                                 >
//                                     My Bookings
//                                 </NavLink>

//                             </div>

//                             <div className="flex items-center mt-4 lg:mt-0 gap-3">
//                                 {
//                                     user && user?.email ? <div className='flex justify-between items-center gap-2'>
//                                         <button
//                                             type="button"
//                                             className="flex items-center focus:outline-none"
//                                             aria-label="toggle profile dropdown"
//                                         >
//                                             <a id="not-clickable">
//                                                 <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
//                                                     <img referrerPolicy='no-referrer'
//                                                         src={user?.photoURL}
//                                                         className="object-cover w-full h-full"
//                                                         alt="avatar"
//                                                     />
//                                                 </div>
//                                             </a>
//                                             <Tooltip anchorSelect="#not-clickable">
//                                                 <div className="px-2 py-1  rounded text-sm">
//                                                     {user?.displayName}
//                                                 </div>
//                                             </Tooltip>
//                                         </button>

//                                         <button onClick={handleLogout} className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Logout</button>
//                                     </div> : <div className='flex gap-2'>
//                                         <Link to={'/registration'} className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Register</Link>
//                                         <Link to={'/signin'} className=" px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Login</Link>
//                                     </div>
//                                 }

//                                 <div className='flex-none'>


//                                     {/* <select
//                                         name='theme'
//                                         className='py-2 px-1 rounded border-2 focus-none outline-none'
//                                         onChange={e => setTheme(e.target.value)}
//                                         id=''
//                                     >
//                                         {themes.map(theme => (
//                                             <option key={theme} value={theme}>
//                                                 {theme[0].toUpperCase() + theme.slice(1)}
//                                             </option>
//                                         ))}
//                                     </select> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav >
//         </div >
//     );
// };

// export default Navbar;
import React, { useContext, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogout } = useContext(AuthContext);

    const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return (
        <div className="sticky top-0 z-[900]">
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="w-11/12 py-4 mx-auto">
                    <div className="lg:flex justify-between">
                        {/* Logo and Brand Name */}
                        <div className="flex items-center justify-between">
                            <div className="relative flex justify-center items-center">
                                <img
                                    className="w-12"
                                    src="https://i.ibb.co.com/6whQTLm/hotel-Rose.png"
                                    alt="Hotel Rose Logo"
                                    loading="lazy"
                                />
                                <h1 className="text-center flex">
                                    <span className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">
                                        Hotel Rose
                                    </span>
                                </h1>
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 30 30"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links and User Actions */}
                        <div
                            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-700 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
                                ? "translate-x-0 opacity-100"
                                : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                                }`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `inline-block px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-green-500 text-white" : ""
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/rooms"
                                    className={({ isActive }) =>
                                        `inline-block px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-green-500 text-white" : ""
                                        }`
                                    }
                                >
                                    Rooms
                                </NavLink>
                                <NavLink
                                    to="/my-booking"
                                    className={({ isActive }) =>
                                        `inline-block px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-green-500 text-white" : ""
                                        }`
                                    }
                                >
                                    My Bookings
                                </NavLink>
                            </div>

                            {/* User Actions */}
                            <div className="flex items-center mt-4 lg:mt-0 gap-3">
                                {user && user?.email ? (
                                    <div className="flex justify-between items-center gap-2">
                                        <button
                                            type="button"
                                            className="flex items-center focus:outline-none"
                                            aria-label="toggle profile dropdown"
                                        >
                                            <a id="not-clickable">
                                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                                    <img
                                                        referrerPolicy="no-referrer"
                                                        src={user?.photoURL}
                                                        className="object-cover w-full h-full"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </a>
                                            <Tooltip anchorSelect="#not-clickable">
                                                <div className="px-2 py-1 rounded text-sm">
                                                    {user?.displayName}
                                                </div>
                                            </Tooltip>
                                        </button>

                                        <button
                                            onClick={handleLogout}
                                            className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <Link
                                            to="/registration"
                                            className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                        >
                                            Register
                                        </Link>
                                        <Link
                                            to="/signin"
                                            className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default React.memo(Navbar);
