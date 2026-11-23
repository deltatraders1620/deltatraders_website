import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Check, ShieldCheck, Clock, Building2, CheckCircle2, Copy, Loader2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { sendEmailEnquiry } from '../utils/emailService';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedMode, setLastSubmittedMode] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Wholesale & Bulk Supply Enquiry',
    businessType: 'Hotel / Restaurant Kitchen',
    location: 'Maduranthagam / Chengalpattu Dist',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const constructMessageText = () => {
    let msg = `*DELTA TRADERS — ENQUIRY*\n`;
    msg += `Name: ${formData.name || 'Not provided'}\n`;
    msg += `Phone: ${formData.phone || 'Not provided'}\n`;
    msg += `Email: ${formData.email || 'Not provided'}\n`;
    msg += `Enquiry Type: ${formData.subject}\n`;
    msg += `Business Type: ${formData.businessType}\n`;
    msg += `Location: ${formData.location}\n`;
    if (formData.message) {
      msg += `Details / Items: ${formData.message}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Sent via Delta Traders Website`;
    return msg;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) {
      alert('Please enter at least your name and phone number.');
      return;
    }
    const msg = constructMessageText();
    const url = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setLastSubmittedMode('WhatsApp');
    setSubmitted(true);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone && !formData.email) {
      alert('Please enter your name and contact details (phone or email).');
      return;
    }

    setIsSendingEmail(true);
    setEmailStatus(null);

    const result = await sendEmailEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      businessType: formData.businessType,
      location: formData.location,
      message: formData.message,
    }, formData.subject);

    setIsSendingEmail(false);
    setLastSubmittedMode('Email');
    setSubmitted(true);

    if (result.success) {
      setEmailStatus({ type: 'success' });
    } else {
      setEmailStatus({
        type: 'fallback',
        gmailUrl: result.gmailUrl,
        mailtoUrl: result.mailtoUrl
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-12">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header - Expansive width container */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <Phone className="w-3.5 h-3.5" />
            <span>Maduranthagam & Chengalpattu Trade Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
            Contact Delta Traders
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            We’re here to help! Whether you need everyday retail groceries, bulk supplies for hotels and restaurants, wedding catering provisions, parcel packaging materials, or office stationery—connect with our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards with WhatsApp First */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card (Highlighted & Placed First) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-emerald-100 backdrop-blur-md whitespace-nowrap">
                  ★ First Contact Option
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-200 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Response
                </span>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">
                  Official WhatsApp & Order Hotline
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono mt-1 tracking-tight">
                  {COMPANY_INFO.primaryPhoneFormatted}
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
                  Send your product lists, price enquiry, or order requirements directly to our primary WhatsApp number for quick quotes.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent('Hi Delta Traders, I want to inquire about grocery and packaging supply.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs uppercase tracking-wider shadow flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="px-3.5 py-2.5 rounded-xl bg-black/20 hover:bg-black/30 text-white text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </div>

            {/* Additional Hotlines */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase">
                <Phone className="w-4 h-4" />
                <span>All Contact & Order Numbers</span>
              </div>

              <div className="space-y-3">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 last:border-none last:pb-0">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{phone.label}</div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                        +91 {phone.number.slice(0, 5)} {phone.number.slice(5)}
                      </div>
                    </div>
                    {phone.isWhatsApp ? (
                      <a
                        href={`https://wa.me/91${phone.number}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1 hover:bg-emerald-200 transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-3 h-3" />
                        WhatsApp
                      </a>
                    ) : (
                      <a
                        href={`tel:+91${phone.number}`}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1 hover:bg-slate-200 transition-colors whitespace-nowrap"
                      >
                        Call
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Email Address */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase">
                <Mail className="w-4 h-4" />
                <span>Official Business Email</span>
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white font-mono">
                {COMPANY_INFO.email}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Send formal RFQs, purchase orders, vendor onboarding forms, or institutional enquiries.
              </p>
            </div>

            {/* Address & Legal Registrations */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase">
                <MapPin className="w-4 h-4" />
                <span>Registered Office & Depot</span>
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                {COMPANY_INFO.fullAddress}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-cyan-500" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <div>GSTIN: {COMPANY_INFO.gstin}</div>
                <div>FSSAI: {COMPANY_INFO.fssai}</div>
                <div>Udyam: {COMPANY_INFO.udyam}</div>
                <div>Dist: Chengalpattu</div>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form with DUAL Submission (WhatsApp & Direct Email) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-7 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Dual-Option Enquiry Form
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mt-1">
                Send Product or Bulk Supply Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill in your details below and choose whether to send instantly via <strong>WhatsApp</strong> or <strong>Direct Email</strong> to {COMPANY_INFO.email}.
              </p>
            </div>

            {/* Email Status Alert */}
            {emailStatus?.type === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-start gap-3 text-xs leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Enquiry Email Delivered!</strong>
                  <p className="mt-0.5">
                    Your message was sent directly to <strong>{COMPANY_INFO.email}</strong>. Our team will respond during business hours (9am to 7pm).
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Your Name / Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Wholesale & Bulk Supply Enquiry">Wholesale & Bulk Supply Enquiry</option>
                    <option value="Hotel / Restaurant Recurring Supply">Hotel / Restaurant Recurring Supply</option>
                    <option value="Wedding / Catering Provisioning">Wedding / Catering Provisioning</option>
                    <option value="Retail Grocery Purchase">Retail Grocery Purchase</option>
                    <option value="Packaging & Parcel Materials">Packaging & Parcel Materials</option>
                    <option value="Stationery & Office Supplies">Stationery & Office Supplies</option>
                    <option value="Delivery & Logistics Enquiry">Delivery & Logistics Enquiry</option>
                    <option value="Other Business Enquiry">Other Business Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Business / Customer Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Hotel / Restaurant Kitchen">Hotel / Restaurant Kitchen</option>
                    <option value="Wedding / Event Caterer">Wedding / Event Caterer</option>
                    <option value="Provision Store / Supermarket">Provision Store / Supermarket</option>
                    <option value="Hostel / College Mess">Hostel / College Mess</option>
                    <option value="Corporate / Office">Corporate / Office</option>
                    <option value="Household / Individual Consumer">Household / Individual Consumer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Delivery Location / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maduranthagam, Chengalpattu, Melmaruvathur"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Product Requirements & Approximate Quantities
                </label>
                <textarea
                  rows={4}
                  placeholder="Specify items, pack sizes, or quantities needed (e.g. Sugar 50kg, Sunflower Oil 15L, Aluminium Containers 750ml - 500 pcs, Chilli Powder 10kg)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              {/* DUAL SUBMISSION BUTTONS */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Select your preferred enquiry submission method:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Option 1: WhatsApp Submission */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Submit via WhatsApp</span>
                  </button>

                  {/* Option 2: Direct Email Submission */}
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
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

                <div className="text-[11px] text-center text-slate-400 dark:text-slate-500 pt-1">
                  Enquiries sent via WhatsApp go directly to <span className="text-emerald-600 dark:text-emerald-400 font-bold">{COMPANY_INFO.primaryPhoneFormatted}</span>. Emails are delivered directly to <span className="text-cyan-600 dark:text-cyan-400 font-bold">{COMPANY_INFO.email}</span>.
                </div>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
