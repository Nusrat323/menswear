// src/pages/Jeans.jsx
import ProductCard from "../components/ProductCard";

const jeansData = [
  {
    id: 6,
    name: "RIPPED BAGGY FIT JEANS",
    img: "https://i.ibb.co/Mx1MqTy3/jeans1.jpg",
    price: 2000,
    sizes: ["30", "32", "34", "36", "38"], // Add sizes so ProductCard can render them
  },
  {
    id: 7,
    name: "BAGGY FIT JEANS",
    img: "https://i.ibb.co/rKnVfDtz/jeans2.jpg",
    price: 1400,
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 8,
    name: "TAPERED FIT STRETCH JEANS",
    img: "https://i.ibb.co/jvcXhZ2y/jeans5.jpg",
    price: 1200,
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 9,
    name: "FLARE FIT JEANS",
    img: "https://i.ibb.co/yn9C5b8g/jeans3.jpg",
    price: 1000,
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 10,
    name: "STRAIGHT FIT VINTAGE JEANS",
    img: "https://i.ibb.co/QvRfSFT4/jeans4.jpg",
    price: 800,
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 11,
    name: "RELAXED FIT BLACK JEANS",
    img: "https://i.ibb.co/xKz2Nd9h/jeans6.jpg",
    price: 800,
    sizes: ["30", "32", "34", "36", "38"],
  },
];

const Jeans = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center  font-bold mb-6">Jeans</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {jeansData.map((item) => (
          <ProductCard key={item.id} product={item} category="jeans" />
        ))}
      </div>
    </div>
  );
};

export default Jeans;
