import Projects from "@/app/api/projects"
import React from "react"
import { createClient } from "@/utils/supabase/server"

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
            <Projects />
        </div>
    )
}