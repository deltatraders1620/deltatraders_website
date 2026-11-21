import React, { useState } from 'react';
import { Phone, Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalBags, totalWeightKg, setIsDrawerOpen } = useRfq();

  const navItems = [
    { id: 'home', label: 'Home & Catalog' },
    { id: 'services', label: 'Services & Estimator' },
    { id: 'about', label: 'About & Quality' },
    { id: 'contact', label: 'Contact & RFQ' },
  ];

  const totalTons = (totalWeightKg / 1000).toFixed(1);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActivePage('home')} 
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-navy-950 via-brand-900 to-brand-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-serif text-2xl font-extrabold text-navy-950">
                <span>DELTA</span>
                <span className="text-cyan-600 font-bold">TRADERS</span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                Direct Mill Wholesale Groceries
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePage === item.id 
                    ? 'text-brand-800 bg-brand-50 shadow-sm' 
                    : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart & Hotline Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+919087752120" 
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-brand-700 bg-slate-50 hover:bg-brand-50 px-3 py-2 rounded-xl border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>+91 90877 52120</span>
            </a>

            {/* Quote Cart Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center gap-2.5 border border-cyan-500/20"
            >
              <ShoppingBag className="w-4 h-4 text-cyan-300" />
              <span>Quote Basket</span>
              {totalBags > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold animate-pulse">
                  {totalBags}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Mini Cart + Drawer Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2.5 rounded-xl bg-brand-50 text-brand-800 border border-brand-200"
            >
              <ShoppingBag className="w-5 h-5 text-cyan-600" />
              {totalBags > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                  {totalBags}
                </span>
              )}
            </button>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); setMobileOpen(false); }}
              className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                activePage === item.id ? 'text-brand-800 bg-brand-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setIsDrawerOpen(true); setMobileOpen(false); }}
              className="w-full py-3 rounded-xl bg-brand-800 text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-harvest-400" />
              <span>Open Wholesale RFQ Basket ({totalBags} Units)</span>
            </button>
            <a 
              href="tel:+919087752120" 
              className="text-center py-2.5 text-xs font-bold text-brand-800 bg-brand-50 rounded-xl border border-brand-200"
            >
              Call Hotline: +91 90877 52120
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
