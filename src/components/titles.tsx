import Links from './links'

export default function Titles(){
    return (
        <>
        <div className="flex flex-col lg:min-h-40 lg:h-4/5 h-[200px] justify-between mt-[100px] box-border">
        <div className="flex flex-col gap-2">
            <h1 className="text-6xl text-title font-bold">Mustafa</h1>
            <p className="text-title text-xl">Software Engineer</p>
            <p className="text-paragraph font-extralight">React | React Native</p>
        </div>
            <div className="lg:hidden min-w-[200px] max-w-[30%]">
            <Links />
            </div>
            <div className="lg:block md:hidden hidden w-1/2 max-w-[50%]">
            <Links/>
            </div>
        </div>
    </>
    )
}