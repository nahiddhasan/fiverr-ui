"use client";

import React from "react";
import styles from "./slide.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Slide = ({ slidesPerView, cards }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.container}>
      <h1>Popular services</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation
        loop={true}
        slidesPerView={slidesPerView}
        className={styles.mySwiper}
        slidesPerGroup={5}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Link href="/gigs/design">
              <div className={styles.slideContent}>
                <Image src={card.img} height={344} width={252} alt="" />
                <div className={styles.info}>
                  <span className={styles.desc}>{card.desc}</span>
                  <span className={styles.title}>{card.title}</span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Slide;
