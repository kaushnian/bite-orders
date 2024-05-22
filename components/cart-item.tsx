import { MENU_ITEMS } from '@/data/menu-items';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from './ui/button';

type CartItemProps = {
  id: string;
};

export default function CartItem({ id }: CartItemProps) {
  const item = MENU_ITEMS.find(item => item.id === id);

  if (!item) return notFound();

  return (
    <div className="flex items-center gap-4 w-full">
      <Image width={128} height={85} src={item.imageUrl} alt={item.name} />

      <div>
        <h2 className="text-lg font-semibold text-amber-600">{item.name}</h2>

        <p className="italic mb-2">{item.description}</p>

        <strong className="font-semibold text-red-800">{item.price / 100}$</strong>
      </div>

      <Button className="ml-auto">Add To Cart</Button>
    </div>
  );
}
