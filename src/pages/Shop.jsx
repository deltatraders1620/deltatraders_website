import React from 'react';
import CatalogSection from '../components/CatalogSection';
import { ShoppingBag, ShieldCheck, Truck, Phone, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Shop() {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Shop Hero Banner */}
      <section className="bg-gradient-to-b from-navy-950 via-brand-950 to-slate-900 text-white py-12 sm:py-16 border-b border-navy-800">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase whitespace-nowrap">
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
            <span>Complete Wholesale & Retail Product Range</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white leading-tight">
            Shop Groceries, Food Essentials & Packaging Supplies
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
            Browse our full catalog across 8 categories: food grains, dals, whole spices, masalas, cooking oils, dry fruits, disposable aluminium containers, meal boxes, wrapping sheets, and office stationery. Retail packs and bulk lots available with delivery in Maduranthagam & Chengalpattu District.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GST & FSSAI Registered Supplier</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span>Doorstep Delivery Across Chengalpattu Dist</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiries: +91 {COMPANY_INFO.primaryPhone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <CatalogSection />

      {/* Hotel & Caterer Special Callout */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-950 via-brand-950 to-slate-900 text-white border border-cyan-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
              Hotels, Messes & Wedding Caterers
            </span>
            <h3 className="text-2xl font-bold font-serif">
              Need Daily or Weekly Recurring Kitchen Provisioning?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We provide tailored supply schedules, custom lot packaging, and direct trade quotations for commercial establishments. Send your item list on WhatsApp or Email for instant confirmation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=Hi%20Delta%20Traders,%20we%20need%20regular%20hotel/catering%20supplies.`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Bulk%20Kitchen%20Supply%20Enquiry`}
              className="px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg border border-cyan-500/30 flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <span>Email Your Item List</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
