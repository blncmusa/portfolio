"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/browser";

type Topic = {
    id: string;
    name: string;
};

export default function CourseForm() {
    const [name, setName] = useState("");
    const [topicId, setTopicId] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Not Started");
    const [topics, setTopics] = useState<Topic[]>([]);
    const supabase = createClient();

    useEffect(() => {
        // Fetch topics to display in the dropdown
        const fetchTopics = async () => {
            const response = await fetch("/api/topics");
            const data = await response.json();
            if (data.error) {
                console.error("Error fetching topics:", data.error);
            } else {
                setTopics(data);
            }
        };
        fetchTopics();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch("/api/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                topic_id: topicId,
                description,
                status,
            }),
        });

        if (response.ok) {
            alert("Course added successfully!");
            setName("");
            setTopicId("");
            setDescription("");
            setStatus("Not Started");
        } else {
            const errorData = await response.json();
            console.error("Failed to add course:", errorData);
            alert(`Failed to add course: ${errorData.error || "Unknown error"}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold mb-4">Add Course</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Course Name</label>
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
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Select Topic</label>
                <select
                    id="topic"
                    value={topicId}
                    onChange={(e) => setTopicId(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                >
                    <option value="">Select a topic</option>
                    {topics.map((topic) => (
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
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
            <button type="submit" className="mt-2 w-full bg-blue-500 text-white rounded-md p-2">Add Course</button>
        </form>
    );
}
