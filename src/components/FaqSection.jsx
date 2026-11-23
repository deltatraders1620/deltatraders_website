import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Link } from 'react-router-dom';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const FAQS = [
    {
      q: 'Do you sell to individual customers?',
      a: 'Yes. Delta Traders serves both individual retail customers and commercial business customers. Product availability and order quantities can be confirmed directly on our website or through our support team.',
    },
    {
      q: 'Do you provide wholesale or bulk supply?',
      a: 'Yes, we accept bulk supply enquiries from hotels, restaurants, wedding caterers, shops, and institutions. Share the products and quantities required for a competitive quotation.',
    },
    {
      q: 'What products do you sell?',
      a: 'Our listed categories include groceries & daily food essentials, whole spices & masalas, cooking oils, stationery, and parcel and packaging materials (food containers, cups, pouches, and rolls).',
    },
    {
      q: 'Do you deliver across Chengalpattu district?',
      a: 'Delivery is available in serviceable areas across Chengalpattu district including Maduranthagam, Melmaruvathur, Acharapakkam, and Chengalpattu town. Charges and estimated timelines are confirmed based on the order and destination.',
    },
    {
      q: 'How can I enquire about a product or place an order?',
      a: 'Use our online enquiry basket or contact us directly via WhatsApp (8668054308), phone, or email (deltatraders.1620@gmail.com). We provide quick response during working hours.',
    },
    {
      q: 'Can I request recurring supplies for my hotel or kitchen?',
      a: 'Yes. Share your product list, regular quantities, location, and preferred delivery schedule. We will confirm availability, pricing, and recurring supply terms.',
    },
  ];

  return (
    <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Help & Ordering Information
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Clear answers regarding retail orders, wholesale supplies, deliveries in Chengalpattu, and quotation requests.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{item.q}</span>
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-cyan-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center pt-2">
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
        >
          <span>View all FAQs and policies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
