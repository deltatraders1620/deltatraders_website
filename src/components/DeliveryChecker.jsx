import React, { useState } from 'react';
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle2, PhoneCall, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function DeliveryChecker() {
  const [selectedZone, setSelectedZone] = useState('maduranthagam');

  const ZONES = {
    maduranthagam: {
      name: 'Maduranthagam & Immediate Vicinity',
      tamilName: 'மதுராந்தகம் & சுற்றுவட்டார பகுதிகள்',
      transit: 'Prompt Same-Day / Morning Dispatch (8:00 AM – 11:00 AM)',
      freeThreshold: 'Eligible for quick local deliveries and bulk lots',
      fleet: 'Local Logistics Vehicle & Two-Wheeler Quick Drop',
      cutoff: 'Order by 5:00 PM for next-morning delivery',
      hubs: ['Kadaperi', 'Erisairam Nagar', 'Maduranthagam Town', 'Maduranthagam Bus Stand', 'Vedanthangal Road', 'Kottur'],
    },
    south_corridor: {
      name: 'Melmaruvathur & Acharapakkam Highway Belt',
      tamilName: 'மேல்மருவத்தூர் & அச்சரப்பாக்கம்',
      transit: 'Scheduled Daily Fleet Route (7:00 AM – 10:00 AM)',
      freeThreshold: 'Institutional bulk bags & hotel carton orders',
      fleet: 'Covered Small Commercial Vehicle',
      cutoff: 'Confirm order by 6:00 PM for next-morning breakfast prep',
      hubs: ['Melmaruvathur Temple Corridor', 'Acharapakkam Town', 'Orathi', 'Vanniyanallur', 'NH-32 Highway Outlets'],
    },
    chengalpattu_central: {
      name: 'Chengalpattu Town & Padalam Corridor',
      tamilName: 'செங்கல்பட்டு நகரம் & படாளம்',
      transit: 'Daily Morning Dispatch (8:30 AM – 1:00 PM)',
      freeThreshold: 'Wholesale lot deliveries and catering supplies',
      fleet: 'Dedicated TATA Ace / Commercial Hauler',
      cutoff: 'Prior-day scheduling for guaranteed slot',
      hubs: ['Chengalpattu Junction', 'Padalam Sugar Mill Road', 'G.S.T. Road', 'Rattinamangalam', 'Melrosapuram'],
    },
    industrial_north: {
      name: 'Maraimalai Nagar, Mahindra World City & Guduvanchery',
      tamilName: 'மறைமலைநகர் & மஹிந்திரா வேர்ல்ட் சிட்டி',
      transit: 'Regular B2B Commercial Route (Twice Weekly / Recurring)',
      freeThreshold: 'Bulk institutional messes, corporate canteens & supermarkets',
      fleet: 'Multi-Ton Commercial Freight',
      cutoff: 'Scheduled weekly contract routes',
      hubs: ['Mahindra World City Canteens', 'Maraimalai Nagar Industrial Estate', 'Singaperumal Koil', 'Guduvanchery'],
    },
  };

  const current = ZONES[selectedZone];

  return (
    <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
          Chengalpattu District Logistics
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Delivery Areas & Schedule Checker
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Check delivery schedules, servicing hubs, and dispatch windows across Maduranthagam and Chengalpattu district.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        
        {/* Zone Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {Object.entries(ZONES).map(([key, zone]) => {
            const isSelected = selectedZone === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedZone(key)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-navy-950 dark:bg-slate-800 text-white border-cyan-500 shadow-md ring-2 ring-cyan-500/20'
                    : 'bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-500/40'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Zone</div>
                <div className="text-xs font-bold mt-0.5 line-clamp-1">{zone.name}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1">{zone.tamilName}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Details Card */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-3">
            <div>
              <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Active Delivery Corridor
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                {current.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span><strong>Window:</strong> {current.transit}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Truck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span><strong>Vehicle:</strong> {current.fleet}</span>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Localities Served in this Zone:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.hubs.map((hub, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    📍 {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3 text-center">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Confirm Delivery to Your Area
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Need delivery to a specific village, marriage hall, or resort near Maduranthagam?
            </p>
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(`Hi Delta Traders, I want to check delivery availability and timeline for: ${current.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-1.5 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Delivery Desk</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
