"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Carousel } from 'antd';
import e1 from '../assets/e1.svg'
import e2 from '../assets/e2.svg'
import e3 from '../assets/e3.svg'
import e4 from '../assets/e4.svg'
import e5 from '../assets/e5.svg'
import bro from '../assets/bro.svg'
import Slider from 'react-slick';



type ImageDetail = {
    src: string;
    width: number;
    height: number;
    alt: string;
    opacity?: string;
    marginTop: string;
    marginLeft: string;
    bgWhite?: string;
    name: string;
    designation: string;
    description: string;

};

const Reviews: React.FC = () => {
    const imageDetails: ImageDetail[] = [
        {
            src: e1,
            width: 230,
            height: 230,
            alt: "Image 1",
            marginTop: "mt-[45px]",
            marginLeft: "ml-[229px]",
            name: "John Doe",
            designation: "CEO",
            description: "john Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt."
        },
        {
            src: e2,
            width: 230,
            height: 230,
            alt: "Image 2",
            marginTop: "mt-[45px]",
            marginLeft: "ml-[229px]",
            name: "Jane Smith",
            designation: "Lead Designer",
            description: "jane Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt."
        },
        {
            src: e3,
            width: 230,
            height: 230,
            alt: "Image 3",
            marginTop: "mt-[45px]",
            marginLeft: "ml-[229px]",
            name: "Alice Johnson",
            designation: "Product Manager",
            description: "alice Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt."
        },
        {
            src: e4,
            width: 230,
            height: 230,
            alt: "Image 4",
            marginTop: "mt-[45px]",
            marginLeft: "ml-[229px]",
            bgWhite: "bg-white",
            name: "Bob Brown",
            designation: "Marketing Head",
            description: "bob Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt."
        },
        {
            src: e5,
            width: 230,
            height: 230,
            alt: "Image 5",
            marginTop: "mt-[45px]",
            marginLeft: "ml-[229px]",
            bgWhite: "bg-white bg-opacity-70",
            name: "Charlie Wilson",
            designation: "Sales Manager",
            description: "charlie Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt."
        },
    ];
    const [centeredItem, setCenteredItem] = useState(imageDetails[0]);
    const handleSlideChange = (currentSlide: number) => {
        setCenteredItem(imageDetails[currentSlide]);
    };
    return (
        <div className="h-auto w-full mb-auto ">
            <div className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold font-poppins mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-[143px] leading-[54px] text-center">
                Customer Review
            </div>
            <div className="w-full text-center text-neutral-400 text-base font-normal font-poppins leading-[30px] mt-[11px] px-4 sm:px-6 md:px-8 lg:px-0 lg:text-[16px] mx-auto">
                <p>
                    Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
                </p>
            </div>
            <Carousel
                className="custom-carousel mt-[62px] lg:ml-[150px]"
                autoplay
                autoplaySpeed={5000}
                centerMode
                dots={false}
                centerPadding="0"
                slidesToShow={3}
                beforeChange={(oldIndex, newIndex) => handleSlideChange(newIndex)}>

                {imageDetails.map((image, index) => (
                    <div key={index} className="slider-item carousel-center">
                        <Image
                            className={`${image.opacity || ''} ${image.bgWhite || ''}`}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    </div>
                ))}

            </Carousel>
            <div className="text-center mt-4">
                <div className="text-sky-700 text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-semibold font-poppins leading-[42px] mt-[]">
                    {centeredItem.name}
                </div>
                <div className="text-center text-neutral-400 text-base sm:text-lg md:text-xl font-normal font-poppins mt-2">
                    {centeredItem.designation}
                </div>
                <div className="w-full max-w-2xl mx-auto text-center text-stone-900 text-base sm:text-lg md:text-xl font-normal font-poppins mt-4 sm:mt-6 lg:mt-[24px] px-4">
                    {centeredItem.description}
                </div>
            </div>

            <div className="relative bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 mt-8 lg:mt-[119px] h-[217px] lg:h-auto lg:flex lg:w-[1280px]">

                {/* For smaller screens: Using the Image as a background */}
                <Image
                    className='block lg:hidden absolute w-full h-full object-cover'
                    src={bro}
                    alt="Background"
                />

                {/* Text content overlaying the image for smaller screens */}
                <div className="absolute h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 text-center lg:static lg:transform-none lg:w-auto lg:ml-[108px]">
                    <div className="text-sky-700 text-xl lg:text-[28px] font-semibold font-poppins leading-[24px] lg:leading-[46px] lg:pt-[51px]">
                        Create your account today and get started for free!
                    </div>
                    <div className="text-white h-full text-sm lg:text-base font-normal font-poppins leading-[20px] lg:leading-[30px] mt-2 lg:ml-0 ">
                        Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
                    </div>
                </div>

                {/* For large screens: Showing the Image on the side */}
                <Image
                    className='hidden lg:block lg:absolute lg:mb-[11px] lg:ml-[720.2px] lg:mt-[6px]'
                    src={bro}
                    width={216.7}
                    height={216.3}
                    alt="logo"
                />

                <div className="absolute h-auto bottom-[0px] left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:ml-[171px] lg:mr-[108px] lg:mt-[84px]">
                    <button className="w-[164px] h-[40px] bg-white rounded-[10px] text-sky-500 text-sm font-semibold font-poppins lg:mb-[84px]">
                        Launch
                    </button>
                </div>



            </div>


        </div>
    )
}

export default Reviews
