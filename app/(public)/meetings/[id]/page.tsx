import { notFound } from 'next/navigation';
import MeetingDetail from '../../../../components/MeetingDetail';
import type { SacramentMeeting } from '../../../../lib/types';

interface PageProps {
  //synchronous search and routing parameter interface contract
  params: Promise<{ id: string }>;
}

/**
 * Server-Side Single Record Fetcher
 * Queries our local backend API gateway endpoint for a single record match
 */
async function fetchMeetingById(id: string): Promise<SacramentMeeting | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/meetings/${id}`, {
      cache: 'no-store', // Ensures live database pulling without layout caching delays
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching dynamic single parameter id route details:', error);
    return null;
  }
}

export default async function MeetingDetailPage({ params }: PageProps) {
  // Unpack the asynchronous context parameters container safely
  const resolvedParams = await params;
  const numericId = parseInt(resolvedParams.id, 10);

  // If the URL address parameter is text or malformed, return a clean 404
  if (isNaN(numericId)) {
    notFound();
  }

  // Fetch the record directly from your live Neon database API layer stream
  const meeting = await fetchMeetingById(resolvedParams.id);

  // If the record row is not present inside your database table, trigger a 404
  if (!meeting) {
    notFound();
  }

  return (
    <div className="py-4 animate-fade-in">
      {/* Feed the completed database object safely into your print-friendly layout component */}
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
