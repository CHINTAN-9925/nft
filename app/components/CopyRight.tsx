import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import aiow from '../assets/aiow.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const socialIcons = [
    { src: facebook, alt: 'Facebook' },
    { src: twitter, alt: 'Twitter' },
    { src: linkedin, alt: 'LinkedIn' },
    { src: instagram, alt: 'Instagram' },
];

const CopyRight: React.FC = () => {
    return (
        <div className="flex flex-col items-start mt-[43px] md:ml-[48px] lg:ml-[108px] space-y-6 md:order-1">
            <div className="flex space-x-[2px] items-center">

                <Image
                    className='w-[53px] h-[53px] rounded-[120px]'
                    src={logo}
                    width={53}
                    height={53}
                    alt="logo"
                />

                <Image
                    className='hidden md:block'  
                    src={aiow}
                    width={108}
                    height={30}
                    alt="aiow"
                />

            </div>

            {/* Copyright Text */}
            <div className="text-white text-[15px] font-normal font-poppins leading-[30px]">
                Copyright © 2023 BRIX Templates | All Rights Reserved
            </div>

            {/* Follow Us Text */}
            <div className="text-white text-[15px] font-medium font-poppins leading-[30px]">
                Follow us
            </div>

            {/* Social Media Icons using map */}
            <div className="flex space-x-4"> {/* Flexbox to ensure icons are in a row */}
                {socialIcons.map((icon, idx) => (
                    <a key={idx} href="#" className="w-9 h-9">
                        <div className="w-9 h-9 bg-white rounded-lg">
                            <Image
                                src={icon.src}
                                width={36}
                                height={36}
                                alt={icon.alt}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default CopyRight;
