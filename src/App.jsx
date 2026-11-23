import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RfqDrawer from './components/RfqDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import BusinessSupply from './pages/BusinessSupply';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Legal from './pages/Legal';
import { RfqProvider } from './context/RfqContext';
import { ThemeProvider } from './context/ThemeContext';

// Scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <RfqProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans transition-colors duration-200">
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                {/* Real URLs as requested for Google SEO & Sitemap Indexing */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Shop />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/services" element={<Services />} />
                <Route path="/business-supply" element={<BusinessSupply />} />
                <Route path="/bulk-orders" element={<BusinessSupply />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                
                {/* Legal & Policy Pages */}
                <Route path="/privacy-policy" element={<Legal page="privacy" />} />
                <Route path="/terms" element={<Legal page="terms" />} />
                <Route path="/shipping-delivery" element={<Legal page="shipping" />} />
                <Route path="/returns-refunds" element={<Legal page="returns" />} />
                <Route path="/cancellation-policy" element={<Legal page="cancellation" />} />

                {/* Catch-all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            <Footer />
            <WhatsAppButton />
            <RfqDrawer />
          </div>
        </BrowserRouter>
      </RfqProvider>
    </ThemeProvider>
  );
}
