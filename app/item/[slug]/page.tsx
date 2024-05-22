import CartItem from '@/components/cart-item';

export default function ItemPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <CartItem id={params.slug} />
    </>
  );
}
