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
                <div className="flex items-center text-black space-x-[60px] mt-[50px] text-[16px] p-[2px]">
                    {/* nav links */}
                    <Link className='h-[16px] text-base font-normal  text-neutral-400 font-dm-sans leading-[18px]' href="/home">Home</Link>
                    <Link className='h-[16px] text-base font-normal  text-neutral-400 font-dm-sans leading-[18px]' href="/about">About</Link>
                    <Link className='h-[16px] text-base font-normal  text-neutral-400 font-dm-sans leading-[18px]' href="/contact">Contact</Link>
                    <Link className='h-[16px] text-base font-normal  text-neutral-400 font-dm-sans leading-[18px]' href="/resources">Resources</Link>
                    <div className='mr-[89px] '>
                        <button className='bg-gradient-to-b from-sky-500 to-cyan-400  text-white text-lg font-medium font-poppins w-[165px] h-[53px] mr-[57px] rounded-[10px] '><div className="h-[]27px pt-[13px] pb-[13px] pl-[31px] pr-[31px]">Get started</div></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

