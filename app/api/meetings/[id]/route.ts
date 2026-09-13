import { NextResponse } from "next/server";
import { getMeetingsById } from "@/lib/meetings-db";
import { error } from "console";

export async function GET(
    request: Request,
    {params}: {params: Promise<{ id: string}> }
) {
    const resolvedParams = await params;
    const numericId = parseInt(resolvedParams.id, 10);

    if (isNaN(numericId)) {
        return NextResponse.json({error: 'Invalid meeting ID schema definition'}, {status: 400});
    }

    const targetedMeeting = getMeetingsById(numericId);

    if (!targetedMeeting){
        return NextResponse.json({error: 'Sacrament meeting log not found'}, {status: 404});
    }

    return NextResponse.json(targetedMeeting);
}