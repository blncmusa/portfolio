// app/api/modules/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/browser';

export async function POST(req: NextRequest) {
    const supabase = createClient();
    console.log("Received POST request for modules...");

    try {
        const { name, course_id, status } = await req.json();
        console.log("Parsed request body:", { name, course_id, status });

        const { data, error } = await supabase
            .from('modules')
            .insert([{ name, course_id, status }])
            .single();

        if (error) {
            console.error("Error inserting module:", error);
            return NextResponse.json({ error: error.message, details: error }, { status: 500 });
        }

        console.log("Module inserted successfully:", data);
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error handling POST request:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
