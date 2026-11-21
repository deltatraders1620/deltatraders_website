import React, { useState } from 'react';
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';

export default function DeliveryChecker() {
  const [selectedZone, setSelectedZone] = useState('chennai');

  const ZONES = {
    chennai: {
      name: 'Chennai Central & Koyambedu Corridor',
      transit: 'Direct Same-Morning Dispatch (5:30 AM – 8:00 AM)',
      freeThreshold: '15 Bags or 5 Cooking Oil Tins',
      fleet: 'Dedicated TATA Ace & 407 Fleet',
      cutoff: 'Order before 8:00 PM for next-morning 6:00 AM kitchen delivery',
      hubs: ['Koyambedu', 'Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery', 'Mylapore', 'Broadway'],
    },
    south: {
      name: 'Tambaram, OMR & Chengalpattu Industrial Belt',
      transit: 'Daily Morning Dispatch (6:30 AM – 9:30 AM)',
      freeThreshold: '20 Bags or 8 Oil Tins',
      fleet: 'Eicher 14ft Covered Truck',
      cutoff: 'Order before 7:30 PM for morning breakfast service delivery',
      hubs: ['Tambaram', 'Perungalathur', 'Sholinganallur OMR', 'Kelambakkam', 'Guduvanchery', 'Maraimalai Nagar'],
    },
    west: {
      name: 'Kanchipuram & Sriperumbudur Corridor',
      transit: 'Daily Regular Supply (7:00 AM – 10:30 AM)',
      freeThreshold: '25 Bags',
      fleet: 'Multi-Ton Commercial Hauler',
      cutoff: 'Order before 7:00 PM',
      hubs: ['Sriperumbudur Industrial Hub', 'Kanchipuram Silk Town', 'Walajabad', 'Sunguvarchatram'],
    },
    north: {
      name: 'Tiruvallur, Ambattur & Redhills Belt',
      transit: 'Direct Depot Transfer (6:00 AM – 8:30 AM)',
      freeThreshold: '20 Bags',
      fleet: 'Covered Fleet with Weighment Slips',
      cutoff: 'Order before 8:00 PM',
      hubs: ['Ambattur OT', 'Avadi', 'Poonamallee', 'Redhills', 'Tiruvallur Town'],
    },
    upcountry: {
      name: 'Vellore, Ranipet, Cuddalore & Pondicherry',
      transit: 'Scheduled 24-Hour Bulk Lorry Load',
      freeThreshold: '50+ Bags (Full Pallet / Tempo Load)',
      fleet: 'Full 10-Ton Truck Freight',
      cutoff: '48-hour advance event scheduling',
      hubs: ['Vellore Katpadi', 'Ranipet SIPCOT', 'Pondicherry Town', 'Cuddalore Port Road'],
    },
  };

  const current = ZONES[selectedZone];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Fleet Logistics & Depot Coverage
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900">
          Interactive Delivery Hub & Dispatch Slot Checker
        </h2>
        <p className="text-xs text-slate-600">
          Our morning dispatch fleet leaves at 5:30 AM so wedding halls and hotel kitchens receive unmixed factory lots on time.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
        {/* Hub Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedZone('chennai')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedZone === 'chennai'
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📍 Chennai City Center
          </button>
          <button
            onClick={() => setSelectedZone('south')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedZone === 'south'
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📍 Tambaram & OMR Belt
          </button>
          <button
            onClick={() => setSelectedZone('west')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedZone === 'west'
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📍 Kanchipuram & Sriperumbudur
          </button>
          <button
            onClick={() => setSelectedZone('north')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedZone === 'north'
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📍 Tiruvallur & Ambattur
          </button>
          <button
            onClick={() => setSelectedZone('upcountry')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedZone === 'upcountry'
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📍 Vellore / Pondicherry Load
          </button>
        </div>

        {/* Selected Hub Details Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-brand-800">
              <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
              <h3 className="text-xl font-bold font-serif text-slate-900">{current.name}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Dispatch Window</div>
                <div className="font-bold text-brand-900 mt-0.5">{current.transit}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Free Delivery Minimum</div>
                <div className="font-bold text-cyan-700 mt-0.5">{current.freeThreshold}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Assigned Fleet Vehicle</div>
                <div className="font-bold text-slate-800 mt-0.5">{current.fleet}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Order Cutoff Time</div>
                <div className="font-bold text-harvest-700 mt-0.5">{current.cutoff}</div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-bold text-slate-600 uppercase">Primary Coverage Points:</div>
              <div className="flex flex-wrap gap-1.5">
                {current.hubs.map((hub, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium"
                  >
                    ✓ {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 space-y-3 text-center shadow-sm">
            <Truck className="w-10 h-10 text-brand-600 mx-auto" />
            <h4 className="font-bold text-slate-900 text-sm">Need a Same-Day Morning Truck?</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Call our Koyambedu dispatch manager to check direct tempo availability for your kitchen.
            </p>
            <a
              href="tel:+919087752120"
              className="w-full py-2.5 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Dispatch Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
