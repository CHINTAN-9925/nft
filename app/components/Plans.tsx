import React from 'react';
import Image from 'next/image';
import tick from '../assets/tick.svg';

type PlanDetail = {
    title: string;
    price: string;
    description: string;
    features: string[];
    additionalFeatures: string[];
}
const Plans: React.FC = () => {
    const planDetails: PlanDetail[] = [
        {
            title: 'Starter',
            price: '$25',
            description: 'Great to set up a standard marketplace',
            features: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ],
            additionalFeatures: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ]
        },
        {
            title: 'Starter',
            price: '$25',
            description: 'Great to set up a standard marketplace',
            features: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ],
            additionalFeatures: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ]
        },
        {
            title: 'Starter',
            price: '$25',
            description: 'Great to set up a standard marketplace',
            features: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ],
            additionalFeatures: [
                '10 collections',
                '1000 NFTs',
                '10 collaborators',
                'Transaction fee from 2%'
            ]
        },
    ];
    return (
        <div className="flex space-x-[40px] mt-[51px] ml-[108px]">

            {planDetails.map((plan, index) => (
                <div key={index} className='w-[328px] h-[624px] border-2 rounded-[10px] border-sky-500'>
                    <div className="text-slate-900 text-lg font-normal font-poppins ml-[23px] mt-[16px] w-[61px] h-[18px] text-[18px] leading-[27px]">{plan.title}</div>
                    <div className="ml-[20px]">
                        <div className="flex text-center text-sky-500 text-[58px] leading-[87px] mr-[199px] font-semibold font-poppins mt-[1px] w-[100px] h-[87px]">
                            <div>{plan.price}</div>
                            <div className="flex mt-[31px] items-center text-sky-500 text-lg font-medium font-poppins leading-[27px] ml-[8px] whitespace-nowrap">
                                Per Month
                            </div>
                        </div>
                        <div className="text-slate-900 text-[10px] font-normal font-poppins  leading-[15px]">
                            {plan.description}
                        </div>
                        <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] h-[164px] w-[168px] flex flex-col justify-between mt-[7px] ">
                            {plan.features.map((feature, featureIdx) => (
                                <div className="flex items-center mt-[5px] mb-[2px]" key={featureIdx}>
                                    <Image className='mr-[8px] ' src={tick} width={10} height={10} alt="logo" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-slate-900 text-xs font-normal font-poppins leading-[20px] ml-[23px] h-[164px] w-[168px] flex flex-col justify-between mt-[39px]">
                            {plan.additionalFeatures.map((feature, featureIdx) => (
                                <div className="flex items-center mt-[5px]" key={featureIdx}>
                                    <Image className='mr-[8px]' src={tick} width={10} height={10} alt="logo" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex mt-[39px] text-white justify-center">
                            <button className='btn-primary w-[220px] h-[49px] text-white'>Choose plan</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Plans;
