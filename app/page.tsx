import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
      <div className="max-w-xl space-y-6">
        <span className="px-3 py-1 text-xs font-black text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-widest">
          WDD 430 System Active
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
          Sacrament Meeting Planning Suite
        </h1>
        <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          An enterprise full-stack scheduling and program management dashboard designed to coordinate ward Sunday calendars seamlessly.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/meetings"
            className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
          >
            Explore Meeting Directory →
          </Link>
          <Link
            href="/meetings/current"
            className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-6 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-bold uppercase tracking-wider transition-all duration-200"
          >
            View This Week's Program
          </Link>
        </div>
      </div>
    </main>
  );
}
