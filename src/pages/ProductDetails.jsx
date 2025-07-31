import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { category, id } = useParams();

  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    setMainImage("");
    setSelectedSize("");
    setAddedToCart(false);

    // Map category to JSON file paths in public folder
    const fileMap = {
      tshirts: "/data/products.json",
      jeans: "/data/jeans.json",
      shirts: "/data/shirts.json",
    };

    const filePath = fileMap[category];

    if (!filePath) {
      setLoading(false);
      return;
    }

    fetch(filePath)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);

        const foundProduct = data.find((p) => p.id === Number(id));
        setProduct(foundProduct);
        setMainImage(foundProduct?.images?.[0] || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product data:", error);
        setLoading(false);
      });
  }, [category, id]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold">Product not found!</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    
  };

  const currentMeasurements = selectedSize ? product.measurements[selectedSize] : null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Images */}
        <div className="md:w-1/2 p-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                  mainImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
            <p className="text-xl text-gray-700 mb-6">৳{product.price.toFixed(2)}</p>

            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="mb-6 text-gray-600">{product.description}</p>

            <h4 className="text-sm font-semibold mb-2">Select Size:</h4>
            <div className="flex gap-2 flex-wrap mb-6">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-sm ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-400"
                  } hover:border-black transition`}
                >
                  {size}
                </button>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">Measurements</h3>
            {currentMeasurements ? (
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {Object.entries(currentMeasurements).map(([key, value]) => (
                  <li key={key} className="capitalize">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-red-500 mb-6">
                Please select a size to see measurements.
              </p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`mt-4 px-6 py-3 rounded text-white transition-all duration-300 ${
              addedToCart ? "bg-green-600 hover:bg-green-700" : "bg-black hover:bg-gray-800"
            } ${!selectedSize ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {addedToCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
