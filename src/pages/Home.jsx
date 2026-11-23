import React, { useState } from 'react';
import { Package, ShieldCheck, Truck, Clock, ArrowRight, CheckCircle2, PhoneCall, Sparkles, ShoppingBag, Store, ChefHat, Building2, Utensils, MessageCircle, Mail } from 'lucide-react';
import EventEstimator from '../components/EventEstimator';
import QualityComparison from '../components/QualityComparison';
import DeliveryChecker from '../components/DeliveryChecker';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { useRfq } from '../context/RfqContext';
import { COMPANY_INFO, CATEGORIES } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  const { setIsDrawerOpen } = useRfq();
  const [heroPersona, setHeroPersona] = useState('hotel');

  const PERSONAS = {
    hotel: {
      tag: 'For Hotels, Restaurants & Cloud Kitchens',
      title: 'Commercial Food Essentials & Packaging at Factory Rates.',
      desc: 'Source daily food grains, high-yield dals, 15L oil tins, hotel culinary sauces, and aluminium packaging containers together in one dependable delivery schedule.',
      badge: 'Chengalpattu Hotel Partner',
      stat1: '72+ Items',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Groceries & Packaging',
      stat2: '15L Tins',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Cooking Oil Boxes',
      stat3: '5:30 AM',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Early Kitchen Dispatch',
    },
    caterer: {
      tag: 'For Wedding Caterers & Samayal Masters',
      title: 'Banquet Grocery Supply with Direct Mill Weighment.',
      desc: 'Lock in 50kg sacks of Deluxe Sugar, Maida, Atta, whole spices, first-grade cashew nuts, and banquet parcel materials. Reliable morning dispatches direct to your marriage hall.',
      badge: 'Zero Adulteration',
      stat1: '100% Bag Lot',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Weighbridge Verified',
      stat2: 'Full Spices',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Cardamom, Clove, Star Anise',
      stat3: 'Hall Drop',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Dawn Delivery Guarantee',
    },
    store: {
      tag: 'For Provision Stores & Retail Buyers',
      title: 'Your Everyday Essentials, All in One Place.',
      desc: 'Delta Traders brings groceries, food essentials, stationery, parcel and packaging supplies together for households and retailers with convenient ordering and dependable service.',
      badge: 'Retail & Wholesale',
      stat1: 'Dual Order',
      stat1Color: 'text-cyan-400',
      stat1Desc: 'Retail & Bulk Lots',
      stat2: 'Direct Sourcing',
      stat2Color: 'text-amber-400',
      stat2Desc: 'Competitive Value',
      stat3: 'Local Hub',
      stat3Color: 'text-emerald-400',
      stat3Desc: 'Maduranthagam Depot',
    },
  };

  const activePersona = PERSONAS[heroPersona];

  return (
    <div className="space-y-20 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Dynamic Hero Section with Cyan & Dark Blue Theme */}
      <section className="relative bg-gradient-to-b from-navy-950 via-brand-950 to-slate-900 text-white pt-10 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle Cyan Grid & Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Interactive Buyer Selector Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-cyan-500/20 max-w-full overflow-x-auto shadow-xl">
              <button
                onClick={() => setHeroPersona('hotel')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'hotel'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏢 Hotel & Restaurant Supplies
              </button>
              <button
                onClick={() => setHeroPersona('caterer')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'caterer'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                💍 Wedding & Banquet Catering
              </button>
              <button
                onClick={() => setHeroPersona('store')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  heroPersona === 'store'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🏪 Retail Grocery & Packaging
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Delta Traders • Maduranthagam • {activePersona.tag}</span>
              </div>

              {/* Main H1 incorporating Search Terms */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-50 leading-tight">
                Wholesale Groceries, Food Essentials & Packaging Supplies in Maduranthagam
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Delta Traders in Maduranthagam brings bulk rice, high-yield dals, cooking oil boxes, whole spices, dry fruits, and food packaging materials together for households, retailers, hotels, restaurants, and wedding caterers across Chengalpattu District. Factory-direct wholesale value with door-to-door morning delivery.
              </p>

              {/* Primary & Secondary Buttons as per Spec */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 flex items-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  <span>SHOP PRODUCTS</span>
                </Link>

                <Link
                  to="/business-supply"
                  className="px-6 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-cyan-500/30 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:border-cyan-400"
                >
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>ENQUIRE FOR BULK ORDERS</span>
                </Link>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="px-5 py-3.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/20 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  <span>Basket Quote</span>
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
                  alt="Delta Traders Central Trade Depot Maduranthagam"
                  className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Floating Assurance Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-950/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    ✓ Verified Central Supply Depot
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 backdrop-blur-md text-slate-950 shadow-md">
                    Maduranthagam Hub
                  </span>
                </div>

                {/* Overlay Card with Real Registrations */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-cyan-500/20 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Wholesale Groceries & Packaging Materials</span>
                    </span>
                    <span className="text-amber-400 font-mono">Chengalpattu</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct mill supply, hotel kitchen staples, parcel materials, and stationery delivered across Chengalpattu district.
                  </p>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>GST: {COMPANY_INFO.gstin}</span>
                    <span className="text-emerald-400 font-semibold">FSSAI: {COMPANY_INFO.fssai}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Welcome Message Section from Document */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Welcome to Delta Traders
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
              Your One-Stop Supply Partner for Everyday Essentials and Business Supplies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed">
              We aim to make purchasing simple by bringing a useful range of grocery items and packaging materials together in one place. Whether you are shopping for your home or sourcing supplies for your business, our goal is to offer a convenient experience, clear communication, and dependable support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">Groceries & Staples</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Sugar, Maida, Atta, Dals, whole spices & cooking oils.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Hotel Kitchen Supplies</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Culinary sauces, vinegar, tomato ketchup, chilli powder.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="text-amber-600 dark:text-amber-400 font-bold text-sm">Parcel & Packaging</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Aluminium food containers, bio cups, silver pouches.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">Office & Stationery</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">BOPP tapes, billing rolls, marker pens & stock ledgers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Playcards Section - Directs to Products Page */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-navy-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              <Package className="w-3.5 h-3.5" />
              <span>Core Supply Divisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Our Supply Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select any category card below to view detailed item specifications, lot sizes, and 1-click wholesale quotation options.
            </p>
          </div>

          <Link
            to="/products"
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-brand-900 dark:hover:bg-brand-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md border border-cyan-500/30 whitespace-nowrap shrink-0 transition-all hover:scale-105"
          >
            <span>View All 72 Products</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* 8 Category Playcards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Playcard Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge top right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-navy-950/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow">
                    {cat.count} Items
                  </span>
                </div>

                {/* Tamil tag on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider drop-shadow-sm">
                    {cat.tamilName}
                  </div>
                  <h3 className="text-lg font-extrabold text-white leading-tight drop-shadow-md">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Playcard Body */}
              <div className="p-5 space-y-4 flex flex-col justify-between flex-grow">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>

                {/* Popular Item Tags */}
                {cat.popularItems && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Includes:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.popularItems.slice(0, 4).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap"
                        >
                          {item}
                        </span>
                      ))}
                      {cat.popularItems.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                          +{cat.popularItems.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Footer */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-600">
                  <span className="whitespace-nowrap">Explore Category</span>
                  <div className="w-7 h-7 rounded-full bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner directing to full catalog */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-950 to-slate-900 border border-cyan-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Looking for a specific hotel kitchen commodity or parcel packaging size?
            </h4>
            <p className="text-xs text-slate-300">
              Browse our full catalog with English & Tanglish search, pack sizes, and direct enquiry cart.
            </p>
          </div>
          <Link
            to="/products"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow whitespace-nowrap transition-transform hover:scale-105"
          >
            Open Full Product Catalog
          </Link>
        </div>
      </section>

      {/* Why Choose Delta Traders Section (Direct from Spec) */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Trusted Supply Network
          </span>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
            Why Choose Delta Traders?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Practical reasons commercial kitchens and households across Chengalpattu choose us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">One-Stop Convenience</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              A convenient place to source a complete range of everyday and business essentials under one roof.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Retail & Bulk Flexibility</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Retail quantities for individual customers and volume bulk purchasing options for businesses.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Sector-Tailored Range</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Product selection specifically designed around households, shops, hotels, restaurants, and caterers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Clear & Responsive Support</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Clear product information, pack specifications, and responsive order support via WhatsApp and phone.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
              05
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Transparent & Dependable</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              A steadfast focus on transparent dealings, genuine net weighments, and dependable scheduled service.
            </p>
          </div>
        </div>
      </section>

      {/* Business Customer Callout Section from Document */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-brand-950 to-slate-900 text-white p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 inline-block">
                Business Customer Callout
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                Reliable Supply Support for Your Business
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
                Need regular supplies for your hotel, restaurant, catering business, shop, or institution? Contact Delta Traders for bulk requirements, product availability, and a supply enquiry.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/business-supply"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 text-center transition-transform hover:scale-105 whitespace-nowrap"
              >
                REQUEST A BULK SUPPLY QUOTE
              </Link>
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent('Hi Delta Traders, I am inquiring about regular bulk supply for my business.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow text-center flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({COMPANY_INFO.primaryPhoneFormatted})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Event & Wedding Provision Estimator */}
      <EventEstimator />

      {/* Interactive Logistics Hub & Delivery Checker (Chengalpattu District) */}
      <DeliveryChecker />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Bottom Conversion Banner with WhatsApp First and Email */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 inline-block">
                Maduranthagam • Chengalpattu District
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                Ready to Source from Delta Traders?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
                Connect with our wholesale trade desk directly. Send your list of groceries, cooking oils, parcels, or stationery for immediate quotation and confirmed delivery schedule.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent('Hi Delta Traders, I would like to place an order inquiry.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.primaryPhoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Delta%20Traders%20Supply%20Enquiry`}
                className="w-full py-3 px-5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
