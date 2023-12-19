import React from 'react'
import styles from "./reviews.module.scss"
import Image from 'next/image'
import Review from '../review/Review'
const Reviews = () => {
  return (
    <div className={styles.reviews}>
              <h1>Reviews</h1>
             <Review/>
             <Review/>
             <Review/>
          </div>
  )
}

export default Reviews