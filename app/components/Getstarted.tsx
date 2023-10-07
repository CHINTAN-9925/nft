import React from 'react'
import Image from 'next/image'
import nft from '../assets/nft.png'

const Getstarted: React.FC = () => {
    return (
        // <div className="absolute flex w-auto h-auto mt-[163.16px]">
        //     <div className="">
        //         <Image className='relative  mb-[11px] ml-[51px]'
        //             src={nft}
        //             // width={558}
        //             // height={387}
        //             alt="nft"
        //         />
        //     </div>
        //     <div className="">
        //         <div className="lg:w-[531.38px] w-auto text-sky-700 text-[34px] font-semibold font-poppins leading-[46px] ml-auto mt-[60px] mr-auto">Create your account today and get started for free!</div>
        //         <div className="lg:w-[451.40px] w-auto text-neutral-500 text-base font-normal font-poppins tetx-[16px] leading-[30px] ml-[60px] mt-[16px]">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.</div>
        //         <div className="lg:w-[164px] w-auto h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins" >
        //             <button className='mt-[14px] ml-[43px]'>
        //                 Read more
        //             </button>
        //         </div>


        //     </div>
        // </div>
        // <div className="absolute flex flex-col md:flex-row w-full mt-[163.16px] h-auto">
        //     <div className="flex-shrink-0 md:w-1/2 w-full relative h-[300px] md:h-auto">
        //         <Image className='absolute inset-0 object-cover w-full h-full' src={nft} alt="nft" />
        //     </div>
        //     <div className="md:ml-8 mt-8 md:mt-0 md:w-1/2 w-full">
        //         <div className="lg:w-[531.38px] w-auto text-sky-700 text-[34px] font-semibold font-poppins leading-[46px] ml-auto mt-[60px] mr-auto">
        //             Create your account today and get started for free!
        //         </div>
        //         <div className="lg:w-[451.40px] w-auto text-neutral-500 text-base font-normal font-poppins text-[16px] leading-[30px] lg:ml-[60px] lg:mt-[16px]">
        //             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
        //         </div>
        //         {/* <div className="lg:w-[164px] w-auto h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins">
        //             <button className='mt-[14px] lg:ml-[43px]'>
        //                 Read more
        //             </button>
        //         </div> */}
        //         <div className="w-[150px] lg:w-[164px] h-[49px] btn-primary mx-auto lg:mx-0 lg:ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins">
        //             <button className='w-full flex justify-center items-center py-[14px]'>
        //                 Read more
        //             </button>
        //         </div>

        //     </div>
        // </div>
        // <div className="flex flex-col md:flex-row w-full mt-[163.16px]">
        //     <div className="flex-shrink-0 md:w-1/2 w-full relative h-[300px] md:h-auto">
        //         <Image className='w-full h-full object-cover' src={nft} alt="nft" />
        //     </div>
        //     <div className="md:ml-8 mt-8 md:mt-0 md:w-1/2 w-full">
        //         <div className="lg:w-[531.38px] w-auto text-sky-700 text-[34px] font-semibold font-poppins leading-[46px] ml-auto mt-[60px] mr-auto">
        //             Create your account today and get started for free!
        //         </div>
        //         <div className="lg:w-[451.40px] w-auto text-neutral-500 text-base font-normal font-poppins text-[16px] leading-[30px] lg:ml-[60px] lg:mt-[16px]">
        //             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
        //         </div>
        //         <div className="w-[150px] lg:w-[164px] h-[49px] btn-primary mx-auto lg:mx-0 lg:ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins">
        //             <button className='w-full flex justify-center items-center py-[14px]'>
        //                 Read more
        //             </button>
        //         </div>
        //     </div>
        // </div>

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

        // <div className="flex flex-col lg:flex-row items-start w-full lg:w-[1280px] h-auto mt-10 lg:mt-[163.16px] mx-auto">
        //     <div className="mb-4 lg:mb-0 w-full lg:w-auto lg:relative lg:top-[-31px]">
        //         <Image
        //             className='mx-auto lg:mx-0 lg:ml-[51px]'
        //             src={nft}
        //             // width={558}
        //             // height={387}
        //             alt="nft"
        //         />
        //     </div>
        //     <div className="w-full h-auto lg:w-auto">
        //         <div className="text-sky-700 text-xl lg:text-[34px] font-semibold font-poppins leading-[46px] ml-4 lg:ml-[60px] mt-4 lg:mt-[60px] ">
        //             Create your account today and get started for free!
        //         </div>
        //         <div className="text-neutral-500 text-center text-sm lg:text-base font-normal font-poppins leading-[30px] ml-4 lg:ml-[60px] mt-4 lg:mt-[16px]">
        //             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
        //         </div>
        //         <div className="w-[164px] h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] ml-[60px] mt-[44px] text-sky-50 text-sm font-semibold font-poppins" >
        //             <button className='mt-[14px] ml-[43px]'>
        //                 Read more
        //             </button>
        //         </div>
        //     </div>
        // </div>


    )
}

export default Getstarted
