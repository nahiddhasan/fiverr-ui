import React from "react";
import styles from "./features.module.scss";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            Quality work done quickly
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className={styles.title}>
          <Image src="/check.png" height={20} width={20} alt="" />
            Protected payments, every time
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            24/7 support
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imgw}>

            <Image height={500} width={500} alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
