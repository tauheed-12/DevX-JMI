import React from 'react';
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Hero = () => {



  return (
    <div >
      <div className="float-content1"></div>
      <div className="float-content2"></div>
      <div className="float-content3"></div>
      <div className="float-content4"></div>
      <div className="float-content5"></div>
      <div className="flex justify-between gap-6 container max-w-[1600px] mx-auto items-center
     py-8 md:py-10 flex-col md:flex-row px-7 md:px-0">
        <div className="block md:hidden md:w-[50%]">
          <img src={require('../assets/file.png')} style={{ width: '600px', height: '400px' }} alt='img' />
        </div>

        <div className="md:w-[50%]">
          <div className="w-[95%] xl:w-[70%] mx-auto">
            <h1
              className="top-0 h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto">
              Welcome to DevX JMI
            </h1>
            <p className="text-white font-serif text-[16px] sm:text-[20px] font-bold mt-[63px] text-center sm:mx-2">
              Unleash Your Creativity and Innovation<br />
              Join DEVXJMI to innovate and collaborate! In this three-round marathon,
              teams will design and build innovative ideas from scratch, create cutting-edge solutions,
              compete for prizes, and network with industry experts. Whether you're a coder, designer,
              or entrepreneur, bring your skills and ideas to build something amazing.
              <br />Sign up now and be part of the future!
            </p>
          </div>
          <Link to='/register' className=''>
            <span className='bg-[#a50045] mx-auto mt-10 rounded-3xl w-[250px] h-[55px] flex flex-row justify-center gap-3  hover:bg-[#d80060]'>
              <FaCircle className='text-white mt-5 ' />
              <button className='text-[20px] text-white font-bold '>REGISTOR NOW</button>
            </span>
          </Link>

        </div>
        <div className="md:w-[50%] md:block hidden">
          <img src={require('../assets/file.png')} style={{ width: '600px', height: '500px' }} alt='logo' />
        </div>

      </div>
    </div>

  );
}

export default Hero;