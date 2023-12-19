import React from 'react'
import styles from "./trastedby.module.scss"
import Image from 'next/image'
const TrustedBy = () => {
  return (
    <div className={styles.trastedby}>
        <div className={styles.container}>
        <span>Trusted by:</span>
        <Image height={100} width={100} alt="trusted by" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" />
        <Image height={100} width={100} alt="trusted by" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" />
        <Image height={100} width={100} alt="trusted by" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" />
        <Image height={100} width={100} alt="trusted by" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" />
        <Image height={100} width={100} alt="trusted by" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" />
      </div>
    </div>
  )
}

export default TrustedBy