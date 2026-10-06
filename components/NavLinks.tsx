'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { name: 'Home Landing', href: '/' },
        { name: 'All Sunday Meetings', href: '/meetings' },
        { name: 'Current Week Program', href: '/meetings/current' },
    ];

    return (
        <nav className="no-print flex items-center gap-6">
            {links.map((link) => {
                const isActive = pathname === link.href || (link.href!== '/' &&  pathname.startsWith(link.href));
                return (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide uppercase transition-all duration-200 border-b-2 py-1 ${
                        isActive
                        ? 'text-indigo-600 font-black'
                        : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300'
                    }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}