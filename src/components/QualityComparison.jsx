import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Award, Scale, Sparkles } from 'lucide-react';

export default function QualityComparison() {
  const [activeTab, setActiveTab] = useState('grain');

  const COMPARISONS = {
    grain: {
      title: 'Sortex Optical Grain Grading & Yield',
      subtitle: 'Why commercial chefs and hotels choose Delta Traders for consistent culinary yield.',
      delta: {
        heading: 'Delta Traders Direct Standard',
        points: [
          'High purity optical grading removing discolored kernels and stones.',
          'Zero yellow/black diseased grains or unhusked paddy kernels.',
          'Consistent grain elongation upon cooking for tender rotis and fluffy rice.',
          'Cleaned, dry food staples with verified moisture limits.',
        ],
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        badge: 'Graded & Cleaned Lots',
      },
      traditional: {
        heading: 'Typical Mandi / Mixed Broker Lots',
        points: [
          'Unscreened broken grain mixed in to dilute wholesale cost.',
          'Paddy husks and discolored kernels requiring manual cleaning.',
          'Excessive moisture that causes grain clumping and mould risk.',
          'Residual grit and dust leading to culinary batch failure.',
        ],
        badge: 'Unsorted Mixed Batches',
      },
    },
    weight: {
      title: 'Digital Weighment & Tare Integrity',
      subtitle: 'Eliminating the chronic tare shortage common in roadside wholesale mandis.',
      delta: {
        heading: 'Accurate Weighment Certification',
        points: [
          'Every bag and container lot is verified on calibrated digital scales.',
          'Official GST tax invoice itemizing exact net weights and pack quantities.',
          'Zero artificial water spraying or moisture weight cheating.',
          'Prompt resolution and exchange on any dispatch discrepancy.',
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        badge: '100% Net Weight Verified',
      },
      traditional: {
        heading: 'Typical Broker Weighment Practice',
        points: [
          'Frequent shortage per 50kg sack due to tare miscalculations.',
          'Heavy burlap bag weight counted as commodity weight.',
          'Water misted on rice and pulses to artificially increase sack mass.',
          'No dispute resolution once lorry departs wholesale trading floor.',
        ],
        badge: 'Manual Beam Balances',
      },
    },
    packaging: {
      title: 'Food-Grade Containers & Parcel Protection',
      subtitle: 'Heavy-gauge aluminium containers and food-grade packaging materials.',
      delta: {
        heading: 'Delta Traders Packaging Grade',
        points: [
          'Rigid aluminium containers (250ml, 450ml, 750ml) with snap-fit gray lids.',
          'Bio-compostable eco cups resistant to hot liquids and soups.',
          'Heavy-gauge silver rolls and foil pouches that prevent grease leakage.',
          'Moisture-barrier bag stitching protecting dry grains in humid weather.',
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        badge: 'Food Safe Certified',
      },
      traditional: {
        heading: 'Sub-Standard Packaging',
        points: [
          'Thin aluminium sheets that crush under parcel delivery transit.',
          'Loose-fitting container lids causing gravy and sambar leakage.',
          'Low-micron plastic bags prone to tearing and transit contamination.',
          'Inconsistent cup wall thickness that collapses with hot beverages.',
        ],
        badge: 'Uncertified Flimsy Packaging',
      },
    },
  };

  const current = COMPARISONS[activeTab];

  return (
    <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
          Quality & Integrity
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Why Quality Standards Matter
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Compare our direct-sourced, calibrated food supplies and sturdy packaging with ordinary market alternatives.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-full overflow-x-auto shadow-sm">
          <button
            onClick={() => setActiveTab('grain')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'grain'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            🌾 Grain Purity & Sortex
          </button>
          <button
            onClick={() => setActiveTab('weight')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'weight'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ⚖️ Weighbridge Calibration
          </button>
          <button
            onClick={() => setActiveTab('packaging')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'packaging'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            📦 Food-Grade Packaging
          </button>
        </div>
      </div>

      {/* Two-Column Comparison Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Delta Traders Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-cyan-500/50 shadow-xl space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
              {current.delta.badge}
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>

          <div>
            <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
              {current.delta.heading}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {current.subtitle}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {current.delta.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Market Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 relative">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {current.traditional.badge}
            </span>
            <XCircle className="w-5 h-5 text-rose-400" />
          </div>

          <div>
            <h3 className="text-xl font-bold font-serif text-slate-700 dark:text-slate-300">
              {current.traditional.heading}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Common issues observed in speculative wholesale lots
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {current.traditional.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <XCircle className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
