// components/Pagination.tsx
'use client'; // Accesses browser query state parameters interactively

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  // Generates a bookmarkable URL string retaining any active search keywords
  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav 
      aria-label="Pagination Navigation" 
      className="no-print flex items-center justify-between border-t border-gray-200 pt-6 mt-8"
    >
      {/*  Previous Page Trigger Button Link Layout */}
      <div className="flex-1 flex justify-start">
        {currentPage > 1 ? (
          <Link 
            href={createPageURL(currentPage - 1)}
            className="inline-flex items-center justify-center py-2 px-4 rounded-xl border border-gray-300 bg-white text-xs font-bold uppercase tracking-wider text-gray-700 shadow-2xs hover:bg-gray-50 transition-all duration-200"
          >
            ← Previous
          </Link>
        ) : (
          <span className="inline-flex items-center justify-center py-2 px-4 rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-300 pointer-events-none select-none">
            ← Previous
          </span>
        )}
      </div>

      {/* Current Layout Matrix Page Readout Position indicator */}
      <span className="text-xs font-bold text-gray-500 tracking-widest uppercase bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl">
        Page {currentPage} of {totalPages}
      </span>

      {/* ➡️ Next Page Trigger Button Link Layout */}
      <div className="flex-1 flex justify-end">
        {currentPage < totalPages ? (
          <Link 
            href={createPageURL(currentPage + 1)}
            className="inline-flex items-center justify-center py-2 px-4 rounded-xl border border-gray-300 bg-white text-xs font-bold uppercase tracking-wider text-gray-700 shadow-2xs hover:bg-gray-50 transition-all duration-200"
          >
            Next →
          </Link>
        ) : (
          <span className="inline-flex items-center justify-center py-2 px-4 rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-300 pointer-events-none select-none">
            Next →
          </span>
        )}
      </div>
    </nav>
  );
}
