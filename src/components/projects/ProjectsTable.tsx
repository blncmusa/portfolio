"use client";

import React, { useState } from 'react';
import { Project } from '@/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


export default function ProjectsTable({ projects }: { projects: Project[] }) {
    const [selectedTag, setSelectedTag] = useState('All');

    const capitalizeWords = (str: string | undefined): string => {
      if (!str) return '';
      return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
    }
      
      const tags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags).filter(tag => tag !== undefined)))].map(capitalizeWords);
      
      const filteredProjects = projects.filter(project => {
      return selectedTag === 'All' || project.tags?.map(capitalizeWords).includes(selectedTag);
    });


    return (
        <>
            <div className='flex justify-center'>
                <div className='flex mt-10 p-2 items-center justify-between w-[90%]'>
                    <a href="/">
                        <div className="flex items-center gap-2 text-white">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            <p>Back</p>
                        </div>
                    </a>
                    <h1 className='text-white text-xl mb-0 lg:block hidden lg:font-bold'>Projects</h1>
                    <div className='flex justify-center items-center mt-4 gap-4'>
                        <select
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            className='p-2 rounded-md bg-gray-800 text-white'
                        >
                            {tags.map((tag, index) => (
                                <option key={index} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='flex w-screen justify-center items-start h-screen sm:px-5'>
                <table className="w-full lg:m-[100px] md:mt-[100px] sm:m-[100px] max-sm:m-[50px] table-auto rounded-md max-sm:p-4">
                    <thead className='text-white p-3 text-start'>
                        <tr className='rounded-md p-3'>
                            <th className="p-3 text-start">Image</th>
                            <th className="p-3 text-start hidden lg:table-cell">Name</th>
                            <th className="text-start p-3 hidden lg:table-cell">Description</th>
                            <th className="p-3 text-start lg:hidden md:table-cell">Name & Description</th>
                            <th className="text-start p-3">Tech</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {filteredProjects.map((project, index) => (
                            <tr key={index} className="transition ease-in-out hover:bg-tableRowHover cursor-pointer rounded-lg duration-150 hover:scale-103">
                                <td className='border-b border-lines text-start p-3 text-sm font-light'>
                                    <img src={project.image} alt={project.name} className="object-cover w-full rounded-lg max-h-[100px]" />
                                </td>
                                <td className='border-b border-lines text-start p-3 text-sm font-light lg:table-cell hidden'>{project.name}</td>
                                <td className='border-b border-lines text-start p-3 text-sm font-light hidden lg:table-cell'>
                                    {project.description}
                                </td>
                                <td className='border-b border-lines text-start p-3 text-sm font-light lg:hidden md:table-cell'>
                                    <div className='flex flex-col text-start p-3 gap-2 min-w-[180px]'>
                                        <h3 className='text-sm font-bold'>{project.name}</h3>
                                        <p className='text-[10px] font-light'>{project.description}</p>
                                    </div>
                                </td>
                                <td className='border-b border-lines text-start p-3 text-sm font-light capitalize w-[200px]'>
                                    <div className='flex items-center flex-wrap'>
                                        {project.tags?.map((tag, index) => (
                                            <span key={index} className="text-white bg-hover mr-[6px] rounded-md p-[6px] px-[7px] text-[12px] mt-[10px] capitalize flex">
                                                {capitalizeWords(tag)}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
