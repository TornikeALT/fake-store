import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import styles from '../styles/Cart.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import Slider from './Slider';

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

  const calculateTotalItems = () => {
    let total = 0;
    items.forEach(item => {
      return (total += item.quantity);
    });
    return total;
  };

  return (
    <>
      {items.length === 0 && (
        <h2 style={{ textAlign: 'center', padding: '10rem 0' }}>
          Your Shopping Cart is empty
        </h2>
      )}
      {items.length !== 0 && (
        <div className={styles.container}>
          <h2 className={styles.cart_title}>
            Your Cart ({calculateTotalItems()} items)
          </h2>
          <div className={styles.dashedBottom}>
            {items.map(item => {
              return (
                <div key={item.id} className={styles.cart}>
                  <div>
                    <img src={item.image} alt="" className={styles.cart_img} />
                  </div>

                  <div className={styles.cart_content}>
                    <p className={styles.item_title}>{item.title}</p>

                    <div className={styles.qty}>
                      <h3>Quantity</h3>
                      <button onClick={() => removeFromCart(item.id)}>-</button>

                      <p className={styles.quantity_chosen}> {item.quantity}</p>

                      <button onClick={() => addToCart(item)}>+</button>
                      <p>Price: ${item.price}</p>
                    </div>

                    <div className={styles.trash_icon}>
                      <p>Remove item:</p>
                      <BsFillTrashFill
                        className={styles.trash}
                        size={20}
                        color="purple"
                        onClick={() => handleDeleteItemClick(item.id)}
                      >
                        X
                      </BsFillTrashFill>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.checkout}>
            <h2 className={styles.total_price}>
              TOTAL PRICE: $ {calculateTotalPrice().toFixed(2)}
            </h2>
            <button>Go to Checkout</button>
          </div>
        </div>
      )}
      <Slider />
    </>
  );
}

export default Cart;
