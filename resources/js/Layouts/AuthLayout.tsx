import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import React from 'react';
import { cn } from "@/lib/utils"

export default function AppLayout({ children, className }: any) {
    return (
        <div className="text-slate-800">

            {/* NAVBAR */}
            <Navbar />

            {/* Bottom Navigation */}
            <BottomNav />

            {/* MAIN CONTENT */}
            <div
                className={cn(
                    "max-w-7xl mx-auto px-6 md:px-20 w-full min-h-screen flex flex-col items-center justify-center",
                    className
            )}>
                {children}
            </div>
        </div>
    );
}
