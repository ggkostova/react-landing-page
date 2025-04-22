import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.scss";
import siteData from "@/Data.json";
import useScreenWidth from "@/composables/useScreenWidth";

interface Slide {
  id?: number;
  image?: string;
  alt?: string;
  text?: string;
  boldText?: string;
}

const slides: Slide[] = siteData.slides;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 480 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent: React.FC = () => {
  const isLargeScreen = useScreenWidth();

  return (
    <div className={styles.container}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={!isLargeScreen}
        autoPlaySpeed={5000}
        showDots={true}
        renderDotsOutside={true}
        draggable={true}
      >
        {slides.map((slide) => {
          const text = slide.text || ""; 
          const bold = slide.boldText || ""; 

          const boldWords = bold.split(" ");
          const firstBold = boldWords[0]; 
          const restBold = boldWords.slice(1).join(" ");

          return (
            <div key={slide.id} style={{ position: "relative" }}>
              <img
                src={slide.image}
                alt={slide.alt}
                style={{ width: "100%", height: "auto" }}
              />
              <div className={styles.textContainer}>
                <p className={styles.text}>
                  {text} <strong>{firstBold}</strong>
                  <br />
                  <strong>{restBold}</strong>
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
