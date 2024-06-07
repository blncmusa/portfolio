import Links from "@/component/links"

export default function Home(){
  return (
    <>
    <div className="flex flex-col justify-center items-start w-full min-h-40 lg:w-1/2 border-4 border-red-400 ">
        <h1 className="text-8xl text-title font-bold">Mustafa</h1>
        <p className="text-title">Software Engineer</p>
        <Links/>
    </div>
    </>
  )
}