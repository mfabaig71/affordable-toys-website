import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Remote Control Car", price: 1800 },
    { id: 2, name: "Building Blocks Set", price: 2200 },
    { id: 3, name: "Kids Puzzle Game", price: 1200 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const delivery = subtotal >= 2500 ? 0 : cart.length > 0 ? 500 : 0;
  const total = subtotal + delivery;

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1 style={{ color: "#ff4081" }}>Affordable Toys - Karachi</h1>
      <p>Delivery Rs 500 | Free above Rs 2500</p>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <strong>{p.name}</strong> - Rs {p.price}
          <button onClick={() => addToCart(p)} style={{ marginLeft: 10 }}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} - Rs {item.price}
              <button
                onClick={() => removeFromCart(index)}
                style={{ marginLeft: 10 }}
              >
                Remove
              </button>
            </div>
          ))}

          <p>Subtotal: Rs {subtotal}</p>
          <p>Delivery: Rs {delivery}</p>
          <h3>Total: Rs {total}</h3>

          <a
            href={`https://wa.me/31618880760?text=Hello Affordable Toys, I want to confirm my order. Total: Rs ${total}`}
            target="_blank"
          >
            Confirm Order on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
