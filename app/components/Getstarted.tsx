import React from 'react'
import Image from 'next/image'
import nft from '../assets/nft.png'

const Getstarted: React.FC = () => {
    return (

        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto mt-[163.16px]">
            <div className="flex-shrink-0 md:w-1/2 w-full relative h-auto md:h-auto">
                <Image className='w-full h-full object-cover' src={nft} alt="nft" />
            </div>
            <div className="md:ml-8 mt-8 md:mt-0 md:w-1/2 w-full">
                <div className="lg:w-[531.38px] w-3/4 mx-auto text-sky-700 text-[34px] font-semibold font-poppins leading-[46px] mt-[60px]">
                    Create your account today and get started for free!
                </div>
                <div className="lg:w-[451.40px] w-3/4 mx-auto text-neutral-500 text-base font-normal font-poppins text-[16px] leading-[30px] lg:mt-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
                </div>
                <div className="w-[150px] lg:w-[164px] h-[49px] btn-primary mx-auto lg:mx-0 lg:ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins">
                    <button className='w-full flex justify-center items-center py-[14px]'>
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Getstarted
