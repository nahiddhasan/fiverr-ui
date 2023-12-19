import React from "react";
import styles from "./features2.module.scss";
import Image from "next/image";

const Features2 = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1>
            <b>fiverr</b> business. <span>new</span>
          </h1>
          <h1>
            <b>A solution built for </b>
            <i>business</i>
          </h1>
          <p>
            Upgrade to a curated experience to access vetted talent and
            exclusive tools
          </p>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            Talent matching
          </div>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            Dedicated account management
          </div>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            Team collaboration tools
          </div>
          <div className={styles.title}>
            <Image src="/check.png" height={20} width={20} alt="" />
            Business payment solutions
          </div>

          <button>Explore Fiverr Business</button>
        </div>
        <div className={styles.item}>
          <div className={styles.imgw}>
            <Image height={500} width={500} alt="" src="/business.jpg"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
