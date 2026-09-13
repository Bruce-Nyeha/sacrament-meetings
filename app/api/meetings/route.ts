import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";


export async function GET(request: Request) {
    const { searchParams} = new URL(request.url);
    const dataParam = searchParams.get('date');

    const meetingList = getMeetings(dataParam);
    return NextResponse.json(meetingList);
}