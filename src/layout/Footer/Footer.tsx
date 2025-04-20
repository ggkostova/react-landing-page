import React from "react";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import siteData from "@/Data.json";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerData = siteData.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <ul>
          {footerData.links.map((link, index) => (
            <li key={index} className={styles.footerLink}>
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.socialLinks}>
        <span
          className={`${styles.facebookWrapper} ${styles.socialIconWrapper}`}
        >
          <TfiFacebook />
        </span>
        <span
          className={`${styles.youtubeWrapper} ${styles.socialIconWrapper}`}
        >
          <FaYoutube />
        </span>
      </div>

      <div className={styles.footerCopyright}>
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
