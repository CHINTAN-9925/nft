import React from 'react'
import Image from 'next/image'
import avalanch from '../assets/avalanche.svg'
import bnb from '../assets/bnb.svg'
import cronos from '../assets/cronos.svg'
import fantom from '../assets/fantom.svg'
import polygon from '../assets/polygon.svg'

type Chain = {
    name: string;
    logoSrc: string;
    width: number;
    height: number;
};

const chains: Chain[] = [
    { name: "BNB", logoSrc: bnb, width: 44, height: 45 },
    { name: "Fantom", logoSrc: fantom, width: 42, height: 42 },
    { name: "Cronos", logoSrc: cronos, width: 38, height: 42 },
    { name: "Polygon", logoSrc: polygon, width: 52, height: 52 },
    { name: "Avalanch", logoSrc: avalanch, width: 50, height: 49 },
];
const Chains: React.FC = () => {
    //   return (
    //     <div className="flex-col w-[1280px] h-[158px] text-sky-500 text-2xl font-normal ">
    //     <div className="text-sky-700 text-2xl w-[214px] h-[36px] font-medium font-poppins ml-[123px] mr-[943px] mt-[32px] text-[24px] whitespace-nowrap">Chain we support</div>
    //     {/* chains */}
    //     <div className="flex justify-start items-center gap-x-[70px] mb-[30px] ml-[123px]">
    //         {chains.map((chain) => (
    //             <div key={chain.name} className="flex justify-start items-center mt-[21px] space-x-2">
    //                 <Image
    //                     className="justify-start items-center"
    //                     src={chain.logoSrc}
    //                     width={chain.width}
    //                     height={chain.height}
    //                     alt={chain.name}
    //                 />
    //                 <div className="mt[30px] w-[59px] h-[35px]">{chain.name}</div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    //   )
    return (
        <div className="flex flex-col w-full lg:w-[1280px] text-sky-500 text-2xl font-normal mx-auto mb-5 lg:mb-0 h-auto">
            <div className="text-sky-700 text-2xl w-[214px] h-[36px] font-medium font-poppins mx-auto lg:ml-[123px] lg:mr-[943px] mt-[32px] text-[24px] whitespace-nowrap">Chains we support</div>
            {/* chains */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-x-[70px] mb-[30px] mx-auto lg:ml-[123px]">
                {chains.map((chain) => (
                    <div key={chain.name} className="flex flex-col lg:flex-row justify-start items-center mt-[21px] space-x-0 lg:space-x-2">
                        <Image
                            className="justify-start items-center mb-2 lg:mb-0"
                            src={chain.logoSrc}
                            width={chain.width}
                            height={chain.height}
                            alt={chain.name}
                        />
                        <div className="mt[30px] w-[59px] h-[35px] text-center lg:text-left">{chain.name}</div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Chains
