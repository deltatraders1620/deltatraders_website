import React, { useState } from 'react';
import { Calendar, Building, Store, ChefHat, Users, MessageSquare, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import EventEstimator from '../components/EventEstimator';
import { useRfq } from '../context/RfqContext';

export default function Services({ setActivePage }) {
  const { setIsDrawerOpen } = useRfq();
  const [selectedService, setSelectedService] = useState('wedding');

  const SERVICES_DATA = {
    wedding: {
      id: 'wedding',
      title: 'Wedding & Grand Banquet Provisioning',
      tag: 'Service 01 • Event Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      desc: 'Complete bulk grocery packages calibrated directly with your Head Cook (Samayal Master). From aged aromatic Basmati and Deluxe Ponni to pure cold-pressed oils, premium cashews, and Salem turmeric.',
      features: [
        'Direct consultation with your Head Cook on grain elongation and oil absorption.',
        'Zero-risk 48-hour return policy on intact, unopened bags after the wedding.',
        'Emergency midnight buffer dispatches for unexpected guest surges.',
        'Delivered straight to the marriage hall loading bay before 6:00 AM.',
      ],
      packages: 'Deluxe Ponni (25kg), Royal 1121 Basmati, First Toor Dal, 15L Sunflower Tins, W240 Cashews, Guntur Chilli.',
      idealFor: 'Marriage Halls, Banquet Planners, Brahmin & Traditional Caterers, Corporate Galas.',
    },
    hotel: {
      id: 'hotel',
      title: 'Hotel, Restaurant & Cloud Kitchen Recurring Supply',
      tag: 'Service 02 • Institutional Supply',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      desc: 'Scheduled recurring deliveries (daily, bi-weekly, or weekly) designed for high-turnover commercial hotel kitchens. Lock in monthly prices against volatile mandi price spikes.',
      features: [
        'Monthly fixed-rate contracts to keep kitchen food cost percentages predictable.',
        'High cooking batter yield with Sortex-cleaned Urad Dal and aged raw rice.',
        'Stamped digital weighbridge slips attached to every delivery challan.',
        'Early morning 5:30 AM dispatches so breakfast preparation is never delayed.',
      ],
      packages: '50kg Ponni Boiled, 30kg White Urad Gota, 15L Cooking Oil Tins, 50kg Sugar, Whole Spices.',
      idealFor: '3-Star & 5-Star Hotels, Multi-Outlet Restaurant Chains, Messes, Cloud Kitchens.',
    },
    retail: {
      id: 'retail',
      title: 'Provision Store & Supermarket Dealer Lots',
      tag: 'Service 03 • Wholesale Reselling',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      desc: 'Restock your retail supermarket with machine-stitched, moisture-barrier full bags (25kg, 30kg, 50kg) at true factory wholesale rates for superior resale margins.',
      features: [
        'Sub-dealer wholesale pricing enabling ₹150–₹280 extra profit margin per bag.',
        'Tamper-evident food-grade BOPP laminated bags with attractive packaging.',
        'Fast 24-hour depot restock turnaround across Chennai and surrounding districts.',
        'Unloading labor assistance provided directly into your storeroom.',
      ],
      packages: '25kg Ponni Bags, 30kg Dals, 15L Oil Tins, 50kg Cane Sugar, 10kg Spice Sacks.',
      idealFor: 'Departmental Stores, Supermarkets, Kirana Merchants, Provision Retailers.',
    },
    charity: {
      id: 'charity',
      title: 'Temple Feasts & Charitable Annadhanam Supplies',
      tag: 'Service 04 • Community Kitchens',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
      desc: 'Special non-profit concessional bulk rates for religious trusts, temple festivals, and charitable community feeding kitchens serving thousands of devotees daily.',
      features: [
        'Subsidized institutional wholesale pricing on core rice and dal staples.',
        'Unadulterated pure wood-pressed gingelly oil and pure cow ghee.',
        'Large 50kg sacks with zero dust or foreign particles for rapid cooking.',
        'Prioritized festival delivery fleet scheduling.',
      ],
      packages: '50kg Raw & Boiled Rice, 50kg Toor & Moong Dal, Pure Gingelly Oil, Organic Jaggery.',
      idealFor: 'Temples, Trust Feeding Programs, Religious Festivals, Charity Organizations.',
    },
  };

  const active = SERVICES_DATA[selectedService];

  return (
    <div className="space-y-16 py-10">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            Commercial Wholesale Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-900 leading-tight">
            Tailored Grocery Provisioning for Banquets & Kitchens.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether catering a 3,000-guest wedding reception or managing supply for a 20-location hotel chain, Delta Traders delivers mill-direct agricultural staples with calibrated weighment honesty.
          </p>
        </div>
      </div>

      {/* Interactive Service Tab Switcher with Visual Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.values(SERVICES_DATA).map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(srv.id)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedService === srv.id
                  ? 'bg-navy-900 text-cyan-300 border-cyan-500/40 shadow-lg'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-300 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">
                {srv.tag}
              </div>
              <div className="text-sm font-bold mt-1 line-clamp-1">{srv.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Image Column */}
          <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[360px] bg-slate-900">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/20">
                {active.tag}
              </span>
              <h3 className="text-xl font-bold font-serif">{active.title}</h3>
            </div>
          </div>

          {/* Details & Features Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {active.desc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Operational Guarantees:
                </h4>
                <ul className="space-y-2.5">
                  {active.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-800">Core Lots Supplied: </strong>
                  <span className="text-slate-600">{active.packages}</span>
                </div>
                <div>
                  <strong className="text-slate-800">Typical Clients: </strong>
                  <span className="text-brand-800 font-semibold">{active.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 flex items-center gap-2"
              >
                <span>Request Custom Service Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider"
              >
                Open RFQ Cart
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* Embedded Interactive Event Estimator */}
      <EventEstimator />

    </div>
  );
}
