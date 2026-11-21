import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Check, ShieldCheck, Clock, Building2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    type: 'Wedding & Banquet Provisioning',
    hub: 'Chennai (Koyambedu / City Center)',
    selectedPills: ['Deluxe Ponni Rice', 'Cooking Oil Tins'],
    details: '',
  });

  const COMMODITY_PILLS = [
    'Deluxe Ponni Rice (25kg/50kg)',
    'Royal 1121 Basmati (25kg)',
    'First Quality Toor Dal (50kg)',
    'Bold White Urad Gota (30kg)',
    'Refined Sunflower Oil (15L Tins)',
    'Cold-Pressed Groundnut Oil (15L)',
    'Banquet Cashews W240 (10kg)',
    'Salem Finger Turmeric (25kg)',
    'M-30 Cane Sugar (50kg)',
    'Chakki Fresh Atta (50kg)',
  ];

  const togglePill = (pill) => {
    setFormData((prev) => {
      const exists = prev.selectedPills.includes(pill);
      return {
        ...prev,
        selectedPills: exists
          ? prev.selectedPills.filter((p) => p !== pill)
          : [...prev.selectedPills, pill],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleWhatsAppSend = () => {
    let msg = `*DELTA TRADERS — WHOLESALE RFQ INQUIRY*\n`;
    msg += `Name: ${formData.name || 'Trade Buyer'}\n`;
    msg += `Business: ${formData.businessName || 'Commercial Kitchen'}\n`;
    msg += `Phone: ${formData.phone}\n`;
    msg += `Order Type: ${formData.type}\n`;
    msg += `Delivery Hub: ${formData.hub}\n`;
    if (formData.selectedPills.length > 0) {
      msg += `Items Needed: ${formData.selectedPills.join(', ')}\n`;
    }
    if (formData.details) {
      msg += `Quantities/Notes: ${formData.details}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please reply with mill-direct wholesale rates and delivery availability.`;

    window.open(`https://wa.me/919087752120?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Wholesale Trade Desk & RFQ
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-900 leading-tight">
          Request Factory-Direct Quotation
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Reach our central trading hub directly. Submit your estimated commodity lot requirements for immediate invoice quotation and dispatch slot booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Depot Information & Visuals */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Visual Depot Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Delta Traders Wholesale Commodity Depot"
              className="w-full h-48 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/60 px-2.5 py-1 rounded">
                Central Trade Depot
              </span>
              <h4 className="text-base font-bold font-serif">Koyambedu Wholesale Corridor</h4>
              <p className="text-[11px] text-slate-300">40+ Tons Buffer Reserves • Digital Weighbridge</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase">
              <Phone className="w-4 h-4" />
              <span>Direct Hotline & WhatsApp Desk</span>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-mono">+91 90877 52120</div>
            <p className="text-xs text-slate-500">
              Desk hours: Mon – Sat (6:00 AM – 9:00 PM) for immediate quotes and dispatch confirmations.
            </p>
            <a
              href="tel:+919087752120"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:underline pt-1"
            >
              <span>Click to call trade representative →</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase">
              <Mail className="w-4 h-4" />
              <span>Official Institutional Inquiries</span>
            </div>
            <div className="text-base font-bold text-slate-900 font-mono">orders@deltatraders.com</div>
            <p className="text-xs text-slate-500">
              Send formal tender documents, institutional RFQs, or corporate supplier registration forms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase">
              <MapPin className="w-4 h-4" />
              <span>Registered Trade Address</span>
            </div>
            <div className="text-xs font-semibold text-slate-800 leading-relaxed">
              Plot No. 42/B, Wholesale Commodity Market Complex, Koyambedu Corridor, Chennai - 600092, Tamil Nadu, India.
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span>GSTIN: 33AAACD1234F1Z9</span>
              <span>FSSAI: 12423008000451</span>
            </div>
          </div>

        </div>

        {/* Right Column: Step-by-Step Interactive RFQ Form */}
        <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Interactive Wholesale Price Request
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your commodities or type your exact lot requirements below:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Buyer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
                  placeholder="e.g. Chef Ramesh / Proprietor"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
                  placeholder="e.g. 9087752120"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Business / Event Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
                  placeholder="e.g. Krishna Catering / Grand Hotel"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Business / Order Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
                >
                  <option value="Wedding & Banquet Provisioning">Wedding & Banquet Provisioning</option>
                  <option value="Hotel / Restaurant Recurring Supply">Hotel / Restaurant Recurring Supply</option>
                  <option value="Retail Supermarket / Provision Store">Retail Supermarket / Provision Store</option>
                  <option value="Temple Feast / Charitable Feeding">Temple Feast / Charitable Feeding</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Delivery Corridor / Location
              </label>
              <select
                value={formData.hub}
                onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
              >
                <option value="Chennai (Koyambedu / City Center)">Chennai (Koyambedu / City Center)</option>
                <option value="Tambaram / Chengalpattu Corridor">Tambaram / Chengalpattu Corridor</option>
                <option value="Kanchipuram & Sriperumbudur">Kanchipuram & Sriperumbudur</option>
                <option value="Tiruvallur & Ambattur Belt">Tiruvallur & Ambattur Belt</option>
                <option value="Vellore / Ranipet District">Vellore / Ranipet District</option>
                <option value="Pondicherry / Cuddalore Region">Pondicherry / Cuddalore Region</option>
                <option value="Other Tamil Nadu Districts">Other Tamil Nadu Districts</option>
              </select>
            </div>

            {/* Quick Multi-Select Commodity Pills */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Quick-Add Desired Commodities:
              </label>
              <div className="flex flex-wrap gap-2">
                {COMMODITY_PILLS.map((pill, idx) => {
                  const isSelected = formData.selectedPills.includes(pill);
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => togglePill(pill)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                        isSelected
                          ? 'bg-brand-700 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {pill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Details Text Area */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Estimated Quantities & Specific Requirements
              </label>
              <textarea
                rows="3"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:bg-white"
                placeholder="e.g. 20 bags Deluxe Ponni 25kg, 8 tins Sunflower oil 15L, need delivery by next Tuesday 6 AM..."
              />
            </div>

            {/* Submit & WhatsApp Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg border border-cyan-500/30 transition-transform hover:scale-[1.01]"
              >
                Submit RFQ to Trade Desk
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </button>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl text-xs font-semibold flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your quotation request has been recorded. Our wholesale manager will contact you within 30 minutes.</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}
