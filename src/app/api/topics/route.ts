import { NextRequest, NextResponse } from 'next/server';
import { createClient } from "@/utils/supabase/client" 

const supabase = createClient();

export async function GET(req: NextRequest) {
    const { data, error } = await supabase.from('topics').select('*');
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const { name, description, has_books } = await req.json();
    const { data, error } = await supabase
        .from('topics')
        .insert([{ name, description, has_books }])
        .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
    const { id, name, description, has_books } = await req.json();
    const { data, error } = await supabase
        .from('topics')
        .update({ name, description, has_books })
        .eq('id', id)
        .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const { error } = await supabase
        .from('topics')
        .delete()
        .eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ message: 'Topic deleted' });
}
