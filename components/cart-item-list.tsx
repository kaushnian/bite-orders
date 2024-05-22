'use client';

import { useCartStorage } from '@/utils/cart-context';
import CartItem from './cart-item';

export default function CartItemList() {
  const { items } = useCartStorage();

  if (items.length === 0) return 'Cart is empty';

  return (
    <ul>
      {items.map(item => (
        <CartItem key={item.cartItemId} cartItem={item} />
      ))}
    </ul>
  );
}
