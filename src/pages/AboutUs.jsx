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
                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
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

                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
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
                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
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
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>

                </section>
            </div>
        </div>
    );
};

export default AboutUs;