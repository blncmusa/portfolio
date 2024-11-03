"use client"

import { faHouse, faBarsProgress, faLaptopFile, faNewspaper, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'


const menuItems = [
    {
        name: "Dashboard",
        path: "/account",
        icon: <FontAwesomeIcon icon={faHouse}/>
    },
    {
        name: "Projects",
        path: "/account/project-management",
        icon: <FontAwesomeIcon icon={faBarsProgress}/>
    },
    {
        name: "Activity",
        path: "/account/recent-activity",
        icon: <FontAwesomeIcon icon={faLaptopFile}/>
    },
    {
        name: "Blog",
        path: "/account/blog",
        icon: <FontAwesomeIcon icon={faNewspaper}/>
    },
    {
        name: "Courses",
        path: "/account/courses",
        icon: <FontAwesomeIcon icon={faBarsProgress}/> // You can change to a relevant icon if you have one
    },
    {
        name: "Books",
        path: "/account/books",
        icon: <FontAwesomeIcon icon={faNewspaper}/> // You can change to a relevant icon if you have one
    }
];


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
        <aside className="fixed text-title flex flex-col h-screen w-[250px]">
            <h1 className="text-1xl font-bold py-10 px-5">Pages</h1>
            <ul className='list-none flex flex-col justify-center items-center gap-2'>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} className={`w-[90%] rounded-md h-[65px] flex justify-start px-10 items-center hover:bg-hover ${pathname === item.path ? 'bg-hover' : ''} cursor-pointer md:text-sm`}
        >
                            <a href={item.path}>
                                {item.icon}
                                <span className='px-4'>{item.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <h1 className="text-1xl font-bold py-10 px-5">Account</h1>
            <ul className='list-none flex flex-col justify-center items-center gap-2'>
                {accountItems.map((item, index) => {
                    return (
                        <li key={index} className={`w-[90%] rounded-md h-[65px] flex justify-start px-10 items-center hover:bg-hover ${pathname === item.path ? 'bg-hover' : ''} cursor-pointer md:text-sm`}
        >
                            <a href={item.path}>
                                {item.icon}
                                <span className='px-4'>{item.name}</span>
                            </a>
                        </li>
                    )
                }
                )}
            </ul>
        </aside>
    )
}