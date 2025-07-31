import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shirts = () => {
  const [shirtData, setShirtData] = useState([]);

  useEffect(() => {
    fetch("/data/shirts.json")
      .then((res) => res.json())
      .then((data) => setShirtData(data))
      .catch((err) => console.error("Error fetching shirts:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">Shirts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {shirtData.map((item) => (
          <ProductCard key={item.id} product={item} category="shirts" />
        ))}
      </div>
    </div>
  );
};

export default Shirts;
