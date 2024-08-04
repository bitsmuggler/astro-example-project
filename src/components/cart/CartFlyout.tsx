import { useStore } from '@nanostores/react';
import { cart, isCartOpen } from '../../store';
import styles from './CartFlyout.module.css';

export default function CartFlyout() {
    const $isCartOpen = useStore(isCartOpen);
	const $cartItems = useStore(cart);

    function closeflyout(){
        isCartOpen.set(false);
    }

    return (
		<aside hidden={!$isCartOpen} className={styles.container}>
			{Object.values($cartItems).length ? (
				<ul role="list">
					{Object.values($cartItems).map((cartItem) => (
						<li key={cartItem.isbn}>
							<div>
								<h3>{cartItem.name}</h3>
								<p>Quantity: {cartItem.quantity}</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>Your cart is empty!</p>
			)}
            <button onClick={closeflyout}>Close cart</button>
		</aside>
	);

}