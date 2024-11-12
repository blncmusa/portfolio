"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/browser";

type Course = {
    id: string;
    name: string;
};

export default function ModulesForm() {
    const [name, setName] = useState("");
    const [courseId, setCourseId] = useState("");
    const [status, setStatus] = useState("Not Started");
    const [courses, setCourses] = useState<Course[]>([]);
    const supabase = createClient();

    useEffect(() => {
        // Fetch courses to display in the dropdown
        const fetchCourses = async () => {
            try {
                console.log("Fetching courses...");
                const response = await fetch("/api/courses");

                if (!response.ok) {
                    console.error("Failed to fetch courses. Response status:", response.status);
                    return;
                }

                const data = await response.json();
                console.log("Fetched courses data:", data);

                if (data.error) {
                    console.error("Error fetching courses from API:", data.error);
                } else {
                    console.log("Courses fetched successfully:", data);
                    setCourses(data);
                }
            } catch (error) {
                console.error("Error in fetchCourses:", error);
            }
        };
        fetchCourses();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Submitting module...");

        try {
            const response = await fetch("/api/modules", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    course_id: courseId,
                    status,
                }),
            });

            console.log("Response from API:", response);
            const responseData = await response.json();
            console.log("Response data:", responseData);

            if (response.ok) {
                alert("Module added successfully!");
                setName("");
                setCourseId("");
                setStatus("Not Started");
            } else {
                console.error("Failed to add module:", responseData);
                alert(`Failed to add module: ${responseData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold mb-4">Add Module</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Module Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
                <select
                    id="course"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="mt-2 w-full bg-blue-500 text-white rounded-md p-2">Add Module</button>
        </form>
    );
}
