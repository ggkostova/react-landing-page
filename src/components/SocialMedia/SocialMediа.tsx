import React from "react";
import styles from "./SocialMedia.module.scss";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";

interface SocialProps {
  className?: string;
  iconClassName?: string;
}

const Social: React.FC<SocialProps> = ({ className, iconClassName }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={`${styles.socialIconWrapper} ${iconClassName || ""}`}>
        <span className={`${styles.facebookWrapper} ${styles.socialIcon}`}>
          <TfiFacebook />
        </span>
      </div>
      <div className={`${styles.socialIconWrapper} ${iconClassName || ""}`}>
        <span className={`${styles.youtubeWrapper} ${styles.socialIcon}`}>
          <FaYoutube />
        </span>
      </div>
    </div>
  );
};


export default Social;
