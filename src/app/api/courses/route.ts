// app/api/courses/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/browser';

export async function POST(req: NextRequest) {
    const supabase = createClient();

    const { name, topic_id, description, status } = await req.json();

    const { data, error } = await supabase
        .from('courses')
        .insert([{ name, topic_id, description, status }])
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}
