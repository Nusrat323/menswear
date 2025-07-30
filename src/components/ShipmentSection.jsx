import React from "react";
import { FaShippingFast, FaClock, FaShieldAlt, FaSmile } from "react-icons/fa";

const ShipmentSection = () => {
  return (
    <section className="bg-gray-50 py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Seamless Shipping Experience
        </h2>
        <p className="text-gray-600 text-lg">
          We ensure safe, fast, and reliable delivery for every order, no matter where you are in Bangladesh.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaShippingFast className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">Get your orders delivered within 2–5 working days across the country.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaClock className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Time Promise</h3>
          <p className="text-gray-600 text-sm">We respect your time and deliver your fashion needs when promised.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaShieldAlt className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe Packaging</h3>
          <p className="text-gray-600 text-sm">Each item is carefully packaged to ensure it arrives in perfect condition.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaSmile className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h3>
          <p className="text-gray-600 text-sm">With 10,000+ happy customers, your satisfaction is our top priority.</p>
        </div>
      </div>
    </section>
  );
};

export default ShipmentSection;

