import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, MapPin, Phone, Mail, Clock, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 text-xs transition-colors duration-200">
      
      {/* Upper Grid */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Company Profile & Registrations */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-3 py-1 flex items-center justify-center rounded-xl bg-white border border-navy-700 shadow-md">
                <img
                  src="/logo.png"
                  alt="Delta Traders"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <div className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider">
                  {COMPANY_INFO.tagline}
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Delta Traders brings groceries, food essentials, stationery, parcel and packaging supplies together for households, retailers, hotels, restaurants, caterers, and other businesses across Maduranthagam and Chengalpattu District.
            </p>

            {/* Official Registration Badges */}
            <div className="p-3.5 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">GSTIN:</span>
                <span className="font-mono text-cyan-300 font-bold">{COMPANY_INFO.gstin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">FSSAI Licence:</span>
                <span className="font-mono text-cyan-300 font-bold">{COMPANY_INFO.fssai}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Udyam Registration:</span>
                <span className="font-mono text-cyan-300 font-bold">{COMPANY_INFO.udyam}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Main Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider font-serif text-sm border-b border-navy-800 pb-2">
              Main Menu
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs font-medium">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Shop / Products</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services Offered</Link></li>
              <li><Link to="/business-supply" className="hover:text-cyan-400 transition-colors">Business / Bulk Supply</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider font-serif text-sm border-b border-navy-800 pb-2">
              Supply Categories
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>• Groceries, Grains & Dals (தானியங்கள் & பருப்பு)</li>
              <li>• Whole Spices & Condiments (மளிகை & மசாலா)</li>
              <li>• Spice Powders & Blends (மசாலா தூள்)</li>
              <li>• Edible Cooking Oils (Gold Winner, SVN, Chekku)</li>
              <li>• Dry Fruits & Nuts (முந்திரி, திராட்சை, ஏலக்காய்)</li>
              <li>• Hotel Aluminium Containers & Lids</li>
              <li>• Silver Wrapping Sheets & Butter Paper</li>
              <li>• Bio Compostable Cups & Meal Boxes</li>
              <li>• Stationery, Billing Books & Parcel Tapes</li>
            </ul>
          </div>

          {/* Col 4: Registered Address & Direct Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider font-serif text-sm border-b border-navy-800 pb-2">
              Contact & Depot
            </h4>
            
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {COMPANY_INFO.fullAddress}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {/* WhatsApp as first number */}
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-bold hover:text-cyan-300 font-mono"
                >
                  +91 {COMPANY_INFO.primaryPhone} (Primary WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300 font-mono">
                  +91 63835 95914, +91 93607 33242
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-cyan-300 font-mono"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Legal & Policy Links Row (As per section 2 & 10 of content doc) */}
      <div className="border-t border-navy-800 bg-navy-950/80 py-4">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-cyan-300 transition-colors whitespace-nowrap">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-cyan-300 transition-colors whitespace-nowrap">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/shipping-delivery" className="hover:text-cyan-300 transition-colors whitespace-nowrap">Shipping & Delivery Policy</Link>
            <span>•</span>
            <Link to="/returns-refunds" className="hover:text-cyan-300 transition-colors whitespace-nowrap">Returns, Refunds & Cancellations</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-cyan-300 transition-colors whitespace-nowrap">FAQ</Link>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-semibold whitespace-nowrap">
            <ShieldCheck className="w-4 h-4" />
            <span>FSSAI & GSTIN Registered Wholesale Supplier</span>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-900 bg-black/60 py-4">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} DELTA TRADERS. All Rights Reserved. Maduranthagam - 603306, Chengalpattu District.
          </div>
          <div>
            Wholesale & Retail Groceries, Food Essentials, Packaging Materials & Stationery
          </div>
        </div>
      </div>

    </footer>
  );
}
