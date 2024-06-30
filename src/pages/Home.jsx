import React from 'react';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import About from './About';
import Rounds from '../components/Rounds';
import FAQs from '../components/FAQs';
import Schedule from '../components/Schedule';
import Footer from '../components/Footer';
import Judges from '../components/Judges';
import Sponsors from '../components/Sponsors';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div id='Home' data-aos="fade-in">
                <Hero />
            </div>

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4"></div>

            <div id='tracks' data-aos="fade-in">
                <Tracks />
            </div>

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4" id='about'></div>

            <About />

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4" id='rounds'></div>

            <Rounds />

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4" id='schedule'></div>
            <Schedule />


            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4"></div>

            <Judges />

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4"></div>

            <Sponsors />

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4"></div>

            <FAQs />

            <div className="border-t border-gray-300 w-full max-w-screen-lg my-4"></div>

            <Footer />

        </div>
    );
};

export default Home;
