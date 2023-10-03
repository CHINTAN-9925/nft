import React from 'react'
import Image from 'next/image'
import details from '../assets/details.svg'

const Features: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-[100px] ml-[275px] mr-[275px] w-[730px] h-[57px] text-[38px] text-sky-700 font-semibold font-poppins">
                Providing Value with Endless Features
            </div>
            <div className="flex justify-center items-center mt-[8px] ml-[354px] mr-[355px] w-[571px] h-[30px] text-[16px] text-neutral-400 font-semibold font-poppins">A launchpad with all the tools needed to launch a successful collection.</div>


            <div className='flex justify-center items-center   '>
                <div>
                    <div>
                        <div className='flex-col w-[152px] h-[46px] mt-[112px] ml-[139px] text-sky-500 text-2xl font-semibold font-poppins leading-[46px]'>
                            1.Easy to use
                        </div>
                        <p className="ml-[140px] w-[325px] h-[42px] text-blue-950 text-sm font-normal font-poppins ">A launchpad with all the tools needed to launch a successful collection.</p>
                    </div>
                    <div>
                        <div className='flex-col w-[198px] h-[46px] mt-[112px] ml-[139px] text-sky-500 text-2xl font-semibold font-poppins leading-[46px]'>
                            2.Rarity Settings
                        </div>
                        <p className="ml-[140px] w-[325px] h-[42px] text-blue-950 text-sm font-normal font-poppins ">A launchpad with all the tools needed to launch a successful collection.</p>
                    </div>
                    <div>
                        <div className='flex-col w-[294px] h-[46px] mt-[112px] ml-[139px] text-sky-500 text-2xl font-semibold font-poppins leading-[46px]'>
                            3.Export to gifs to videos
                        </div>
                        <p className="ml-[140px] w-[325px] h-[42px] text-blue-950 text-sm font-normal font-poppins ">A launchpad with all the tools needed to launch a successful collection.</p>
                    </div>
                </div>
                <div className="relative w-[617px] h-[504px] flex justify-start items-center rounded-[10px] mt-[52px] mr-[104px] ml-[94px]">
                    <Image
                        className="object-cover rounded-[10px] absolute inset-0"
                        src={details}
                        layout="fill"
                        alt="logo"
                    />
                </div>


            </div>
        </>
    )
}

export default Features
