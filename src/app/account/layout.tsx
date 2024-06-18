"use client"
import Sidebar from "../../components/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}){

    const [sidebar, setSidebar] = React.useState(false)

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className='flex'>
            <div className={`lg:block flex-grow-none basis-1/5 md:basis-[25%] min-w-[250px] bg-primary-100 min-h-screen fixed top-0 ${ sidebar ? "" : "hidden"}`}>
                <Sidebar /> 
            </div>
            <div className="flex-grow h-screen p-[20px] lg:ml-[250px]">
                <div className="lg:hidden cursor-pointer">
                    <button onClick={handleSidebar} className="text-white p-2 bg-hover rounded-md">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}