import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RfqDrawer from './components/RfqDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { RfqProvider } from './context/RfqContext';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <RfqProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        <main className="flex-grow">
          {activePage === 'home' && <Home setActivePage={setActivePage} />}
          {activePage === 'about' && <About />}
          {activePage === 'services' && <Services setActivePage={setActivePage} />}
          {activePage === 'contact' && <Contact />}
        </main>

        <Footer setActivePage={setActivePage} />
        <WhatsAppButton />
        <RfqDrawer />
      </div>
    </RfqProvider>
  );
}
