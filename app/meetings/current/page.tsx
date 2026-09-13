import { redirect } from 'next/navigation';
import type { SacramentMeeting } from '../../../lib/types';

function getTargetSundayString(): string {
  const currentZoneDate = new Date();
  const currentDayOfWeek = currentZoneDate.getUTCDay(); 
  const daysUntilSunday = currentDayOfWeek === 0 ? 0 : 7 - currentDayOfWeek;
  const targetSunday = new Date(currentZoneDate.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000);
  return targetSunday.toISOString().split('T')[0]; 
}

export default async function CurrentMeetingPage() {
  const targetDateString = getTargetSundayString();

  try {
    const res = await fetch(`http://localhost:3000/api/meetings?date=${targetDateString}`, {
      cache: 'no-store'
    })

    if (res.ok) {
      const matchingMeetings: SacramentMeeting[] = await res.json();
      if (matchingMeetings && matchingMeetings.length > 0) {
        redirect(`/meetings/${matchingMeetings[0].id}`); // Bounces safely to the first matching ID
      }
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      throw error;
    }
    console.error('Error executing redirect parsing checks:', error);
  }

  redirect('/meetings');
}
