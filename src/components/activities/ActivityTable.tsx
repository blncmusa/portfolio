"use client"

import React, { useState } from 'react';
import {ActivityData} from '@/types/types';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ActivitiesTable({ activities }: { activities: ActivityData[] }) {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const categories = ['All', ...Array.from(new Set(activities.map(activity => activity.category)))];
  const technologies = ['All', ...Array.from(new Set(activities.flatMap(activity => activity.tech)))];

  const filteredActivities = activities.filter(activity => {
    const categoryMatch = selectedCategory === 'All' || activity.category === selectedCategory;
    const technologyMatch = selectedTechnology === 'All' || activity.tech.includes(selectedTechnology);
    return categoryMatch && technologyMatch;
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
            <div className='flex justify-center items-center mt-4 gap-4'>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='p-2 rounded-md bg-gray-800 text-white'
                >
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                    {category}
                    </option>
                ))}
                </select>
                <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className='p-2 rounded-md bg-gray-800 text-white'
                >
                {technologies.map((tech, index) => (
                    <option key={index} value={tech}>
                    {tech}
                    </option>
                ))}
                </select>
            </div>
        </div>
    </div>

      <div className='flex w-screen justify-center items-start h-screen sm:px-5'>
        <table className="w-full lg:m-[50px] md:mt-[100px] sm:m-[100px] max-sm:m-[50px] table-auto rounded-md max-sm:p-4">
          <thead className='text-white p-3 text-start'>
            <tr className='rounded-md p-3'>
              <th className="text-start p-3">Date</th>
              <th className="p-3 text-start">Name</th>
              <th className="text-start p-3">Description</th>
              <th className="p-3 text-start">Category</th>
              <th className="text-start p-3">Status</th>
              <th className="text-start p-3">Technologies</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {filteredActivities.map((activity, index) => (
              <tr key={index} className="transition ease-in-out hover:bg-tableRowHover cursor-pointer rounded-lg duration-150 hover:scale-103">
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.date}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.name}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.description}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.category}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.status}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light capitalize w-[200px]'>
                  <div className='flex items-center flex-wrap'>
                    {activity.tech?.map((tech, index) => (
                      <span key={index} className="text-white bg-hover mr-[6px] rounded-md p-[6px] px-[7px] text-[12px] mt-[10px] capitalize flex">
                        {tech}
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
