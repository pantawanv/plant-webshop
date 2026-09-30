import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="header-cart">
        <h1>Cart 🛒</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty 🥺</p>
      ) : (
        <>
          {cartItems.map((product) => (
            <div className="cart-item" key={product.id}>
              <h4>{product.name}</h4>

              <img
                className="cart-image"
                src={product.image}
                alt={product.name}
              />

              <p>{product.price} kr.</p>

              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(product.id))}>
                  -
                </button>

                <span>{product.quantity}</span>

                <button onClick={() => dispatch(increaseQuantity(product.id))}>
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Fjern fra kurv
                </button>
              </div>
            </div>
          ))}

          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Go to checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
