import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartLine, MenuItem } from './types';

interface CartContextValue {
  lines: CartLine[];
  addItem: (item: MenuItem) => void;
  incrementLine: (lineId: string) => void;
  decrementLine: (lineId: string) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
  totalMAD: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'zayna-cart-v1';

function loadInitialLines(): CartLine[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : [];
  } catch {
    // Corrupt or blocked storage shouldn't break the page — start empty.
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  // Hydrate from localStorage after mount (avoids SSR/client mismatch —
  // Astro pre-renders this island's initial markup on the server, which has
  // no access to the browser's localStorage).
  useEffect(() => {
    setLines(loadInitialLines());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Best-effort only — a full/blocked storage shouldn't break ordering.
    }
  }, [lines]);

  const addItem = (item: MenuItem) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id);
      if (existing) {
        return prev.map((l) => (l.lineId === existing.lineId ? { ...l, quantity: l.quantity + 1 } : l));
      }
      return [...prev, { lineId: `${item.id}-${Date.now()}`, item, quantity: 1 }];
    });
  };

  const incrementLine = (lineId: string) => {
    setLines((prev) => prev.map((l) => (l.lineId === lineId ? { ...l, quantity: l.quantity + 1 } : l)));
  };

  const decrementLine = (lineId: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.lineId === lineId ? { ...l, quantity: l.quantity - 1 } : l))
        .filter((l) => l.quantity > 0)
    );
  };

  const removeLine = (lineId: string) => setLines((prev) => prev.filter((l) => l.lineId !== lineId));

  const clearCart = () => setLines([]);

  const totalMAD = useMemo(() => lines.reduce((sum, l) => sum + l.item.priceMAD * l.quantity, 0), [lines]);
  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  return (
    <CartContext.Provider
      value={{ lines, addItem, incrementLine, decrementLine, removeLine, clearCart, totalMAD, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
