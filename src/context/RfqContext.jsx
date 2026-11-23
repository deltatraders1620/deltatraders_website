import React, { createContext, useContext, useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/products';

const RfqContext = createContext();

export function RfqProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('delta_rfq_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return [
      {
        id: 'toor-dal',
        name: 'Sortex Polished Toor Dal',
        tamilName: 'துவரம் பருப்பு (Toor Dal)',
        unitWeight: '30kg / 50kg Bags',
        category: 'groceries',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
        quantity: 5,
      },
      {
        id: 'gold-winner-oil',
        name: 'Gold Winner Refined Sunflower Oil (1 Box)',
        tamilName: 'கோல்ட் வின்னர் (Gold Winner 1 Box)',
        unitWeight: '1 Box / 15L Tin',
        category: 'oils',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
        quantity: 2,
      },
      {
        id: 'aluminium-container-750',
        name: 'Aluminium Container 750ml (100 pcs)',
        tamilName: 'அலுமினியம் கன்டெய்னர் 750ml',
        unitWeight: '100 pcs / Pack',
        category: 'packaging',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        quantity: 3,
      }
    ];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('delta_rfq_cart', JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          tamilName: product.tamilName || product.name,
          unitWeight: product.unitWeight || product.lotSize,
          category: product.category,
          image: product.image,
          quantity: qty,
        },
      ];
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totalUnits = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate standard WhatsApp message
  const createWhatsAppUrl = (customer = {}) => {
    let msg = `*DELTA TRADERS — PRODUCT ENQUIRY & BULK QUOTE*\n`;
    msg += `------------------------------------\n`;
    if (customer.name) msg += `Name: ${customer.name}\n`;
    if (customer.phone) msg += `Phone: ${customer.phone}\n`;
    if (customer.email) msg += `Email: ${customer.email}\n`;
    if (customer.businessType) msg += `Order / Business Type: ${customer.businessType}\n`;
    if (customer.location) msg += `Delivery Location: ${customer.location}\n`;
    msg += `------------------------------------\n`;
    msg += `*Requested Products & Quantities:*\n`;
    if (cartItems.length === 0) {
      msg += `(General Product Availability & Price Enquiry)\n`;
    } else {
      cartItems.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.name} (${item.unitWeight})\n`;
        msg += `   Qty: ${item.quantity} units\n`;
      });
    }
    if (customer.notes) {
      msg += `------------------------------------\n`;
      msg += `Notes / Remarks: ${customer.notes}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please share current availability, wholesale rates, and delivery timeline.`;

    return `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(msg)}`;
  };

  // Generate standard Email (mailto:) message
  const createEmailUrl = (customer = {}) => {
    const subject = encodeURIComponent(
      `Delta Traders Product & Bulk Supply Enquiry - ${customer.name || 'New Customer'}`
    );
    let body = `Hello Delta Traders Team,\n\n`;
    body += `I would like to enquire about the following products and bulk supply availability:\n\n`;
    body += `--- CUSTOMER DETAILS ---\n`;
    body += `Name: ${customer.name || 'Not provided'}\n`;
    body += `Phone / WhatsApp: ${customer.phone || 'Not provided'}\n`;
    body += `Email: ${customer.email || 'Not provided'}\n`;
    body += `Business / Order Type: ${customer.businessType || 'Wholesale / Retail'}\n`;
    body += `Delivery Location: ${customer.location || 'Chengalpattu District'}\n\n`;
    body += `--- REQUESTED PRODUCTS ---\n`;
    if (cartItems.length === 0) {
      body += `General Product Availability & Price Enquiry\n`;
    } else {
      cartItems.forEach((item, idx) => {
        body += `${idx + 1}. ${item.name} (${item.unitWeight}) - Qty: ${item.quantity} units\n`;
      });
    }
    if (customer.notes) {
      body += `\nAdditional Notes: ${customer.notes}\n`;
    }
    body += `\nPlease reply to this email or contact me on WhatsApp with the quotation.\n\nThank you,\n${customer.name || 'Customer'}`;

    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <RfqContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isDrawerOpen,
        setIsDrawerOpen,
        totalUnits,
        createWhatsAppUrl,
        createEmailUrl,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within an RfqProvider');
  }
  return context;
}
