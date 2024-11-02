"use client";

import { useState } from "react";
import CourseWithModules from "./CourseWithModules"

type Course = {
  id: string;
  name: string;
};

type Module = {
  id: string;
  name: string;
  course_id: string;
};

type CourseListProps = {
  courses: Course[];
  modules: Module[];
};

export default function CourseList({ courses, modules }: CourseListProps) {
  return (
    <ul className="text-gray-300 mt-10 font-thin">
      {courses.map((course) => (
        <CourseWithModules key={course.id} course={course} modules={modules} />
      ))}
    </ul>
  );
}
