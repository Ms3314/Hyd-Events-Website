import React, { useState } from 'react';
import img1 from '../../assets/img1.png';
import pic2 from '../../assets/pic2.png';

const slides = [
    { src: img1, key: 'img1' },
    { src: pic2, key: 'pic2' },
];

const CustomCarousel = () => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    };

    const next = () => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    };

    return (
        <div className="overflow-hidden relative">
            <div className="flex h-80 w-full items-center justify-center">
                <div
                    className="flex h-80 transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)`,
                            width: `${slides.length * 100}%`, }}
                >
                    {slides.map((slide) => (
                        <div className="flex-shrink-0 w-full flex justify-center" key={slide.key}>
                            <img src={slide.src} alt={slide.key} className="max-w-xs mx-auto md:max-w-md lg:max-w-lg" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-10 right-0 left-0">
                <div className="flex items-center justify-center">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-blue-500 p-2" : "bg-white bg-opacity-50"}`}
                            onClick={() => setCurr(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;