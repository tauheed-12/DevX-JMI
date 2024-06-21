import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logoDev from '../assets/file.png'

const Footer = () => {
    return (
        <div className="flex flex-row justify-evenly items-center py-6 px-4 w-full">
            <img src={logoDev} alt='logo' className="h-16" />
            <p className="text-lg font-bold text-white">Designed with ❤️ by team DevX JMI</p>
            <div className="flex flex-row gap-4">
                <a href='#' className="text-purple-600"><FaInstagram className="w-12 h-12" /></a>
                <a href='#' className="text-purple-600"><FaLinkedin className="w-12 h-12" /></a>
            </div>
        </div>
    )
}

export default Footer
