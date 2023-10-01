import React from 'react'
import Image from 'next/image'
import e1 from '../assets/e1.svg'
import e2 from '../assets/e2.svg'
import e3 from '../assets/e3.svg'
import e4 from '../assets/e4.svg'
import e5 from '../assets/e5.svg'
import bro from '../assets/bro.svg'

const Reviews: React.FC = () => {
    return (
        <div className="h-[1075px] w-full mb-[117.67px] ">
        {/* <div className="h-[1075px] w-[1280px] mb-[117.67px] "> */}
            <div className="text-sky-700 text-4xl font-semibold font-poppins ml-[475px] mt-[510px] text-[36px] leading-[54px]">Customer Review</div>
            <div className="w-[596px] text-center text-neutral-400 text-base font-normal font-poppins text-[16px] ml-[342px] leading-[30px] mt-[11px]">
                <p>
                    Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
                </p>
            </div>
            <div className="flex space-x-[28px] mt-[62px] h-[230px]">
                <Image className='flex justify-center items-center mt-[45px] ml-[229px] opacity-70'
                    src={e1}
                    width={90}
                    height={90}
                    alt="logo"
                />
                <Image className='flex justify-center items-center mt-[45px] ml-[229px] opacity-70'
                    src={e2}
                    width={150}
                    height={150}
                    alt="logo"
                />
                <Image className='flex justify-center items-center mt-[45px] ml-[229px]'
                    src={e3}
                    width={230}
                    height={230}
                    alt="logo"
                />
                <Image className='flex justify-center items-center mt-[45px] ml-[229px] bg-white opacity-70'
                    src={e4}
                    width={150}
                    height={150}
                    alt="logo"
                />
                <Image className='flex justify-center items-center mt-[45px] ml-[229px] bg-white bg-opacity-70'
                    src={e5}
                    width={90}
                    height={90}
                    alt="logo"
                />
            </div>
            <div className="text-center text-sky-700 text-[28px] font-semibold font-poppins mt-[23px] leading-[42px]">Sophia Loyd</div>
            <div className="text-center text-neutral-400 text-xl font-normal font-poppins">CEO xo</div>
            <div className="w-[596px] text-center text-stone-900 text-lg font-normal font-poppins mt-[24px] ml-[342px]">
                Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt.
            </div>
            <div className="flex space-x-[6px] ml-[605px] mt-[33px]">
                <div className="w-[15px] h-1 bg-sky-200 rounded-[10px]" />
                <div className="w-7 h-1 bg-sky-500 rounded-[10px]" />
                <div className="w-[15px] h-1 bg-sky-200 rounded-[10px]" />
            </div>
            <div className="flex w-[1280px] h-[217px] bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 mt-[119px]">
                <div>
                    <div className="text-sky-700 text-[28px] font-semibold font-poppins leading-[46px] pt-[51px] ml-[108px]">
                        Create your account today and get started for free!
                    </div>
                    <div className="w-[596px] text-white text-base font-normal font-poppins leading-[30px] ml-[108px]">Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</div>
                </div>
                <Image className='absolute mb-[11px] ml-[720.2px] mt-[6px]'
                    src={bro}
                    width={216.7}
                    height={216.3}
                    alt="logo"
                />
                <div className="relative">
                    <div className="ml-[171px] mt-[84px] w-[164px] h-[49px] bg-white rounded-[10px] text-sky-500 text-sm font-semibold font-poppins mb-[84px]" >
                        <button className='ml-[55px] mt-[14px]'>Launch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
