import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { getPlants } from "../api/plants";

function Shop() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getPlants()
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="section-title">All plants</h2>
      {loading && (
        <p className="loading">
          Please wait while we load the plants...we promise it's worth the wait!
          🌱
        </p>
      )}
      {error && <p>Error: {error}</p>}

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.default_image?.medium_url}
              alt={plant.common_name}
            />
            <h2>{plant.common_name}</h2>
            <p> 199 kr.</p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: plant.id,
                    name: plant.common_name,
                    image: plant.default_image?.regular_url,
                    price: 199,
                  }),
                )
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
