'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { MenuItem } from './menu-items';
import { uid } from 'uid';

const STORAGE_KEY = 'CART';

export type CartStorageItem = {
  cartItemId: string;
  qty: number;
  item: MenuItem;
};

type CartContextValue = {
  items: CartStorageItem[];
  add: (item: MenuItem) => void;
  updateQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextValue>({ items: [] } as unknown as CartContextValue);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartStorageItem[]>([]);

  useEffect(() => {
    setItems(getStorageItems());
  }, []);

  const add = (item: MenuItem) => {
    const newItems = [...items, { cartItemId: uid(), item, qty: 1 }];

    setItems(newItems);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const updateQty = (id: string, qty: number) => {
    const newItems = [...items];
    newItems.find(item => item.cartItemId === id)!.qty = qty;

    setItems(newItems);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const remove = (id: string) => {
    const newItems = items.filter(item => item.cartItemId !== id);

    setItems(newItems);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  return (
    <CartContext.Provider value={{ items, add, updateQty, remove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartStorage = () => useContext(CartContext);

function getStorageItems(): CartStorageItem[] {
  if (typeof window === 'undefined') return [];

  return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
}
