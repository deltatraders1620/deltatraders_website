import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Award, Scale, Sparkles } from 'lucide-react';

export default function QualityComparison() {
  const [activeTab, setActiveTab] = useState('grain');

  const COMPARISONS = {
    grain: {
      title: 'Sortex Grain Integrity & Broken Grain Ratio',
      subtitle: 'Why commercial chefs choose Delta Traders for consistent grain elongation.',
      delta: {
        heading: 'Delta Traders Direct Mill Standard',
        points: [
          'Under 0.5% broken grains through Japanese Buhler Sortex optical graders.',
          'Zero yellow/black diseased grains or unhusked paddy kernels.',
          'Aged for minimum 12 months for 2.5x volume elongation upon cooking.',
          'Machine-destoned with zero residual silica or grit.',
        ],
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        badge: '100% Sortex Cleaned',
      },
      traditional: {
        heading: 'Traditional Mandi / Broker Mixed Lots',
        points: [
          '8% to 14% broken grains mixed in to reduce merchant wholesale cost.',
          'Paddy husks and discolored kernels require manual hand-sorting.',
          'Freshly harvested moist paddy that turns soggy and sticky in biryani.',
          'Residual dust and small stones ruin kitchen reputation.',
        ],
        badge: 'Unsorted Mixed Batches',
      },
    },
    weight: {
      title: 'Electronic Weighbridge Calibration Guarantee',
      subtitle: 'Eliminating the chronic 1.5kg-per-bag shortage prevalent in wholesale mandis.',
      delta: {
        heading: 'Computerized Weighbridge Certification',
        points: [
          'Every 25kg, 30kg, and 50kg bag is weighed on certified digital sensors.',
          'Printed computerized weighment slip attached to the invoice.',
          'Zero moisture inflation or artificial water spraying.',
          '100% money-back or bag replacement guarantee on weight mismatch.',
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        badge: 'Tare-Calibrated Digital Slip',
      },
      traditional: {
        heading: 'Typical Broker / Sub-Dealer Weighment',
        points: [
          'Frequent 1.5kg to 2kg shortage per 50kg bag due to manual balance error.',
          'Jute bag tare weight often counted as commodity weight.',
          'Water misted on rice and dal to artificially inflate scale weight.',
          'No dispute resolution once lorry departs wholesale mandi.',
        ],
        badge: 'Manual Counter-Weight Scales',
      },
    },
    packing: {
      title: 'Tamper-Evident Food-Grade Bagging & Tins',
      subtitle: 'Preserving freshness and preventing transit contamination.',
      delta: {
        heading: 'Machine-Stitched Virgin Polymer Bags & Sealed Tins',
        points: [
          'Food-grade virgin HDPE/BOPP laminated moisture barrier sacks.',
          'Color-coded serialized security seal on high-value basmati & cashew crates.',
          '15L cooking oils delivered in factory-sealed virgin tin containers.',
          'Pest-free dry depot warehousing with weekly fumigation certification.',
        ],
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
        badge: 'Moisture Barrier BOPP Packaging',
      },
      traditional: {
        heading: 'Second-Hand Recycled Sacks & Refilled Tins',
        points: [
          'Re-stitched second-hand fertilizer or chemical sacks prone to tearing.',
          'Oil tins often refilled from loose tanker barrels without seal integrity.',
          'Exposure to rain, humidity, and damp floor storage during multi-mandi transit.',
          'Weevil infestation within 7 days of delivery.',
        ],
        badge: 'Recycled Jute / Loose Barrels',
      },
    },
  };

  const cur = COMPARISONS[activeTab];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Factory QC Lab Standards
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900">
          Direct Mill Standards vs Mandi Broker Middlemen
        </h2>
        <p className="text-xs text-slate-600">
          See the tangible differences in grain purity, weighment honesty, and packaging durability.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('grain')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'grain'
                ? 'bg-navy-900 text-cyan-300 shadow-md border border-cyan-500/30'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>01. Grain Purity & Sortex Grading</span>
          </button>
          <button
            onClick={() => setActiveTab('weight')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'weight'
                ? 'bg-navy-900 text-amber-300 shadow-md border border-amber-500/30'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>02. Digital Weighment Slip</span>
          </button>
          <button
            onClick={() => setActiveTab('packing')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'packing'
                ? 'bg-navy-900 text-emerald-300 shadow-md border border-emerald-500/30'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>03. Tamper-Proof Packaging</span>
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Delta Traders Card */}
        <div className="rounded-3xl border-2 border-brand-500 bg-white p-7 shadow-xl space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase bg-brand-50 text-brand-800 border border-brand-200 px-3 py-1 rounded-full">
                {cur.delta.badge}
              </span>
              <span className="text-cyan-600 text-xs font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" /> Guaranteed Quality
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-brand-950">
              {cur.delta.heading}
            </h3>

            <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src={cur.delta.image}
                alt="Delta Traders Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                ✓ Laboratory Grade Verified
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {cur.delta.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-brand-800 font-bold">
            <span>Result: High Kitchen Yield & Zero Waste</span>
            <span className="text-amber-400 font-extrabold tracking-widest text-sm">★★★★★</span>
          </div>
        </div>

        {/* Traditional Broker Card */}
        <div className="rounded-3xl border border-red-200 bg-red-50/30 p-7 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase bg-red-100 text-red-800 border border-red-200 px-3 py-1 rounded-full">
                {cur.traditional.badge}
              </span>
              <span className="text-red-600 text-xs font-bold flex items-center gap-1">
                <XCircle className="w-4 h-4" /> Broker Markup Risk
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-slate-900">
              {cur.traditional.heading}
            </h3>

            <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-200 relative flex items-center justify-center text-slate-400 p-4 text-center">
              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-600">Middleman Supply Chain</div>
                <div className="text-xs text-slate-500">4 Intermediary Hand-offs • No Weighment Slips</div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {cur.traditional.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-red-100 flex items-center justify-between text-xs text-red-700 font-bold">
            <span>Result: Inflated Cost & Cook Dissatisfaction</span>
            <span className="text-slate-400">✕ Avoidable Loss</span>
          </div>
        </div>

      </div>
    </section>
  );
}
