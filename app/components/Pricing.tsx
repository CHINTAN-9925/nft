import React from 'react'
import Plans from './Plans'
import Getstarted from './Getstarted'
const Prising: React.FC = () => {
    return (
        <div className="w-full h-[1043px] bg-white mt-[75.21px]">
            <div className=" text-sky-700 text-[54px] font-semibold font-poppins mt-[75.84px] ml-[108px] leading-[81px] h-[81px] w-[303px]">
                Our Pricing
            </div>
            <div className="w-[497px] h-[48px] text-neutral-400 text-base font-normal font-poppins ml-[108px] mt-[0px]">
                Get all the features you will need to launch your NFT project using One Mint's launchpad
            </div>

            {/* plans  */}
            <Plans />

           {/* get started */}
            <Getstarted />

        </div>
    )
}

export default Prising
