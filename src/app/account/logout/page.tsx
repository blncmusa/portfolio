"use client"

import { logout } from "@/app/api/logout"

export default function Logout(){

    const handleLogout = async () => {
        await logout();
    }

    return (
        <nav className="w-screen h-[10%] bg-primary-100 flex justify-evenly py-4">
            <button onClick={handleLogout} className="p-2 bg-green-100 rounded-md px-4">
                    <p>Sign Out</p>
            </button>
        </nav> 
    )
}