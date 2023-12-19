"use client";

import React, { Children } from "react";
import styles from "./singleGigSlide.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const SingleGigSlide = ({ slidesPerView }) => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation
        loop={true}
        slidesPerView={slidesPerView}
        className={styles.mySwiper}
        slidesPerGroup={5}
      >
        <SwiperSlide className={styles.sin}>
          <div className={styles.imgContainer}>
            <Image
              width={500}
              height={500}
              alt=""
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sin}>
          <div className={styles.imgContainer}>
            <Image
              width={500}
              height={500}
              alt=""
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sin}>
          <div className={styles.imgContainer}>
            <Image
              width={500}
              height={500}
              alt=""
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sin}>
          <div className={styles.imgContainer}>
            <Image
              width={500}
              height={500}
              alt=""
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleGigSlide;
