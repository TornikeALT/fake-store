import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, count) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    const quantityToAdd = count > 0 ? count : 1;

    if (existingItem) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantityToAdd }]);
    }
  };

  const removeFromCart = itemId => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    if (existingItem.quantity > 1) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      const updatedItems = cartItems.filter(cartItem => cartItem.id !== itemId);
      setCartItems(updatedItems);
    }
  };
  const clearCart = () => {
    setCartItems([]);
    setTotalItems(0);
    setTotalPrice(0);
  };

  const deleteFromCart = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const cart = {
    items: cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalItems,
    totalPrice,
    clearCart,
  };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;
