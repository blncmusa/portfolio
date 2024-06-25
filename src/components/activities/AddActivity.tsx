"use client"

import React from "react"

export default function AddActivity(){

    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [image, setImage] = React.useState("")
    const [link, setLink] = React.useState("")
    const [tags, setTags] = React.useState("")
    const [separatedTags, setSeparatedTags] = React.useState<string[]>([]) 
    const [category, setCategory] = React.useState("")
    const [date, setDate] = React.useState("")
    const [status, setStatus] = React.useState("")
    const [tech, setTech] = React.useState("")
    const [separatedTech, setSeperatedTech] = React.useState<string[]>([])
    const [error, setError] = React.useState("")

    const seperateTags = (tags: string) => {
        const separated = tags.split(",").map(tag => tag.trim())
        setSeparatedTags(separated)
    }

    const separateTech = (tech: string) => {
        const separated = tech.split(",").map(tag => tag.trim())
        setSeperatedTech(separated)
    }

    React.useEffect(() => {
        if(tags){
            seperateTags(tags)
        }
        if(tech){
            separateTech(tech)
        }
    }, [tags, tech])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        if(!name || !description || !link || !tech || !tags || !category || !date || !status){
            setError("Please fill out all fields")
            return
        }
        const response = await fetch("/api/account/recent-activity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, description, category, status, image, link, tags: separatedTags, tech: separatedTech, date})
        })
        if(response.ok){
            setName("")
            setDescription("")
            setImage("")
            setLink("")
            setTags("")
            setError("")
            setCategory("")
            setDate("")
            setStatus("")
            setTech("")
        }
    }

    return (
        <div>
            <form className="flex flex-col justify-center items-center mb-[100px]" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 my-2 w-[60%] max-sm:w-full mb-10">
                    <div className="input-container">
                        <p className="input-container-title">Name</p>
                        <input
                            type="text"
                            name="name"
                            className="project-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Image</p>
                        <input
                            type="text"
                            name="image"
                            className="project-input"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Description</p>
                        <textarea
                            name="description"
                            className="project-input resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Category</p>
                        <select
                            name="category"
                            className="project-input"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select a category</option>
                            <option value="Open Source Contribution">Open Source Contribution</option>
                            <option value="Project Development">Project Development</option>
                            <option value="Technical Writing">Technical Writing</option>
                            <option value="Workshops & Conferences">Workshops & Conferences</option>
                            <option value="Course Completion">Course Completion</option>
                            <option value="Community Involvement">Community Involvement</option>
                            <option value="Achievements & Awards">Achievements & Awards</option>
                            <option value="Collaborations">Collaborations</option>
                            <option value="Side Projects">Side Projects</option>
                            <option value="Research & Publications">Research & Publications</option>
                            <option value="Learning & Reading">Learning & Reading</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Date</p>
                        <input
                            type="date"
                            name="date"
                            className="project-input"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Date"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Status</p>
                        <input
                            type="text"
                            name="status"
                            className="project-input"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            placeholder="Status"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Tech</p>
                        <input
                            type="text"
                            name="tech"
                            className="project-input"
                            value={tech}
                            onChange={(e) => setTech(e.target.value)}
                            placeholder="Tech"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Link</p>
                        <input
                            type="text"
                            name="link"
                            className="project-input"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Link"
                        />
                    </div>
                    <div className="input-container">
                        <p className="input-container-title">Tags</p>
                        <input
                            type="text"
                            name="tags"
                            className="project-input"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Tags"
                        />
                    </div>
                    { image && <img src={image} alt="" className="w-[50%] h-[100%] object-cover rounded-md"/> }
                </div>
                {error && <p className="text-red-500 font-bold">{error}</p>}
                <button type="submit" className="w-[60%] bg-white p-2 cursor-pointer rounded-md">Submit</button>
            </form>
        </div>
    )
}