import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Cart() {
  return (
    <a href="/cart">
      <ShoppingCartIcon className="text-red-700" width={32} />
    </a>
  );
}
