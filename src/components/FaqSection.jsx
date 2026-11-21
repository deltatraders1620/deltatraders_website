import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const FAQS = [
    {
      q: 'What is the minimum order quantity for wholesale rates?',
      a: 'We specialize strictly in bulk and wholesale lots. Minimum orders are 10 bags for rice and dals (25kg or 50kg sacks), and 5 tins for cooking oils (15L / 15kg tins). We do not deal in loose retail (1kg/2kg) quantities.',
    },
    {
      q: 'How does Delta Traders offer 15% to 25% lower prices than wholesale mandis?',
      a: 'Traditional mandi supply passes through 4 middlemen: the mill, a primary broker (4%), wholesale mandi merchant (10%), and sub-dealer (8%). We purchase directly from partner milling units and extraction plants in full 10-to-20 ton lorry consignments, passing the entire margin directly to our commercial kitchen buyers.',
    },
    {
      q: 'How do you guarantee accurate weighment?',
      a: 'Every sack and tin passes over our digital calibrated weighbridge at our Koyambedu depot before loading onto the delivery fleet. A stamped computerized weighment slip is attached to each invoice with zero tare discrepancy.',
    },
    {
      q: 'Can we return unopened bags from a wedding or banquet?',
      a: 'Yes! For registered wedding and catering contracts, we accept returns on intact, unopened, and moisture-free bags returned within 48 hours of the event conclusion, deducting only nominal round-trip transit freight.',
    },
    {
      q: 'What time does the morning delivery fleet arrive at wedding halls?',
      a: 'Our transport fleet departs between 5:30 AM and 6:00 AM every morning. Orders within Chennai, Tambaram, and Kanchipuram typically arrive before 7:30 AM, ensuring kitchen masters have ingredients ready before breakfast service starts.',
    },
    {
      q: 'What payment modes are accepted for bulk orders?',
      a: 'We accept RTGS / NEFT, Cheque (for approved institutional accounts), UPI (PhonePe / Google Pay / Paytm for Business), and Cash on Delivery against printed weighbridge receipts for verified commercial kitchens.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Wholesale Trade Help
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-slate-600">
          Clear answers regarding lot sizes, returns, morning dispatches, and weighment honesty.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            >
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{item.q}</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  openIdx === idx ? 'rotate-180 text-brand-700' : ''
                }`}
              />
            </button>

            {openIdx === idx && (
              <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-slate-500">
          Have an urgent custom requirement or large tender?{' '}
          <a href="tel:+919087752120" className="text-brand-700 font-bold hover:underline">
            Call our Trade Desk directly at +91 90877 52120
          </a>
        </p>
      </div>
    </section>
  );
}
