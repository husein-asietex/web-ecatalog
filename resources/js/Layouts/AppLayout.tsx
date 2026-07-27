import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import React from 'react';

export default function AppLayout({ children }: any) {
    return (
        <div className="min-h-screen text-slate-800">

            {/* NAVBAR */}
            <Navbar />

            {/* Bottom Navigation */}
            <BottomNav />

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-0 md:py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {children}
                <div className="pb-[200px]"></div>
            </div>
        </div>
    );
}
