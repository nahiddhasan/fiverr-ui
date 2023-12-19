import React from 'react'
import styles from "./gigCard.module.scss"
import Image from 'next/image'
import Link from 'next/link'


const GigCard = ({gig}) => {
  return (
    
    <div className={styles.gigCard}>
        <Link href="/gig/123">
        <div className={styles.hp}>
        <Image  src={gig.img} fill alt='' />
        </div>
        </Link>
        <div className={styles.info}>
            <div className={styles.user}>
                <Image src={gig.pp} height={30} width={30} alt='' />
                <span>{gig.username}</span>
            </div>
            <p>{gig.desc}</p>
            <div className={styles.stars}>
                <Image src="/star.png" height={14} width={14} alt='' />
                <Image src="/star.png" height={14} width={14} alt='' />
                <Image src="/star.png" height={14} width={14} alt='' />
                <Image src="/star.png" height={14} width={14} alt='' />
                <Image src="/star.png" height={14} width={14} alt='' />
                <span>5</span>
            </div>
            <hr />
            <div className={styles.details}>
                <Image src="/heart.png" height={16} width={16} alt=''/>
                <div className={styles.price}>
                    <span>Starting at</span>
                    <h2>${gig.price}</h2>
                </div>
            </div>
        </div>
        </div>

  )
}

export default GigCard