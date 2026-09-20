import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';


interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const typeStyles: Record<string, { label: string; badge: string }> = {
    testimony: { label: 'Fast & Testimony', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    regular: { label: 'Regular Service', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    stake: { label: 'Stake Conference', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
    general: { label: 'General Conference', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
  };

  const currentStyle = typeStyles[meeting.meetingType] || {
    label: 'Sacrament Service',
    badge: 'bg-gray-50 text-gray-700 border-gray-200',
  };

  const formattedDate = new Date(meeting.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-gray-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <time className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {formattedDate}
          </time>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase border ${currentStyle.badge}`}>
            {currentStyle.label}
          </span>
        </div>


        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 line-clamp-1">
          Presiding: {meeting.presiding}
        </h3>

        <div className="space-y-1.5 text-sm text-gray-600 border-b border-gray-100 pb-4 mb-4">
          <p>
            <span className="font-semibold text-gray-500">Conducting:</span> {meeting.conducting}
          </p>
          <p>
            <span className="font-semibold text-gray-500">Opening Hymn:</span> No. {meeting.openingHymn.number} - {meeting.openingHymn.title}
          </p>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p className="font-bold uppercase tracking-wider text-[10px] text-gray-400 mb-1">Program Details:</p>
          {meeting.speakers.length > 0 ? (
            <p className="italic line-clamp-1">
              Featuring: {meeting.speakers.map(s => s.name).join(', ')}
            </p>
          ) : (
            <p className="italic text-gray-400">Open Testimony Service</p>
          )}
        </div>
      </div>


      <div className="mt-6 pt-4 border-t border-gray-50">
        <Link
          href={`/meetings/${meeting.id}`}
          className="w-full inline-flex items-center justify-center py-2 px-4 rounded-xl bg-gray-50 hover:bg-indigo-600 text-gray-700 hover:text-white border border-gray-200 hover:border-indigo-600 text-xs font-bold uppercase tracking-wide transition-all duration-200"
        >
          View Full Program Details →
        </Link>
      </div>
    </article>
  );
}
