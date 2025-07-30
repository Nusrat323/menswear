import React, { useEffect, useState } from "react";
import "./Banner.css"; // Import custom CSS file


const slides = [
  {
    id: 0,
    image: "https://i.ibb.co/JW0WkCrF/mensbanner1.jpg",
    title: "SUMMER SALE IS ON",
    description: "Up to 50% off on selected styles. Shop the latest trends now.",
  },
  {
    id: 1,
    image: "https://i.ibb.co/Kx36HY5G/formal.jpg",
    title: "FIND YOUR STYLE",
    description: "New arrivals are here. Discover timeless fashion with us.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/N2R3w2L1/mensjeans.jpg",
    title: "LIMITED EDITION JEANS",
    description: "Premium quality jeans for the perfect fit. Only this season.",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="banner-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`banner-slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="banner-image" />
          <div className="banner-overlay">
            <h2 className="banner-title">{slide.title}</h2>
            <p className="banner-description">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
