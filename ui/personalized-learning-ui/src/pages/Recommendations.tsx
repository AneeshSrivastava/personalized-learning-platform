import React from "react";
import "../App.css";
import Cards from "../components/Card/Cards";
import Footer from "../components/Footer/Footer";

const Recommendations = () => {
  return (
    <>
      <h1 className="recommendations">RECOMMENDATIONS</h1>
      <Cards />
      <Footer />
    </>
  );
};

export default Recommendations;
