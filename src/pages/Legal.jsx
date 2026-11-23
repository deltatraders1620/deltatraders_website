import React from 'react';
import { ShieldCheck, FileText, Truck, RotateCcw, AlertCircle, Building2, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Link } from 'react-router-dom';

export default function Legal({ page = 'privacy' }) {
  const renderContent = () => {
    switch (page) {
      case 'privacy':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Last updated: November 2026 • Delta Traders, Maduranthagam
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>DELTA TRADERS</strong> (referred to as “we”, “our”, or “us”), we respect the privacy of our website visitors, individual retail customers, and business supply partners. This Privacy Policy outlines how we collect, handle, protect, and use your personal information when you browse our website, place enquiries, or procure wholesale grocery and packaging products.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information provided voluntarily by you through our online forms, RFQ basket submissions, WhatsApp inquiries, or phone calls:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Contact details:</strong> Name, phone number, WhatsApp number, email address, and billing/shipping address.</li>
                <li><strong>Business information:</strong> Company name, shop name, catering enterprise, GSTIN number (for tax invoicing), and delivery location.</li>
                <li><strong>Order & Enquiry details:</strong> Item lists, estimated volumes, pack size preferences, and delivery schedules.</li>
                <li><strong>Technical data:</strong> Non-personal browser information, IP address, and cookie identifiers used strictly for website functionality and theme preferences.</li>
              </ul>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                2. Purpose of Collection & Use
              </h2>
              <p>Your details are utilized strictly for legitimate business operations:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Preparing and delivering formal wholesale price quotations and proforma invoices.</li>
                <li>Processing and fulfilling bulk grocery, packaging material, and stationery orders.</li>
                <li>Coordinating delivery schedules and communicating with vehicle drivers across Chengalpattu district.</li>
                <li>Generating statutory GST tax invoices and accounting compliance records.</li>
                <li>Responding to customer service enquiries and post-delivery assistance.</li>
              </ul>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                3. Data Security & Storage
              </h2>
              <p>
                We do not sell, rent, or trade your personal or business information to third-party marketing brokers. Data is accessible solely to authorized personnel responsible for order processing, billing, and fulfillment. We implement standard security measures to protect against unauthorized access or disclosure.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                4. Customer Rights & Inquiries
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal contact records by contacting our data desk at{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-600 dark:text-cyan-400 font-bold underline">
                  {COMPANY_INFO.email}
                </a>.
              </p>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
                Terms & Conditions
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Governing Business Operations & Trade Terms • Delta Traders
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                These Terms and Conditions govern all commercial interactions, wholesale quotations, retail orders, and supply arrangements with <strong>DELTA TRADERS</strong>, operating from Maduranthagam - 603306, Chengalpattu District, Tamil Nadu.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                1. Business Identity & Registration
              </h2>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono space-y-1">
                <div>• Legal Business Name: DELTA TRADERS</div>
                <div>• Registered Address: {COMPANY_INFO.fullAddress}</div>
                <div>• GSTIN: {COMPANY_INFO.gstin}</div>
                <div>• FSSAI License: {COMPANY_INFO.fssai}</div>
                <div>• Udyam MSME: {COMPANY_INFO.udyam}</div>
              </div>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                2. Product Descriptions & Market Availability
              </h2>
              <p>
                Delta Traders supplies groceries, food essentials, whole spices, edible oils, packaging materials, and office stationery. Agricultural food commodities (rice, pulses, spices, edible oils) are subject to regional mandi price movements and harvest yields. Displayed catalog items and pack sizes represent our operational catalog. Formal binding rates are confirmed via written quotation or order confirmation challan.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                3. Order Acceptance & Invoicing
              </h2>
              <p>
                An order is deemed accepted once our trade desk verifies stock availability, delivery location logistics, and payment terms, and issues an official order confirmation or invoice. All official deliveries are accompanied by a GST-compliant tax invoice showing applicable SGST/CGST rates.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                4. Payment Terms
              </h2>
              <p>
                Unless established under a formal credit agreement, orders are processed against advance payment (NEFT / RTGS / UPI / Net Banking) or approved cash/UPI on delivery for local route deliveries.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                Any dispute or claim arising out of trade dealings shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Chengalpattu / Tamil Nadu.
              </p>
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
                Shipping & Delivery Policy
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Fulfillment Guidelines across Chengalpattu District and Surrounding Regions
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>DELTA TRADERS</strong>, we operate a dedicated delivery network designed for high-dependability fulfillment to commercial kitchens, marriage halls, retail grocery stores, and households.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                1. Serviceable Delivery Areas
              </h2>
              <p>
                Our core delivery coverage focuses on <strong>Chengalpattu District</strong> and adjacent towns:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Local Zone:</strong> Maduranthagam, Kadaperi, Padalam, Vedanthangal, Melmaruvathur, Acharapakkam.</li>
                <li><strong>District Zone:</strong> Chengalpattu Town, Paranur, Singaperumal Koil, Maraimalai Nagar, Guduvanchery.</li>
                <li><strong>Extended Route Supply:</strong> Bulk institutional orders across Kanchipuram and South Chennai corridors upon prior arrangement.</li>
              </ul>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                2. Delivery Schedules & Morning Dispatch
              </h2>
              <p>
                For hotel kitchens and wedding catering clients, we offer early morning dawn deliveries (commencing 5:30 AM to 8:00 AM) to ensure breakfast and event prep are never delayed. Standard retail and general business deliveries take place between 9:00 AM and 7:00 PM, Monday through Saturday.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                3. Delivery Charges & Thresholds
              </h2>
              <p>
                Delivery charges vary based on order volume, total tonnage, and distance from our Maduranthagam depot. Bulk orders meeting minimum lot thresholds qualify for subsidized or free depot-to-door delivery. Exact freight charges (if applicable) are communicated transparently before order confirmation.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                4. Inspection upon Receiving
              </h2>
              <p>
                We encourage buyers or their kitchen representatives to verify bag counts, container seal integrity, and invoice challans immediately upon truck arrival.
              </p>
            </div>
          </div>
        );

      case 'returns':
      case 'cancellation':
      default:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
                Returns, Refunds & Cancellation Policy
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Clear & Fair Guidelines for Retail and Wholesale Purchasers
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Delta Traders is committed to delivering first-grade food essentials and genuine packaging supplies. Please review our policy regarding order adjustments, cancellations, and claims.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                1. Order Cancellation Cut-Off
              </h2>
              <p>
                Orders may be cancelled or modified prior to vehicle loading and dispatch from our Maduranthagam facility. Once a delivery vehicle has been loaded or dispatched, order cancellation may incur nominal handling and two-way transportation fees.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                2. Eligible Returns & Claims Timeline
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Damaged or Incorrect Items:</strong> If any parcel box, oil container, or food pack is visibly damaged or contains an incorrect variant, notify our team within <strong>24 to 48 hours</strong> of receipt with photo documentation.
                </li>
                <li>
                  <strong>Packaging & Stationery:</strong> Unopened packaging boxes, silver containers, paper rolls, and stationery items in their original factory packs are eligible for return or exchange within 3 days.
                </li>
                <li>
                  <strong>Unopened Banquet Grocery Bags:</strong> For authorized wedding catering contracts, sealed and intact 25kg/50kg commodity bags may be eligible for return adjustment within 48 hours following the event, as pre-agreed in the supply contract.
                </li>
              </ul>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                3. Non-Returnable Items
              </h2>
              <p>
                Due to food safety (FSSAI) compliance, opened or partially consumed food grain sacks, unsealed edible oil tins, and unpacked culinary sauces cannot be returned once unsealed.
              </p>

              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white pt-4">
                4. Refund Processing Timeline
              </h2>
              <p>
                Approved refunds are credited to the customer's bank account or original payment method within <strong>5 to 7 business days</strong> following inspection and approval of the returned goods.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-12">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Navigation tabs for legal policies */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-200 dark:border-slate-800">
          <Link
            to="/privacy-policy"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              page === 'privacy'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              page === 'terms'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/shipping-delivery"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              page === 'shipping'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            Shipping & Delivery
          </Link>
          <Link
            to="/returns-refunds"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              page === 'returns' || page === 'cancellation'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            Returns, Refunds & Cancellation
          </Link>
        </div>

        {/* Content Body */}
        <div className="py-8 bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mt-6">
          {renderContent()}
        </div>

        {/* Business Contact Footer Box */}
        <div className="mt-8 p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-slate-900 dark:text-white">
              Delta Traders • Official Trade & Compliance Office
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              {COMPANY_INFO.address}, Chengalpattu District, Tamil Nadu
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold inline-flex items-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp: {COMPANY_INFO.primaryPhoneFormatted}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white font-bold inline-flex items-center gap-1.5 shadow"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Support</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
