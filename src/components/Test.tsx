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

export default function Test(data: { data: Biography}){

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
        console.log(message)
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
                <div className='flex flex-col gap-2 border-4'>
                    <textarea
                        name="text"
                        minLength={4}
                        disabled={pending}
                        required
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        placeholder={text}
                        className='resize-none lg:h-[700px]'
                    />
                    <button type="submit" className='text-white p-3 bg-hover' formAction={handleSubmit} disabled={pending}>
                        Submit
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </form>
            </>
        </div>
    )
}