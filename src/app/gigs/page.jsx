
import React from "react";
import styles from "./gigs.module.scss";
import GigsMenu from "@/components/gigsMenu/GigsMenu";
import { gigs as gigss } from "@/data";
import GigCard from "@/components/gigCard/GigCard";


const gigs = () => {

  
  return (
    <div className={styles.gigs}>
      
      <div className={styles.container}>
        <span className={styles.breadcrumbs}>
          Fiverr &gt; Graphics & Design
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <GigsMenu/>
        
        <div className={styles.cards}>
        {
          gigss.map((gig)=>(
            <GigCard key={gig.id} gig={gig}/>
          ))
        }
      </div>
      </div>
      
    </div>
  );
};

export default gigs;
