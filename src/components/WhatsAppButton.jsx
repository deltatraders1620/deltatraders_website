import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden md:flex items-center bg-brand-950/95 text-cyan-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-cyan-500/30 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-ping" />
        Chat on WhatsApp: 9087752120
      </div>
      <a
        href="https://wa.me/919087752120?text=Hi%20Delta%20Traders,%20I%20want%20to%20inquire%20about%20bulk%20grocery%20pricing%20and%20supplies."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-600 via-emerald-500 to-teal-400 hover:from-cyan-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20"
      >
        <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
