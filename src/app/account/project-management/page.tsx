import { createClient } from "@/utils/supabase/server"
import ProjectsTable from "@/components/ProjectsTable"
import { Project } from "@/app/types/types"

export default async function ProjectManagement(){

    const supabases = createClient()

    const { data } = await supabases
        .from("projects")
        .select()

    console.log(data)

    return (
        <>
            <h1>Project Management</h1>
            <ProjectsTable projects={data as Project[]}/>
        </>
    )
}