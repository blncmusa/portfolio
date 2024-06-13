import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(request: Request){
    const { message } = await request.json()
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { error } = await supabase
        .from("text_area")
        .update({ text: message })
        .match({ name: "biography", user_id: user.id})
 
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Text updated successfully" })
}

export async function POST(request: Request){
    const { text } = await request.json()
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if(!user){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const { error } = await supabase
        .from("text_area")
        .insert({ text, user_id: user!.id 
    })
    if (error){
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ message: "Text inserted successfully" })
}

export async function GET(){
    const supabase = createClient()
    
    const { data, error } = await supabase
        .from("text_area")
        .select()
        .eq("name", "biography")

    return NextResponse.json({ data, error })
}