import React from 'react'
import { createClient } from '@/utils/supabase/server'
import BiographyForm from "@/components/BiographyForm"
import Test from '@/components/Test'

export default async function Account(){

    const supabase = createClient()

    const { data } = await supabase
        .from("text_area")
        .select()
        .eq("name", "biography")
        .single()

    return (
        <>
        <div>
            {/* <BiographyForm data={data} /> */}
            <Test data={data} />
        </div>
        </>
    )

}