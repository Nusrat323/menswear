import React from "react";
import { FaShippingFast, FaStar, FaTags, FaTshirt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <img
          src="https://i.ibb.co/M4hwNtS/picture.jpg"
          alt="About Us"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl border-4 border-white"
        />

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-snug">
            Redefining Fashion — Made for You
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            At <span className="font-semibold text-gray-800">Gentlify</span>, we believe fashion is a form of expression.
            Our collections are curated with care to blend timeless elegance with modern flair.
            Whether it’s daily wear or something bold, we’ve got your back — with comfort, quality, and confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start gap-3">
              <FaTshirt className="text-2xl text-indigo-600" />
              <span>Premium, breathable, skin-friendly fabrics</span>
            </div>
            <div className="flex items-start gap-3">
              <FaTags className="text-2xl text-indigo-600" />
              <span>Fresh designs added every single week</span>
            </div>
            <div className="flex items-start gap-3">
              <FaStar className="text-2xl text-indigo-600" />
              <span>10,000+ verified happy customers</span>
            </div>
            <div className="flex items-start gap-3">
              <FaShippingFast className="text-2xl text-indigo-600" />
              <span>Fast shipping all over Bangladesh</span>
            </div>
          </div>

          <p className="mt-8 text-md text-gray-500">
            Join our growing community of trendsetters and experience fashion the Gentlify way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
