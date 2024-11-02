// components/learning/CourseWithModules.tsx
"use client";
import { faCaretDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import ModuleWithLessons from "./ModuleWithLessons"; // Import the new component

type Course = {
  id: string;
  name: string;
};

type Module = {
  id: string;
  name: string;
  course_id: string;
};

type Lesson = {
  id: string;
  name: string;
  module_id: string;
};

type CourseWithModulesProps = {
  course: Course;
  modules: Module[];
  lessons: Lesson[]; // Include lessons as part of props
};

export default function CourseWithModules({ course, modules, lessons }: CourseWithModulesProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Filter modules that belong to the current course
  const courseModules = modules.filter((module) => module.course_id === course.id);

  return (
    <li className="mb-4">
      <div
        className="cursor-pointer text-white font-semibold"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {course.name}
        <span className="ml-2">
          {isExpanded ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faCaretDown} />}
        </span>
      </div>
      {isExpanded && (
        <ul className="ml-4 text-gray-400">
          {courseModules.length > 0 ? (
            courseModules.map((module) => (
              <ModuleWithLessons key={module.id} module={module} lessons={lessons} />
            ))
          ) : (
            <li className="text-gray-500">No modules available</li>
          )}
        </ul>
      )}
    </li>
  );
}