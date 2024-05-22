import ItemDetails from '@/components/item-details';
import { TypographyH1 } from '@/components/ui/typography-h1';

export default function ItemPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <TypographyH1>Item Details</TypographyH1>
      <ItemDetails id={params.slug} />
    </>
  );
}
