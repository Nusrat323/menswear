// src/layouts/MainLayout.jsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;

