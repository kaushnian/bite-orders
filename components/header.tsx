import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import Cart from './cart';
import Logo from './logo';

export default function Header() {
  return (
    <div className="flex justify-between mb-8 py-8 items-center">
      <Logo />
      <Cart />
    </div>
  );
}
