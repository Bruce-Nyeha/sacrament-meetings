// app/(public)/meetings/page.tsx
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import  MeetingCard  from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination'; 

interface PageProps {
  searchParams?: Promise<{ query?: string; page?: string }>;
}

export default async function MeetingsPage(props: PageProps) {
  // Asynchronously await your incoming URL search parameters
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  //  Concurrent execution: Fetch data items and calculate overall total count pages simultaneously
  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="space-y-6 animate-fade-in">
      
      {/* Structural Header Area */}
      <section className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl mb-1">
          Ward Sacrament Directory
        </h1>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
          Live Database Connection Layer
        </p>
      </section>

      {/*  Embedded Debounced Client-Side Search Controller */}
      <MeetingSearch />

      {/* Dynamic Results Grid Layer */}
      {meetings.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        /* Empty State Fallback Module */
        <div className="flex flex-col items-center justify-center p-12 bg-white border border-dashed border-gray-300 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 font-bold mb-4">
            ?
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">No Matches Found</h2>
          <p className="text-sm text-gray-500 max-w-sm">
            There are no sacrament programs inside your database matching your search keywords.
          </p>
        </div>
      )}

      {/* Pagination Mount Area */}
      {totalPages > 1 && (
        <div className="no-print pt-6 border-t border-gray-100">
          <Pagination totalPages={totalPages} />
        </div>
      )}

    </main>
  );
}
