import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import aiow from '../assets/aiow.svg'
import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-between ">
                {/* logo and link */}
                <div className="flex items-center space-x-[60px] mt-[50px] text-[16px] p-[2px] ml-[56px]">
                    {/* for logos */}
                    <Image
                        src={logo}
                        width={53}
                        height={53}
                        alt="logo"
                    />
                    <Image className='ml-4'
                        src={aiow}
                        width={108}
                        height={30}
                        alt="logo"
                    />
                </div>
                <nav className="flex items-center text-black space-x-[60px] mt-[50px] text-[16px] p-[2px]">
                    <ul className="flex space-x-[60px] list-none">
                        {/* nav links */}
                        <li><Link className='nav-link' href="/home">Home</Link></li>
                        <li><Link className='nav-link' href="/about">About</Link></li>
                        <li><Link className='nav-link' href="/contact">Contact</Link></li>
                        <li><Link className='nav-link' href="/resources">Resources</Link></li>
                    </ul>
                    <div className='mr-[89px] '>
                        <button className='btn-primary w-[165px] h-[53px] mr-[57px]'>Get started</button>
                    </div>
                </nav>


            </div>
        </>
    )
}

export default Navbar

