import Navbar from '@/components/Navbar'
import Sidebar from "../../components/Sidebar"

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <div className='flex'>
            <div className="border-4 border-green-400 flex-grow-none basis-1/5 bg-primary-100 h-screen">
                <Sidebar /> 
            </div>
            <div className="flex-grow border-4 border-red-400 h-screen p-[20px]">
                <Navbar />
                {children}
            </div>
        </div>
    )
}