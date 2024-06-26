import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server" 

export async function GET(){
    const supabase = createClient()

    const { data } = await supabase.from("text_area").select() 
    
    return NextResponse.json(data)
}