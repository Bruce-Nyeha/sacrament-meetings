import React from 'react';

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-5xl mx-auto py-4">
      {children}
    </section>
  );
}
