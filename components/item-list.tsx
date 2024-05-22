import Item from './item';
import { MENU_ITEMS } from '../utils/menu-items';

export default function ItemList() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {MENU_ITEMS.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
