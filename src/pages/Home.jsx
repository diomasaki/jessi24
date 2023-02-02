import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
