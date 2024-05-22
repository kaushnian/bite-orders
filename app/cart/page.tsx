import CartItemList from '@/components/cart-item-list';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography-h1';
import Link from 'next/link';

export default function Cart() {
  return (
    <>
      <div className="flex justify-between">
        <TypographyH1>Cart</TypographyH1>
        <Button asChild>
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>

      <CartItemList />
    </>
  );
}
