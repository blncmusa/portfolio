"use client"

import React from "react"
import { createClient } from "@/utils/supabase/server"
import { useFormStatus  } from "react-dom"

interface Biography {
    id: number,
    created_at: string,
    text: string,
    name: string,
    user_id: string
}

export default function FormBiography(data: { data: Biography}){

    const text = data.data.text
    const formRef = React.useRef<HTMLFormElement>(null)
    const [error, setError] = React.useState("")
    const [message, setMessage] = React.useState(text)
    const { pending } = useFormStatus()

    const handleSubmit = async () => {
        if(text === message){
            setError("You can't submit the same text!")
            return
        }
        
        setError("")
        const response = await fetch("/api/account", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: "biography", message })
        })
        setMessage("")
    }

    return (
        <div>
           <>
            <form ref={formRef}>
                <div className='flex flex-col gap-2 h-full'>
                    <textarea
                        name="text"
                        minLength={4}
                        disabled={pending}
                        required
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        placeholder={text}
                        className='resize-none lg:h-[600px] md:h-[600px] rounded-md p-2 text-black bg-gray-100 focus:outline-none'
                    />
                    <button type="submit" className='text-white p-3 bg-hover rounded-md' formAction={handleSubmit} disabled={pending}>
                        Submit
                    </button>
                    {error && <p className="text-red-500 font-bold">{error}</p>}
                </div>
            </form>
            </>
        </div>
    )
}