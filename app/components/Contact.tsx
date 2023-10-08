import React from 'react'
import Image from 'next/image';
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'
import location from '../assets/location.svg'

const Contact = () => {
    type ContactInfo = {
        icon: string;
        text: string;
        alt: string;
    };

    const contactInfos: ContactInfo[] = [
        {
            icon: location,
            text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            alt: "location"
        },
        {
            icon: call,
            text: "(316) 555-0116",
            alt: "call"
        },
        {
            icon: mail,
            text: "debra.holt@example.com",
            alt: "mail"
        }
    ];
    return (
        <div className="flex-none mt-[43px] ml-[108px] md:order-3">
            <div className="text-white text-xl font-medium font-poppins leading-[18px] mb-[28px]">Contact us</div>

            {contactInfos.map((info, index) => (
                <div className="flex mb-[40px]" key={index}>
                    <div className="w-5 h-5 flex mr-[7px]">
                        <Image
                            src={info.icon}
                            width={20}
                            height={20}
                            alt={info.alt}
                        />
                    </div>
                    <div className="w-[199px] text-white text-sm font-medium font-poppins leading-[18px]">
                        {info.text}
                    </div>
                </div>
            ))}
        </div>
    )
    
}

export default Contact
