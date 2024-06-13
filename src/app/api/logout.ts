"use server"

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function logout(){
    const supabase = createClient()
    supabase.auth.signOut()
    console.log("Logged out!")
    redirect('/admin')
    return null
}