import ProductCard from "../components/ProductCard";

const shirtData = [
  {
    id: 0,
    name: "REGULAR FIT SHIRT",
    img: "https://i.ibb.co/cWsT2xg/shirt1.jpg",
    price: 1500,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 1,
    name: "TEXTURED STRETCH SHIRT",
    img: "https://i.ibb.co/XrX3pPyq/shirt2.jpg",
    price: 2000,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "TEXTURED STRIPE SHIRT",
    img: "https://i.ibb.co/hJtCNHKg/shirt3.jpg",
    price: 3200,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "TEXTURED RELAXED FIT SHIRT",
    img: "https://i.ibb.co/p6RF26cg/shirt6.jpg",
    price: 2400,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "TEXTURED WEAVE STRIPED SHIRT",
    img: "https://i.ibb.co/r8rQ3NF/shirt4.jpg",
    price: 2200,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "GEOMETRIC JACQUARD SHIRT",
    img: "https://i.ibb.co/1J2Yq753/shirt5.jpg",
    price: 3000,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const Shirts = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center  font-bold mb-6">Shirts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {shirtData.map((item) => (
          <ProductCard key={item.id} product={item} category="shirts" />
        ))}
      </div>
    </div>
  );
};

export default Shirts;
