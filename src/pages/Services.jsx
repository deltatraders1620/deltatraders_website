import React, { useState } from 'react';
import { ShoppingBag, Truck, PackageCheck, Briefcase, FileText, CheckCircle2, PhoneCall, ArrowRight, ShieldCheck, Clock, MessageCircle, Mail } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { COMPANY_INFO } from '../data/products';
import { Link } from 'react-router-dom';

export default function Services() {
  const { setIsDrawerOpen } = useRfq();
  const [selectedService, setSelectedService] = useState('wholesale');

  const SERVICES = [
    {
      id: 'wholesale',
      title: 'Wholesale & Bulk Supply',
      tamilSubtitle: 'மொத்த விற்பனை & வணிக விநியோகம்',
      category: 'Institutional Supply',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      summary: 'Dedicated bulk supply support for hotels, restaurants, wedding caterers, provision shops, and institutions across Chengalpattu district. Availability, pricing, and order quantities are confirmed based on requirement.',
      features: [
        'Complete supply for commercial kitchens: Dals, rice, spices, masalas, and oil tins',
        'Direct bulk packaging lots for takeaway counters and restaurants',
        'Flexible order volume scaling from weekly hotel requirements to grand wedding provisions',
        'Consolidated billing with official GST tax invoice for business accounting'
      ],
      idealFor: 'Hotels, Restaurants, Caterers, Supermarkets, Messes & Hostels'
    },
    {
      id: 'retail',
      title: 'Retail Sales for Households',
      tamilSubtitle: 'சில்லறை விற்பனை & வீட்டு உபயோகம்',
      category: 'Everyday Essentials',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      summary: 'Customers can purchase available grocery products, food staples, parcel materials, and stationery in convenient retail quantities for household or personal requirements.',
      features: [
        'Top-grade daily kitchen staples: Atta, Maida, Sugar, Rava, Vermicelli, and Cooking Oils',
        'Retail pack sizes (50g, 100g, 500g, 1kg) suited for family cooking',
        'Clean, tamper-resistant packaging preserving freshness and aroma',
        'Easy ordering via WhatsApp or online enquiry basket'
      ],
      idealFor: 'Households, Home Bakers, Small Offices, Independent Buyers'
    },
    {
      id: 'groceries',
      title: 'Grocery & Essential Supply',
      tamilSubtitle: 'மளிகை மற்றும் அத்தியாவசிய உணவுப் பொருட்கள்',
      category: 'Food Staples',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      summary: 'A curated range of grocery and daily-use products for customers seeking convenient sourcing under one roof with uncompromised grain purity and culinary grade quality.',
      features: [
        'Whole spices: Cardamom, Cloves, Cinnamon, Star Anise, Black Pepper, Cumin, Mustard, and Kalpasi',
        'Fresh spice powders: Turmeric, Dhaniya, Chilli powder, Kulambu powder, Chicken & Mutton Masalas',
        'Premium edible cooking oils: SVN Palmolein boxes, Gold Winner Refined Oil, and Vanaspati',
        'Dry fruits & nuts: First-grade Cashew nuts (Net) and Sweet Dry Grapes'
      ],
      idealFor: 'Catering Kitchens, Bakery Units, Family Feasts, Community Annadhanams'
    },
    {
      id: 'packaging',
      title: 'Stationery & Packaging Supply',
      tamilSubtitle: 'ஸ்டேஷனரி & பார்சல் பேக்கிங் பொருட்கள்',
      category: 'Packaging Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      summary: 'Comprehensive packaging materials and stationery products to support office, retail shop, and food delivery operations without stockouts.',
      features: [
        'Aluminium food containers (250ml, 450ml, 750ml) with matching gray lids (100 pcs packs)',
        'Bio-compostable eco cups (90ml, 110ml, 250ml) and meal containers (500ml, 750ml)',
        'Silver pouches (4x6, 5x7, 6x9, 8x10), transparent pouches, and butter paper sheets',
        'Shop stationery: BOPP packing tapes, billing rolls, marker pens, and stock ledgers'
      ],
      idealFor: 'Food Delivery Outlets, Sweet Stalls, Cloud Kitchens, Retail Counters'
    },
    {
      id: 'procurement',
      title: 'Business Procurement Support',
      tamilSubtitle: 'வணிக கொள்முதல் & தனிப்பயன் மேற்கோள்',
      category: 'Custom B2B Service',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      summary: 'Customers may share custom product lists and quantities for an end-to-end supply enquiry. We verify inventory, coordinate pack sizes, and provide a comprehensive quotation.',
      features: [
        'Single-source vendor consolidation: groceries + packaging + stationery in one delivery',
        'Custom quotes based on order volume and delivery frequency',
        'Direct coordination with kitchen head chefs or purchase managers',
        'Dual submission options via WhatsApp and official email'
      ],
      idealFor: 'Corporate Canteens, Industrial Messes, Institutions, Banquet Halls'
    },
    {
      id: 'delivery',
      title: 'Delivery & Order Fulfilment',
      tamilSubtitle: 'விநியோகம் & நேரடி விநியோக சேவை',
      category: 'Logistics',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      summary: 'Dependable delivery options across Chengalpattu district. Serviceable areas, freight charges, and estimated delivery timelines are communicated clearly at order confirmation.',
      features: [
        'Doorstep delivery to Maduranthagam, Kadaperi, Padalam, Vedanthangal, Melmaruvathur, Acharapakkam, and Chengalpattu town',
        'Early morning dispatch slots scheduled for wedding banquets and hotel kitchens',
        'Proper handling of heavy sacks and fragile aluminium containers',
        'Verified delivery challan with weighment and item checklist'
      ],
      idealFor: 'Wedding Venues, Highway Hotels, Local Grocers, Rural Institutions'
    }
  ];

  const active = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-12">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Complete Wholesale & Retail Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
            Our Services & Supply Capabilities
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Delta Traders connects households and commercial businesses with reliable supplies of groceries, food essentials, stationery, parcel and packaging materials. Explore our 6 specialized supply services below.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SERVICES.map((s) => {
            const isCurrent = s.id === selectedService;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-navy-950 dark:bg-slate-900 text-white border-cyan-500 shadow-lg ring-2 ring-cyan-500/20'
                    : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-500">
                  {s.category}
                </div>
                <div className="text-xs sm:text-sm font-bold mt-1 line-clamp-2">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Left */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500 text-slate-950 uppercase tracking-wider inline-block">
                {active.category}
              </span>
              <h3 className="text-xl font-bold font-serif text-white">{active.title}</h3>
              <p className="text-xs text-cyan-200">{active.tamilSubtitle}</p>
            </div>
          </div>

          {/* Details Right */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Service Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
                  {active.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {active.summary}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Service Highlights
                </div>
                <div className="space-y-2">
                  {active.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For Pill */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white">Recommended For: </span>
                <span className="text-slate-600 dark:text-slate-400">{active.idealFor}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow flex items-center gap-2 transition-transform hover:scale-105"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Product Catalog</span>
              </Link>

              <Link
                to="/business-supply"
                className="px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <span>Bulk Supply Quote</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>

              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(`Hi Delta Traders, I am inquiring about ${active.title}. Please provide details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ({COMPANY_INFO.primaryPhoneFormatted})</span>
              </a>
            </div>

          </div>

        </div>

        {/* All 6 Services Grid Card Overview */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
              Why Choose Delta Traders for Your Supplies?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We bring multiple commercial supply streams together so you don't have to manage five different vendors for groceries, packaging, and office supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                One-Stop Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Save time and freight overhead by consolidating food staples, cooking oils, packaging containers, and stationery into one single, organized delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                Honest & Transparent Dealings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear pack sizes, genuine net weight compliance, zero adulteration, and proper tax invoices with valid GSTIN and FSSAI credentials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                Chengalpattu District Coverage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Locally based in Maduranthagam with scheduled delivery routes serving hotels, catering halls, retail stores, and rural institutions across the district.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 text-white border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-serif text-white">Need a custom supply quote for your business?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Share your item list and quantities. Our team will verify availability and confirm your supply schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow"
            >
              Contact Us Today
            </Link>
            <Link
              to="/business-supply"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20"
            >
              Bulk Supply Form
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
