import Details from "./details"
import Titles from "../components/titles"

export default function Home(){
  return (
    <div className="flex justify-center md:px-20 sm:px-20 px-20 min-h-screen min-w-[150px]">
      <div className="lg:flex w-full max-w-[1300px] min-h-screen flex flex-col">
            <div className="lg:fixed lg:w-[40%] lg:h-[95%]">
              <Titles/>
            </div>
            <div>
              <Details/>
            </div>
      </div>
    </div>
  )
}