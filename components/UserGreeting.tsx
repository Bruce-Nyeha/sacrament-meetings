'use client'; 

import { useSession } from 'next-auth/react';

export function UserGreeting() {
  const { data: session } = useSession();
  
  if (!session?.user) return null;
  
  return <span className="font-semibold text-sm text-gray-700">Welcome, {session.user.name}</span>;
}