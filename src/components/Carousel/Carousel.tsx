import React, { useState } from "react";
import Slider from "react-slick"; 
import siteData from "@/Data.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

const slides = [
  { id: 1, image: "https://picsum.photos/800/400?random=1", alt: "Slide 1" },
  { id: 2, image: "https://picsum.photos/800/400?random=2", alt: "Slide 2" },
  { id: 3, image: "https://picsum.photos/800/400?random=3", alt: "Slide 3" },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slidesData = siteData.slides;

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true, 
    infinite: true, // Loop through slides
    speed: 100, // Speed of transition
    slidesToShow: 1,
    slidesToScroll: 1, 
    focusOnSelect: true, 
    afterChange: handleAfterChange, 
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 768, 
      //   settings: {
      //     slidesToShow: 1, // Show 1 slide on mobile
      //     slidesToScroll: 1,
      //     dots: true, // Enable dots on mobile
      //     arrows: false, // Enable arrows on mobile
      //   },
      // },
      // {
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.alt} style={{ width: "100%" }} />
            <div className={styles.slideText}>
              <span className={styles.text}>{slide.text + " "}</span>
              <span className={styles.boldText}>{slide.boldText}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
