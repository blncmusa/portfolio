"use client"

import { logout } from "../../pages/api/logout";

export default function Account(){

    const handleLogout = async () => {
        await logout();
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <button onClick={handleLogout} className="p-2 bg-green-100 rounded-md px-4">
                    <p>Sign Out</p>
                </button>
            </div>
        </>
    )
}