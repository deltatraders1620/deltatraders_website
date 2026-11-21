import React, { createContext, useContext, useState, useEffect } from 'react';

const RfqContext = createContext();

export function RfqProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 'ponni-deluxe',
      name: 'Deluxe Ponni Boiled Rice',
      unitWeight: '25kg Bag',
      weightKg: 25,
      deltaPrice: 1450,
      marketPrice: 1820,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
      quantity: 10,
    },
    {
      id: 'sunflower-oil-tin',
      name: 'Refined Sunflower Cooking Oil',
      unitWeight: '15L Sealed Tin',
      weightKg: 14,
      deltaPrice: 1950,
      marketPrice: 2380,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
      quantity: 5,
    }
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (product, qty = 5) => {
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
          unitWeight: product.unitWeight || product.lotSize,
          weightKg: product.weightKg || 25,
          deltaPrice: product.deltaPrice,
          marketPrice: product.marketPrice,
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

  const totalBags = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWeightKg = cartItems.reduce(
    (acc, item) => acc + item.quantity * (item.weightKg || 25),
    0
  );
  const totalDeltaPrice = cartItems.reduce(
    (acc, item) => acc + item.deltaPrice * item.quantity,
    0
  );
  const totalMarketPrice = cartItems.reduce(
    (acc, item) => acc + item.marketPrice * item.quantity,
    0
  );
  const totalSavings = totalMarketPrice - totalDeltaPrice;

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
        totalBags,
        totalWeightKg,
        totalDeltaPrice,
        totalMarketPrice,
        totalSavings,
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
