import React from 'react'
import Image from 'next/image';
import background from '../assets/background.png'
import play from '../assets/play.svg'
import Chains from './Chains';
import Features from './Features';



const Banner: React.FC = () => {
    return (
        <>
            <div className='flex justify-center items-center w-[642px] h-[122px] mt-[101px] ml-[316px] mr-[316px] text-sky-500 text-7xl font-normal font-rammetto-one whitespace-nowrap'>
                Generate your
            </div>
            <div className='flex justify-center items-center w-[622px] mt-[-29px] h-[122px] ml-[329px] mr-[329px] text-7xl font-normal font-rammetto-one whitespace-nowrap font-outline-1'>
                NFT collection
            </div>
            <div className="relative ">
                {/* bg image */}
                <Image
                    src={background}
                    width={1280}
                    height={589}
                    alt="Main Image"
                />
                {/* text overlapping on top of the image  */}
                <div className="absolute text-center top-0 left-[319px] w-[642px] h-[63px] flex justify-center items-center mt-[4px] text-stone-900 text-sm">
                    Nifty Generator lets you randomly generate NFT images with different traits, complete with metadata—no coding needed. Just connect your image layers to our tool, and we’ll handle the generation!
                </div>
                <div className="flex space-x-[11px] absolute bottom-[440px] left-[470px]">
                    <button className='btn-primary w-[164px] h-[49px] text-white text-sm font-medium'>
                        Lunch your NFT
                    </button>
                    <button className='flex justify-center items-center gap-[6px] bg-white border-[1px] border-sky-500 rounded-[10px] w-[164px] h-[49px] text-sky-500 text-sm font-medium'>
                        <div>
                            <Image className='justify-center items-center text-center'
                                src={play}
                                // width={1280}
                                // height={589}
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

            <Features/>


        </>
    )
}

export default Banner
