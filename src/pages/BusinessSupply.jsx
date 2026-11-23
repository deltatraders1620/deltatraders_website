import React, { useState } from 'react';
import { Building2, Utensils, Store, Briefcase, Truck, ShieldCheck, MessageCircle, Mail, Check, Phone, ArrowRight, Loader2, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { sendEmailEnquiry, getGmailWebUrl } from '../utils/emailService';

const initialBusinessForm = {
  businessName: '',
  contactPerson: '',
  phone: '',
  email: '',
  businessType: 'Hotel / Restaurant Kitchen',
  productsList: '',
  quantities: '',
  location: '',
  frequency: 'Weekly Recurring Supply',
  notes: ''
};

export default function BusinessSupply() {
  const [form, setForm] = useState(initialBusinessForm);

  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // { type: 'success' | 'fallback', gmailUrl: '', mailtoUrl: '' }
  const [submittedMethod, setSubmittedMethod] = useState(null);

  const getFormattedText = () => {
    let msg = `*DELTA TRADERS — BULK & BUSINESS SUPPLY ENQUIRY*\n`;
    msg += `------------------------------------\n`;
    msg += `Business / Organization: ${form.businessName || 'Business Buyer'}\n`;
    msg += `Contact Person: ${form.contactPerson || 'Not provided'}\n`;
    msg += `Phone: ${form.phone}\n`;
    msg += `Email: ${form.email || 'Not provided'}\n`;
    msg += `Business Type: ${form.businessType}\n`;
    msg += `Delivery Location: ${form.location || 'Maduranthagam / Chengalpattu'}\n`;
    msg += `Delivery Frequency: ${form.frequency}\n`;
    msg += `------------------------------------\n`;
    msg += `*Requested Items & Quantities:*\n`;
    msg += `${form.productsList || 'Full hotel provision & packaging kit'}\n`;
    if (form.quantities) {
      msg += `Estimated Volume: ${form.quantities}\n`;
    }
    if (form.notes) {
      msg += `Additional Notes: ${form.notes}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please review our requirements and confirm availability and wholesale quotation.`;
    return msg;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!form.phone) {
      alert('Please enter your Phone or WhatsApp number');
      return;
    }
    const text = encodeURIComponent(getFormattedText());
    window.open(`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${text}`, '_blank');
    setSubmittedMethod('whatsapp');
    // Clear all form inputs
    setForm(initialBusinessForm);
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    if (!form.phone && !form.email) {
      alert('Please enter your phone number or email address so we can contact you.');
      return;
    }

    setIsSendingEmail(true);
    setEmailStatus(null);

    const result = await sendEmailEnquiry({
      name: form.contactPerson,
      businessName: form.businessName,
      phone: form.phone,
      email: form.email,
      businessType: form.businessType,
      location: form.location || 'Maduranthagam / Chengalpattu District',
      frequency: form.frequency,
      productsList: form.productsList,
      quantities: form.quantities,
      notes: form.notes,
    }, 'Bulk Supply Enquiry');

    setIsSendingEmail(false);
    setSubmittedMethod('email');
    // Clear all form inputs
    setForm(initialBusinessForm);

    if (result.success) {
      setEmailStatus({ type: 'success' });
    } else {
      // Fallback with direct web Gmail and mailto
      setEmailStatus({
        type: 'fallback',
        gmailUrl: result.gmailUrl,
        mailtoUrl: result.mailtoUrl
      });
    }
  };

  return (
    <div className="space-y-16 py-10 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header - Expansive width container, single line heading */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <span>Wholesale & Commercial Accounts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
            Wholesale Groceries & Hotel Kitchen Supplies in Maduranthagam
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Delta Traders welcomes commercial supply enquiries from hotels, restaurants, wedding caterers, supermarkets, and institutions across Maduranthagam and Chengalpattu District. Bulk rice sacks, cooking oils, whole spices, dry fruits, and packaging supplies delivered with direct trade pricing.
          </p>
        </div>
      </section>

      {/* Target Sectors Grid - Fills desktop width gracefully */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Hotels & Restaurants</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dals, cooking oils, basmati rice, spices, sauces, aluminium containers, and parcel covers for daily kitchen operations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-500">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Wedding Caterers</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Full banquet grocery provisions, W240 cashews, ghee, sugar, paper rolls, and eco-friendly compostable cups.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-500">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Retail Provision Stores</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Full-bag sacks of rice, sugar, atta, and oils at competitive dealer prices to support retail margins.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Offices & Institutions</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Billing books, registers, heavy-duty parcel tapes, markers, pantry tea/sugar supplies, and housekeeping essentials.
            </p>
          </div>

        </div>
      </section>

      {/* Bulk Enquiry Form Section - Balanced & Wide */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-950 via-brand-950 to-slate-900 text-white border border-cyan-500/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Maduranthagam Wholesale Desk
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-1">
                  Direct Institutional Order Processing
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Every bulk order enquiry is assigned to an account specialist who coordinates product availability, lot packaging, and early morning delivery slots.
                </p>
              </div>

              <div className="space-y-3 text-xs border-t border-slate-800 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">GST Invoicing</div>
                    <div className="text-slate-400 text-[11px]">GSTIN: {COMPANY_INFO.gstin}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Chengalpattu Logistics</div>
                    <div className="text-slate-400 text-[11px]">Maduranthagam, Melmaruvathur & district</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Primary WhatsApp: +91 {COMPANY_INFO.primaryPhone}</div>
                    <div className="text-slate-400 text-[11px]">Hotlines: 6383595914, 9360733242</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                Submit Your Bulk Supply Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill in your details below and choose to send directly via <strong>WhatsApp</strong> or <strong>Direct Email</strong> to {COMPANY_INFO.email}.
              </p>
            </div>

            {/* WhatsApp Status Alert */}
            {submittedMethod === 'whatsapp' && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-start gap-3 text-xs leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">WhatsApp Chat Launched & Form Cleared!</strong>
                  <p className="mt-0.5">
                    Your bulk requirements were forwarded to our WhatsApp Desk (<strong>+91 {COMPANY_INFO.primaryPhone}</strong>). All input fields have been cleared for your next message.
                  </p>
                </div>
              </div>
            )}

            {/* Email Status Notifications */}
            {emailStatus?.type === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-start gap-3 text-xs leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Enquiry Email Delivered & Form Cleared!</strong>
                  <p className="mt-0.5">
                    Your bulk requirements were sent directly to <strong>{COMPANY_INFO.email}</strong>. All input fields have been cleared. Our team will review and get back to you promptly.
                  </p>
                </div>
              </div>
            )}

            {emailStatus?.type === 'fallback' && (
              <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-900 dark:text-cyan-200 space-y-3 text-xs leading-relaxed">
                <div>
                  <strong className="text-sm">Enquiry Ready to Dispatch</strong>
                  <p className="mt-0.5">
                    Click below to send directly via your web browser Gmail tab or default mail app:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={emailStatus.gmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-600 text-white font-bold inline-flex items-center gap-1.5 shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open & Send in Gmail (Web Tab)</span>
                  </a>
                  <a
                    href={emailStatus.mailtoUrl}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold inline-flex items-center gap-1.5 shadow"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Default Mail Client</span>
                  </a>
                </div>
              </div>
            )}

            <form className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Business / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hotel Ananda / SRS Catering"
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. K. Rajasekaran"
                    value={form.contactPerson}
                    onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (For Invoices & Quotes)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. manager@hotelananda.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Business Sector
                  </label>
                  <select
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Hotel / Restaurant Kitchen">Hotel / Restaurant Kitchen</option>
                    <option value="Wedding / Event Caterer">Wedding / Event Caterer</option>
                    <option value="Provision Store / Supermarket">Provision Store / Supermarket</option>
                    <option value="Hostel / College Mess">Hostel / College Mess</option>
                    <option value="Corporate / Institution">Corporate / Institution</option>
                    <option value="Packaging & Parcel Reseller">Packaging & Parcel Reseller</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Delivery Location / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maduranthagam, Melmaruvathur"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Supply Frequency
                  </label>
                  <select
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Weekly Recurring Supply">Weekly Recurring Supply</option>
                    <option value="Daily Early Morning Supply">Daily Early Morning Supply</option>
                    <option value="Bi-Weekly Restock">Bi-Weekly Restock</option>
                    <option value="Monthly Contract">Monthly Contract</option>
                    <option value="One-Time Event / Banquet Lot">One-Time Event / Banquet Lot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Product Requirements & Item List
                </label>
                <textarea
                  rows={4}
                  placeholder="Specify items and estimated pack quantities (e.g. Sugar 50kg - 5 bags, SVN Palmolein 10 boxes, Chilli Powder 20kg, Aluminium 750ml containers - 1000 pcs, BOPP tape 1 box)..."
                  value={form.productsList}
                  onChange={(e) => setForm({ ...form, productsList: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Approximate Volume (Tonnage / Bags / Boxes)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ~1.5 Tons or 40 Bags + 10 Oil Boxes"
                    value={form.quantities}
                    onChange={(e) => setForm({ ...form, quantities: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Additional Instructions / Timings
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Morning 6:00 AM delivery before breakfast prep"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* DUAL SUBMISSION BUTTONS */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Select your preferred submission method:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Submission */}
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Submit via WhatsApp</span>
                  </button>

                  {/* Direct Email Submission */}
                  <button
                    type="button"
                    onClick={handleEmail}
                    disabled={isSendingEmail}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 disabled:opacity-75 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    {isSendingEmail ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Sending to {COMPANY_INFO.email}...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>Submit via Email</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                  Submissions via email are sent directly to <strong className="text-cyan-600 dark:text-cyan-400">{COMPANY_INFO.email}</strong>. WhatsApp submissions open with <strong className="text-emerald-600 dark:text-emerald-400">{COMPANY_INFO.primaryPhoneFormatted}</strong>.
                </p>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
