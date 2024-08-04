
import type { FormEvent } from "react";
import { addCartItem, isCartOpen, type CartItemDisplayItem } from "../../store";

type Props = {
	item: CartItemDisplayItem;
};

export default function AddToCart({item}: Props) {

    function addToCart(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Add to cart!');
        isCartOpen.set(true);
        addCartItem(item);
    }

    return <form onSubmit={addToCart}><button type="submit">Add to cart</button></form>;
}