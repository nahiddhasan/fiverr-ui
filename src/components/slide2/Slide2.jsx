"use client";

import React, { Children } from "react";
import styles from "./slide2.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Slide2 = ({ slidesPerView, projects }) => {
  return (
    <div className={styles.slide2}>
      <div className={styles.container}>
      <h1>Inspiring work made on Fiverr</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation
        loop={true}
        slidesPerView={slidesPerView}
        className={styles.mySwiper}
       slidesPerGroup={5}
      >
        
        { projects.map((project)=>(
          <Link key={project.id}>
          <SwiperSlide >
          <div className={styles.slideContent}>
            <div className={styles.imgcontainer}>
            <Image src={project.img} height={250} width={252} alt="" />
            </div>
            <div className={styles.infoContainer}>
              <Image src={project.pp} height={40} width={40} alt="" />
              <div className={styles.info} >
              <p className={styles.name}>{project.username}</p>
              <p className={styles.cat}>{project.cat}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
          </Link>
        ))
          }
        


      </Swiper>
    </div>
    </div>
  );
};

export default Slide2;
