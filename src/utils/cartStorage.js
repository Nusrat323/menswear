// src/utils/cartStorage.js
export const getCart = () => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  };
  
  export const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  