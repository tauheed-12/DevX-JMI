import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logoDev from '../assets/file.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex flex-row justify-evenly items-center py-6 px-4 w-full">
            <img src={logoDev} alt='logo' className="h-16" />
            <p className="text-lg font-bold text-white">Designed with ❤️ by team DevX JMI</p>
            <div className="flex flex-row gap-4">
                <Link to='https://www.instagram.com/soarxjmi/' className="text-purple-600"><FaInstagram className="w-10 h-10 sm:w-12 sm:h-12" /></Link>
                <Link to='https://www.linkedin.com/company/soarx-jmi/' className="text-purple-600"><FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12" /></Link>
            </div>
        </div>
    )
}

export default Footer
