"use client";

import React from 'react';
import { Project } from '@/types/types'

export default function ManageProjectsTable({ projects }: { projects: Project[] }){

    const [selectedProjects, setSelectedProjects] = React.useState<number[]>([])

    return (
        <>
            <div className='flex w-[calc(100%-5px)] justify-center items-start h-full sm:px-5'>
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
    {projects.map((project, index) => (
      <tr key={index} className="transition ease-in-out hover:bg-tableRowHover cursor-pointer rounded-lg duration-150 hover:scale-103">
        <td className='border-b border-lines text-start p-3 text-sm font-light'>
          <img src={project.image} alt={project.name} className="object-cover w-full rounded-lg max-h-[100px]" />
        </td>
        <td className='border-b border-lines text-start p-3 text-sm font-light lg:table-cell hidden'>{project.name}</td>
        <td className='border-b border-lines text-start p-3 text-sm font-light hidden lg:table-cell'>  {/* Updated */}
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
                {tag}
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
    )
}