import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link href="/cart">
      <ShoppingCartIcon className="text-red-700" width={32} />
    </Link>
  );
}
