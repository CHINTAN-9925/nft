import React from 'react'
import Image from 'next/image'
import background from '../assets/background.png'

import collection from '../assets/collection.png'
import tick from '../assets/tick.svg'
import nft from '../assets/nft.png'
import bro from '../assets/bro.svg'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Reviews from '../components/Reviews'
import Banner from '../components/Banner'

const Home: React.FC = () => {
  return (
    <div>
      
      <Banner/>

      {/* blue-chip-project */}
      <Projects />


      {/* pricing */}
      <div className="w-full h-[1043px] bg-white mt-[75.21px]">
        <div className=" text-sky-700 text-[54px] font-semibold font-poppins mt-[75.84px] ml-[108px] leading-[81px] h-[81px] w-[303px]">
          Our Pricing
        </div>
        <div className="w-[497px] h-[48px] text-neutral-400 text-base font-normal font-poppins ml-[108px] mt-[0px]">
          Get all the features you will need to launch your NFT project using One Mint's launchpad
        </div>
        <div className="flex space-x-[40px] mt-[51px] ml-[108px]">
          {/* div 1 */}
          <div className='w-[328px] h-[624px] border-2 rounded-[10px] border-sky-500'>

            <div className="text-slate-900 text-lg font-normal font-poppins ml-[23px] mt-[16px] w-[61px] h-[18px] text-[18px] leading-[27px]">Starter</div>

            <div className="ml-[20px]">
              <div className="flex text-center text-sky-500 text-[58px] leading-[87px] mr-[199px] font-semibold font-poppins mt-[1px] w-[100px] h-[87px]">
                {/* This is the $25 div */}
                <div className="">$25</div>

                {/* This is the Per Month div */}
                <div className="flex mt-[31px] items-center text-sky-500 text-lg font-medium font-poppins leading-[27px] ml-[8px] whitespace-nowrap">
                  Per Month
                </div>
              </div>

              {/* This is the description div which is now below the $25 div */}
              <div className="text-slate-900 text-[10px] font-normal font-poppins mt-[8px] leading-[15px]">
                Great to set up a standard marketplace
              </div>
              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] mt-[39px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="flex justify-center ml-[35px] w-[220px] h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] mt-[39px]"><button>Choose plan</button></div>


            </div>
          </div>

          <div className='w-[328px] h-[624px] border-2 rounded-[10px] border-sky-500'>

            <div className="text-slate-900 text-lg font-normal font-poppins ml-[23px] mt-[16px] w-[61px] h-[18px] text-[18px] leading-[27px]">Starter</div>

            <div className="ml-[20px]">
              <div className="flex text-center text-sky-500 text-[58px] leading-[87px] mr-[199px] font-semibold font-poppins mt-[1px] w-[100px] h-[87px]">
                {/* This is the $25 div */}
                <div className="">$25</div>

                {/* This is the Per Month div */}
                <div className="flex mt-[31px] items-center text-sky-500 text-lg font-medium font-poppins leading-[27px] ml-[8px] whitespace-nowrap">
                  Per Month
                </div>
              </div>

              {/* This is the description div which is now below the $25 div */}
              <div className="text-slate-900 text-[10px] font-normal font-poppins mt-[8px] leading-[15px]">
                Great to set up a standard marketplace
              </div>
              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] mt-[39px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="flex justify-center ml-[35px] w-[220px] h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] mt-[39px]"><button>Choose plan</button></div>


            </div>
          </div>
          <div className='w-[328px] h-[624px] border-2 rounded-[10px] border-sky-500'>

            <div className="text-slate-900 text-lg font-normal font-poppins ml-[23px] mt-[16px] w-[61px] h-[18px] text-[18px] leading-[27px]">Starter</div>

            <div className="ml-[20px]">
              <div className="flex text-center text-sky-500 text-[58px] leading-[87px] mr-[199px] font-semibold font-poppins mt-[1px] w-[100px] h-[87px]">
                {/* This is the $25 div */}
                <div className="">$25</div>

                {/* This is the Per Month div */}
                <div className="flex mt-[31px] items-center text-sky-500 text-lg font-medium font-poppins leading-[27px] ml-[8px] whitespace-nowrap">
                  Per Month
                </div>
              </div>

              {/* This is the description div which is now below the $25 div */}
              <div className="text-slate-900 text-[10px] font-normal font-poppins mt-[8px] leading-[15px]">
                Great to set up a standard marketplace
              </div>
              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] mt-[39px] h-[164px] w-[168px] flex flex-col justify-between">

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collections</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>1000 NFTs</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>10 collaborators</span>
                </div>

                <div className="flex items-center mt-[5px]">
                  <Image className='mr-[8px]'
                    src={tick}
                    width={10}
                    height={10}
                    alt="logo"
                  />
                  <span>Transaction fee from 2%</span>
                </div>

              </div>

              <div className="flex justify-center ml-[35px] w-[220px] h-[49px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-[10px] mt-[39px]"><button>Choose plan</button></div>


            </div>
          </div>

        </div>
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

      </div>


      {/* customer review */}
      <Reviews />

      {/* questions  */}
      <Faqs />

      {/* raising floor and wallet of frame  */}
      {/* <div className="mt-[122px]">
        <div className="relative w-24 h-24 p-6 text-white text-right">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-12 border-r-12 border-transparent border-t-green-500 border-r-green-500"></div>
          <div className="relative z-10">
            Your content here
          </div>
        </div>

      </div> */}

      {/* footer  */}
      <Footer />
    </div >
  )
}

export default Home
