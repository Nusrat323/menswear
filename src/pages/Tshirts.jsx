{/*import React, { useEffect, useState } from "react";
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

export default Tshirts;*/}



import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Tshirts = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tshirt data");
        return res.json();
      })
      .then((data) => {
        const tshirts = data.filter((item) => item.category === "tshirts");
        setTshirtData(tshirts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-6">Loading...</p>;
  if (error) return <p className="text-center p-6 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">T-Shirts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {tshirtData.map((item) => (
          <ProductCard
            key={item.id}
            product={{ ...item, img: item.images[0] }}
            category="tshirts"
          />
        ))}
      </div>
    </div>
  );
};

export default Tshirts;


