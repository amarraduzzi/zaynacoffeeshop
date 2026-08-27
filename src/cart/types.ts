// Shared types for the /menu ordering cart. Kept separate from the display
// menu's types (src/content/menu-highlights.ts) because this shape needs a
// numeric price and stable ids to be cart-able — see order-menu.ts for why
// the data is duplicated here rather than shared directly.

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  priceMAD: number;
  image?: string;
  tags?: string[];
  vegan?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface CartLine {
  lineId: string;
  item: MenuItem;
  quantity: number;
  note?: string;
}

export type DiningOption = 'takeaway' | 'delivery';

export interface CheckoutInfo {
  customerName: string;
  diningOption: DiningOption;
  deliveryAddress?: string;
  phone: string;
  notes?: string;
}
