import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Mail, Check, ShoppingBag, ShieldCheck, MapPin, Phone, MessageCircle, Loader2, ExternalLink } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { COMPANY_INFO } from '../data/products';
import { sendEmailEnquiry } from '../utils/emailService';

export default function RfqDrawer() {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalUnits,
    createWhatsAppUrl,
  } = useRfq();

  const initialCustomerState = {
    name: '',
    phone: '',
    email: '',
    businessType: 'Hotel / Restaurant Supply',
    location: 'Maduranthagam / Chengalpattu District',
    notes: '',
  };

  const [customer, setCustomer] = useState(initialCustomerState);

  const [submittedMethod, setSubmittedMethod] = useState(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  if (!isDrawerOpen) return null;

  const handleWhatsAppSubmit = (e) => {
    e?.preventDefault();
    const url = createWhatsAppUrl(customer);
    window.open(url, '_blank');
    setSubmittedMethod('whatsapp');
    setCustomer(initialCustomerState);
    clearCart();
    setTimeout(() => setSubmittedMethod(null), 5000);
  };

  const handleEmailSubmit = async (e) => {
    e?.preventDefault();
    setIsSendingEmail(true);
    setEmailStatus(null);

    // Format cart items
    const itemsList = cartItems.map((item, idx) => 
      `${idx + 1}. ${item.name} (${item.tamilName || ''}) - Quantity: ${item.quantity} [${item.lotSize || item.unitWeight || 'Units'}]`
    ).join('\n');

    const result = await sendEmailEnquiry({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      businessType: customer.businessType,
      location: customer.location,
      notes: customer.notes,
      productsList: itemsList,
      quantities: `${totalUnits} total units (${cartItems.length} distinct items)`,
    }, 'Product Basket Quote');

    setIsSendingEmail(false);
    setSubmittedMethod('email');
    setCustomer(initialCustomerState);
    clearCart();

    if (result.success) {
      setEmailStatus({ type: 'success' });
      setTimeout(() => setEmailStatus(null), 6000);
    } else {
      setEmailStatus({
        type: 'fallback',
        gmailUrl: result.gmailUrl,
        mailtoUrl: result.mailtoUrl
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-white dark:bg-navy-950 h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300 border-l border-slate-200 dark:border-navy-800">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-navy-800 bg-gradient-to-r from-navy-950 to-brand-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-white">Product Enquiry Basket</h2>
              <p className="text-xs text-cyan-300">
                {totalUnits} Items Selected for Price & Supply Enquiry
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-slate-800 dark:text-slate-100">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-navy-900 mx-auto flex items-center justify-center text-slate-400 dark:text-cyan-400 border border-slate-200 dark:border-navy-800">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">Your Enquiry Basket is Empty</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                Explore our categorized list of groceries, spices, cooking oils, and parcel packaging items to request supply availability.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Notice Banner */}
              <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-navy-900/90 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="font-semibold text-brand-900 dark:text-cyan-200">
                    Direct Wholesale & Retail Sourcing
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  Maduranthagam Depot
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  <span>Selected Products ({cartItems.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-rose-500 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm flex items-center gap-3.5 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-100 dark:border-navy-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {item.name}
                          </h4>
                          {item.tamilName && (
                            <p className="text-[11px] text-cyan-600 dark:text-cyan-400 truncate">
                              {item.tamilName}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-500 p-1"
                          title="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Pack / Lot: <strong className="text-slate-700 dark:text-slate-200">{item.unitWeight}</strong>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center border border-slate-200 dark:border-navy-700 rounded-lg bg-slate-50 dark:bg-navy-950">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 rounded-l-lg"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-extrabold text-slate-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 rounded-r-lg"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          units requested
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Details Form */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/70 border border-slate-200 dark:border-navy-800 space-y-3">
                <h4 className="text-xs font-bold uppercase text-slate-700 dark:text-cyan-300 tracking-wider">
                  Your Details (For Quotation & Delivery)
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar / Hotel Manager"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      placeholder="e.g. customer@gmail.com"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Order / Business Type
                    </label>
                    <select
                      value={customer.businessType}
                      onChange={(e) => setCustomer({ ...customer, businessType: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none"
                    >
                      <option value="Hotel & Restaurant Kitchen">Hotel & Restaurant Kitchen</option>
                      <option value="Wedding & Banquet Catering">Wedding & Banquet Catering</option>
                      <option value="Retail Supermarket / Provision Store">Retail Provision Store</option>
                      <option value="Packaging & Parcel Materials">Packaging Materials Only</option>
                      <option value="Household Everyday Essentials">Household Bulk Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    Delivery Location / Area
                  </label>
                  <input
                    type="text"
                    value={customer.location}
                    onChange={(e) => setCustomer({ ...customer, location: e.target.value })}
                    placeholder="e.g. Maduranthagam, Kadaperi, Chengalpattu, Tambaram..."
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    Specific Quantities / Pack Sizes Needed
                  </label>
                  <textarea
                    rows="2"
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    placeholder="e.g. Need 5 bags 50kg Toor dal, 10 boxes Gold Winner oil, and 500 pcs Aluminium containers 750ml..."
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer: Dual Submission Options (WhatsApp + Email) */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 dark:border-navy-800 bg-slate-50 dark:bg-navy-900/95 space-y-3">
            <div className="text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between font-semibold">
              <span>Choose Enquiry Submission Method:</span>
              <span className="text-cyan-600 dark:text-cyan-400">{totalUnits} units total</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Option 1: WhatsApp Submission */}
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit on WhatsApp</span>
              </button>

              {/* Option 2: Email Submission */}
              <button
                type="button"
                onClick={handleEmailSubmit}
                disabled={isSendingEmail}
                className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 disabled:opacity-75 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg border border-cyan-500/30 transition-transform hover:scale-[1.02]"
              >
                {isSendingEmail ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Send to Email</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500 dark:text-slate-400">
              WhatsApp sent to <strong className="text-emerald-600 dark:text-emerald-400">+91 {COMPANY_INFO.primaryPhone}</strong> • Email sent to <strong className="text-cyan-600 dark:text-cyan-400">{COMPANY_INFO.email}</strong>
            </p>

            {emailStatus?.type === 'success' && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Basket order successfully dispatched to {COMPANY_INFO.email}!</span>
              </div>
            )}

            {emailStatus?.type === 'fallback' && (
              <div className="p-3 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-300 rounded-xl text-xs space-y-2">
                <div className="font-semibold">Ready to send your order:</div>
                <div className="flex gap-2">
                  <a
                    href={emailStatus.gmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 text-white font-bold text-[11px] inline-flex items-center gap-1 shadow"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Gmail (Web Tab)</span>
                  </a>
                  <a
                    href={emailStatus.mailtoUrl}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] inline-flex items-center gap-1 shadow"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Mail Client</span>
                  </a>
                </div>
              </div>
            )}

            {submittedMethod === 'whatsapp' && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Opening WhatsApp chat with your formatted product list...</span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
