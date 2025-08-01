import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart(); 
  const navigate = useNavigate();
  const location = useLocation();

  
  const selectedIds = location.state?.selectedIds || [];

  
  const checkoutItems =
    selectedIds.length > 0
      ? cart.filter((item) => selectedIds.includes(item.id))
      : cart;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    accountNumber: "",
    pin: "",
  });

  const totalPrice = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const removeOrderedItems = () => {
      checkoutItems.forEach((item) => removeFromCart(item.id)); 
    };

    if (paymentMethod === "cod") {
      Swal.fire({
        icon: "success",
        title: "Order Confirmed!",
        text: "Your order has been placed with Cash on Delivery.",
        confirmButtonColor: "#6366f1",
      }).then(() => {
        removeOrderedItems();
        navigate("/");
      });
    } else {
      const isCard = paymentMethod === "card";
      const isMobile = paymentMethod === "bkash" || paymentMethod === "nagad";

      const isValid =
        (isCard &&
          paymentDetails.cardNumber &&
          paymentDetails.expiry &&
          paymentDetails.cvv) ||
        (isMobile && paymentDetails.accountNumber && paymentDetails.pin);

      if (!isValid) {
        Swal.fire({
          icon: "error",
          title: "Incomplete Payment Info",
          text: "Please provide all required payment details.",
          confirmButtonColor: "#f87171",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Payment Successful!",
        text: `Your order has been placed using ${paymentMethod.toUpperCase()}.`,
        confirmButtonColor: "#22c55e",
      }).then(() => {
        removeOrderedItems();
        navigate("/");
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {/* Billing Form */}
      <form
        onSubmit={handlePlaceOrder}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Billing Info</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          placeholder="Phone Number"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          placeholder="Shipping Address"
          rows="4"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>

        {/* Payment Method */}
        <div className="space-y-2">
          <p className="font-semibold text-gray-700">Select Payment Method:</p>
          <div className="flex flex-col gap-2">
            {["cod", "card", "bkash", "nagad"].map((method) => (
              <label key={method} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <span className="capitalize">
                  {method === "cod"
                    ? "Cash on Delivery"
                    : method === "card"
                    ? "Credit/Debit Card"
                    : method === "bkash"
                    ? "bKash"
                    : "Nagad"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Conditional Payment Fields */}
        {paymentMethod === "card" && (
          <div className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={paymentDetails.cardNumber}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
              }
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={paymentDetails.expiry}
                onChange={(e) =>
                  setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={paymentDetails.cvv}
                onChange={(e) =>
                  setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
          <div className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Account/Mobile Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={paymentDetails.accountNumber}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="PIN"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={paymentDetails.pin}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, pin: e.target.value })
              }
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Confirm & Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-gray-50 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <ul className="divide-y divide-gray-200">
          {checkoutItems.map((item) => (
            <li key={item.id} className="py-4 flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-gray-700">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-gray-800">
                ৳{(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t pt-4 text-xl font-bold text-right text-gray-800">
          Total: <span className="text-green-600">৳{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
