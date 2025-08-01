import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const [selectedIds, setSelectedIds] = useState(() =>
    cart.map((item) => item.id)
  );

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === cart.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cart.map((item) => item.id));
    }
  };

  const totalSelectedPrice = cart
    .filter((item) => selectedIds.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-gray-800">
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Select All */}
          <div className="mb-4 flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedIds.length === cart.length}
              onChange={toggleSelectAll}
              id="selectAll"
              className="w-5 h-5 cursor-pointer accent-indigo-600"
            />
            <label
              htmlFor="selectAll"
              className="text-gray-700 text-base cursor-pointer select-none"
            >
              Select All
            </label>
          </div>

          <ul className="space-y-6">
            {cart.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <li
                  key={item.id}
                  className={`flex flex-col md:flex-row md:items-center justify-between border rounded-xl p-4 shadow-sm hover:shadow-md transition ${
                    isSelected ? "bg-indigo-50" : "bg-white"
                  }`}
                >
                  <div className="flex items-center w-full md:w-auto gap-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(item.id)}
                      className="w-5 h-5 accent-indigo-600"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 mt-4 md:mt-0 md:ml-4">
                    <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 font-semibold text-gray-700">
                      Price: ৳{item.price.toFixed(2)} × {item.quantity} ={" "}
                      <span className="text-green-600 font-bold">
                        ৳{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col items-end gap-4">
            <div className="text-right font-bold text-2xl text-gray-800">
              Selected Total:{" "}
              <span className="text-green-600">৳{totalSelectedPrice.toFixed(2)}</span>
            </div>

            <button
              disabled={selectedIds.length === 0}
              onClick={() => navigate("/checkout", { state: { selectedIds } })}
              className={`${
                selectedIds.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white px-6 py-3 rounded-lg font-semibold transition`}
            >
              Proceed to Checkout 
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
