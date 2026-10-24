import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-24 px-4 bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] relative overflow-hidden">
      {/* Background Lighting Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-amber-500/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 shadow-2xl">
        
        {/* Crystal Prism Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[1px] mx-auto mb-6 shadow-xl shadow-amber-500/20">
          <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
            <Compass className="w-8 h-8 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
          </div>
        </div>

        <span className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tight block">
          404
        </span>

        <h1 className="text-xl sm:text-2xl font-bold text-white mt-3 font-heading">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
          The page you are looking for has been moved, renamed, or does not exist. Let us guide you back to our architectural glass and mirror collections.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold glass-panel text-slate-200 hover:text-white border border-white/10 flex items-center justify-center gap-1.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
