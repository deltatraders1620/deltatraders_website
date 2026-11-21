import React, { useState } from 'react';
import { TrendingUp, Calculator, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { PRODUCTS } from '../data/products';

export default function SavingsCalculator({ onGoToContact }) {
  const { addToCart, setIsDrawerOpen } = useRfq();
  const [buyerType, setBuyerType] = useState('hotel');
  const [selectedProductId, setSelectedProductId] = useState('ponni-deluxe');
  const [quantity, setQuantity] = useState(25);

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const marketTotal = currentProduct.marketPrice * quantity;
  const deltaTotal = currentProduct.deltaPrice * quantity;
  const savings = marketTotal - deltaTotal;
  const savingsPct = Math.round((savings / marketTotal) * 100);
  const totalWeightKg = quantity * currentProduct.weightKg;
  const totalWeightTons = (totalWeightKg / 1000).toFixed(2);

  // Annualized savings based on buyer persona
  const annualSavings = buyerType === 'hotel' 
    ? savings * 12 
    : buyerType === 'store' 
      ? savings * 24 
      : savings * 6;

  const handleAddAndOpen = () => {
    addToCart(currentProduct, quantity);
    setIsDrawerOpen(true);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-harvest-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-harvest-700 bg-harvest-100 px-3 py-1 rounded-full border border-harvest-200">
            Interactive Cost Auditor
          </span>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900">
            Calculate Your Mill-Direct Wholesale Advantage
          </h2>
          <p className="text-xs text-slate-600">
            Compare live mandi broker rates with Delta Traders direct factory procurement.
          </p>
        </div>

        {/* Buyer Persona Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
            <button
              onClick={() => { setBuyerType('hotel'); setQuantity(30); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                buyerType === 'hotel'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏢 Hotel / Cloud Kitchen
            </button>
            <button
              onClick={() => { setBuyerType('wedding'); setQuantity(40); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                buyerType === 'wedding'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              💍 Wedding / Event Caterer
            </button>
            <button
              onClick={() => { setBuyerType('store'); setQuantity(50); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                buyerType === 'store'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏪 Retail Supermarket
            </button>
          </div>
        </div>

        {/* Interactive Controls & Output Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                1. Select Staple Commodity
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.unitWeight}) — ₹{p.deltaPrice} vs Mandi ₹{p.marketPrice}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase text-slate-700">
                  2. Lot Volume Requirement
                </span>
                <span className="text-sm font-extrabold text-brand-800 bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">
                  {quantity} Units ({currentProduct.unitWeight})
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>5 units</span>
                <span>50 units</span>
                <span>100 units</span>
                <span>150+ units</span>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-500">Gross Weight</div>
                <div className="text-sm font-extrabold text-slate-800">
                  {totalWeightKg.toLocaleString('en-IN')} kg
                </div>
                <div className="text-[10px] text-slate-400">~{totalWeightTons} Tons</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-500">Dispatched Via</div>
                <div className="text-sm font-extrabold text-brand-700">
                  {quantity >= 40 ? 'Heavy Truck' : 'Dedicated Fleet'}
                </div>
                <div className="text-[10px] text-cyan-600 font-semibold">5:30 AM Slot</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-500">Weighment QC</div>
                <div className="text-sm font-extrabold text-slate-800">100% Calibrated</div>
                <div className="text-[10px] text-slate-400">Printout Slip</div>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 text-white p-7 rounded-3xl shadow-xl space-y-5 border border-brand-800">
            <div className="flex items-center justify-between border-b border-brand-800 pb-3">
              <div className="flex items-center gap-2 text-harvest-400 text-xs font-bold uppercase">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Audited Cost Comparison</span>
              </div>
              <span className="text-[10px] bg-brand-800/80 px-2 py-0.5 rounded-full text-slate-300">
                Live Factory Rates
              </span>
            </div>

            {/* Price Stack */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span>Standard Mandi Broker Cost:</span>
                <span className="line-through text-slate-400 font-mono text-sm">
                  ₹{marketTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs uppercase font-bold text-harvest-300">Delta Mill Wholesale:</span>
                  <div className="text-[11px] text-slate-400 font-normal">Direct mill invoice price</div>
                </div>
                <span className="text-3xl font-extrabold text-white font-mono">
                  ₹{deltaTotal.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Savings Highlight */}
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-1.5">
                <div className="flex justify-between items-center text-xs text-cyan-300 font-bold">
                  <span>Net Savings on This Lot:</span>
                  <span className="text-base font-extrabold text-amber-400">
                    ₹{savings.toLocaleString('en-IN')} ({savingsPct}%)
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>Projected Annual Savings:</span>
                  <span className="font-bold text-emerald-400">
                    ₹{annualSavings.toLocaleString('en-IN')} / year
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleAddAndOpen}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <span>Add {quantity} Lots to Quote Basket</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Includes tamper-evident packing and digital weighbridge slip.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
