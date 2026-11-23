import React, { useState } from 'react';
import { Star, Quote, Building2, ChefHat, Store, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  const REVIEWS = [
    {
      id: 1,
      name: 'Chef S. Soundararajan',
      role: 'Master Caterer, Royal Tamil Feasts',
      category: 'caterer',
      location: 'Maduranthagam & Chengalpattu',
      stats: '15+ Wedding Contracts Supplied',
      rating: 5,
      review:
        'Delta Traders has been a dependable partner for our wedding banquets. From 50kg sacks of first-grade Maida and Sugar to 15L oil tins and cardamom, everything arrives at the marriage hall on time. The packaging of their aluminium containers is solid with zero transit damage.',
    },
    {
      id: 2,
      name: 'K. Rajasekaran',
      role: 'Managing Partner, Highway Grand Residency',
      category: 'hotel',
      location: 'Acharapakkam - NH-32 Corridor',
      stats: 'Weekly Recurring Supply Partner',
      rating: 5,
      review:
        'Managing our hotel kitchen supplies used to mean running to three different shops for groceries, culinary sauces, and parcel packaging. Delta Traders brings them all together in one weekly delivery. Transparent GST invoicing and dependable support.',
    },
    {
      id: 3,
      name: 'M. Venkatesh',
      role: 'Proprietor, Sri Krishna Store',
      category: 'store',
      location: 'Maduranthagam Town',
      stats: 'Retail Groceries & Stationery Stockist',
      rating: 5,
      review:
        'We stock their food grains, cooking oils, and parcel materials in our store. Communication on WhatsApp is very responsive. Even if we need quick extra bags or parcel covers, their local team supports us immediately.',
    },
    {
      id: 4,
      name: 'Chef Anthony Doss',
      role: 'Executive Chef, Coastal Spices Kitchen',
      category: 'hotel',
      location: 'Melmaruvathur Corridor',
      stats: 'Regular Food Service Supply',
      rating: 5,
      review:
        'Their tomato ketchup, dark soya sauce, vinegar, and chilli powder are restaurant grade. Our cloud kitchen depends on their aluminium 750ml containers and bio cups for daily takeout orders. Highly recommended.',
    },
  ];

  const filtered = filter === 'all' ? REVIEWS : REVIEWS.filter((r) => r.category === filter);

  return (
    <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
          Client Feedback
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Trusted by Kitchens & Businesses
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          What caterers, restaurants, and shop owners in Chengalpattu district say about our supply service.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-full overflow-x-auto shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Partners
          </button>
          <button
            onClick={() => setFilter('caterer')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'caterer'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Wedding Caterers
          </button>
          <button
            onClick={() => setFilter('hotel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'hotel'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Hotels & Kitchens
          </button>
          <button
            onClick={() => setFilter('store')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'store'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Retail Provisioners
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-800">
                  {item.stats}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{item.review}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.role}</div>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 font-medium text-right">
                📍 {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
