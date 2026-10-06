// app/(admin)/admin/page.tsx
import React from 'react';

export default function AdminDashboardIndexPage() {
  return (
    <main className="p-6 max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl mt-8 shadow-xs">
      <h1 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
        Leader Admin Dashboard
      </h1>
      <p className="text-sm text-gray-600 leading-relaxed">
        Welcome to the Ward Planner management system hub. Authentication checks will be fully 
        scaffolded here during your upcoming Week 05 sprint.
      </p>
    </main>
  );
}
