import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { removeItemFromCart, clearCart } from './cartSlice';

const Cart = ({ cartItems, removeItemFromCart, clearCart }) => {
  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)} each
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart, // Map the cart state to props
});

const mapDispatchToProps = {
  removeItemFromCart, // Map removeItemFromCart action to props
  clearCart, // Map clearCart action to props
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

