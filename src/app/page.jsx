import React from "react";
import styles from "./page.module.scss";
import Featured from "@/components/featured/Featured";
import TrustedBy from "@/components/trustedby/TrustedBy";
import Slide from "@/components/slide/Slide";
import {cards,projects} from "@/data.js"
import Features from "@/components/features/Features";
import Features2 from "@/components/features2/Features2";
import Services from "@/components/services/Services";
import Slide2 from "@/components/slide2/Slide2";

const Home = () => (
  <div className={styles.container}>
    <Featured />
    <TrustedBy />
    <Slide slidesPerView={5} cards={cards} />
    <Features/>
    <Services/>
    <Features2/>
    <Slide2 slidesPerView={5} projects={projects}/>
  </div>
);

export default Home;
