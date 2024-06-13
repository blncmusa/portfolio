"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

interface Paragraph {
    id: number,
    text: string
}

export async function updateParagraph(text: Paragraph){
    const supabase = createClient()

    const { error } = await supabase
        .from("text_area") 
        .update(text)
        .match({
            id: text.id
        })
    revalidatePath("/account")
}