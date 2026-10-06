// app/api/meetings/route.ts
import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    
    const query = searchParams.get('query') || '';
    const page = Number(searchParams.get('page')) || 1;

    try {
    
        const meetingList = await getMeetings(query, page);
        return NextResponse.json(meetingList);
    } catch (error) {
        console.error("Database connection failure inside meetings:", error);
        return NextResponse.json({ error: "Failed to fetch meeting records" }, { status: 500 });
    }
}
