"use server"

import { createClient } from "@/utils/supabase/server"
import { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    // Fetch Topics, Courses, Modules, and Lessons data
    const { data: topics, error: topicsError } = await supabase
      .from('Topics')
      .select('*');

    const { data: courses, error: coursesError } = await supabase
      .from('Courses')
      .select('*');

    const { data: modules, error: modulesError } = await supabase
      .from('Modules')
      .select('*');

    const { data: lessons, error: lessonsError } = await supabase
      .from('Lessons')
      .select('*');

    // Check for errors and respond accordingly
    if (topicsError || coursesError || modulesError || lessonsError) {
      return res.status(500).json({ 
        error: topicsError || coursesError || modulesError || lessonsError 
      });
    }

    // Send the fetched data
    res.status(200).json({ topics, courses, modules, lessons });
  } else {
    // If method is not GET, return 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
