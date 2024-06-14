import React from 'react'
import { createClient } from '@/utils/supabase/server'
import Test from '@/components/FormBiography'

export default async function Account(){

    const supabase = createClient()

    const { data } = await supabase
        .from("text_area")
        .select()
        .eq("name", "biography")
        .single()

    return (
        <>
        <div className='h-[90%]'>
            <Test data={data} />
        </div>
        </>
    )

}