import { atom, map } from 'nanostores';

export type CartItem = {
    isbn: string;
    name: string;
    price: string;
    quantity: number;
};

export const isCartOpen = atom(false);

export type CartItemDisplayItem = Pick<CartItem, | 'isbn' | 'name' | 'price'>;

export const cart = map<Record<string, CartItem>>({});

export function addCartItem({isbn, name, price}: CartItemDisplayItem) {
  const existingEntry = cart.get()[isbn];
	if (existingEntry) {
		cart.setKey(isbn, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cart.setKey(isbn, {
			isbn,
			name,
      price,
			quantity: 1,
		});
	}
}