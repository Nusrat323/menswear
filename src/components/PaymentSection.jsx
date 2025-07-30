import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMobileAlt,
  FaLock,
  FaMoneyBillWave,
} from "react-icons/fa";

const PaymentSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-gray-100 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Flexible & Secure Payment Options
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Enjoy seamless checkout with trusted and diverse payment methods tailored for your convenience.
        </p>
        <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-500">
          <FaCcVisa className="text-5xl text-indigo-500 mb-6 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Card Payments</h3>
          <p className="text-gray-600 text-sm">We accept Visa, Mastercard, American Express, and more.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-green-500">
          <FaMobileAlt className="text-5xl text-green-500 mb-6 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Banking</h3>
          <p className="text-gray-600 text-sm">bKash, Nagad, Rocket – pay instantly and securely via mobile.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-yellow-500">
          <FaMoneyBillWave className="text-5xl text-yellow-500 mb-6 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Cash on Delivery</h3>
          <p className="text-gray-600 text-sm">Pay after receiving your items — no advance payment needed.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500">
          <FaPaypal className="text-5xl text-blue-500 mb-6 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">International Payments</h3>
          <p className="text-gray-600 text-sm">Accepting PayPal & global cards for worldwide customers.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-red-400 md:col-span-2">
          <FaLock className="text-5xl text-red-400 mb-6 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Secure Checkout</h3>
          <p className="text-gray-600 text-sm">Your payment information is encrypted and fully protected with SSL security.</p>
        </div>
      </div>

      
    </section>
  );
};

export default PaymentSection;
