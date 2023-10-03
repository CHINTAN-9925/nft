import React from 'react';
import Image from 'next/image';
import g1 from '../assets/g1.svg';
import g2 from '../assets/g2.svg';
import g3 from '../assets/g3.svg';
import vector from '../assets/vectorproj.svg'

type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    imgHeight: number;
    imgWidth: number;
    titleWidth: string;
};
const Projects: React.FC = () => {
    const projectData: Project[] = [
        {
            id: 1,
            image: g1,
            title: 'Artwork Generator',
            description: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.',
            imgHeight: 67.85,
            imgWidth: 130.86,
            titleWidth: '207px'
        },
        {
            id: 2,
            image: g2,
            title: 'Smart Contract Generator',
            description: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.',
            imgHeight: 68.30,
            imgWidth: 79.90,
            titleWidth: '300px'
        },
        {
            id: 3,
            image: g3,
            title: 'Mint Page',
            description: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.',
            imgHeight: 68,
            imgWidth: 83.92,
            titleWidth: '112px'
        }
    ];


        return (
            <div className="ml-[108px] mt-[174px]">
                {/* New Content Starts Here */}
                <div className="text-sky-500 text-[28px] font-semibold font-poppins leading-[46px] w-[248px] h-[46px]">
                    Features found in
                </div>
                <div className="text-sky-700 text-[54px] font-semibold font-poppins leading-[46px] mt-[4px] w-[507px] h-[46px]">
                    Blue-chip projects
                </div>
                <div className="text-neutral-400 text-base font-normal font-poppins leading-[30px] mt-[18px] w-[706px] h-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
                </div>
                {/* New Content Ends Here */}

                <div className="flex h-[430px] mt-[37px] text-black space-x-[24.42px] w-full">
                    {projectData.map(project => (
                        <div key={project.id} className="w-[338.46px] h-[323.63px] bg-white rounded-3xl mt-[31.16px]">
                            <Image className='ml-[28px] mt-[35.84px]' src={project.image} width={project.imgWidth} height={project.imgHeight} alt={project.title} />
                            <div style={{ width: project.titleWidth }} className='text-sky-700 text-[22px] font-semibold font-poppins h-[33px] ml-[27.92px] mt-[14.94px]'>
                                {project.title}
                            </div>
                            <div className='w-[282.63px] h-[78.51px] text-neutral-400 text-sm font-normal font-poppins leading-[30px] mt-[7.13px] ml-[27.92px] '>
                                {project.description}
                            </div>
                            <div className='flex'>
                                <div className='w-[89px] h-[16px] lesding-[24px] text-sky-500 text-base font-semibold font-poppins ml-[27.92px] mt-[20.27px]'>
                                    Read more
                                </div>
                                <div className="w-[23px] h-[23px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-full ml-[9px] mt-[22.57px]">
                                    <button className='rounded-[1.5px]'>
                                        <Image className='m-[10px]' src={vector} width={4} height={9} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default Projects;
