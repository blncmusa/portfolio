import Links from "@/component/links"
import Link from "next/link"

export default function Home(){
  return (
    <>
    <div className="flex flex-col min-h-40 h-4/5 justify-between my-[100px] box-border">
      <div>
        <h1 className="text-6xl text-title font-bold cursor-pointer hover:text-yellow-500">Mustafa</h1>
        <p className="text-title">Software Engineer</p>
      </div>
        <div className="lg:hidden">
          <Links />
        </div>
        <div className="lg:block md:hidden hidden">
          <Links/>
        </div>
    </div>
    </>
  )
}