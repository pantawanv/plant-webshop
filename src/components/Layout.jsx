import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </div>

          <div className="nav-right">
            {location.pathname === "/cart" ? (
              <NavLink to="/checkout">Checkout</NavLink>
            ) : (
              <NavLink to="/cart">Cart 🛒({cartQuantity})</NavLink>
            )}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
