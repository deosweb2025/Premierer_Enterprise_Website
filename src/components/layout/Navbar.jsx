import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Logo from '../common/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route navigation without synchronous setState in effect
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#101626]/90 backdrop-blur-xl border-b border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.35)] py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with exact ascending glass vector & spells quality */}
          <Link to="/" className="flex items-center group">
            <Logo size="md" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links (No Product Route) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full glass-panel border border-white/10 shadow-inner">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors px-3 py-2"
              title="Call Premiere Enterprise"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{siteData.contact.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/35 transition-all duration-300 flex items-center gap-1.5 group"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/90 text-slate-200 border border-white/10 hover:border-amber-400/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel border-b border-white/15 bg-[#101626]/95 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-2">
                <a
                  href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-slate-200 text-sm font-medium border border-white/10"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {siteData.contact.phoneDisplay}</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 text-sm font-bold shadow-lg shadow-amber-500/20"
                >
                  <span>Request Custom Glass Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
