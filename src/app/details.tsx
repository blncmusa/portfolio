import Projects from "@/components/projects"
import React from "react"
import { createClient } from "@/utils/supabase/server"

export default async function Details(){

    const supabase = createClient()
    
    const { data: biography } = await supabase
        .from("text_area")
        .select()
        .eq("name", "biography")

    console.log(biography)
    

    return (
        <div className="lg:w-1/2 lg:my-[100px] lg:ml-[50%]">
            <h1 className="text-white lg:hidden uppercase my-10">About</h1>
            <div className="flex flex-col text-paragraph font-light gap-4 text-sm/[25px]">
               {/* {biography && biography![0].text}
               {!biography && "Loading..."} */}
            </div>
            <Projects />
        </div>
    )
}