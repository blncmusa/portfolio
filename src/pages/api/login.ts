'use server'

import { createClient } from '@/utils/supabase/server'
import { NextApiRequest, NextApiResponse } from 'next'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient()

  if(req.method !== 'POST'){
    return res.status(405).json({ message: "Method not allowed!"})
  }

  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  res.status(200).json({ user: data.user, error })
  revalidatePath('/', 'layout')
  redirect('/account')
}
