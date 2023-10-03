import React from 'react'
import Image from 'next/image'
import nft from '../assets/nft.png'

const Getstarted: React.FC = () => {
    return (
        <div className="absolute flex w-[1280px] h-[367px] mt-[163.16px]">
            <div className=""><Image className='relative top-[-31px] mb-[11px] ml-[51px]'
                src={nft}
                width={558}
                height={387}
                alt="nft"
            /></div>
            <div className="">
                <div className="w-[531.38px] text-sky-700 text-[34px] font-semibold font-poppins leading-[46px] ml-[60px] mt-[60px] mr-[79.62px]">Create your account today and get started for free!</div>
                <div className="w-[451.40px] text-neutral-500 text-base font-normal font-poppins tetx-[16px] leading-[30px] ml-[60px] mt-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.</div>
                <div className="w-[164px] h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins" >
                    <button className='mt-[14px] ml-[43px]'>
                        Read more
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Getstarted
