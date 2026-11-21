import React from 'react';
import { ShoppingBag, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5 text-harvest-300" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white font-serif">DELTA TRADERS</div>
                <div className="text-[10px] text-harvest-400 font-semibold uppercase">Direct Manufacturer Grocery Trade</div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Delta Traders supplies raw agricultural commodities and essential food staples directly from processing mills to weddings, hotels, catering banquets, and retail provision stores. Strictly no snacks, dairy, or toiletries—100% focused on core kitchen bulk commodities.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
              <div>GSTIN: <span className="font-mono text-slate-200">33AAACD1234F1Z9</span></div>
              <div>FSSAI Central Lic: <span className="font-mono text-slate-200">12423008000451</span></div>
              <div>Trade Depot: <span className="text-slate-200">Koyambedu Wholesale Corridor, Chennai</span></div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase font-serif">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => setActivePage('home')} className="hover:text-harvest-400">Home</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-harvest-400">About Us</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-harvest-400">Services Offered</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-harvest-400">Contact & Quote</button></li>
              <li><a href="https://wa.me/919087752120" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">WhatsApp Desk</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase font-serif">Bulk Commodities</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Ponni, Basmati & Raw Rice (25kg/50kg)</li>
              <li>• Toor, Urad, Moong & Chana Dals</li>
              <li>• Sunflower, Groundnut & Sesame Oils (15L Tins)</li>
              <li>• Salem Turmeric, Guntur Chilli & Spices</li>
              <li>• Premium Cashews, Almonds & Dry Fruits</li>
              <li>• Cane Sugar, Jaggery & Chakki Atta</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase font-serif">Trade Hub</h4>
            <p className="text-slate-400 leading-relaxed">
              Plot No. 42/B, Wholesale Commodity Market Complex, Koyambedu Corridor, Chennai - 600092, Tamil Nadu.
            </p>
            <div className="space-y-1 text-slate-300">
              <div>Phone: <a href="tel:+919087752120" className="text-white hover:text-harvest-400">+91 90877 52120</a></div>
              <div>Email: <a href="mailto:orders@deltatraders.com" className="text-white hover:text-harvest-400">orders@deltatraders.com</a></div>
              <div>Dispatches: Mon - Sat (5:30 AM - 8:30 PM)</div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-900 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div>© 2026 Delta Traders. All Rights Reserved.</div>
          <div className="flex items-center gap-2 text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Direct Mill Sourcing Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
