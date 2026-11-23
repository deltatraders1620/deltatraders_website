import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ShoppingBag, Sun, Moon, ArrowRight, MessageCircle } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { useTheme } from '../context/ThemeContext';
import { COMPANY_INFO } from '../data/products';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalUnits, setIsDrawerOpen } = useRfq();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Shop / Products' },
    { path: '/services', label: 'Services' },
    { path: '/business-supply', label: 'Business Supply' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200 dark:border-navy-800 transition-colors duration-200 shadow-sm">
      
      {/* Top Notification / Hotline Bar - Expanded full width container */}
      <div className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <span className="truncate whitespace-nowrap">
              Wholesale Groceries, Hotel Kitchen Supplies & Packaging • <strong className="text-cyan-300">Maduranthagam & Chengalpattu District</strong>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-200 text-xs">
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <strong>+91 {COMPANY_INFO.primaryPhone}</strong></span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`tel:+91${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hotline: +91 86680 54308</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Expanded to max-w-[1700px] to fill screen width */}
      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Official Brand Logo - Crisp cropped display with white background card (matches footer) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group text-left">
            <div className="h-12 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200 dark:border-navy-700 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Delta Traders Official Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="hidden 2xl:block">
              <span className="text-[10px] tracking-wider uppercase font-bold text-cyan-700 dark:text-cyan-400 block whitespace-nowrap">
                Wholesale & Retail
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                Maduranthagam
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Single Line Guaranteed (whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-cyan-50 text-cyan-800 dark:bg-navy-900 dark:text-cyan-300 shadow-sm border border-cyan-200 dark:border-cyan-500/30'
                      : 'text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-navy-900/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: Theme Toggle + Quote Basket + WhatsApp Desk */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Theme Toggle Button (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-cyan-300 hover:bg-slate-200 dark:hover:bg-navy-800 transition-colors shadow-sm shrink-0"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-brand-700" />
              )}
            </button>

            {/* Quote / Enquiry Basket Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative px-3.5 sm:px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-brand-900 dark:hover:bg-brand-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 border border-cyan-500/30 hover:border-cyan-400 whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Enquiry Basket</span>
              {totalUnits > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold animate-pulse">
                  {totalUnits}
                </span>
              )}
            </button>

            {/* WhatsApp Quick CTA (Desktop) */}
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=Hi%20Delta%20Traders,%20I%20want%20to%20enquire%20about%20wholesale%20products.`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform hover:scale-105 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp Desk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-200"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-950 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  active
                    ? 'bg-cyan-50 text-cyan-800 dark:bg-navy-900 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-cyan-500" />
              </Link>
            );
          })}
          
          <div className="pt-2 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
