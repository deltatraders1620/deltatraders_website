import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, ShoppingBag, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const FAQS = [
    {
      q: 'Do you sell to individual customers?',
      a: 'Yes. Delta Traders serves both individual retail customers and business customers. Whether you need grocery supplies for your home or packaging for small shipments, you can order retail quantities. Product availability and order quantities can be confirmed directly on our website or through our support team.'
    },
    {
      q: 'Do you provide wholesale or bulk supply?',
      a: 'Yes, wholesale and bulk supply is one of our primary services. We cater to hotels, restaurants, wedding caterers, provision shops, institutions, and offices across Chengalpattu district. Share your product list, required quantities, and delivery schedule to receive a customized wholesale rate quote.'
    },
    {
      q: 'What products do you sell?',
      a: 'Our core categories include:\n• Groceries & Daily Essentials: Rice, dals, whole spices, spice powders, edible oils, dry fruits, and food staples.\n• Hotel & Kitchen Supplies: Soya sauce, tomato ketchup, chilli sauce, vinegar, ajinomoto, and culinary condiments.\n• Parcel & Packaging Materials: Aluminium food containers (250ml, 450ml, 750ml), meal trays, bio-compostable cups, silver rolls, silver pouches, transparent bags, butter sheets, and table paper rolls.\n• Stationery & Office Essentials: Billing rolls, permanent markers, packaging tapes, and ledger books.'
    },
    {
      q: 'Do you deliver to my location?',
      a: 'We provide delivery across Chengalpattu District and surrounding towns including Maduranthagam, Acharapakkam, Melmaruvathur, Chengalpattu town, Padalam, and Vedanthangal. Delivery options, serviceable areas, delivery charges (if any), and estimated transit times are clearly communicated when confirming your order.'
    },
    {
      q: 'How can I enquire about a product or place an order?',
      a: 'You can browse our online catalog and add items to your Enquiry Basket, then submit directly via WhatsApp (8668054308) or Email (deltatraders.1620@gmail.com). You can also call us directly or use our Contact Us form.'
    },
    {
      q: 'Can I request recurring supplies for my hotel or restaurant?',
      a: 'Absolutely. We specialize in regular recurring supply schedules (daily, bi-weekly, or weekly) for hotels, messes, restaurants, and cloud kitchens. Share your regular menu requirements, and we will set up a reliable delivery schedule with consistent supply availability.'
    },
    {
      q: 'Are prices inclusive of GST?',
      a: 'Agricultural food grains and unprocessed staples may be zero-rated or exempt from GST under Indian tax regulations, whereas processed goods, packaging materials, and stationery carry standard GST rates. Every invoice issued by Delta Traders clearly states the itemized GST breakdown along with our registered GSTIN: 33DDZPG1776CIZD.'
    },
    {
      q: 'What is your return, cancellation, or refund policy?',
      a: 'We want every customer to be fully satisfied. For packaged non-perishable goods, reports of damaged, missing, or incorrect items should be made within 24 to 48 hours of delivery along with photos. For full details on eligible and non-returnable items, please consult our Returns & Refunds Policy page.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-12">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center & Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find quick answers about retail purchasing, wholesale and bulk grocery supplies, packaging materials, delivery areas in Chengalpattu district, and order options.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Dual action card */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 text-white p-8 sm:p-10 border border-cyan-500/30 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-serif text-white">Have a specific question or custom requirement?</h2>
            <p className="text-sm text-slate-300">
              Our trade desk in Maduranthagam is available Monday to Saturday, 9:00 AM to 7:00 PM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent('Hi Delta Traders, I have a question regarding wholesale supplies and delivery.')}`}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp ({COMPANY_INFO.primaryPhoneFormatted})</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Customer%20Enquiry%20-%20Delta%20Traders`}
              className="p-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 underline"
            >
              Or visit our full Contact & Location page →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
