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
      location: 'Kanchipuram & Chennai',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80',
      stats: 'Saved ₹1,28,000 on 3 Wedding Contracts',
      rating: 5,
      review:
        'As a head cook, nothing ruins my sleep more than mixed rice batches that turn mushy or oil that foams up. Delta Traders delivers pure Sortex Ponni and sealed 15L sunflower tins directly to the marriage hall by 5:45 AM. Their computerized weighment slip gave complete peace of mind.',
    },
    {
      id: 2,
      name: 'K. Rajasekaran',
      role: 'Procurement Director, Annapoorna Grand Residency',
      category: 'hotel',
      location: 'Chennai Central & Tambaram',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      stats: '4.5 Tons Monthly Bulk Supply',
      rating: 5,
      review:
        'We run two busy restaurants and a banquet hall. Mandi brokers kept fluctuating prices every 10 days. Delta Traders locked our monthly price for Toor Dal and Ponni rice. We cut our procurement bill by 18% immediately.',
    },
    {
      id: 3,
      name: 'M. Venkatesh',
      role: 'Proprietor, Sri Krishna Super Bazaar',
      category: 'store',
      location: 'Chengalpattu Town',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      stats: '120 Bags Restocked Bi-Weekly',
      rating: 5,
      review:
        'Reselling full 25kg bags to household customers requires competitive margin. Delta Traders factory rates allowed us to undercut local retailers by ₹150 per bag while expanding our retail margin. Their delivery tempo unloads directly into our storeroom.',
    },
    {
      id: 4,
      name: 'Chef Anthony Doss',
      role: 'Executive Chef, Coastal Spices Banquet',
      category: 'caterer',
      location: 'OMR Corridor',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80',
      stats: '2,500 Guests Mega Feast Supplied',
      rating: 5,
      review:
        'Their Royal 1121 Basmati grain elongation is extraordinary—each grain remains separate and fragrant. For our 2,500 guest corporate gala, their emergency buffer lot saved our second session. Outstanding service.',
    },
  ];

  const filtered = filter === 'all' ? REVIEWS : REVIEWS.filter((r) => r.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-harvest-700 bg-harvest-100 px-3 py-1 rounded-full border border-harvest-200 inline-block mb-2">
            Verified Commercial Buyers
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif">
            Trusted by Head Cooks, Hoteliers & Supermarkets
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Real feedback from commercial kitchens moving tons of commodities every month.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === 'all' ? 'bg-brand-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('caterer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === 'caterer' ? 'bg-brand-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Wedding Caterers
          </button>
          <button
            onClick={() => setFilter('hotel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === 'hotel' ? 'bg-brand-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Hotels & Restaurants
          </button>
          <button
            onClick={() => setFilter('store')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === 'store' ? 'bg-brand-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Supermarkets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-13 h-13 rounded-2xl object-cover border border-slate-200 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-brand-700 font-semibold">{item.role}</p>
                    <p className="text-[10px] text-slate-400">📍 {item.location}</p>
                  </div>
                </div>

                <div className="flex items-center text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-cyan-50/70 border border-cyan-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-brand-900">{item.stats}</span>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500" /> Verified Order
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{item.review}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
              Direct Mill Procurement Partner since 2024
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
