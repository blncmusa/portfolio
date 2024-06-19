import { Activity } from "@/types/types"
import React from 'react'

export default function ActivityCard({ activity }: { activity: Activity}){

   function getMonthName(monthString: string){
    const data = new Date(monthString)
    return new Intl.DateTimeFormat('en-US', { month: 'short'}).format(data)
   }

   function getDateDigit(date: string){
    const data = new Date(date)
    return new Intl.DateTimeFormat('en-US', { day: '2-digit'}).format(data)
   }

   function getYearInTwoDigits(yearString: string){
    const data = new Date(yearString)
    return new Intl.DateTimeFormat('en-US', { year: '2-digit'}).format(data)
   }

   const monthName = getMonthName(activity.date)
   const dateDigit = getDateDigit(activity.date)
   const yearInTwoDigits = getYearInTwoDigits(activity.date)

    return (
        <div className="flex gap-4 mb-1 cursor-pointer p-2 transition ease-in-out duration-150 hover:scale-110">
            <div className="text-white text-[22px] text-center items-center justify-center font-light">
                <p>{dateDigit}</p>
                <div className="flex gap-1 text-[12px]">
                <p>{monthName}</p>
                <p>{yearInTwoDigits}</p>
                </div>
            </div>
            <div className="flex flex-col border-l-2 pl-4">
                <h1 className="text-white font-bold">{activity.name}</h1>
                <h1 className="text-paragraph text-sm font-light">{activity.description}</h1>
            </div>
        </div>
    )
}