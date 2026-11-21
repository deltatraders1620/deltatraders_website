import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Copy, Check, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function RfqDrawer() {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalBags,
    totalWeightKg,
    totalDeltaPrice,
    totalMarketPrice,
    totalSavings,
  } = useRfq();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Chennai & Suburbs');
  const [copied, setCopied] = useState(false);

  if (!isDrawerOpen) return null;

  const totalTons = (totalWeightKg / 1000).toFixed(2);

  const getOrderSummaryText = () => {
    let text = `*DELTA TRADERS — WHOLESALE RFQ INQUIRY*\n`;
    text += `Customer: ${customerName || 'Trade Buyer'}\n`;
    text += `Phone: ${customerPhone || 'Not provided'}\n`;
    text += `Delivery Hub: ${deliveryArea}\n`;
    text += `------------------------------------\n`;
    cartItems.forEach((item, idx) => {
      const itemSubtotal = item.deltaPrice * item.quantity;
      text += `${idx + 1}. ${item.name} (${item.unitWeight})\n`;
      text += `   Qty: ${item.quantity} units | Est. Rate: ₹${itemSubtotal.toLocaleString('en-IN')}\n`;
    });
    text += `------------------------------------\n`;
    text += `Total Units/Bags: ${totalBags}\n`;
    text += `Est. Total Weight: ${totalWeightKg.toLocaleString('en-IN')} kg (~${totalTons} Tons)\n`;
    text += `Delta Traders Wholesale Est: ₹${totalDeltaPrice.toLocaleString('en-IN')}\n`;
    text += `Est. Mandi Market Price: ₹${totalMarketPrice.toLocaleString('en-IN')}\n`;
    text += `Est. Savings: ₹${totalSavings.toLocaleString('en-IN')}\n`;
    text += `------------------------------------\n`;
    text += `Please confirm direct mill lot availability and earliest morning delivery dispatch.`;
    return text;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(getOrderSummaryText());
    window.open(`https://wa.me/919087752120?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getOrderSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-700 flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5 text-harvest-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-white">Wholesale RFQ Basket</h2>
              <p className="text-xs text-harvest-300">
                {totalBags} Units • ~{totalTons} Tons ({totalWeightKg.toLocaleString('en-IN')} kg)
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-700">Your Quote Basket is Empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our direct mill catalog and click "Add to Quote" to calculate bulk pricing.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-800"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Savings Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-brand-500/10 border border-cyan-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="font-semibold text-brand-900">Direct Mill Wholesale Rates</span>
                </div>
                <span className="font-bold text-cyan-700">
                  Save ₹{totalSavings.toLocaleString('en-IN')} vs Mandi
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Selected Bulk Lots ({cartItems.length})</span>
                  <button onClick={clearCart} className="text-red-500 hover:underline flex items-center gap-1">
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                {cartItems.map((item) => {
                  const itemDelta = item.deltaPrice * item.quantity;
                  const itemMarket = item.marketPrice * item.quantity;
                  const itemSave = itemMarket - itemDelta;

                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center gap-3.5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover border border-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-red-500 p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-500">{item.unitWeight}</div>
                        <div className="mt-1 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-extrabold text-brand-800">
                              ₹{itemDelta.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-slate-400 line-through ml-1.5">
                              ₹{itemMarket.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <div className="text-[10px] text-cyan-700 font-semibold">
                            Save ₹{itemSave.toLocaleString('en-IN')}
                          </div>
                        </div>

                        {/* Stepper */}
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 rounded-l-lg"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 rounded-r-lg"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-[10px] text-slate-500">
                            ~{(item.quantity * item.weightKg).toLocaleString('en-IN')} kg
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Customer Inputs */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
                  Buyer & Delivery Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name / Business"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="WhatsApp Number"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <select
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Chennai (Koyambedu / City Center)">Chennai (Koyambedu / City Center)</option>
                    <option value="Tambaram / Chengalpattu Corridor">Tambaram / Chengalpattu Corridor</option>
                    <option value="Kanchipuram & Sriperumbudur">Kanchipuram & Sriperumbudur</option>
                    <option value="Tiruvallur & Ambattur Belt">Tiruvallur & Ambattur Belt</option>
                    <option value="Vellore / Ranipet District">Vellore / Ranipet District</option>
                    <option value="Cuddalore / Pondicherry Region">Cuddalore / Pondicherry Region</option>
                    <option value="Other Tamil Nadu Districts">Other Tamil Nadu Districts (Direct Lorry)</option>
                  </select>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Truck className="w-3.5 h-3.5 text-brand-600" />
                  <span>5:30 AM Morning Dispatch slot available for this hub.</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & WhatsApp Action */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-900 text-white space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Standard Mandi Broker Total:</span>
                <span className="line-through font-mono">₹{totalMarketPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-baseline font-bold">
                <span className="text-sm">Delta Direct Wholesale Rate:</span>
                <span className="text-2xl font-extrabold text-cyan-300 font-mono">
                  ₹{totalDeltaPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-emerald-400 text-xs font-semibold pt-1 border-t border-slate-800">
                <span>Total Guaranteed Savings:</span>
                <span className="text-amber-400 font-extrabold">₹{totalSavings.toLocaleString('en-IN')} ({Math.round((totalSavings / totalMarketPrice) * 100)}%)</span>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={handleCopy}
                className="py-3 px-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-cyan-500/20 text-cyan-300 hover:text-white flex items-center justify-center gap-1 text-xs font-semibold transition-colors"
                title="Copy breakdown to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>Send to WhatsApp Desk (9087752120)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
