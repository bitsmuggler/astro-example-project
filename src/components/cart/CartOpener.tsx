import { useStore } from '@nanostores/react';
import { cart, isCartOpen } from '../../store';

export default function CartOpener() {
    const $cartItems = useStore(cart);
    const $isCartOpen = useStore(isCartOpen);

    const openCart = () => {
        isCartOpen.set(true);
    }

    return (
        <div>
            Products in the Cart: {Object.values($cartItems).length ?? 0}
            <button hidden={$isCartOpen} onClick={openCart}>Open Cart</button>
        </div>
    );
}