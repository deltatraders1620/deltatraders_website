import React from 'react';
import { ShieldCheck, Target, Eye, HeartHandshake, CheckCircle2, Building2, MapPin, Award, Users, ShoppingBag, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Link } from 'react-router-dom';

export default function About() {
  const VALUES = [
    {
      title: 'Customer-First Service',
      desc: 'We prioritize our clients’ timelines, responding promptly with availability and pricing whether you require a single grocery pack or full truckloads.'
    },
    {
      title: 'Quality & Responsible Sourcing',
      desc: 'We partner directly with established food millers and packaging manufacturers to guarantee genuine quality, fresh harvest lots, and tamper-evident packaging.'
    },
    {
      title: 'Honest & Transparent Business Practices',
      desc: 'No hidden surcharges or tare discrepancies. We provide calibrated net weights and official GST invoices with transparent tax itemization.'
    },
    {
      title: 'Convenience & Efficiency',
      desc: 'By consolidating groceries, hotel culinary sauces, packaging materials, and office stationery, we save our clients valuable procurement time and shipping costs.'
    },
    {
      title: 'Long-Term Relationships',
      desc: 'We focus on sustainable partnerships with local hotels, catering masters, shopkeepers, and institutions based on dependability and trust.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-12">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Delta Traders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
              Your Everyday Essentials, All in One Place.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>DELTA TRADERS</strong> is a retail and wholesale supply business focused on groceries, everyday food essentials, stationery, and parcel and packaging materials. We proudly serve individual household customers as well as commercial businesses including hotels, restaurants, wedding caterers, provision shops, and institutions across <strong>Chengalpattu District</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our idea is simple: make it easier for customers to source the products they need by bringing different product categories and flexible supply options together under one roof. We build lasting relationships through reliable product quality, fair and transparent dealings, responsive communication, and convenient purchasing.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>GST: {COMPANY_INFO.gstin}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>FSSAI: {COMPANY_INFO.fssai}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>MSME Udyam: {COMPANY_INFO.udyam}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Delta Traders Facility"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500 text-slate-950 uppercase tracking-wider inline-block">
                  Maduranthagam Operations
                </span>
                <h3 className="text-lg font-bold font-serif text-white">
                  Delta Traders Central Facility
                </h3>
                <p className="text-xs text-slate-300">
                  {COMPANY_INFO.address}, Chengalpattu District, Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Core Purpose
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide quality everyday and business supplies with convenient ordering, competitive value, and reliable customer service for both retail and wholesale customers.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Long-Term Aspiration
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To become a trusted one-stop shopping and supply partner for households and businesses, making everyday procurement simple, accessible, and dependable.
            </p>
          </div>

        </div>

        {/* Our Values Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Every decision we make is guided by commitments to honesty, quality, and mutual growth with our patrons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 text-xs font-bold flex items-center justify-center font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Customer Callout & Action */}
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-brand-950 to-slate-900 text-white p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/30 inline-block">
                Commercial Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                Supplying Hotels, Caterers, and Local Retailers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Need regular supplies for your hotel, restaurant, catering business, shop, or institution? Contact Delta Traders for bulk requirements, product availability, and a customized supply enquiry.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/business-supply"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow text-center transition-transform hover:scale-105"
              >
                Request a Bulk Supply Quote
              </Link>
              <Link
                to="/contact"
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 text-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
