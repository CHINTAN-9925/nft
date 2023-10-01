import React from 'react'
import Image from 'next/image';
import background from '../assets/background.png'
import avalanch from '../assets/avalanche.svg'
import bnb from '../assets/bnb.svg'
import cronos from '../assets/cronos.svg'
import fantom from '../assets/fantom.svg'
import polygon from '../assets/polygon.svg'
import details from '../assets/details.svg'


const Banner = () => {
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
            </div>
            <div className="flex-col w-[1280px] h-[158px] text-sky-500 text-2xl font-normal ">
                <div className="text-sky-700 text-2xl w-[214px] h-[36px] font-medium font-poppins ml-[123px] mr-[943px] mt-[32px] text-[24px] whitespace-nowrap">Chain we support</div>
                {/* chains */}
                <div className="flex justify-start items-center gap-x-[70px] mb-[30px] ml-[123px]">
                    <div className="flex justify-start items-center mt-[21px] space-x-2">
                        <Image className='flex justify-center items-center'
                            src={bnb}
                            width={44}
                            height={45}
                            alt="logo"
                        />
                        <div className="mt[30px]  w-[59px] h-[35px]">BNB</div>
                    </div>
                    <div className="flex justify-start items-center mt-[21px] space-x-2">
                        <Image className=' justify-start items-center'
                            src={fantom}
                            width={42}
                            height={42}
                            alt="logo"
                        />
                        <div className="mt[30px]">Fantom</div>

                    </div>
                    <div className="flex justify-start items-center mt-[21px] space-x-2">
                        <Image className='justify-start items-center'
                            src={cronos}
                            width={38}
                            height={42}
                            alt="logo"
                        />
                        <div className="mt[30px]">Cronos</div>

                    </div>
                    <div className="flex justify-start items-center mt-[21px] space-x-2">
                        <Image className='justify-start items-center'
                            src={polygon}
                            width={52}
                            height={52}
                            alt="logo"
                        />
                        <div className="mt[30px]">Polygon</div>

                    </div>
                    <div className="flex justify-start items-center mt-[21px] space-x-2">
                        <Image className='justify-start items-center'
                            src={avalanch}
                            width={50}
                            height={49}
                            alt="logo"
                        />
                        <div className="mt[30px]">Avalanch</div>

                    </div>
                </div>
            </div>
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


            <div className="text-sky-500 text-[28px] font-semibold font-poppins leading-[46px] mt-[174px] ml-[108px] w-[248px] h-[46px]">Features found in</div>
            <div className="text-sky-700 text-[54px] font-semibold font-poppins leading-[46px] mt-[4px] ml-[108px] w-[507px] h-[46px]">Blue-chip projects</div>
            <div className="text-neutral-400 text-base font-normal font-poppins leading-[30px] mt-[18px] ml-[108px] w-[706px] h-[30px]">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.</div>

        </>
    )
}

export default Banner
