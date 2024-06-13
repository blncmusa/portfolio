"use server" 

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function addBiography(formdata: FormData){
    const supabase = createClient()
    const text = formdata.get("text") as string

    if(!text){
        throw new Error("Text is required")
    }

    const { error } = await supabase.from("text_area").insert({
        text: text
    })

    if(error){
       console.error("There's an error:", error)
    }

    revalidatePath("/")
}