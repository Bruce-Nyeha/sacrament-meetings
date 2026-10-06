'use client';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  // Convert raw 'YYYY-MM-DD' text into a clean local format (e.g., 'Sunday, May 3, 2026')
  const formattedDate = new Date(meeting.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Ensures exact string rendering matching the database timezone
  });

  return (
    <article className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xs print:shadow-none print:border-none print:p-0">
      
   
      <header className="text-center border-b-2 border-gray-900 pb-6 mb-8 text-black">
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-widest mb-2">
          Sacrament Meeting Program
        </h1>
        <p className="text-sm font-bold tracking-wide text-gray-600 uppercase print:text-black">
          The Church of Jesus Christ of Latter-day Saints
        </p>
        <time className="block text-sm font-bold text-indigo-600 mt-2 uppercase tracking-wider print:text-black">
          {formattedDate}
          {meeting.meetingType === 'stake' && ' | Stake Conference'}
          {meeting.meetingType === 'general' && ' | General Conference'}
        </time>
      </header>

     
      <section className="grid grid-cols-2 gap-6 text-sm border-b border-gray-100 pb-6 mb-6 text-gray-800 print:text-black">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 print:text-black mb-0.5">Presiding Officer</p>
          <p className="text-base font-bold text-gray-900 print:text-black">{meeting.presiding}</p>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 print:text-black mb-0.5">Conducting Officer</p>
          <p className="text-base font-bold text-gray-900 print:text-black">{meeting.conducting}</p>
        </div>
      </section>

     

      {meeting.announcements && (
        <section className="no-print bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8">
          <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">
            Ward Announcements
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {meeting.announcements}
          </p>
        </section>
      )}


     
      {meeting.wardBusiness && meeting.wardBusiness.length > 0 && (
        <section className="border-b border-gray-100 pb-6 mb-6 text-sm text-gray-800 print:text-black">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 print:text-black mb-3">Ward Business</h3>
          <ul className="space-y-2 bg-amber-50/50 border border-amber-100 rounded-xl p-4 print:bg-transparent print:border-none print:p-0">
            {meeting.wardBusiness.map((business, index) => (
              <li key={index} className="flex gap-2 text-gray-800 print:text-black font-medium">
                <span>•</span> {business.description}
              </li>
            ))}
          </ul>
        </section>
      )}

   
      <section className="space-y-4 text-sm text-gray-800 print:text-black">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 print:text-black mb-4 border-b border-gray-100 pb-2">Order of Service</h3>
        
        <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-100">
          <span className="font-semibold text-gray-600 print:text-black">Opening Hymn</span>
          <span className="text-right font-medium">No. {meeting.openingHymn.number} — {meeting.openingHymn.title}</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-100">
          <span className="font-semibold text-gray-600 print:text-black">Invocation</span>
          <span className="text-right font-medium">{meeting.openingPrayer}</span>
        </div>

        {/* Sacrament Ordinance Segment (Only if it's a Ward level service) */}
        {!meeting.stakeBusiness && (
          <>
            <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-100">
              <span className="font-semibold text-gray-600 print:text-black">Sacrament Hymn</span>
              <span className="text-right font-medium">No. {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wide my-2 print:border-black print:text-black print:bg-transparent">
              Administration of the Sacrament by the Priesthood
            </div>
          </>
        )}

        {meeting.speakers && meeting.speakers.length > 0 ? (
          <div className="space-y-3 pt-2">
            {meeting.speakers.map((speaker, index) => (
              <div key={index} className="flex justify-between items-start py-1 border-b border-dashed border-gray-100">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 print:text-black">{speaker.name}</span>
                  {speaker.topic && (
                    <span className="text-xs text-gray-500 italic print:text-black">Topic: {speaker.topic}</span>
                  )}
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md mt-0.5 print:bg-transparent print:text-black print:border print:border-black">
                  {speaker.type === 'musical-number' ? 'Musical Interlude' : 'Speaker'}
                </span>
              </div>
            ))}
          </div>
        ) : (
        
          meeting.meetingType === 'testimony' && (
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 text-center text-sm font-medium text-emerald-800 italic my-4 print:border-black print:text-black print:bg-transparent">
              Bearing of Testimonies by members of the congregation
            </div>
          )
        )}

        <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-100 pt-4">
          <span className="font-semibold text-gray-600 print:text-black">Closing Hymn</span>
          <span className="text-right font-medium">No. {meeting.closingHymn.number} — {meeting.closingHymn.title}</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-100">
          <span className="font-semibold text-gray-600 print:text-black">Benediction</span>
          <span className="text-right font-medium">{meeting.closingPrayer}</span>
        </div>
      </section>


      <footer className="no-print mt-10 pt-6 border-t border-gray-100 flex justify-center">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 cursor-pointer"
        >
          Print Program Paper Copies
        </button>
      </footer>

    </article>
  );
}
