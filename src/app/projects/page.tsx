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
            <div className="w-screen flex justify-center mt-10 md:px-5 sm:mx-5 max-sm:p-5">
                <div className="text-white flex justify-between items-center w-[90%]">
                    <a href="/">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            <p>Back</p>
                        </div>
                    </a>
                    <h1 className="font-bold">Projects</h1>
                </div>
            </div>
        <ProjectsTable projects={data as Project[]} />
      </>      
    )
}