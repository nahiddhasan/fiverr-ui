import React from "react";
import styles from "./services.module.scss";
import Image from "next/image";
const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
      <h1>You need it, we've got it</h1>
      <div className={styles.items}>
      <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Graphics & Design</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/marketing.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Digital Marketing</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/writing.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Writing & Translation</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/video-animation.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Video & Animation</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/music-audio.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Music & Audio</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Programming & Tech</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Business</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Lifestyle</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Data</div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/graphics.svg" height={48} width={48} alt="" />
          </div>
          <div className={styles.text}>Photography</div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Services;
