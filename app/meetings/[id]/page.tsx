import { notFound } from 'next/navigation';
import MeetingDetail from '../../../components/MeetingDetail';
import type { SacramentMeeting } from '../../../lib/types'; 

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * Server-Side Single Record Fetcher
 */
async function fetchMeetingById(id: string): Promise<SacramentMeeting | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/meetings/${id}`, {
      cache: 'no-store', // Ensures real-time parameter parsing with zero background caching lag
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
  const resolvedParams = await params;
  const meeting = await fetchMeetingById(resolvedParams.id);

  // If the record id isn't in our database array, throw a clean 404 response handler
  if (!meeting) {
    notFound();
  }

  return (
    <div className="py-4 animate-fade-in">
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
