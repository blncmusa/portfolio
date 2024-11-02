"use client"

// components/CourseWithModules.tsx
import { useState } from "react";

type Course = {
  id: string;
  name: string;
};

type Module = {
  id: string;
  name: string;
  course_id: string;
};

type CourseWithModulesProps = {
  course: Course;
  modules: Module[];
};

export default function CourseWithModules({ course, modules }: CourseWithModulesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter modules that belong to the current course
  const courseModules = modules.filter((module) => module.course_id === course.id);

  return (
    <li className="mb-4">
      <div
        className="cursor-pointer text-white font-semibold"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {course.name}
        {isExpanded ? " ▲" : " ▼"}
      </div>
      {isExpanded && (
        <ul className="ml-4 text-gray-400">
          {courseModules.length > 0 ? (
            courseModules.map((module) => (
              <li key={module.id} className="mb-2">
                {module.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No modules available</li>
          )}
        </ul>
      )}
    </li>
  );
}
