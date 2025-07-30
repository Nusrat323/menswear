
// src/pages/Tshirts.jsx
// src/pages/Tshirts.jsx
import ProductCard from "../components/ProductCard";

const tshirtData = [
  {
    id: 0,
    name: "LIGHTWEIGHT WASHED BOXY FIT T-SHIRT",
    img: "https://i.ibb.co/21ZtVq7h/tshirt1.jpg",
    price: 1200,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 1,
    name: "LIGHTWEIGHT WASHED BOXY FIT T-SHIRT",
    img: "https://i.ibb.co/j93qjRYp/tshirt2.jpg",
    price: 1200,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "BASIC HEAVYWEIGHT T-SHIRT",
    img: "https://i.ibb.co/NgmtDFvK/tshirt3.jpg",
    price: 2000,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "WASHED SWEATSHIRT WITH GRAPHIC PRINTS",
    img: "https://i.ibb.co/95xXkKt/tshirt4.jpg",
    price: 3400,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "WASHED SWEATSHIRT WITH GRAPHIC PRINTS",
    img: "https://i.ibb.co/W4Sn7V13/tshirt5.jpg",
    price: 2500,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "HEAVYWEIGHT TEXTURED T-SHIRT",
    img: "https://i.ibb.co/6J8GJ1tJ/tshirt6.jpg",
    price: 3200,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const Tshirts = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center  font-bold mb-6">T-Shirts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-5">
        {tshirtData.map((item) => (
          <ProductCard key={item.id} product={item} category="tshirts" />
        ))}
      </div>
    </div>
  );
};

export default Tshirts;
