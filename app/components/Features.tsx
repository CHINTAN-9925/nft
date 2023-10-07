import React from 'react'
import Image from 'next/image'
import details from '../assets/details.svg'

const Features: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-8 sm:mt-[50px] lg:mt-[100px] mx-auto lg:ml-[275px] lg:mr-[275px] w-full lg:w-[730px] h-auto text-[38px] text-sky-700 font-semibold font-poppins">
                Providing Value with Endless Features
            </div>
            <div className="flex justify-center items-center mt-4 sm:mt-8 lg:mt-[8px] mx-auto lg:ml-[354px] lg:mr-[355px] w-full lg:w-[571px] h-[30px] text-[16px] text-neutral-400 font-semibold font-poppins">
                A launchpad with all the tools needed to launch a successful collection.
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center mt-12 sm:mt-16 lg:mt-8'>
                <div className="flex flex-col space-y-12 sm:space-y-8 lg:space-y-0 lg:mr-8 h-auto">
                    {["1.Easy to use", "2.Rarity Settings", "3.Export to gifs to videos"].map((title, index) => (
                        <div key={index}>
                            <div className={`text-center lg:text-left w-full lg:w-[198px] h-auto whitespace-nowrap text-sky-500 text-2xl font-semibold font-poppins leading-[46px] ${index === 0 ? 'lg:ml-[139px] lg:mt-[112px]' : 'lg:ml-[139px] lg:mt-[112px]'}`}>
                                {title}
                            </div>
                            <p className={`mx-auto lg:ml-[140px] w-full lg:w-[325px] text-blue-950 text-sm font-normal font-poppins ${index === 0 ? '' : ''}`}>
                                A launchpad with all the tools needed to launch a successful collection.
                            </p>
                        </div>
                    ))}
                </div>
                <div className="relative w-full lg:w-[617px] h-[300px] lg:h-[504px] mt-12 sm:mt-16 lg:mt-[52px] rounded-[10px] mx-4 lg:mx-0">
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
