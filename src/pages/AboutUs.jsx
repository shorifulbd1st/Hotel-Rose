import React from "react";

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Mia Brown",
            role: "CEO",
            image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            name: "John Doe",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        },
        {
            name: "Jane Smith",
            role: "COO",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
    ];
    return (

        <div>
            <div
                className="bg-cover bg-center bg-no-repeat py-8 -mt-4  relative"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/4321815/pexels-photo-4321815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
            >

                {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div> */}


                <div className="w-11/12 relative z-10 bg-black bg-opacity-50 px-2 py-5 rounded-lg lg:max-w-2xl mx-auto text-center">
                    <h1 className="my-3 font-bold text-3xl text-white  underline underline-offset-4 decoration-[#C70039]">
                        About Us
                    </h1>
                    {/* <h1 className="mb-3 font-bold text-2xl text-white underline underline-offset-4 decoration-[#C70039]">
                        About Us
                    </h1> */}
                    <p className="text-white text-lg">
                        Hotel Rose offers a seamless hotel booking experience with secure payments, diverse accommodations, 24/7 support, and a user-friendly interface.
                    </p>
                </div>
            </div >



            <div className="w-11/12 mx-auto py-5">
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="border border-red-600">
                        <img className="rounded-lg" src="https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-3 font-bold text-2xl underline underline-offset-4 decoration-[#C70039]">
                            About Us
                        </h1>
                        <p>Hotel Rose is an online platform offering a seamless and hassle-free hotel booking experience. We provide a wide range of accommodations, catering to the needs of every traveler, whether for business, leisure, or special occasions. Our goal is to make travel more accessible by offering a variety of options to suit different preferences and budgets.</p>
                        <p>
                            At Hotel Rose, we believe in enhancing your journey, not just providing a place to stay. Our user-friendly website allows you to easily search and book rooms, explore amenities, and discover special offers. With top-rated hotels worldwide, we ensure a comfortable and memorable experience for every guest.
                        </p>
                    </div>
                </div> */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="w-11/12  mx-auto">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img
                                className="object-cover   object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                                src="https://images.pexels.com/photos/9470516/pexels-photo-9470516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />

                            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                <p className="text-5xl font-semibold text-blue-500 my-5">“ <span className="text-[#C70039]">About Us</span></p>

                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                                    Experience Seamless Travel with Hotel Rose: Your Perfect Stay Awaits
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    Hotel Rose is an online platform offering a seamless and hassle-free hotel booking experience. We provide a wide range of accommodations, catering to the needs of every traveler, whether for business, leisure, or special occasions. Our goal is to make travel more accessible by offering a variety of options to suit different preferences and budgets.
                                </p>
                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    At Hotel Rose, we believe in enhancing your journey, not just providing a place to stay. Our user-friendly website allows you to easily search and book rooms, explore amenities, and discover special offers. With top-rated hotels worldwide, we ensure a comfortable and memorable experience for every guest.
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                                <p className="text-gray-600 dark:text-gray-300">CEO, Hotel Rose</p>

                                {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
                                    <button
                                        title="left arrow"
                                        className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        title="right arrow"
                                        className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-white dark:bg-gray-900">

                    <div className="w-11/12 py-5 mx-auto">
                        {/* <p className="text-xl font-medium tracking-tight text-white text-center"></p> */}
                        <p className="text-3xl font-semibold text-blue-500 my-5 text-center">“ <span className="text-[#C70039]">WHY GUEST CHOOSE HOTEL ROSE?</span></p>
                        {/* <p className="text-xl font-medium text-blue-500">Testimonials</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            What clients are saying
                        </h1> */}

                        <main className="relative z-20 w-full mt-8 md:flex md:flex-row-reverse md:items-center xl:mt-12">
                            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                            <div className="w-full p-6 bg-blue-600 md:flex md:flex-row-reverse  md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                <img
                                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                                    src="https://images.pexels.com/photos/261186/pexels-photo-261186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="client photo"
                                />

                                <div className="mt-2 md:mx-6 text-left">


                                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                        Guests choose Skyline Hotel for its exceptional hospitality, luxurious amenities, and prime location, offering both comfort and convenience. The hotel is well-situated, making it an ideal spot for exploration with easy access to key attractions.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                        The friendly and professional staff ensure that every need is met, providing personalized and attentive service. Booking a stay at Skyline is seamless, and its top-notch facilities make it a popular choice for both leisure and business travelers.
                                    </p>

                                    {/* <div className="flex items-center justify-start mt-6">
                                        <button
                                            title="left arrow"
                                            className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button
                                            title="right arrow"
                                            className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                            What our <span className="text-[#C70039]">clients</span> say
                        </h1>

                        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                            Guests rave about Hotel Rose’s exceptional service, stylish rooms, and inviting ambiance. Their testimonials reveal unforgettable experiences, meticulous details, and luxurious atmosphere that transforms every stay into a cherished memory.
                        </p>

                        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10 max-w-7xl">
                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8  border border-[#C70039]">
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    “My stay at Hotel Rose was simply exceptional. The room was elegant, immaculate, and designed for comfort. The attentive staff made every moment stress-free, ensuring I felt welcome and well-cared-for throughout my visit.”
                                </p>

                                <div className="flex items-center mt-6">
                                    <img
                                        className="object-cover rounded-full w-14 h-14"
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt="Robbert"
                                    />
                                    <div className="mx-4">
                                        <h1 className="font-semibold text-blue-500">Robbert</h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultancy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8  border border-[#C70039]">
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    “I was truly impressed by the warm hospitality and modern facilities at Hotel Rose. Whether for business or leisure, every service exceeded my expectations, and the convenient location added to the overall charm of the experience.”
                                </p>

                                <div className="flex items-center mt-6">
                                    <img
                                        className="object-cover rounded-full w-14 h-14"
                                        src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Mia Brown"
                                    />
                                    <div className="mx-4">
                                        <h1 className="font-semibold text-blue-500">Sophia Carter</h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8  border border-[#C70039]">
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    “Hotel Rose exceeded all my expectations with its luxurious ambiance and personalized service. Every detail, from the exquisite dining options to the meticulously maintained rooms, contributed to an unforgettable and delightful stay.”
                                </p>

                                <div className="flex items-center mt-6">
                                    <img
                                        className="object-cover rounded-full w-14 h-14"
                                        src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt="Mia Brown"
                                    />
                                    <div className="mx-4">
                                        <h1 className="font-semibold text-blue-500">Emily Clark </h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="p-5 bg-gray-100">

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">Our Executive <span className="text-[#C70039]">Team</span></h2>
                        <p className="text-gray-600 mb-10 text-center w-1/2">
                            Meet the dedicated leaders of Hotel Rose, committed to excellence. Their expertise, passion, and vision ensure outstanding service, seamless operations, and an unforgettable guest experience every time.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 lg:px-0">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 text-center border border-[#C70039] rounded-2xl shadow-lg hover:shadow-xl transition"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <div class="flex justify-center items-center mt-3 -mx-2">
                                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            </div>
        </div>
    );
};

export default AboutUs;