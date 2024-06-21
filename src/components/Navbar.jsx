import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming this file contains custom styles for Navbar
import { TfiAlignJustify } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import logo from "../assets/logo1.png"
import gdsclogo from "../assets/gdsclogo1.png";
import soarxlogo from "../assets/soarxlogo.png";

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false);

    return (
        <>
            <div id="Navbar" className="text-white">
                {!menuBar && <TfiAlignJustify style={{ color: 'white' }} onClick={() => setMenuBar(true)} className="sm:hidden md:hidden" />}
                <div className="Navbar_logo">
                    <img src={logo} className="w-32 h-16 " alt='logo' />
                    <img src={soarxlogo} alt='soar' className="w-30 sm:w-32 h-14 sm:h-16" />
                    <img src={gdsclogo} alt='gdsclogo' className="w-30 sm:w-32 h-14 sm:h-16" />
                </div>
                <div className="Navbar_navlinks">
                    <a id="link" href='#head' style={{ textDecoration: 'none' }}>Home</a>
                    <a href='#about' style={{ textDecoration: 'none' }}>About</a>
                    <a href='#schedule' style={{ textDecoration: 'none' }}>Schedule</a>
                    <a href='#tracks' style={{ textDecoration: 'none' }}>Tracks</a>
                    <a href='#rounds' style={{ textDecoration: 'none' }}>Rounds</a>
                    <Link to='/organisers' style={{ textDecoration: 'none' }}>Organisers</Link>
                </div>
                {menuBar && (
                    <div className="Menu_navlinks md:hidden">
                        <a id="link" href='#head' style={{ textDecoration: 'none' }}>Home</a>
                        <a href='#about' style={{ textDecoration: 'none' }}>About</a>
                        <a href='#schedule' style={{ textDecoration: 'none' }}>Schedule</a>
                        <a href='#tracks' style={{ textDecoration: 'none' }}>Tracks</a>
                        <a href='#rounds' style={{ textDecoration: 'none' }}>Rounds</a>
                        <Link to='/organisers' style={{ textDecoration: 'none' }}>Organisers</Link>
                        <FiX className="absolute right-1 top-1 text-lg" onClick={() => setMenuBar(false)} />
                    </div>
                )}
            </div>
            <div className="border-help"></div>
        </>
    );
}

export default Navbar;
