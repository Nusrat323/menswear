import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Jeans = () => {
  const [jeansData, setJeansData] = useState([]);

  useEffect(() => {
    fetch("/data/jeans.json")
      .then((res) => res.json())
      .then((data) => {
        // Map images[0] to img for ProductCard
        const formatted = data.map((item) => ({
          ...item,
          img: item.images?.[0] || "",
        }));
        setJeansData(formatted);
      })
      .catch((err) => console.error("Failed to fetch jeans data:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">Jeans</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {jeansData.map((item) => (
          <ProductCard key={item.id} product={item} category="jeans" />
        ))}
      </div>
    </div>
  );
};

export default Jeans;
