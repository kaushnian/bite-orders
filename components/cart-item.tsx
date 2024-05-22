import { CartStorageItem, useCartStorage } from '@/utils/cart-context';
import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChangeEvent } from 'react';

type CartItemProps = {
  cartItem: CartStorageItem;
};

export default function CartItem({ cartItem }: CartItemProps) {
  const { updateQty, remove } = useCartStorage();

  const changeQty = (e: ChangeEvent<HTMLInputElement>) => {
    updateQty(cartItem.cartItemId, Number(e.target.value));
  };

  return (
    <li>
      <div className="flex items-center gap-4 w-full mb-4">
        <Image width={128} height={85} src={cartItem.item.imageUrl} alt={cartItem.item.name} />
        <div>
          <h2 className="text-lg text-amber-600">{cartItem.item.name}</h2>
          <strong className="font-semibold text-red-800">${cartItem.item.price / 100}</strong>

          <div className="flex gap-4">
            <Input type="number" value={cartItem.qty} onChange={changeQty} />
            <Button variant="secondary" onClick={() => remove(cartItem.cartItemId)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
