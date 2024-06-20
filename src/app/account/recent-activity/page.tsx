import React, { useState } from 'react';

const activities = [
  {
    name: "Developed New Feature for ABC App",
    description: "Implemented user authentication and profile management.",
    category: "Project Development",
    tags: ["React", "Node.js"],
    date: "2023-06-14",
    status: "Completed",
    technologies: ["React", "Node.js"]
  },
  {
    name: "Contributed to XYZ Open Source Project",
    description: "Fixed bugs and added new features.",
    category: "Open Source Contribution",
    tags: ["JavaScript", "Open Source"],
    date: "2023-06-14",
    status: "Completed",
    technologies: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Completed 'React - The Complete Guide' Course",
    description: "Finished an in-depth course on React, learning about hooks, state management, and building complex applications.",
    category: "Course Completion",
    tags: ["React", "Course", "Learning"],
    date: "2023-04-10",
    status: "Completed",
    technologies: ["React", "JavaScript"]
  }
];

export default function ActivitiesTable() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Array(activities.map(activity => activity.category))];

  const filteredActivities = selectedCategory === 'All'
    ? activities
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <>
      <div className='flex justify-center items-center mt-4'>
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
      </div>
      <div className='flex w-screen justify-center items-start h-screen sm:px-5 mt-4'>
        <table className="w-full lg:m-[100px] md:mt-[100px] sm:m-[100px] max-sm:m-[50px] table-auto rounded-md max-sm:p-4">
          <thead className='text-white p-3 text-start'>
            <tr className='rounded-md p-3'>
              <th className="p-3 text-start">Name</th>
              <th className="text-start p-3">Description</th>
              <th className="p-3 text-start">Category</th>
              <th className="text-start p-3">Tags</th>
              <th className="text-start p-3">Date</th>
              <th className="text-start p-3">Status</th>
              <th className="text-start p-3">Technologies</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {filteredActivities.map((activity, index) => (
              <tr key={index} className="transition ease-in-out hover:bg-tableRowHover cursor-pointer rounded-lg duration-150 hover:scale-103">
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.name}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.description}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.category}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light capitalize w-[200px]'>
                  <div className='flex items-center flex-wrap'>
                    {activity.tags?.map((tag, index) => (
                      <span key={index} className="text-white bg-hover mr-[6px] rounded-md p-[6px] px-[7px] text-[12px] mt-[10px] capitalize flex">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.date}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light'>{activity.status}</td>
                <td className='border-b border-lines text-start p-3 text-sm font-light capitalize w-[200px]'>
                  <div className='flex items-center flex-wrap'>
                    {activity.technologies?.map((tech, index) => (
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
