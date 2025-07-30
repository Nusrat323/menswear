// src/components/NewArrival.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const comingSoonProducts = [
  {
    id: 1,
    name: "Stylish Sports Shoes",
    img: "https://i.ibb.co/21tCbn7c/sports-shoes.jpg",
  },
  {
    id: 2,
    name: "Premium Punjabi",
    img: "https://i.ibb.co/k27c74qd/punjabi.jpg",
  },
  {
    id: 3,
    name: "Trendy Sunglasses",
    img: "https://i.ibb.co/GQTVcHj6/sunglass.jpg",
  },
  {
    id: 4,
    name: "Elegant Bracelet",
    img: "https://i.ibb.co/LX0WYpDT/bracelete.jpg",
  },
  {
    id: 5,
    name: "Cool Summer Cap",
    img: "https://i.ibb.co/1J827cF8/cap.jpg",
  },
];

const NewArrival = () => {
  return (
    <div className="bg-white py-14 px-4 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-10  tracking-wide">
         Launching Soon
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {comingSoonProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-center mb-6 mt-3 font-medium text-lg text-gray-700">
                {product.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrival;
