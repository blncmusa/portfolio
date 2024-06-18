import { createClient } from "@/utils/supabase/server"
import { Project } from "@/types/types"
import ManageProjectsTable from "@/components/projects/ManageProjectTable"
import AddProjects from "@/components/projects/AddProjects"

export default async function ProjectManagement(){

    const supabases = createClient()

    const { data } = await supabases
        .from("projects")
        .select()

    return (
        <>
            <div className="w-full projects-container">
                <ManageProjectsTable projects={data as Project[]}/>
                <AddProjects />
            </div>
        </>
    )
}