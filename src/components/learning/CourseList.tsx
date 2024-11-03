// components/learning/CourseList.tsx
"use client";

import CourseWithModules from "./CourseWithModules";

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

type CourseListProps = {
  courses: Course[];
  modules: Module[];
  lessons: Lesson[]; // Include lessons as part of props
};

export default function CourseList({ courses, modules, lessons }: CourseListProps) {
  return (
    <ul className="text-gray-300 mt-10 font-thin">
      {courses.map((course) => (
        <CourseWithModules
          key={course.id}
          course={course}
          modules={modules}
          lessons={lessons} // Pass lessons to CourseWithModules
        />
      ))}
    </ul>
  );
}
