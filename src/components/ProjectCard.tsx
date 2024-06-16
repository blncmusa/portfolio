import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Project } from '@/types/types'

export default function ProjectCard({ project }: { project: Project }){
    return (
        <>  
            <a href={project.link} target="_blank" className="group">
                <div className="flex gap-5 mb-[20px] justify-start hover:bg-projectsHover rounded-lg py-4 px-4 items-start transition ease-in-out duration-150 hover:scale-110 cursor-pointer">
                    <div className="w-1/4">
                        <img src={project.image} alt={project.name} className="object-cover w-full rounded-lg max-h-[100px]" />
                    </div>
                    <div className="flex flex-col w-3/4 text-paragraph gap-2 justify-between h-[100%]">
                        <div className='flex gap-2 items-center'>
                            <h1 className="text-white font-bold text-[15px] leading-[20px]">{project.name}</h1>
                            <FontAwesomeIcon icon={faArrowRightLong} className='group-hover:translate-x-2 group-hover:transition ease-in-out hover:ease-in-out duration-300'/>
                        </div>
                        <p className="font-light text-[13px] leading-[20px]">{project.description}</p>
                        <div className="">
                            {project.tags?.map((tag, index) => (
                                <span key={index} className="text-white bg-hover mr-[6px] rounded-md p-[5px] px-[7px] text-[12px] mt-[10px]">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}