import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import desktop1 from "../img/carousel/desktop1.png";
import desktop2 from "../img/carousel/desktop2.png";
import desktop3 from "../img/carousel/desktop3.png";
import mobile1 from "../img/carousel/mobile1.jpg";
import mobile2 from "../img/carousel/mobile2.jpg";
import mobile3 from "../img/carousel/mobile3.jpg";

import React from "react";

const FeaturedApplicationCarousel = () => {
  return (
    <div className="grid grid-cols-1 overflow-hidden">
      <Carousel
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        stopOnHover={true}
        showStatus={false}
        transitionTime={2000}
        swipeable={false}
        
      >
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={desktop1}
            alt="Desktop 1"
          />
        </div>
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={mobile1}
            alt="Mobile 1"
          />
        </div>
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={desktop2}
            alt="Desktop 2"
          />
        </div>
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={mobile2}
            alt="Mobile 2"
          />
        </div>
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={desktop3}
            alt="Desktop 3"
          />
        </div>
        <div className="flex items-center justify-center h-64">
          <img
            className="object-contain w-full h-full"
            src={mobile3}
            alt="Mobile 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedApplicationCarousel;
