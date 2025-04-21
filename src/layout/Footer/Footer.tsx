import React from "react";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import siteData from "@/Data.json";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import useScreenWidth from "@/composables/useScreenWidth";

const Footer = () => {
  const footerData = siteData.footer;
  const products = siteData.dropdownItems;
  const isLargeScreen = useScreenWidth();
  const lastProduct = footerData.solution;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {isLargeScreen && (
          <div className={styles.products}>
            {products.map((item, index) => {
              if (index === products.length - 1) {
                return (
                  <div className={styles.product} key={index}>
                    <h4>{lastProduct.label}</h4>
                    <ul>
                      <li>{lastProduct.subItems}</li>
                    </ul>
                  </div>
                );
              }

              return (
                <div className={styles.product} key={index}>
                  <h4>{item.label}</h4>
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.company}>
          {isLargeScreen && <h4>{footerData.company.title}</h4>}
          <div className={styles.footerLinks}>
            <ul>
              {footerData.company.links.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isLargeScreen && <h4 className={styles.socialTitle}>{footerData.social.title}</h4>}
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
