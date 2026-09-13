import MeetingCard from '../../components/MeetingCard';
import type { SacramentMeeting } from '../../lib/types'; 
import { getMeetings } from '@/lib/meetings-db';
/**
 * Server-Side Data Fetch Engine
 * Fetches the entire meetings array from our internal API layer
 */
async function fetchAllMeetings(): Promise<SacramentMeeting[]> {
  try {
    const res = await fetch('http://localhost:3000/api/meetings', {
      // Enforces a fresh fetch routine on every page hit to capture updates cleanly
      cache: 'no-store', 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch meeting records. Network status code: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error executing data lifecycle fetch inside meetings/page:', error);
    return [];
  }
}

export default async function MeetingsPage() {
  const meetings = await fetchAllMeetings();

  return (
    <main className="space-y-8 animate-fade-in">
   
      <section className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl mb-2">
          Sacrament Meeting Records
        </h1>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          Access the complete directory of ward sacrament agenda schedules. Use the panels below 
          to explore detailed orders of service, priesthood presiding notes, and participant tracking grids.
        </p>
      </section>

      {meetings.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center p-12 bg-white border border-dashed border-gray-300 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 font-black mb-4">
            ?
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">No Meetings Logged</h2>
          <p className="text-sm text-gray-500 max-w-sm">
            There are currently no sacrament meeting planning programs recorded inside the in-memory database module.
          </p>
        </section>
      )}

    </main>
  );
}
