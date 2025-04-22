import React from 'react';
import siteData from "@/Data.json";
import EventCard from '@/components/EventCard/EventCard';
import ProductWrapper from '@/components/ProductWrapper/ProductWrapper';
import ImageWrapper from '@/components/ImageWrapper/ImageWrapper';
import styles from './Main.module.scss';

const Main = () => {
  const eventsData = siteData.eventCardsData;
  const products = siteData.products;
  const serverData = siteData.serverData;

  return (
    <main className={styles.main}>
      <div className={styles.eventCardsContainer}>
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            type={event.type}
            imagePath={`https://picsum.photos/900/450?random=${index + 1}`} 
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