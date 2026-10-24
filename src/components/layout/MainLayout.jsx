import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';

export default function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating Action Call & WhatsApp Buttons */}
      <FloatingCallButton />

      {/* Global Shared Footer */}
      <Footer />
    </div>
  );
}
