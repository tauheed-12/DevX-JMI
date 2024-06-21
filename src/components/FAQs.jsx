import React, { useState } from 'react';
import { FAQ } from '../Data/FAQsdata';
import 'tailwindcss/tailwind.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-11/12 max-w-screen-lg mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-white">FAQs</h1>
            {FAQ.map((item, index) => (
                <div key={index} className="mb-4 border-none bg-purple-950 p-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(index)}
                    >
                        <p className="text-lg font-semibold text-purple-300">{item.ques}</p>
                        <span className="text-xl text-purple-200">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <p className="mt-2 text-purple-200">{item.ans}</p>
                    )}
                </div>
            ))}
            <div className="mt-6">
                <p className="text-lg text-white">Can't find your questions here?</p>
                <a href="mailto:sheikhtauheed@gmail.com">
                    <button type="button" className="bg-[#a50045] mx-auto mt-10 rounded-3xl w-[250px] h-[55px] flex flex-row justify-center gap-3  hover:bg-[#d80060] text-xl items-center text-white">
                        Contact Us
                    </button>
                </a>
            </div>
        </div>
    );
};

export default FAQs;
