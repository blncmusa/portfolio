import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const { name, description, image, link, tags } = await request.json()
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if(!user){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const { error } = await supabase
        .from("projects")
        .insert({ name, description, image, link, tags })
    
    if (error){
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ message: "Text inserted successfully" })
}