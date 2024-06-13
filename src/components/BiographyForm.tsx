"use client"

import React from "react"
import { createClient } from "@/utils/supabase/server"

interface Biography {
    id: number,
    created_at: string,
    text: string,
    name: string,
    user_id: string
}

export default function BiographyForm(data: { data: Biography}){

    const [text, setText] = React.useState("")
    const formRef = React.useRef<HTMLFormElement>(null)
    const [message, setMessage] = React.useState("")

    const supabase = createClient()

    const handleSubmit = async () => {
        console.log("Sending Update Request!")
        const response = await fetch("/api/account", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: 1, text })
        })
        console.log("Got something back")
        setText("")
    }
    

    return (
        <>
            <form ref={formRef}>
        
                <div className='flex flex-col gap-2 border-4'>
                    <textarea
                        name="text"
                        minLength={4}
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here"
                        className='resize-none lg:h-[700px]'
                    />
                    <button type="submit" className='text-white p-3 bg-hover' formAction={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
