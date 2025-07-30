// src/pages/Home.jsx
import Jeans from "./Jeans";
import Tshirts from "./Tshirts";
import Shirts from "./Shirts";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import Sale from "../components/Sale";
import AboutSection from "../components/AboutSection";

import PaymentSection from "../components/PaymentSection";
import ShipmentSection from "../components/ShipmentSection";

const Home = () => {
  return (
    <div className="">

      <Banner></Banner>
      <NewArrival></NewArrival>
      <Sale></Sale>
      <AboutSection></AboutSection>
      <ShipmentSection></ShipmentSection>
      <PaymentSection></PaymentSection>
      
      
    </div>
  );
};

export default Home;
