import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const numericId = parseInt(resolvedParams.id, 10);

    if (isNaN(numericId)) {
        return NextResponse.json({ error: 'Invalid meeting ID schema definition' }, { status: 400 });
    }

    try {
        const targetedMeeting = await getMeetingById(numericId);

        if (!targetedMeeting) {
            return NextResponse.json({ error: 'Sacrament meeting log not found' }, { status: 404 });
        }

        return NextResponse.json(targetedMeeting);
    } catch (err) {
        console.error("Database single fetch failure inside meeting ID:", err);
        return NextResponse.json({ error: "Internal server error fetching program details" }, { status: 500 });
    }
}
