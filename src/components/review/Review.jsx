import React from 'react'
import styles from "./review.module.scss"
import Image from 'next/image'
const Review = () => {
  return (
    <div className={styles.review}>
         <div className={styles.user}>
                <Image src="/noavatar.jpg" height={40} width={40} alt="" />
                <div className={styles.info}>
                  <span>John Doe</span>
                  <span>USA</span>
                </div>
              </div>
              <div className={styles.stars}>
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <span>5</span>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum iste repellendus quae ducimus inventore incidunt est, vero maxime itaque?</p>

                <div className={styles.helpfull}>
                  <span>Helpfull?</span>
                  <Image src="/like.png" width={14} height={14} alt='' />
                  <span>Yes</span>
                  <Image src="/dislike.png" width={14} height={14} alt='' />
                  <span>No</span>
                </div>
    </div>
  )
}

export default Review