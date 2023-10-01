'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import plus from '../assets/plus.svg'
import cross from '../assets/cross.svg'

type FAQ = {
    id: number;
    question: string;
    answer: string;
}

const data: FAQ[] = [
    {
        id: 1,
        question: "What is Webflow and why is it the best website builder?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas."
    },
    {
        id: 2,
        question: "What is your favorite template from BRIX Templates?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas."
    },
    {
        id: 3,
        question: "How do you clone a Webflow Template?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas."
    },
    {
        id: 4,
        question: "Why is BRIX Templates the best Webflow agency?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas."
    }
]

const Faqs: React.FC = () => {
    const [visibleDescriptionId, setVisibleDescriptionId] = useState<number | null>(null);

    const toggleDescription = (id: number) => {
        if (visibleDescriptionId === id) {
            setVisibleDescriptionId(null);
        } else {
            setVisibleDescriptionId(id);
        }
    }
    return (
        <div className="w-full px-4 md:px-8 lg:px-0">
            <div className="flex justify-center items-center sm:mt-20 text-center text-sky-700 text-4xl font-semibold font-poppins leading-[46px] mt-32 lg:mt-[220px]">
                Frequently Asked Questions
            </div>

            <div className="w-full max-w-2xl mx-auto text-center text-neutral-400 text-base font-normal font-poppins leading-[30px] mt-4 mb-12">
                Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
            </div>

            <div className="lg:w-[1064px] lg:mx-auto space-y-6 lg:space-y-[24px]">
                {data.map((faq, index) => (
                    <div
                        key={faq.id}
                        className={`
                            flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 
                            ${visibleDescriptionId === faq.id ? 'bg-sky-50' : 'bg-white'} 
                            rounded-[30px] border border-neutral-200 
                        `}
                    >
                        <div className="flex flex-col lg:flex-grow pr-4 pl-4 lg:pl-[63.51px] pt-[28px]">
                            <div className={`text-${visibleDescriptionId === faq.id ? 'sky-700' : 'stone-900'} text-xl md:text-[22px] lg:text-[22px] font-bold font-dm-sans leading-7 mb-4 md:mb-0`}>
                                {faq.question}
                            </div>
                            {visibleDescriptionId === faq.id && (
                                <div className="hidden lg:block w-[597px] h-[60px] overflow-hidden text-sky-700 text-lg font-normal font-dm-sans leading-[30px] mt-2 lg:mt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                        <div
                            className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center relative ${visibleDescriptionId === faq.id ? 'bg-gradient-to-b from-sky-500 to-cyan-400' : 'bg-sky-500 bg-opacity-20'}`}
                            onClick={() => toggleDescription(faq.id)}
                        >
                            {visibleDescriptionId === faq.id ? (
                                <>
                                    <div className="absolute">
                                        <Image src={cross} width={11.52} height={11.52} alt="cross-line" />
                                    </div>
                                    <div className="absolute">
                                        <Image src={cross} width={11.52} height={11.52} alt="cross-line" className="transform -rotate-90" />
                                    </div>
                                </>
                            ) : (
                                <Image src={plus} width={11.52} height={11.52} alt="plus-sign" />
                            )}
                        </div>
                        {/* {visibleDescriptionId === faq.id && (
                            <div className="block lg:hidden text-sky-700 text-lg font-normal font-dm-sans leading-[30px] mt-4">
                                {faq.answer}
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    )



}

export default Faqs;
