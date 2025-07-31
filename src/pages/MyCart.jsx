import React from "react";
import { useCart } from "../context/CartContext";

const MyCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />

                {/* Details */}
                <div className="flex-1 mx-4">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-2 font-semibold text-gray-800">
                    Price: ৳{item.price.toFixed(2)} × {item.quantity} ={" "}
                    <span className="text-green-600">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-right font-bold text-2xl">
            Total: ৳{totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
