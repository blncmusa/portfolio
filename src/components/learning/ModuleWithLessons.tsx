"use client";
import { faCaretDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

type Lesson = {
  id: string;
  name: string;
  module_id: string;
};

type ModuleWithLessonsProps = {
  module: {
    id: string;
    name: string;
  };
  lessons: Lesson[];
};

export default function ModuleWithLessons({ module, lessons }: ModuleWithLessonsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter lessons that belong to the current module
  const moduleLessons = lessons.filter((lesson) => lesson.module_id === module.id);

  return (
    <li className="mb-3">
      <div
        className="cursor-pointer text-gray-300 font-thin mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Module: {module.name}
        <span className="ml-2">
          {isExpanded ? "—" : "+"}
        </span>
      </div>
      {isExpanded && (
        <ul className="ml-4 text-gray-400 border-l pl-4">
          {moduleLessons.length > 0 ? (
            moduleLessons.map((lesson) => (
              <li key={lesson.id} className="mb-1 font-thin">
                {lesson.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No lessons available</li>
          )}
        </ul>
      )}
    </li>
  );
}
