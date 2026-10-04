// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/components/AuthProvider'; 

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'LDS Sacrament Meeting Planner',
  description: 'Enterprise full-stack scheduling and program management directory portal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased`}>
        
      
        <AuthProvider>
          <Header />

          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          <Footer />
        </AuthProvider>
        
      </body>
    </html>
  );
}
