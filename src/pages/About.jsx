import React, { useState } from 'react';
import { ShieldAlert, Award, Truck, CheckCircle2, ShieldCheck, Scale, ArrowRight, Sparkles } from 'lucide-react';
import QualityComparison from '../components/QualityComparison';

export default function About() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      num: '01',
      title: 'Direct Mill Sourcing',
      desc: 'We bypass regional mandi brokers and commission agents entirely. We procure directly in 15-to-30 ton lorry lots from certified rice milling clusters in Thanjavur, dal processing hubs in Latur/Gulbarga, and edible oil refineries in Gujarat.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      badge: 'Farm & Mill Direct',
    },
    {
      num: '02',
      title: 'Buhler Sortex Optical Grading',
      desc: 'Before packing, all rice and lentils pass through multi-camera optical sorters to eject discolored kernels, black grains, unhusked paddy, and residual stones. Only clean, uniform grains enter our sacks.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      badge: '< 0.5% Broken Grain',
    },
    {
      num: '03',
      title: 'Digital Weighbridge Certification',
      desc: 'Every single 25kg, 30kg, and 50kg bag is calibrated on computer-linked electronic scales. A serialized weight slip is printed and attached to the tax invoice, guaranteeing zero tare theft.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      badge: '100% Weight Guarantee',
    },
    {
      num: '04',
      title: 'Moisture Barrier BOPP Bagging',
      desc: 'Packed in high-tensile, moisture-resistant laminated food-grade bags that prevent humidity ingress and weevil infestation, preserving crispness and aroma for commercial kitchens.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
      badge: 'Tamper Evident',
    },
    {
      num: '05',
      title: '5:30 AM Dawn Dispatch Fleet',
      desc: 'Our logistics fleet dispatches before city traffic begins. Marriage halls and hotel kitchens receive their raw ingredients early so chefs can begin breakfast preparation without delay.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      badge: 'Zero Delay Transit',
    },
  ];

  return (
    <div className="space-y-20 py-10">
      
      {/* Hero Header with Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Our Mill-Direct Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-900 leading-tight">
              Direct Mill Procurement. Fair Pricing. Honest Weighment.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Delta Traders was founded with a singular conviction: commercial kitchens, banquet masters, and retail store owners shouldn’t have to pay a 25% surcharge to four middlemen who never touch the crop.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Operating out of our centralized trade depot in the Koyambedu Wholesale Corridor, we supply premier agricultural food staples directly from manufacturing mills with calibrated digital accuracy.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-700 font-bold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>GST Registered: 33AAACD1234F1Z9</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>FSSAI Lic: 12423008000451</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                alt="Direct agricultural procurement"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-300 bg-black/60 px-2.5 py-1 rounded">
                  Delta Mill Network
                </span>
                <p className="font-semibold">Direct paddy and pulse milling partnership across South India</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive 5-Step Sourcing Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            Interactive Quality Journey
          </span>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900">
            From Mill Chute to Commercial Kitchen Loading Bay
          </h2>
          <p className="text-xs text-slate-600">
            Click through each stage to discover how we maintain grain integrity and weighment precision.
          </p>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {STEPS.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeStep === idx
                  ? 'bg-navy-900 text-cyan-300 shadow-lg border border-cyan-500/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                activeStep === idx ? 'bg-cyan-500 text-slate-950' : 'bg-slate-100 text-slate-600'
              }`}>
                {st.num}
              </span>
              <span>{st.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-6 h-64 md:h-80 relative bg-slate-900">
            <img
              src={STEPS[activeStep].image}
              alt={STEPS[activeStep].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 shadow-md">
                {STEPS[activeStep].badge}
              </span>
            </div>
          </div>

          <div className="md:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="text-xs font-extrabold text-brand-700 uppercase tracking-widest">
              Stage {STEPS[activeStep].num} of 05
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              {STEPS[activeStep].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {STEPS[activeStep].desc}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Laboratory & Quality Standards Comparison */}
      <QualityComparison />

    </div>
  );
}
