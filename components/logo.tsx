import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <BuildingStorefrontIcon className="text-amber-600" width={64} />
    </Link>
  );
}
