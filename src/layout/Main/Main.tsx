import React from 'react';
import styles from './Main.module.scss';
import siteData from "@/Data.json";
import EventCard from '@/components/EventCard/EventCard';
import ProductWrapper from '@/components/ProductWrapper/ProductWrapper';
import Carousel from '@/components/Carousel/Carousel';
import ImageWrapper from '@/components/ImageWrapper/ImageWrapper';

const Main = () => {
  const eventsData = siteData.eventCardsData;
  const products = siteData.products;
  const serverData = siteData.serverData;

  return (
    <main className={styles.main}>
      <Carousel/>
      <div className={styles.eventCardsContainer}>
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            type={event.type}
            imagePath={`https://picsum.photos/200/300?random=${index + 1}`} 
            title={event.title}
            date={event.date}
            description={event.description || ''}
          />
        ))}
      </div>
      <div className={styles.products}>
          <ProductWrapper
            title={products.title}  
            list={products.list}
          />
      </div>
      <div className={styles.serverContainer}>
        <h2>{serverData.title}</h2>
        <ImageWrapper 
          title={serverData.imageText}
          subtitle={serverData.imageDescription}
          imagePath={serverData.image}
        />
      </div>
    </main>
  );
};

export default Main;