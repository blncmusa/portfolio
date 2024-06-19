import React from 'react';
import { createClient } from '@/utils/supabase/server';
import ActivityCard from './ActivityCard';
import { Activity } from "@/types/types"

export default async function RecentActivities(){

    const supabase = createClient();
    const { data } = await supabase
    .from("activities")
    .select()
    .order("date", { ascending: false })
    .limit(3)

    console.log(data)

    return (
       <div className='my-10'>
            <div className='items-center flex'>
             <h1 className='text-white text-xl mb-0'>Recent Activities</h1>
             <hr className="flex-grow ml-4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>
              <ul>
                { data && data.map((activity) => (
                     <li key={activity.id}>
                        <ActivityCard activity={activity as Activity} />
                     </li>
                ))}
              </ul>
       </div>
    )
}