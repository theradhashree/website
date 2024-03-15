import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HomePageCarouselCard from "./HomePageCarouselCard.js";
import { PRODUCTS } from "../assets/products";

/**
 * 
 * @returns top most carousel on home page which includes topmost HomePageCarouselCard having hero images, and brand logo.
 */
const HomePageCarousel = () => {
  const [dressColor, setDressColor] = useState(PRODUCTS[0].color);

  /**
   * 
   * @param {number} event 
   * event on carousel return the slide number.
   * this function sets the bodyColor.
   */
  const handleSlideChange = (event) => {
    const currentSlideNumber = event;
    const currentDressColor = PRODUCTS[currentSlideNumber].color;
    setDressColor(currentDressColor);
  };

  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      className="home-page-carousel"
      showThumbs={false}
      onChange={handleSlideChange}
    >
      {PRODUCTS.map((product) => (
        <HomePageCarouselCard
          key={product.id}
          product={product}
          dressColor={dressColor}
        />
      ))}
    </Carousel>
  );
};

export default HomePageCarousel;
