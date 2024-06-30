import React from 'react';
import composio from '../assets/Composio icon.png';
import tjr from '../assets/tjr.png';

const Sponsors = () => {
    return (
        <div className="flex flex-col my-6 mx-4 sm:mx-8 gap-4 justify-center items-center" data-aos="fade-up">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sponsors and Partners</h1>
            <div className="flex flex-col sm:flex-row px-4 sm:px-16 justify-center items-center gap-4 sm:gap-8">
                <div className="flex flex-col text-white justify-center items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Sponsor</h3>
                    <img src={composio} alt='composio' className="w-24 h-24 sm:w-32 sm:h-32" />
                    <span className="text-xl sm:text-2xl">Composio</span>
                </div>
                <div className="w-full h-1 bg-pink-700 my-2 sm:hidden"></div>
                <div className="flex flex-col text-white justify-center items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Media Partner</h3>
                    <img src={tjr} alt='the jamia review' className="w-32 h-32 sm:w-36 sm:h-36" />
                    <span className="text-xl sm:text-2xl text-center">The Jamia Review Society</span>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;
