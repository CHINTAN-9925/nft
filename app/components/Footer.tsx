import React from 'react';
import Image from 'next/image';
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/LinkedIn.svg'
import twitter from '../assets/Twitter.svg'
import youtube from '../assets/YouTube.svg'
import logo from '../assets/logo.png'
import aiow from '../assets/aiow.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'
import location from '../assets/location.svg'

const Footer: React.FC = () => {
    return (
        <div className=" h-[402px] bg-slate-950">
            <div className="flex mt-[43px] ">

                <div className="flex-none mt-[43px] ml-[108px]">
                    <div className="w-[266px] h-[247.77px] relative ">
                        <div className="flex space-x-[2px] items-center">
                            <Image className='w-[53px] h-[53px] rounded-[120px] mr-[7px]'
                                src={logo}
                                width={53}
                                height={53}
                                alt="logo"
                            />
                            <Image
                                src={aiow}
                                width={108}
                                height={30}
                                alt="aiow"
                            />
                        </div>
                        <div className="w-[266px] h-[55px] left-0 top-[86px] absolute text-white text-[15px] font-normal font-poppins leading-[30px]">Copyright © 2023 BRIX Templates | All Rights Reserved </div>
                        <div className="left-0 top-[174px] absolute text-white text-[15px] font-medium font-poppins leading-[30px]">Follow us</div>
                        <a href="#" className="w-9 h-9 left-0 top-[211.77px] absolute">
                            <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-lg">
                                <Image
                                    src={facebook}
                                    width={108}
                                    height={30}
                                    alt="Facebook"
                                />
                            </div>
                        </a>

                        <a href="#" className="w-9 h-9 left-[52px] top-[211.77px] absolute">
                            <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-lg">
                                <Image
                                    src={twitter}
                                    width={108}
                                    height={30}
                                    alt="Twitter"
                                />
                            </div>
                        </a>

                        <a href="#" className="w-9 h-9 left-[104px] top-[211.77px] absolute">
                            <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-lg">
                                <Image
                                    src={instagram}
                                    width={108}
                                    height={30}
                                    alt="Instagram"
                                />
                            </div>
                        </a>

                        <a href="#" className="w-9 h-9 left-[156px] top-[211.77px] absolute">
                            <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-lg">
                                <Image
                                    src={linkedin}
                                    width={108}
                                    height={30}
                                    alt="LinkedIn"
                                />
                            </div>
                        </a>

                        <a href="#" className="w-9 h-9 left-[208px] top-[211.77px] absolute">
                            <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-lg">
                                <Image
                                    src={youtube}
                                    width={108}
                                    height={30}
                                    alt="YouTube"
                                />
                            </div>
                        </a>

                        {/* <div className="w-[174px] h-[53px] left-0 top-0 absolute">
                        </div> */}
                    </div>
                </div>

                <div className="flex-none mt-[43px] ml-[48px]">
                    {/* Content for Column 2 */}
                    <div className="w-[417px] h-[205px] relative ">
                        <div className="left-0 top-0 absolute text-center text-white text-base font-medium font-poppins leading-[18px]">Home</div>
                        <div className="w-[215px] h-[18px] left-[162px] top-0 absolute">
                            <div className="left-0 top-0 absolute text-center text-white text-base font-medium font-poppins leading-[18px]">Company</div>
                            <div className="left-[149px] top-0 absolute text-center text-white text-base font-medium font-poppins leading-[18px]">Contact</div>
                        </div>
                        <a href="#" className="left-0 top-[43px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">Features</a>
                        <a href="#" className="left-0 top-[79px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">Pricing</a>
                        <a href="#" className="left-0 top-[115px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">Case studies</a>
                        <a href="#" className="left-0 top-[151px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">Reviews</a>
                        <a href="#" className="left-0 top-[187px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">Updates</a>
                        <a href="#" className="left-[162px] top-[43px] absolute text-center text-sky-500 text-sm font-normal font-poppins leading-[18px] hover:text-white">About</a>

                        <a href="#" className="w-[72px] h-[18px] left-[162px] top-[79px] absolute flex items-center justify-center text-sky-500 text-sm font-dm-sans leading-[18px] hover:text-white">Contact us</a>
                        <a href="#" className="w-[51px] h-[18px] left-[162px] top-[115px] absolute flex items-center justify-center text-sky-500 text-sm font-dm-sans leading-[18px] hover:text-white">Careers</a>
                        <a href="#" className="w-12 h-[18px] left-[162px] top-[151px] absolute flex items-center justify-center text-sky-500 text-sm font-dm-sans leading-[18px] hover:text-white">Culture</a>
                        <a href="#" className="w-7 h-[18px] left-[162px] top-[187px] absolute flex items-center justify-center text-sky-500 text-sm font-dm-sans leading-[18px] hover:text-white">Blog</a>
                        <a href="#" className="left-[311px] top-[43px] absolute text-sky-500 text-sm font-poppins leading-[18px] hover:text-white">Getting started</a>
                        <a href="#" className="left-[311px] top-[79px] absolute text-sky-500 text-sm font-dm-sans leading-[18px] hover:text-white">Help center</a>
                        <a href="#" className="left-[311px] top-[115px] absolute text-sky-500 text-sm font-poppins leading-[18px] hover:text-white">Server status</a>
                        <a href="#" className="left-[311px] top-[151px] absolute text-sky-500 text-sm font-poppins leading-[18px] hover:text-white">Report a bug</a>
                        <a href="#" className="left-[311px] top-[187px] absolute text-sky-500 text-sm font-poppins leading-[18px] hover:text-white">Chat support</a>
                    </div>
                </div>

                <div className="flex-none mt-[43px] ml-[108px]">
                    {/* Content for Column 3 */}

                    <div className="text-white text-xl font-medium font-poppins leading-[18px] mb-[28px]">Contact us</div>

                    <div className="flex">
                        <div className="w-5 h-5 flex mr-[7px]">
                            <Image
                                src={location}
                                width={20}
                                height={20}
                                alt="location"
                            />
                        </div>

                        <div className="w-[199px] text-white text-sm font-medium font-poppins leading-[18px] mb-[36px]">1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
                    </div>
                    <div className="flex">
                        <div className="w-5 h-5 flex mr-[7px]">
                            <Image
                                src={call}
                                width={20}
                                height={20}
                                alt="call"
                            />
                        </div>
                        <div className="w-[199px] text-white text-sm font-medium font-poppins leading-[18px] mb-[43px]">(316) 555-0116</div>

                    </div>

                    <div className="flex">
                        <div className="w-5 h-5 flex mr-[7px]">
                            <Image
                                src={mail}
                                width={20}
                                height={20}
                                alt="mail"
                            />
                        </div>
                        <div className="w-[199px] text-white text-sm font-medium font-poppins leading-[18px]">debra.holt@example.com</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;

