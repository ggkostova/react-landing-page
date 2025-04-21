import React from "react";
import Button from "@/components/Button/Button";
import styles from "./EventCard.module.scss";
import { BsMegaphone } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";

interface EventCardProps {
  type: string;
  imagePath?: string;
  title?: string;
  date?: string;
  description?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  type,
  imagePath,
  title,
  date,
  description,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "News":
        return <BsMegaphone className={styles.icon} />;
      case "Events":
        return <LuCalendarDays className={styles.icon} />;
      case "Press Releases":
        return <GrDocumentText className={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.type}>
          {getIcon(type)}
          <p>{type}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={imagePath}
              alt={title}
              className={styles.image}
              height={100}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <Button
            className={styles.button}
            onClick={() => alert("Read more clicked!")}
          >
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
