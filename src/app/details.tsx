import Projects from "@/app/api/projects"
import React from "react"
import { createClient } from "@/utils/supabase/server"
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecentActivities from "@/components/activities/RecentActivities"

export default async function Details(){

    const supabase = createClient()
    
    // const { data: biography } = await supabase
    //     .from("text_area")
    //     .select()
    //     .eq("name", "biography")
    //     .single()

    // console.log(biography)
    // can't be bothered to add a text editor. I'll just hardcode the text.


    return (
        <div className="lg:w-1/2 lg:my-[100px] lg:ml-[50%]">
            <h1 className="text-white lg:hidden uppercase my-10">About</h1>
            <div className="flex flex-col text-paragraph font-light gap-4 text-sm/[25px] mb-[100px]">
                {/* {biography && biography.text} */}
                <p>Olim puer parvus, nomine Marcus, in villa rustica cum sua familia vivebat. Marcus semper erat curiosus de mundo circum se, et unam diem in horto ludens, parvum felem repertit. Feles erat pulchra, albus coloribus cum oculis claris ut stellis noctis.</p>
                <p>Marcus, admiratus pulchritudinem felis, statim amorem erga eam concepit. Nomen dedit ei "Stella" ob oculos scintillantes. Una cum Stella, Marcus cotidie adventuras novas experiebatur, discens de natura et affectu verae amicitiae. Stella, a puero dilecta, semper fidelis ei manebat.</p>
                <p>Tempore praetereunte, Marcus et Stella inseparabiles facti sunt. Feles Marcum comitata est etiam per momenta difficilia. Ubi Marcus tristis erat aut laborabat, Stella ad eum veniebat et eum consolabatur. Sic Marcus, per amorem et fidem Stellae, intellexit virtutem patientiae et perseverantiae in vita.</p>
            </div>
            <RecentActivities />
            <a href="/activity">
                <div className="flex gap-2 items-center text-sm font-bold transition ease-in-out hover:gap-4 delay-150 group mb-10">
                    <p className="hover:transition duration-300 ease-in-out hover:underline cursor-pointer group-hover:underline text-gray-700 group-hover:text-white">View All Recent Activities</p>
                    <FontAwesomeIcon icon={faArrowRightLong} className="group-hover:translate-x-[5px] group-hover:transition ease-in-out hover:ease-in-out duration-300 cursor-pointer text-gray-700 group-hover:text-white"/>
                </div>
            </a>
            <div className='items-center flex'>
                <h1 className='text-white text-xl mb-0'>Projects</h1>
                <hr className="flex-grow ml-4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>
            <Projects />
            <a href="/projects">
                <div className="flex gap-2 items-center text-sm font-bold transition ease-in-out hover:gap-4 delay-150 group">
                    <p className="hover:transition duration-300 ease-in-out hover:underline cursor-pointer group-hover:underline text-gray-700 group-hover:text-white">View Full Project Archive</p>
                    <FontAwesomeIcon icon={faArrowRightLong} className="group-hover:translate-x-[5px] group-hover:transition ease-in-out hover:ease-in-out duration-300 cursor-pointer text-gray-700 group-hover:text-white "/>
                </div>
            </a>
        </div>
    )
}