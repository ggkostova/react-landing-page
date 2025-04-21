import React from "react";
import styles from "./LandingPage.module.scss";
import Header from "@/layout/Header/Header";
import CarouselWrapper from '@/layout/Carousel/Carousel';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Main from "@/layout/Main/Main";
import Footer from "@/layout/Footer/Footer";
import useScreenWidth from "@/composables/useScreenWidth";

const LandingPage = () => {
  const isLargeScreen = useScreenWidth();

  return (
    <div>
      <Header />
      { isLargeScreen && <SocialMedia/> }
      <CarouselWrapper/>
      <Main />
      <Footer />
    </div>
  );
};
export default LandingPage;
