import React from "react";
import { Button } from "../Button/Button";
import "../../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>LEARNING AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          type="button"
          onClick={() => {}}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          type="button"
          onClick={() => {}}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          RESUME LEARNING
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
