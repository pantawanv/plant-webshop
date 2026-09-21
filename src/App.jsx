import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from './features/cart/cartSlice'
import products from './data/products'
import Cart from './components/Cart'
import { Link, Route, Routes } from 'react-router-dom'

function Home() {

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)

  const cartQuantity = cartItems.reduce((total, product) => total + product.quantity, 0)

  return (
    <div>

      <div className="header">

      <h1>Plant Webshop🪴</h1>

      <Link to="/cart" className="cart-link">
        Kurv 🛒 ({cartQuantity})
      </Link>

      </div>
      
      <h2 className="section-title">All plants</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>{product.price} kr.</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Tilføj til kurv
            </button>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>© 2026 Plant Webshop. All rights reserved.</p>
      </footer>

      
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
