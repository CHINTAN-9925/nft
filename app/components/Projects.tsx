"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import g1 from '../assets/g1.svg';
import g2 from '../assets/g2.svg';
import g3 from '../assets/g3.svg';
import vector from '../assets/vector.svg';
import { Carousel } from 'antd';


const Projects: React.FC = () => {
    const projectData = [
        {
            id: 1,
            image: g1,
            title: 'Artwork Generator',
            description: "Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt.",
            imgHeight: 67.85,
            imgWidth: 130.86,
            titleWidth: '207px'
        },
        {
            id: 2,
            image: g2,
            title: 'Smart Contract Generator',
            description: "Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt.",
            imgHeight: 68.30,
            imgWidth: 79.90,
            titleWidth: '300px'
        },
        {
            id: 3,
            image: g3,
            title: 'Mint Page',
            description: "Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt.",
            imgHeight: 68,
            imgWidth: 83.92,
            titleWidth: '112px'
        },
        {
            id: 4,
            image: g3,
            title: 'Mint Page',
            description: "Lorem ipsum dolor sit amet consectetur. Pretium urna integer sit facilisi euismod. Non id sed consectetur dignissim egestas. Dignissim faucibus orci erat sagittis. Iaculis fermentum pellentesque dolor vitae suscipit habitant. Tincidunt amet quam sagittis viverra non pellentesque sed praesent. Elit duis magna risus sit nisl enim arcu. Sed duis sed et fermentum ultrices porta morbi. Cursus nibh sapien diam nullam volutpat volutpat sit augue nisl. Facilisi dignissim facilisis ut quis duis arcu cras scelerisque facilisis. Quis morbi nunc dolor lacinia tincidunt.",
            imgHeight: 68,
            imgWidth: 83.92,
            titleWidth: '112px'
        }
    ];
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([]);

    const toggleDescription = (projectId: number) => {
        if (expandedProjectIds.includes(projectId)) {
            setExpandedProjectIds(prevIds => prevIds.filter(id => id !== projectId));
        } else {
            setExpandedProjectIds(prevIds => [...prevIds, projectId]);
        }
    };
    const getDescription = (description: string, projectId: number) => {
        if (expandedProjectIds.includes(projectId)) {
            return description;
        }
        return description.length > 100 ? `${description.substring(0, 100)}...` : description;
    };



    return (
        <div className="ml-4 mt-4 sm:ml-[108px] sm:mt-[174px] lg:ml-[108px] lg:mt-[174px]">
            <div className="text-sky-500 text-[28px] font-semibold font-poppins leading-[46px] w-[248px] h-[46px]">Features found in</div>
            <div className="text-sky-700 text-[54px] font-semibold font-poppins leading-[46px] mt-[4px] w-auto h-auto">Blue-chip projects</div>
            <div className="text-neutral-400 text-base font-normal font-poppins leading-[30px] mt-[18px] w-auto h-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.
            </div>

            <Carousel autoplay draggable slidesToShow={window.innerWidth > 1024 ? 3 : 1}>
                {projectData.map((project) => (
                    <div key={project.id} className="flex justify-center items-center flex-col w-auto sm:w-[338.46px] sm:mx-4 bg-white rounded-3xl mx-auto">
                        <Image className='ml-2 mt-2 sm:ml-[20px] sm:mt-[25.84px] lg:ml-[28px] lg:mt-[35.84px]' src={project.image} width={project.imgWidth * 0.7} height={project.imgHeight * 0.7} alt={project.title} />
                        <div style={{ width: project.titleWidth }} className='text-sky-700 text-sm sm:text-[20px] lg:text-[22px] font-semibold font-poppins h-[33px] ml-2 mt-2 sm:ml-[20.92px] sm:mt-[10.94px] lg:ml-[27.92px] lg:mt-[14.94px]'>
                            {project.title}
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-[200px] sm:w-[250.63px] text-neutral-400 text-xs sm:text-sm font-normal font-poppins leading-[25px] mt-2 ml-2 sm:mt-[5.13px] sm:ml-[20.92px] lg:mt-[7.13px] lg:ml-[27.92px]'>
                                {getDescription(project.description, project.id)}
                            </div>
                            <div className='flex items-center mt-2'>
                                <div className='w-[70px] sm:w-[80px] h-[14px] text-sky-500 text-xs sm:text-base font-semibold font-poppins ml-2 sm:ml-[20.92px] lg:ml-[27.92px] whitespace-nowrap mr-[20px] cursor-pointer' onClick={() => toggleDescription(project.id)}>
                                    {expandedProjectIds.includes(project.id) ? 'Read less' : 'Read more'}
                                </div>
                                <div className="flex w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] bg-gradient-to-b from-sky-500 to-cyan-400 rounded-full ml-[7px] sm:ml-[8px] lg:ml-[9px] items-center justify-center">
                                    <button className='flex justify-center items-center lg:mt-[100px] rounded-[1.2px] text-center sm:rounded-[1.5px] h-[23px] w-[23px]' onClick={() => toggleDescription(project.id)}>
                                        <Image className='mb-[4px] mr-[2px]' src={vector} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );

};

export default Projects;
