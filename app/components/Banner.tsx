import React from 'react'
import Image from 'next/image';
import background from '../assets/background.png'
import play from '../assets/play.svg'
import Chains from './Chains';
import Features from './Features';



const Banner: React.FC = () => {
    return (
        <>
            <div className='flex justify-center items-center text-center lg:h-[122px] lg:mt-[101px] mt-[50px] text-sky-500 lg:text-7xl text-4xl font-normal font-rammetto-one whitespace-nowrap'>
                Generate your
            </div>
            <div className='flex justify-center items-center text-center lg:h-[122px] lg:text-7xl text-4xl font-normal font-rammetto-one whitespace-nowrap font-outline-1'>
                NFT collection
            </div>

            <div className="relative ">
                {/* text overlapping on top of the image  */}
                <div className="on-sm absolute text-center lg:left-[319px] w-full lg:w-[642px] h-auto px-4 lg:px-0 text-[10px] lg:text-sm flex justify-center items-center mt-[4px] text-stone-900">
                    Nifty Generator lets you randomly generate NFT images with different traits, complete with metadata—no coding needed. Just connect your image layers to our tool, and we’ll handle the generation!
                </div>

                {/* bg image */}
                <Image className='w-full h-full object-cover mt-7 lg:mt-0'
                    src={background}
                    alt="Main Image"
                />
                <div className="flex flex-col items-center sm:flex-row space-y-[11px] sm:space-y-0 sm:space-x-[11px] relative sm:absolute sm:bottom-[440px] sm:left-[470px] mt-[20px] sm:mt-0">
                    <button className='btn-primary w-[164px] h-[49px] text-white text-sm font-medium'>
                        Launch your NFT
                    </button>
                    <button className='flex justify-center items-center gap-[6px] bg-white border-[1px] border-sky-500 rounded-[10px] w-[164px] h-[49px] text-sky-500 text-sm font-medium'>
                        <div>
                            <Image className='justify-center items-center text-center'
                                src={play}
                                alt="Main Image"
                            />
                        </div>
                        <div>
                            Watch Video
                        </div>
                    </button>
                </div>
            </div>
            <Chains />

            <Features />


        </>
    )
}

export default Banner
