"use client";

import { useState } from "react";

export default function TopicForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [hasBooks, setHasBooks] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const response = await fetch("/api/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                description,
                has_books: hasBooks,
            }),
        });

        if (response.ok) {
            alert("Topic added successfully!");
            setName("");
            setDescription("");
            setHasBooks(false);
        } else {
            alert("Failed to add topic");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold mb-4">Add Topic</h2>

            <div className="mb-2">
                <label className="block text-gray-700">Topic Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div className="mb-2">
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="flex items-center text-gray-700">
                    <input
                        type="checkbox"
                        checked={hasBooks}
                        onChange={(e) => setHasBooks(e.target.checked)}
                        className="mr-2"
                    />
                    Has Books
                </label>
            </div>

            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Add Topic
            </button>
        </form>
    );
}
