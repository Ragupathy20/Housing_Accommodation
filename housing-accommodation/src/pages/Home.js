import React from "react";
import Lists from "../Json/HouseListingData.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <Carousel
      autoPlay
      emulateTouch
      showArrows={false}
      showThumbs={false}
      infiniteLoop
    >
      {Lists.map((list) => (
        <div className="">
          <img className="h-[88vh]" src={list.thumbnail} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
};
