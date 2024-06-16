import ProjectsTable from "@/components/ProjectsTable"
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
        <a href="/">
            <div className="w-screen flex justify-center mt-10 md:px-5 sm:mx-5 max-sm:p-5">
            <div className="w-full lg:w-[90%] md:w-[90%] flex flex-col gap-2 justify-center text-white min-w-[350px] cursor-pointer">
                <div>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    <p>Back</p>
                </div>
                <h1>Projects</h1>
            </div>
            </div>
        </a>
        <ProjectsTable projects={data as Project[]} />
      </>      
    )
}