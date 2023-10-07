import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import aiow from '../assets/aiow.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

// Assuming you have a list of social icons
const socialIcons = [
    { src: facebook, alt: 'Facebook' },
    { src: twitter, alt: 'Twitter' },
    { src: linkedin, alt: 'LinkedIn' },
    { src: instagram, alt: 'Instagram' },
];

const CopyRight: React.FC = () => {
    return (
        // <div className="flex-none mt-[43px] ml-[108px]">
        //     <div className="w-[266px] h-auto relative ">

        //         {/* Static Images */}
        //         <div className="flex space-x-[2px] items-center">
        //             <Image className='w-[53px] h-[53px] rounded-[120px] mr-[7px]'
        //                 src={logo}
        //                 width={53}
        //                 height={53}
        //                 alt="logo"
        //             />
        //             <Image
        //                 src={aiow}
        //                 width={108}
        //                 height={30}
        //                 alt="aiow"
        //             />
        //         </div>

        //         {/* Copyright Text */}
        //         <div className="w-[266px] h-[55px] left-0 top-[86px] absolute text-white text-[15px] font-normal font-poppins leading-[30px]">
        //             Copyright © 2023 BRIX Templates | All Rights Reserved
        //         </div>

        //         {/* Follow Us Text */}
        //         <div className="left-0 top-[174px] absolute text-white text-[15px] font-medium font-poppins leading-[30px]">
        //             Follow us
        //         </div>

        //         {/* Social Media Icons using map */}
        //         {socialIcons.map((icon, idx) => (
        //             <a key={idx} href="#" className={`w-9 h-9 left-[${idx * (36 + 16)}px] top-[211.77px] absolute`}>
        //                 <div className="w-9 h-9 bg-white rounded-lg">
        //                     <Image
        //                         src={icon.src}
        //                         width={36}  // specify both width
        //                         height={36} // and height
        //                         alt={icon.alt}
        //                         style={{ width: 'auto', height: 'auto' }}  // Ensure aspect ratio is maintained
        //                     />
        //                 </div>
        //             </a>
        //         ))}

        //     </div>
        // </div>
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
                    className='hidden md:block'  // The aiow image will only show from medium devices onwards
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
