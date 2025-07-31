import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${category}/${product.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.015] w-full sm:w-[90%] md:w-[80%] lg:w-[260px] mx-auto"
    >
      <div className="overflow-hidden rounded-t-xl h-56 sm:h-60 md:h-64 lg:h-56">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="px-3 py-3">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-700 text-sm mt-1">৳ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

