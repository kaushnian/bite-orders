import { MenuItem } from '@/data/menu-items';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import Link from 'next/link';

type ItemProps = {
  item: MenuItem;
};

export default function Item({ item }: ItemProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <Card className="text-center">
        <CardHeader>
          <Image className="mx-auto" width={128} height={85} src={item.imageUrl} alt={item.name} />
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="text-lg text-amber-600">{item.name}</h2>
            <strong className="font-semibold text-red-800">{item.price / 100}$</strong>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
