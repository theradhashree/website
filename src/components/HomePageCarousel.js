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
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [bodyColor, setBodyColor] = useState(PRODUCTS[0].color);

  /**
   * changes the body color according to the color set inside products
   */
  useEffect(() => {
    document.body.style.backgroundColor = bodyColor;
    //  eslint-disable-next-line
  }, [currentSlideNumber]);

  /**
   * 
   * @param {number} event 
   * event on carousel return the slide number.
   * this function sets the currentSlideNumber and bodyColor.
   */
  const handleSlideChange = (event) => {
    const currentSlideNumber = event;
    const currentImageColor = PRODUCTS[currentSlideNumber].color;
    setCurrentSlideNumber(currentSlideNumber);
    setBodyColor(currentImageColor);
  };

  return (
    <Carousel
      infinite={true}
      className="home-page-carousel"
      showThumbs={false}
      onChange={handleSlideChange}
    >
      {PRODUCTS.map((product) => (
        <HomePageCarouselCard
          key={product.id}
          product={product}
          bodyColor={bodyColor}
        />
      ))}
    </Carousel>
  );
};

export default HomePageCarousel;
