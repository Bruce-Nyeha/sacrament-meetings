// components/MeetingSearch.tsx
'use client'; // 🚀 CRITICAL: Accesses client-side navigation router hooks

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // ⏱️ Debounce limits database queries by waiting 300ms after the user stops typing
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // Always reset to page 1 on a brand-new search query execution
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    // Smoothly swap out the URL string query params in the browser history state
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="no-print max-w-md mb-6">
      <label htmlFor="search-field" className="sr-only">Search meetings</label>
      <input
        id="search-field"
        type="search"
        placeholder="Search by speaker, leader, or meeting type..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
        aria-label="Search meetings"
      />
    </div>
  );
}
