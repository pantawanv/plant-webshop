import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  function handlePlaceOrder() {
    dispatch(clearCart());
    navigate("/confirmation");
  }

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      {cartItems.map((product) => (
        <div className="cart-item" key={product.id}>
          <h4>{product.name}</h4>
          <img className="cart-image" src={product.image} alt={product.name} />
          <p>
            {product.price} kr x {product.quantity} stk
          </p>
        </div>
      ))}
      <div className="checkout-summary">
        <h3 className="pt-4">Total Price: {totalPrice} kr</h3>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
export default Checkout;
