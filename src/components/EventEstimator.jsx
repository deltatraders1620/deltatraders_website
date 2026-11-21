import React, { useState } from 'react';
import { ChefHat, Users, Check, ShoppingBag, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function EventEstimator() {
  const { addToCart, setIsDrawerOpen } = useRfq();
  const [guests, setGuests] = useState(600);
  const [mealType, setMealType] = useState('traditional');
  const [addedAll, setAddedAll] = useState(false);

  // Benchmarking calculation factors per guest based on caterers' commercial metrics
  const multiplier = mealType === 'traditional' ? 1.0 : mealType === 'biryani' ? 1.15 : 0.85;

  const riceKg = Math.round(guests * 0.22 * multiplier);
  const riceBags = Math.ceil(riceKg / 25);

  const dalKg = Math.round(guests * 0.08 * multiplier);
  const dalBags = Math.ceil(dalKg / 50);

  const oilLtr = Math.round(guests * 0.09 * multiplier);
  const oilTins = Math.ceil(oilLtr / 15);

  const sugarKg = Math.round(guests * 0.07 * multiplier);
  const sugarBags = Math.ceil(sugarKg / 50);

  const cashewKg = Math.round(guests * 0.015 * multiplier);
  const cashewTins = Math.ceil(cashewKg / 10);

  const spicesKg = Math.round(guests * 0.02 * multiplier);

  const estTotalCost =
    riceBags * 1450 +
    dalBags * 6200 +
    oilTins * 1950 +
    sugarBags * 2050 +
    cashewTins * 7450;

  const handleAddAllToQuote = () => {
    addToCart({
      id: 'ponni-deluxe',
      name: mealType === 'biryani' ? 'Royal Aged 1121 Basmati Rice' : 'Deluxe Ponni Boiled Rice',
      unitWeight: '25kg Bag',
      weightKg: 25,
      deltaPrice: mealType === 'biryani' ? 2280 : 1450,
      marketPrice: mealType === 'biryani' ? 2850 : 1820,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    }, riceBags);

    addToCart({
      id: 'toor-dal-first',
      name: 'First-Quality Polished Toor Dal',
      unitWeight: '50kg Bag',
      weightKg: 50,
      deltaPrice: 6200,
      marketPrice: 7650,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    }, dalBags);

    addToCart({
      id: 'sunflower-oil-tin',
      name: 'Refined Sunflower Cooking Oil',
      unitWeight: '15L Sealed Tin',
      weightKg: 14,
      deltaPrice: 1950,
      marketPrice: 2380,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    }, oilTins);

    addToCart({
      id: 'cashews-w240',
      name: 'Banquet King Cashew Nuts (W240 Bold)',
      unitWeight: '10kg Tin',
      weightKg: 10,
      deltaPrice: 7450,
      marketPrice: 9200,
      image: 'https://images.unsplash.com/photo-1536591375315-1b8368755776?auto=format&fit=crop&w=600&q=80',
    }, cashewTins);

    setAddedAll(true);
    setTimeout(() => {
      setAddedAll(false);
      setIsDrawerOpen(true);
    }, 800);
  };

  const handleWhatsAppShare = () => {
    const mealLabel =
      mealType === 'traditional'
        ? 'Grand South Indian Feast'
        : mealType === 'biryani'
        ? 'Royal Dum Biryani Banquet'
        : 'Tiffin & Breakfast Feasts';

    const text = encodeURIComponent(
      `*DELTA TRADERS — CATERING PROVISION ESTIMATE*\n` +
      `Menu Style: ${mealLabel}\n` +
      `Guest Headcount: ${guests} guests\n` +
      `------------------------------------\n` +
      `• Rice: ${riceKg} kg (${riceBags} bags of 25kg)\n` +
      `• Dal/Pulses: ${dalKg} kg (${dalBags} bags of 50kg)\n` +
      `• Cooking Oil: ${oilLtr} L (${oilTins} tins of 15L)\n` +
      `• Sugar/Jaggery: ${sugarKg} kg (${sugarBags} bags of 50kg)\n` +
      `• Cashews/Dry Fruits: ${cashewKg} kg (${cashewTins} tins of 10kg)\n` +
      `• Assorted Spices: ~${spicesKg} kg\n` +
      `------------------------------------\n` +
      `Estimated Direct Wholesale Rate: ~₹${estTotalCost.toLocaleString('en-IN')}\n` +
      `Please provide formal quotation and early morning wedding hall delivery confirmation.`
    );
    window.open(`https://wa.me/919087752120?text=${text}`, '_blank');
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-harvest-500/20 border border-harvest-400/30 text-harvest-300 text-xs font-bold uppercase">
            <ChefHat className="w-4 h-4 text-harvest-400" />
            <span>Commercial Head Cook & Caterer Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
            Grand Event & Wedding Provision Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Tailored to head cooks (*Samayal Masters*) and banquet managers. Calibrates raw grain requirements with emergency buffer lots.
          </p>
        </div>

        {/* Meal Style Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <button
            onClick={() => setMealType('traditional')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              mealType === 'traditional'
                ? 'bg-brand-700/80 border-harvest-400 shadow-lg text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="text-xs uppercase font-extrabold text-harvest-300">Option 01</div>
            <div className="text-sm font-bold text-white mt-1">Traditional Banana Leaf Feast</div>
            <div className="text-[11px] text-slate-300 mt-1">Ponni boiled, sambar toor dal, ghee & payasam</div>
          </button>

          <button
            onClick={() => setMealType('biryani')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              mealType === 'biryani'
                ? 'bg-brand-700/80 border-harvest-400 shadow-lg text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="text-xs uppercase font-extrabold text-harvest-300">Option 02</div>
            <div className="text-sm font-bold text-white mt-1">Royal Dum Biryani Banquet</div>
            <div className="text-[11px] text-slate-300 mt-1">Aged 1121 Basmati / Seeraga Samba, spices & ghee</div>
          </button>

          <button
            onClick={() => setMealType('tiffin')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              mealType === 'tiffin'
                ? 'bg-brand-700/80 border-harvest-400 shadow-lg text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="text-xs uppercase font-extrabold text-harvest-300">Option 03</div>
            <div className="text-sm font-bold text-white mt-1">Breakfast & Tiffin Feasts</div>
            <div className="text-[11px] text-slate-300 mt-1">Idli rice, high-ferment urad gota, oil & sooji</div>
          </button>
        </div>

        {/* Guest Slider */}
        <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-harvest-400" />
              <span className="text-sm font-bold text-white">Expected Guest Attendance:</span>
            </div>
            <div className="text-2xl font-extrabold text-harvest-400 font-mono">
              {guests.toLocaleString('en-IN')} Guests
            </div>
          </div>

          <input
            type="range"
            min="100"
            max="3000"
            step="50"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-harvest-400"
          />

          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>100 Small Gathering</span>
            <span>500 Wedding Hall</span>
            <span>1,500 Grand Reception</span>
            <span>3,000+ Mega Feast</span>
          </div>
        </div>

        {/* Estimated Provisions Breakdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          
          <div className="bg-slate-800/70 rounded-2xl p-4 border border-cyan-500/30 flex flex-col justify-between">
            <div className="text-[10px] uppercase font-bold text-cyan-400">Rice Required</div>
            <div className="my-2">
              <div className="text-xl font-extrabold text-white font-mono">{riceKg} kg</div>
              <div className="text-xs text-cyan-300 font-semibold">{riceBags} Bags (25kg)</div>
            </div>
            <div className="text-[10px] text-slate-400">Sortex Cleaned</div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl p-4 border border-amber-500/30 flex flex-col justify-between">
            <div className="text-[10px] uppercase font-bold text-amber-400">Pulses & Dals</div>
            <div className="my-2">
              <div className="text-xl font-extrabold text-white font-mono">{dalKg} kg</div>
              <div className="text-xs text-amber-300 font-semibold">{dalBags} Bags (50kg)</div>
            </div>
            <div className="text-[10px] text-slate-400">Toor + Urad + Moong</div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl p-4 border border-yellow-500/30 flex flex-col justify-between">
            <div className="text-[10px] uppercase font-bold text-yellow-400">Edible Cooking Oil</div>
            <div className="my-2">
              <div className="text-xl font-extrabold text-white font-mono">{oilLtr} Ltr</div>
              <div className="text-xs text-yellow-300 font-semibold">{oilTins} Tins (15L)</div>
            </div>
            <div className="text-[10px] text-slate-400">Sealed Factory Tins</div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl p-4 border border-sky-500/30 flex flex-col justify-between">
            <div className="text-[10px] uppercase font-bold text-sky-400">Sugar & Jaggery</div>
            <div className="my-2">
              <div className="text-xl font-extrabold text-white font-mono">{sugarKg} kg</div>
              <div className="text-xs text-sky-300 font-semibold">{sugarBags} Bags (50kg)</div>
            </div>
            <div className="text-[10px] text-slate-400">M-30 Sparkling White</div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl p-4 border border-emerald-500/30 flex flex-col justify-between col-span-2 sm:col-span-1">
            <div className="text-[10px] uppercase font-bold text-emerald-400">Banquet Cashews</div>
            <div className="my-2">
              <div className="text-xl font-extrabold text-white font-mono">{cashewKg} kg</div>
              <div className="text-xs text-emerald-300 font-semibold">{cashewTins} Tins (10kg)</div>
            </div>
            <div className="text-[10px] text-slate-400">W240 Jumbo Bold</div>
          </div>

        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700">
          <div>
            <div className="text-xs text-slate-400">Estimated Direct Factory Provision Cost:</div>
            <div className="text-2xl font-extrabold text-cyan-300 font-mono">
              ~₹{estTotalCost.toLocaleString('en-IN')}
              <span className="text-xs text-emerald-400 font-sans font-semibold ml-2">
                (Saves ~₹{Math.round(estTotalCost * 0.22).toLocaleString('en-IN')} vs Mandi)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={handleAddAllToQuote}
              className={`flex-1 sm:flex-initial px-5 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] ${
                addedAll
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {addedAll ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{addedAll ? 'Added to Quote Basket!' : 'Add All to RFQ Basket'}</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Estimate to WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
