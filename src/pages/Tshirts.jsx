import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Tshirts = () => {
  const [tshirtData, setTshirtData] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setTshirtData(data); // Assuming data is an array of tshirts
      })
      .catch((err) => console.error("Failed to fetch tshirt data:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">T-Shirts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {tshirtData.map((item) => (
          <ProductCard
            key={item.id}
            product={{ ...item, img: item.images[0] }} // pass first image as img
            category="tshirts"
          />
        ))}
      </div>
    </div>
  );
};

export default Tshirts;

