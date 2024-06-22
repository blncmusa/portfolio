import ProjectsTable from "@/components/projects/ProjectsTable"
import { createClient } from "@/utils/supabase/server"
import { Project } from "@/types/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default async function Projects(){
    const supabases = createClient()

    const { data } = await supabases
        .from("projects")
        .select()

    return (
        <>
            <ProjectsTable projects={data as Project[]} />
        </>      
    )
}