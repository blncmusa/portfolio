"use client"

import { sep } from "path"
import React from "react"

export default function AddProjects(){

    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [image, setImage] = React.useState("")
    const [link, setLink] = React.useState("")
    const [tags, setTags] = React.useState("")
    const [separatedTags, setSeparatedTags] = React.useState<string[]>([]) 
    const [error, setError] = React.useState("")

    const seperateTags = (tags: string) => {
        const separated = tags.split(",").map(tag => tag.trim())
        setSeparatedTags(separated)
        console.log(separatedTags)
    }

    React.useEffect(() => {
        if(tags){
            seperateTags(tags)
        }
    }, [tags])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        if(!name || !description || !image || !link || !tags){
            setError("Please fill out all fields")
            return
        }
        const response = await fetch("/api/account/project-management", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, description, image, link, tags: separatedTags })
        })
        if(response.ok){
            setName("")
            setDescription("")
            setImage("")
            setLink("")
            setTags("")
            setError("")
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