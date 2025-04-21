import React from "react";
import styles from "./SocialMedia.module.scss";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";

const Social: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialIconWrapper}>
        <span
          className={`${styles.facebookWrapper} ${styles.socialIcon}`}
        >
          <TfiFacebook />
        </span>
      </div>
      <div className={styles.socialIconWrapper}>
        <span
          className={`${styles.youtubeWrapper} ${styles.socialIcon}`}
        >
          <FaYoutube />
        </span>
      </div>
    </div>
  );
};

export default Social;
