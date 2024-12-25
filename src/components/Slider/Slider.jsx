

import { useRef, useEffect } from "react";
import "./style.css";

const Slider = () => {
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);

    const sliderItems = [
        { img: 'https://info.ehl.edu/hubfs/Imported_Blog_Media/Hotel-design.jpg', title: "MAGIC SLIDER", type: "FLOWER" },
        { img: 'https://images.squarespace-cdn.com/content/v1/6379dddff98aeb7914af0071/921a2ac2-10d4-4294-b0c5-7cccbf6a5067/View_04.jpg', title: "MAGIC SLIDER", type: "NATURE" },
        { img: 'https://www.lakdi.com/cdn/shop/articles/Hotel_Guest_Room_Design_and_Color.webp?v=1734176624', title: "MAGIC SLIDER", type: "PLANT" },
        { img: 'https://i.pinimg.com/originals/da/b3/be/dab3bef5faf9fa552169c9f97d91515e.jpg', title: "MAGIC SLIDER", type: "NATURE" },
    ];

    // Function to move slider
    const moveSlider = (direction) => {
        const sliderList = sliderRef.current.querySelector(".list");
        const thumbnailList = thumbnailRef.current;
        const sliderItems = sliderList.querySelectorAll(".item");
        const thumbnailItems = thumbnailList.querySelectorAll(".item");

        if (direction === "next") {
            sliderList.appendChild(sliderItems[0]);
            thumbnailList.appendChild(thumbnailItems[0]);
            sliderRef.current.classList.add("next");
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailList.prepend(thumbnailItems[thumbnailItems.length - 1]);
            sliderRef.current.classList.add("prev");
        }

        // Clean up the animation class after animation ends
        sliderRef.current.addEventListener(
            "animationend",
            () => {
                sliderRef.current.classList.remove(direction);
            },
            { once: true }
        );
    };

    // Auto-Play Functionality
    useEffect(() => {
        const interval = setInterval(() => {
            moveSlider("next");
        }, 4000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider" ref={sliderRef}>
            {/* Slider List */}

            <div className="list">
                {sliderItems.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.img} alt={item.type} />
                        <div className="content">
                            <div className="title text-xl">{item.title}</div>
                            <div className="type text-xl">{item.type}</div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thumbnails */}
            <div className="thumbnail" ref={thumbnailRef}>
                {sliderItems.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="nextPrevArrows mt-5">
                <button className="prev" onClick={() => moveSlider("prev")}>
                    &lt;
                </button>
                <button className="next" onClick={() => moveSlider("next")}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;
