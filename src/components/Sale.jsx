import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const saleProducts = [
  {
    id: 1,
    name: "WASHED SWEATSHIRT WITH GRAPHIC PRINTS",
    img: "https://i.ibb.co/W4Sn7V13/tshirt5.jpg",
    originalPrice: 5000,
    salePrice: 2500,
  },
  {
    id: 2,
    name: "RIPPED BAGGY FIT JEANS",
    img: "https://i.ibb.co/Mx1MqTy3/jeans1.jpg",
    originalPrice: 4000,
    salePrice: 2000,
  },
  {
    id: 3,
    name: "TEXTURED WEAVE STRIPED SHIRT",
    img: "https://i.ibb.co/r8rQ3NF/shirt4.jpg",
    originalPrice: 4400,
    salePrice: 2200,
  },
];

const Sale = () => {
  return (
    <div className="py-16 px-5 md:px-20 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-wide">
        Mega Sale 🔥
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {saleProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative rounded-xl overflow-hidden group">
              {/* Image with circle */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-90 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                {/* Sale Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold rounded-full px-4 py-1 shadow-md">
                  30% OFF
                </div>
              </div>

              {/* Details below image */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-400 line-through text-sm">
                  ৳{product.originalPrice}
                </p>
                <p className="text-2xl font-bold text-red-500">
                  ৳{product.salePrice}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sale;
