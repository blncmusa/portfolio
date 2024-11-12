// app/api/courses/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/browser';

const supabase = createClient();

// GET method to fetch all courses
export async function GET(req: NextRequest) {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) {
        console.error("Error fetching courses:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}

// POST method to create a new course
export async function POST(req: NextRequest) {
    const { name, topic_id, description, status } = await req.json();

    const { data, error } = await supabase
        .from('courses')
        .insert([{ name, topic_id, description, status }])
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}
