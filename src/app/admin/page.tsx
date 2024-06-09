"use client";

import React from "react"
import { login } from "@/pages/api/login";

export default function LoginPage() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleLogin = () => {
        setTimeout(() => {
            console.log("waiting...")
        }, 2000)
        if(email && password) {
            const formData = new FormData();
            console.log(email, password, "email and password sent")
            formData.append('email', email);
            formData.append('password', password);
            login(formData);
        }
    }
   
    return (
        <>
        
            <div className="lg:flex md:flex sm:flex h-screen w-screen justify-center items-center hidden focus:outline-none">
                <div className="min-w-[350px] bg-primary-100 min-h-[55%] rounded-md flex justify-center flex-col focus:outline-none shadow-2xl">
                    <div className="flex justify-center mb-[10px] focus:outline-none">
                        <h1 className="text-md text-white"><span className="font-extralight">Welcome Back, </span><span className="font-bold">Mustafa!</span></h1>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-4 focus:outline-none">
                    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-[80%] h-10 rounded bg-primary-200 text-white px-2 focus:outline-none placeholder:font-light"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-[80%] h-10 rounded bg-primary-200 text-white px-2 focus:outline-none placeholder:font-light"
                        />
                        <h1 className="text-red-500">{error}</h1>
                        <button onClick={handleLogin} className="p-2 bg-black w-[80%] focus:outline-none">
                            <p className="text-white">Login</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile screen: */}
            <div className="lg:hidden md:hidden sm:hidden flex flex-col w-screen border-4 h-screen justify-center">
            <div className="flex justify-center items-center flex-col gap-4 focus:outline-none">
                <div className="flex justify-center mb-[10px] focus:outline-none">
                        <h1 className="text-md text-white"><span className="font-extralight">Welcome Back, </span><span className="font-bold">Mustafa!</span></h1>
                    </div>
                    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="max-w-[350px] min-w-[330px] h-10 rounded bg-white text-gray-500 px-2 focus:outline-none placeholder:font-light"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="max-w-[350px] min-w-[330px] h-10 rounded bg-white text-gray-400 px-2 focus:outline-none placeholder:font-light"
                        />
                        <h1 className="text-red-500">{error}</h1>
                        <button onClick={handleLogin} className="p-2 bg-black w-[80%] focus:outline-none max-w-[350px] min-w-[330px]">
                            <p className="text-white">Login</p>
                        </button>
                    </div>
            </div>
        </>
    )
}