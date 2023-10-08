"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import aiow from '../assets/aiow.svg';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-[60px]">
                    <Image src={logo} width={53} height={53} alt="logo" />
                    <Image src={aiow} width={108} height={30} alt="AIOW" />
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center md:space-x-[60px]`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li><Link href="/home"><div className="block py-2 pl-3 pr-4 hover:text-black rounded md:p-0">Home</div></Link></li>
                        <li><Link href="/about"><div className="block py-2 pl-3 pr-4 hover:text-black rounded md:p-0">About</div></Link></li>
                        <li><Link href="/contact"><div className="block py-2 pl-3 pr-4 hover:text-black rounded md:p-0">Contact</div></Link></li>
                        <li><Link href="/resources"><div className="block py-2 pl-3 pr-4 hover:text-black rounded md:p-0">Resources</div></Link></li>
                    </ul>
                    <div className='mr-[89px]'>
                        <button className='btn-primary w-[165px] h-[53px] mr-[57px]'>Get started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

