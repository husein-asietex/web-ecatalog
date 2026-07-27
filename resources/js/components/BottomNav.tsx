import React, { useState } from 'react';
import { Home, Heart, ShoppingCart, User } from 'lucide-react';


export default function BottomNav() {
  // State sederhana untuk mendemonstrasikan menu yang aktif
  // Di aplikasi nyata, Anda bisa menggunakan useRouter() dari Next.js atau useLocation() dari react-router
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'wishlist', label: 'Favorite', icon: Heart },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'profile', label: 'Account', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] w-full bg-white border-t border-slate-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200"
            >
              <Icon 
                className={`w-5 h-5 ${
                  isActive 
                    ? 'text-blue-900 fill-blue-900/20' // Warna biru menyesuaikan tombol di desain Anda
                    : 'text-slate-500'
                }`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span 
                className={`text-[10px] font-medium ${
                  isActive ? 'text-blue-900' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};