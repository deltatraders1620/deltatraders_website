import React, { useState } from 'react';
import { Package, ShieldCheck, Truck, Clock, ArrowRight, CheckCircle2, PhoneCall, Sparkles, ShoppingBag } from 'lucide-react';
import CatalogSection from '../components/CatalogSection';
import SavingsCalculator from '../components/SavingsCalculator';
import EventEstimator from '../components/EventEstimator';
import QualityComparison from '../components/QualityComparison';
import DeliveryChecker from '../components/DeliveryChecker';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { useRfq } from '../context/RfqContext';

export default function Home({ setActivePage }) {
  const { setIsDrawerOpen } = useRfq();
  const [heroPersona, setHeroPersona] = useState('caterer');

  const PERSONAS = {
    caterer: {
      tag: 'For Wedding Caterers & Samayal Masters',
      title: 'Flawless Banquets with Direct Mill Grains & Guaranteed Weighment.',
      desc: 'Lock in 25kg/50kg bags of Deluxe Ponni, Aged 1121 Basmati, and sealed 15L oil tins at factory prices. Midnight emergency buffer dispatches and returns on unopened bags.',
      badge: 'Zero Mixed Batches',
      stat1: '100% Sortex',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Cleaned Aged Rice',
      stat2: '15L Tins',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Factory Sealed Oil',
      stat3: '5:30 AM',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Hall Morning Delivery',
    },
    hotel: {
      tag: 'For Hotels, Restaurants & Cloud Kitchens',
      title: 'Stable Monthly Grocery Contracts with Zero Speculative Broker Spikes.',
      desc: 'Eliminate 4 middlemen markups. Schedule recurring weekly or bi-weekly deliveries with fixed monthly rates, printed weighbridge slips, and high kitchen yield.',
      badge: 'Price-Locked Contracts',
      stat1: '18%–25%',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Lower Than Mandi',
      stat2: '40+ Tons',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Central Depot Reserve',
      stat3: 'Daily Fleet',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Scheduled Kitchen Drop',
    },
    store: {
      tag: 'For Retail Supermarkets & Provision Stores',
      title: 'Maximize Resale Profit Margins with Authentic First-Grade Lots.',
      desc: 'Direct mill procurement gives you the margin advantage to undercut competitors while keeping full bag-lot quality intact. Machine-stitched tamper-evident bags.',
      badge: 'Dealer Direct Margins',
      stat1: '₹150–₹280',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Extra Margin / Bag',
      stat2: 'BOPP Bags',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Moisture Barrier Pack',
      stat3: '24-Hour',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Depot Dispatch',
    },
  };

  const activePersona = PERSONAS[heroPersona];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Dynamic Hero Section in Cyan & Dark Blue Theme */}
      <section className="relative bg-gradient-to-b from-navy-950 via-brand-950 to-slate-900 text-white pt-12 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle Cyan Radial Pattern & Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Interactive Buyer Selector Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-cyan-500/20 max-w-full overflow-x-auto shadow-xl">
              <button
                onClick={() => setHeroPersona('caterer')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'caterer'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                💍 Wedding / Event Caterer
              </button>
              <button
                onClick={() => setHeroPersona('hotel')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'hotel'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏢 Hotel & Restaurant
              </button>
              <button
                onClick={() => setHeroPersona('store')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'store'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏪 Supermarket Reseller
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{activePersona.tag}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-slate-50 leading-tight">
                {activePersona.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {activePersona.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#catalog"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 flex items-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  <span>Browse Commodity Catalog</span>
                </a>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-cyan-500/30 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:border-cyan-400"
                >
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  <span>Open RFQ Cart</span>
                </button>
              </div>

              {/* Live Multi-Color Stats Row */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800 text-slate-300">
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold font-serif ${activePersona.stat1Color}`}>
                    {activePersona.stat1}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{activePersona.stat1Desc}</div>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold font-serif ${activePersona.stat2Color}`}>
                    {activePersona.stat2}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{activePersona.stat2Desc}</div>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold font-serif ${activePersona.stat3Color}`}>
                    {activePersona.stat3}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{activePersona.stat3Desc}</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl group bg-navy-900">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Delta Traders Wholesale Commodity Depot"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Floating Assurance Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-950/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    ✓ Verified Central Trade Depot
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 backdrop-blur-md text-slate-950 shadow-md">
                    Koyambedu Hub
                  </span>
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-cyan-500/20 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Direct Mill Procurement Standard</span>
                    </span>
                    <span className="text-amber-400 font-mono">100% Bag Lot</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Electronic weighbridge calibration and machine-sealed packaging ensure zero tare shortfall or moisture inflation.
                  </p>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>GSTIN: 33AAACD1234F1Z9</span>
                    <span className="text-emerald-400 font-semibold">FSSAI: 12423008000451</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Catalog Section */}
      <CatalogSection onGoToContact={() => setActivePage('contact')} />

      {/* Interactive Live Savings & Cost Auditor */}
      <SavingsCalculator onGoToContact={() => setActivePage('contact')} />

      {/* Interactive Event & Wedding Provision Estimator */}
      <EventEstimator />

      {/* Interactive Quality Standards & Purity Comparison */}
      <QualityComparison />

      {/* Interactive Logistics Hub & Delivery Checker */}
      <DeliveryChecker />

      {/* Verified Client Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Bottom Conversion Banner in Dark Blue & Cyan with Emerald WhatsApp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-brand-950 to-slate-900 text-white p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 inline-block">
                Ready to Order Direct from Mill?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                Get an Instant Wholesale Quote for Your Next Lot
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Connect with our wholesale desk directly. Send your list of rice bags, oil tins, dals, and spices for immediate quotation and confirmed morning delivery schedule.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 text-center"
              >
                Submit Custom RFQ
              </button>
              <a
                href="https://wa.me/919087752120?text=Hi%20Delta%20Traders,%20I%20want%20to%20inquire%20about%20bulk%20grocery%20pricing%20and%20morning%20delivery."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <span>Chat on WhatsApp (9087752120)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
