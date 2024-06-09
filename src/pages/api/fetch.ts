import { createClient } from "@/utils/supabase/server";
import { NextApiResponse } from "next";

export default async function GET(request: Request){
    const supabase = createClient()
    const { data } = await supabase.from("projects").select()
}