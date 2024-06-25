import { createClient } from "@/utils/supabase/server"
import React from "react"
import ProjectCard from "@/components/projects/ProjectCard"

export default async function Projects(){

    const supabase = createClient() 

    const { data } = await supabase
        .from("projects")
        .select()
        .eq("is_featured", true)
        .limit(3)

    return (
        <div className="">
            {data?.map((project: { id: number, name: string, description: string, link: string }) => (
                <ProjectCard project={project} key={project.id} />
            ))}
        </div>
    )
}