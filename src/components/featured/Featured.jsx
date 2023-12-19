import React from "react";
import styles from "./featured.module.scss";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.container}>
   

        <div className={styles.left}>
        <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className={styles.search}>
            <div className={styles.searchInput}>
              <input type="text"  placeholder='Try "building mobil app"'/>
             <div className={styles.imgcontainer}>
             <Image
                width={20}
                height={20}
                
                src="/search.png"
                alt="search icon"
              />
             </div>
            </div>
          </div>
          <div className={styles.popular}>
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className={styles.right}>
         <div className={styles.imgman}>
         <Image
            src="/mman.png"
            height={500}
            width={500}
            alt="featured image"
            
          />
         </div>
        </div>
      </div>

     
    </div>
  );
};

export default Featured;
