import React from "react";
import Header from "@/layout/Header/Header";
import CarouselWrapper from '@/layout/Carousel/Carousel';
import SocialMedia from '@/components/SocialMedia/SocialMediа';
import Main from "@/layout/Main/Main";
import Footer from "@/layout/Footer/Footer";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <SocialMedia className={styles.socialContainer} iconClassName={styles.icon}/>
      <CarouselWrapper/>
      <Main />
      <Footer />
    </div>
  );
};
export default LandingPage;
