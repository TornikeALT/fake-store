import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import styles from '../styles/Cart.module.css';

function Cart() {
  const {
    items,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
    clearCart,
    deleteFromCart,
  } = useContext(CartContext);

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleDeleteItemClick = itemId => {
    deleteFromCart(itemId);
  };

  return (
    <>
      {items.length === 0 && <h2>Your Shopping Cart is empty</h2>}
      {items.length !== 0 && (
        <div>
          <h2>Your Shopping Cart</h2>
          <div>
            {items.map(item => {
              return (
                <div key={item.id} className={styles.cart}>
                  <h2>{item.title}</h2>
                  <img src={item.image} alt="" />
                  <p>${item.price}</p>
                  <div className={styles.qty}>
                    <h3>Quantity</h3>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <p>1</p>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>

                  <p>Selected Quantity: {item.quantity}</p>
                  <button onClick={() => handleDeleteItemClick(item.id)}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <p>TOTAL PRICE: $ {calculateTotalPrice().toFixed(2)}</p>
        </div>
      )}
    </>
  );
}

export default Cart;
