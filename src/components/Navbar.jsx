import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { TfiAlignJustify } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import logo from "../assets/logo1.png"
import gdsclogo from "../assets/gdsclogo1.png";
import soarxlogo from "../assets/soarlogo.png";

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false);

    return (
        <>
            <div id="Navbar" className="text-white">
                {!menuBar && <TfiAlignJustify style={{ color: 'white' }} onClick={() => setMenuBar(true)} className="sm:hidden md:hidden w-8 h-8" />}
                <div className="Navbar_logo">
                    <img src={logo} className="w-28 h-12 " alt='logo' />
                    <div className="flex flex-row">
                        <img src={soarxlogo} alt='soar' className="w-32 h-16" />
                        <img src={gdsclogo} alt='gdsclogo' className="w-28 sm:w-32 h-12 sm:h-12" />
                    </div>
                </div>
                <div className="Navbar_navlinks">
                    <Link id="link" to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    <a href='#about' style={{ textDecoration: 'none' }}>About</a>
                    <a href='#schedule' style={{ textDecoration: 'none' }}>Schedule</a>
                    <a href='#tracks' style={{ textDecoration: 'none' }}>Tracks</a>
                    <a href='#rounds' style={{ textDecoration: 'none' }}>Rounds</a>
                    <Link to='/organisers' style={{ textDecoration: 'none' }}>Organisers</Link>
                </div>
                {menuBar && (
                    <div className="Menu_navlinks md:hidden z-50">
                        <Link id="link" to='/' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>Home</Link>
                        <a href='#about' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>About</a>
                        <a href='#schedule' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>Schedule</a>
                        <a href='#tracks' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>Tracks</a>
                        <a href='#rounds' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>Rounds</a>
                        <Link to='/organisers' style={{ textDecoration: 'none' }} onClick={() => setMenuBar(false)}>Organisers</Link>
                        <FiX className="absolute right-1 top-1 text-lg" onClick={() => setMenuBar(false)} />
                    </div>
                )}
            </div>
            <div className="border-help"></div>
        </>
    );
}

export default Navbar;
