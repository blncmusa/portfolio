"use client"

import { faHouse, faBarsProgress, faLaptopFile, faNewspaper, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'


const menuItems = [
    {
        name: "Dashboard",
        path: "/account",
        icon:  <FontAwesomeIcon icon={faHouse}/>
    },
    {
        name: "Projects",
        path: "/account/project-management",
        icon:  <FontAwesomeIcon icon={faBarsProgress}/>
    },
    {
        name: "Recent Activity",
        path: "/account/recent-activity",
        icon:  <FontAwesomeIcon icon={faLaptopFile}/>
    },
    {
        name: "Blog",
        path: "/account/blog",
        icon:  <FontAwesomeIcon icon={faNewspaper}/>
    }
]

const accountItems = [
    {
        name: "Settings",
        path: "/account/settings",
        icon:  <FontAwesomeIcon icon={faGear}/>
    },
    {
        name: "Logout",
        path: "/account/logout",
        icon:  <FontAwesomeIcon icon={faRightFromBracket}/>
    }
]

export default function Sidebar(){

    const pathname = usePathname()

    return (
        <aside className="sticky text-title flex border-4 flex-col h-[40%]">
            <h1 className="text-1xl font-bold py-10 px-5">Pages</h1>
            <ul className='list-none flex flex-col'>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} className={`w-[100%] h-[65px] flex justify-start px-10 items-center hover:bg-hover ${pathname === item.path ? 'bg-hover' : ''} cursor-pointer`}
        >
                            <a href={item.path}>
                                {item.icon}
                                <span className='px-4'>{item.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}