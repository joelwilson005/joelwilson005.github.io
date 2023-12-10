import React from "react";
import backgroundImage from "../img/herobackground.jpg";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className=" min-h-screen flex flex-col justify-center items-center p-10"
    >
      <section className="">
        <TypingAnimation />
      </section>
    </div>
  );
};

export default Hero;
