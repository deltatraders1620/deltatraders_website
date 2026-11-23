import React, { useState } from 'react';
import { ChefHat, Users, Check, ShoppingBag, ArrowRight, MessageCircle, Sparkles, Utensils, Package } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

export default function EventEstimator() {
  const { addToCart, setIsDrawerOpen } = useRfq();
  const [guests, setGuests] = useState(500);
  const [mealType, setMealType] = useState('traditional');
  const [addedAll, setAddedAll] = useState(false);

  // Benchmarking calculation factors per guest based on caterers' commercial metrics
  const multiplier = mealType === 'traditional' ? 1.0 : mealType === 'biryani' ? 1.2 : 0.85;

  const riceKg = Math.round(guests * 0.22 * multiplier);
  const riceBags = Math.max(1, Math.ceil(riceKg / 50));

  const dalKg = Math.round(guests * 0.08 * multiplier);
  const dalBags = Math.max(1, Math.ceil(dalKg / 50));

  const oilLtr = Math.round(guests * 0.09 * multiplier);
  const oilBoxes = Math.max(1, Math.ceil(oilLtr / 15));

  const sugarKg = Math.round(guests * 0.07 * multiplier);
  const sugarBags = Math.max(1, Math.ceil(sugarKg / 50));

  const cashewKg = Math.round(guests * 0.015 * multiplier);
  const containersCount = Math.round(guests * 1.1);
  const containerPacks = Math.ceil(containersCount / 100);

  const handleAddAllToQuote = () => {
    // Add calculated items to cart
    const sugarProd = PRODUCTS.find((p) => p.id === 'sugar') || {
      id: 'sugar',
      name: 'Refined White Sugar (50kg Bag)',
      unitWeight: '50kg Bag',
    };
    const maidaProd = PRODUCTS.find((p) => p.id === 'maida') || {
      id: 'maida',
      name: 'First-Grade Fine Maida (50kg Bag)',
      unitWeight: '50kg Bag',
    };
    const oilProd = PRODUCTS.find((p) => p.id === 'gold-winner-oil') || {
      id: 'gold-winner-oil',
      name: 'Gold Winner Refined Oil (1 Box)',
      unitWeight: '1 Box / Tin',
    };
    const containerProd = PRODUCTS.find((p) => p.id === 'alum-container-750') || {
      id: 'alum-container-750',
      name: 'Aluminium Food Container 750ml (100 pcs)',
      unitWeight: '100 pcs pack',
    };

    addToCart(sugarProd, sugarBags);
    addToCart(maidaProd, riceBags);
    addToCart(oilProd, oilBoxes);
    addToCart(containerProd, containerPacks);

    setAddedAll(true);
    setIsDrawerOpen(true);
    setTimeout(() => setAddedAll(false), 3000);
  };

  const handleWhatsAppInquiry = () => {
    let msg = `*DELTA TRADERS — EVENT PROVISION ESTIMATE*\n`;
    msg += `Guest Count: ${guests} Attendees\n`;
    msg += `Catering Style: ${mealType === 'traditional' ? 'South Indian Traditional Feast' : mealType === 'biryani' ? 'Grand Biryani Banquet' : 'Reception Tiffin Buffet'}\n`;
    msg += `------------------------------------\n`;
    msg += `*Estimated Supplies Required:*\n`;
    msg += `• Grains / Flour: ~${riceBags} Bags (50kg)\n`;
    msg += `• Lentils & Dals: ~${dalBags} Bags (50kg)\n`;
    msg += `• Cooking Oil: ~${oilBoxes} Boxes / Tins (15L)\n`;
    msg += `• Refined Sugar: ~${sugarBags} Bags (50kg)\n`;
    msg += `• Cashews & Spices: ~${cashewKg} kg\n`;
    msg += `• Parcel Containers: ~${containerPacks} Packs (${containersCount} pcs)\n`;
    msg += `------------------------------------\n`;
    msg += `Please confirm current wholesale quote and early morning delivery to our venue in Chengalpattu district.`;

    window.open(`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors duration-200">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
            Caterer & Event Tool
          </span>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
            Wedding & Event Provision Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Estimate bulk food staples, cooking oils, and packaging containers required based on your guest headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Left */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Guest Headcount
                </label>
                <span className="text-2xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>100 Small Gathering</span>
                <span>1,500 Wedding</span>
                <span>3,000+ Grand Banquet</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Feast / Menu Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMealType('traditional')}
                  className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                    mealType === 'traditional'
                      ? 'bg-navy-950 dark:bg-slate-800 text-white border-cyan-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Traditional Sadya
                </button>
                <button
                  type="button"
                  onClick={() => setMealType('biryani')}
                  className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                    mealType === 'biryani'
                      ? 'bg-navy-950 dark:bg-slate-800 text-white border-cyan-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Biryani Banquet
                </button>
                <button
                  type="button"
                  onClick={() => setMealType('tiffin')}
                  className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                    mealType === 'tiffin'
                      ? 'bg-navy-950 dark:bg-slate-800 text-white border-cyan-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Tiffin Buffet
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-xs space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Samayal Master Coordination</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Delta Traders coordinates directly with head cooks for exact grain brand preferences, oil varieties, and early morning dispatch at your wedding hall.
              </p>
            </div>

          </div>

          {/* Results Display Right */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Estimated Provisions & Packaging Pack Counts
              </h3>
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                Calibrated Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Rice / Flour</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{riceBags} Bags</div>
                <div className="text-[10px] text-slate-400">~{riceKg} kg (50kg sacks)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Toor / Urad Dal</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{dalBags} Bags</div>
                <div className="text-[10px] text-slate-400">~{dalKg} kg (50kg sacks)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Cooking Oil</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{oilBoxes} Boxes</div>
                <div className="text-[10px] text-slate-400">~{oilLtr} Litres (15L Tins)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Refined Sugar</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{sugarBags} Bags</div>
                <div className="text-[10px] text-slate-400">~{sugarKg} kg (50kg sacks)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Cashew & Spices</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">~{cashewKg} kg</div>
                <div className="text-[10px] text-slate-400">W240 Net & Cardamom</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Parcel Containers</div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{containerPacks} Packs</div>
                <div className="text-[10px] text-slate-400">{containersCount} pcs (750ml)</div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddAllToQuote}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedAll ? 'Added to Basket!' : 'Add Package to Basket'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
