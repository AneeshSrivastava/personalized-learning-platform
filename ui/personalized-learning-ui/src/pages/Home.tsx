import "./../App.css";
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Card/Cards";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
