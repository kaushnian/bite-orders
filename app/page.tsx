import ItemList from '@/components/item-list';
import { TypographyH1 } from '@/components/ui/typography-h1';

export default function Home() {
  return (
    <main className="">
      <TypographyH1>Menu</TypographyH1>

      <ItemList />
    </main>
  );
}
